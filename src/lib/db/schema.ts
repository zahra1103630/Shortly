import { relations } from "drizzle-orm";
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/* -------------------------------------------------------------------------- */
/*                                    Links                                   */
/* -------------------------------------------------------------------------- */

export const links = pgTable("links", {
  id: serial("id").primaryKey(),

  // User ID received from Neon Auth session
  userId: text("user_id").notNull(),

  slug: varchar("slug", {
    length: 50,
  })
    .notNull()
    .unique(),

  title: varchar("title", { length: 255 }),

  destination: text("destination").notNull(),

  clickCount: integer("click_count").default(0).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

/* -------------------------------------------------------------------------- */
/*                                   Clicks                                   */
/* -------------------------------------------------------------------------- */

export const clicks = pgTable("clicks", {
  id: serial("id").primaryKey(),

  linkId: integer("link_id")
    .notNull()
    .references(() => links.id, {
      onDelete: "cascade",
    }),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

/* -------------------------------------------------------------------------- */
/*                                 Relations                                  */
/* -------------------------------------------------------------------------- */

export const linksRelations = relations(links, ({ many }) => ({
  clicks: many(clicks),
}));

export const clicksRelations = relations(clicks, ({ one }) => ({
  link: one(links, {
    fields: [clicks.linkId],
    references: [links.id],
  }),
}));
