import { mysqlTable, serial, text } from "drizzle-orm/mysql-core";
import { InferSelectModel } from "drizzle-orm";

export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  userName: text("user_name").notNull(),
  createdAt: text("created_at").notNull().default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").notNull().default("CURRENT_TIMESTAMP"),
});

export type User = InferSelectModel<typeof users>;
