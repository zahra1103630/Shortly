import { db } from "@/lib/db";
import { links, clicks } from "@/lib/db/schema";
import { eq, sql } from "drizzle-orm";
import { redirect, notFound } from "next/navigation";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<{
      slug: string;
    }>;
  },
) {
  const { slug } = await params;

  const [link] = await db
    .select()
    .from(links)
    .where(eq(links.slug, slug))
    .limit(1);

  if (!link) {
    notFound();
  }

  try {
    await db
      .update(links)
      .set({
        clickCount: sql`${links.clickCount} + 1`,
      })
      .where(eq(links.id, link.id));

    await db.insert(clicks).values({
      linkId: link.id,
    });
  } catch (error) {
    console.error("Redirect tracking failed:", error);
  }

  redirect(link.destination);
}
