import {
  pgTable,
  serial,
  text,
  integer,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// ------------------- جدول Users -------------------
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(), // =======> must hash  later
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ------------------- جدول Links -------------------
export const links = pgTable("links", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  slug: varchar("slug", { length: 50 }).notNull().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  destination: text("destination").notNull(),
  clickCount: integer("click_count").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ------------------- جدول Clicks -------------------
export const clicks = pgTable("clicks", {
  id: serial("id").primaryKey(),
  linkId: integer("link_id")
    .notNull()
    .references(() => links.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ------------------- روابط (Relations) برای Drizzle ORM -------------------
export const usersRelations = relations(users, ({ many }) => ({
  links: many(links),
}));

export const linksRelations = relations(links, ({ one, many }) => ({
  user: one(users, {
    fields: [links.userId],
    references: [users.id],
  }),
  clicks: many(clicks),
}));

export const clicksRelations = relations(clicks, ({ one }) => ({
  link: one(links, {
    fields: [clicks.linkId],
    references: [links.id],
  }),
}));
