import {pgTable, text, timestamp} from "drizzle-orm/pg-core";
import {nanoid} from "nanoid";

export const posts = pgTable("post", {
  id: text("id").notNull().primaryKey().$defaultFn(nanoid),
  title: text("title").notNull(),
  content: text("content"),
  publishedAt: timestamp("published_at", {mode: "date", withTimezone: true}),
});
