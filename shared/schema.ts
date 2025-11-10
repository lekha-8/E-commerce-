import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, decimal, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  category: text("category").notNull(),
  image: text("image").notNull(),
  images: text("images").array().notNull(),
  inStock: boolean("in_stock").notNull().default(true),
  rating: decimal("rating", { precision: 2, scale: 1 }).default("0"),
  featured: boolean("featured").notNull().default(false),
});

export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
});

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

// Cart item type (client-side only, not stored in database for MVP)
export const cartItemSchema = z.object({
  productId: z.string(),
  quantity: z.number().int().min(1),
  product: z.object({
    id: z.string(),
    name: z.string(),
    price: z.string(),
    image: z.string(),
    inStock: z.boolean(),
  }),
});

export type CartItem = z.infer<typeof cartItemSchema>;
