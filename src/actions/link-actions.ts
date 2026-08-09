// src/actions/link-actions.ts
"use server";

import { db } from "@/lib/db";
import { links, clicks } from "@/lib/db/schema";
import { auth } from "@/lib/auth/server";
import { revalidatePath } from "next/cache";
import { eq, and, desc, gte, sql } from "drizzle-orm";

import { generateSlug } from "@/lib/utils/generate-slug";
import { buildShortURL } from "@/lib/utils/build-short-url";
import {
  createLinkSchema,
  linkSlugSchema,
  deleteLinkSchema,
  type CreateLinkInput,
} from "@/lib/validations/link";

// ============================================
// Helper: شروع هفته جاری
// ============================================
function startOfCurrentWeek() {
  const now = new Date();
  const day = now.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  const start = new Date(now);
  start.setDate(now.getDate() + diff);
  start.setHours(0, 0, 0, 0);
  return start;
}

// ============================================
// Create Link
// ============================================
export async function createLink(input: CreateLinkInput) {
  const session = await auth.getSession();
  const user = session.data?.user;

  if (!user) {
    return { error: "You must be logged in to create a link" };
  }

  const parsed = createLinkSchema.safeParse(input);

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }

  const { destination, title } = parsed.data;

  let slug = parsed.data.slug;

  if (slug) {
    const slugCheck = linkSlugSchema.safeParse(slug);

    if (!slugCheck.success) {
      return { error: slugCheck.error.issues[0]?.message ?? "Invalid slug" };
    }

    slug = slugCheck.data;
  } else {
    slug = generateSlug();
  }

  const existing = await db
    .select()
    .from(links)
    .where(eq(links.slug, slug))
    .limit(1);

  if (existing.length > 0) {
    return { error: "This slug is already taken, try another one" };
  }

  try {
    await db.insert(links).values({
      userId: user.id,
      title: title || null,
      slug,
      destination,
    });
  } catch (err) {
    console.error("createLink db error:", err);
    return { error: "Failed to create link, please try again" };
  }

  revalidatePath("/dashboard");

  return {
    success: true,
    data: {
      slug,
      shortUrl: buildShortURL(slug),
    },
  };
}

// ============================================
// Delete Link
// ============================================
export async function deleteLink(id: number) {
  const session = await auth.getSession();
  const user = session.data?.user;

  if (!user) {
    return { error: "You must be logged in to delete a link" };
  }

  const parsed = deleteLinkSchema.safeParse({ id });

  if (!parsed.success) {
    return { error: "Invalid link id" };
  }

  const deleted = await db
    .delete(links)
    .where(and(eq(links.id, parsed.data.id), eq(links.userId, user.id)))
    .returning({ id: links.id });

  if (deleted.length === 0) {
    return { error: "Link not found or already deleted" };
  }

  revalidatePath("/dashboard");

  return { success: true };
}

// ============================================
// Get Dashboard Stats
// ============================================
export async function getDashboardStats() {
  const session = await auth.getSession();
  const user = session.data?.user;

  if (!user) {
    return { error: "Unauthorized" };
  }

  const userId = user.id;

  const [linkStats, weeklyClicks, topLink] = await Promise.all([
    db
      .select({
        totalLinks: sql<number>`count(*)::int`,
        totalClicks: sql<number>`coalesce(sum(${links.clickCount}), 0)::int`,
      })
      .from(links)
      .where(eq(links.userId, userId)),

    db
      .select({
        count: sql<number>`count(*)::int`,
      })
      .from(clicks)
      .innerJoin(links, eq(clicks.linkId, links.id))
      .where(
        and(
          eq(links.userId, userId),
          gte(clicks.createdAt, startOfCurrentWeek()),
        ),
      ),

    db
      .select({
        title: links.title,
        slug: links.slug,
        clickCount: links.clickCount,
      })
      .from(links)
      .where(eq(links.userId, userId))
      .orderBy(desc(links.clickCount))
      .limit(1),
  ]);

  return {
    success: true,
    data: {
      totalLinks: linkStats[0]?.totalLinks ?? 0,
      totalClicks: linkStats[0]?.totalClicks ?? 0,
      thisWeek: weeklyClicks[0]?.count ?? 0,
      topLink: topLink[0] ?? null,
    },
  };
}

// ============================================
// Get Link Detail
// ============================================

export async function getLinkDetail(id: number) {
  const session = await auth.getSession();
  const user = session.data?.user;

  if (!user) {
    return {
      error: "Unauthorized",
    };
  }

  const link = await db.query.links.findFirst({
    where: and(eq(links.id, id), eq(links.userId, user.id)),
  });

  if (!link) {
    return {
      error: "Link not found",
    };
  }

  const clicksPerDay = await db
    .select({
      date: sql<string>`
        to_char(${clicks.createdAt}, 'Mon DD')
      `,
      count: sql<number>`
        count(*)::int
      `,
    })
    .from(clicks)
    .where(eq(clicks.linkId, id))
    .groupBy(
      sql`
        to_char(${clicks.createdAt}, 'Mon DD')
      `,
    )
    .orderBy(
      sql`
        min(${clicks.createdAt})
      `,
    );

  return {
    success: true,
    data: {
      link,
      clicksPerDay,
    },
  };
}
