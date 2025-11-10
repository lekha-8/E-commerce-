import { type Product, type InsertProduct } from "@shared/schema";
import { randomUUID } from "crypto";

// Image paths (served by Vite from attached_assets)
const headphonesImg = "/attached_assets/generated_images/Premium_wireless_headphones_product_d6bcdf9d.png";
const watchImg = "/attached_assets/generated_images/Luxury_minimalist_wristwatch_product_d6fd5a05.png";
const sneakersImg = "/attached_assets/generated_images/Modern_casual_sneakers_product_270d561b.png";
const backpackImg = "/attached_assets/generated_images/Premium_leather_backpack_product_21fb5702.png";
const lampImg = "/attached_assets/generated_images/Modern_brass_desk_lamp_29d6284c.png";
const mugImg = "/attached_assets/generated_images/Minimalist_ceramic_coffee_mug_1445c09d.png";
const phoneImg = "/attached_assets/generated_images/Premium_smartphone_case_product_37f3c0ab.png";
const sunglassesImg = "/attached_assets/generated_images/Fashion_sunglasses_product_shot_5cd0d6dd.png";

export interface IStorage {
  getAllProducts(): Promise<Product[]>;
  getProductById(id: string): Promise<Product | undefined>;
  getProductsByCategory(category: string): Promise<Product[]>;
  searchProducts(query: string): Promise<Product[]>;
}

const mockProducts: Omit<Product, "id">[] = [
  {
    name: "Premium Wireless Headphones",
    description: "High-fidelity wireless headphones with active noise cancellation and 30-hour battery life. Perfect for audiophiles and commuters.",
    price: "299.99",
    category: "Electronics",
    image: headphonesImg,
    images: [headphonesImg, headphonesImg, headphonesImg, headphonesImg],
    inStock: true,
    rating: "4.8",
    featured: true,
  },
  {
    name: "Minimalist Luxury Watch",
    description: "Elegant timepiece with Italian leather strap and precision movement. A timeless accessory for any occasion.",
    price: "449.99",
    category: "Fashion",
    image: watchImg,
    images: [watchImg, watchImg, watchImg, watchImg],
    inStock: true,
    rating: "4.9",
    featured: true,
  },
  {
    name: "Modern Casual Sneakers",
    description: "Comfortable all-day sneakers with breathable mesh and cushioned sole. Perfect for everyday wear.",
    price: "89.99",
    category: "Fashion",
    image: sneakersImg,
    images: [sneakersImg, sneakersImg, sneakersImg, sneakersImg],
    inStock: true,
    rating: "4.6",
    featured: false,
  },
  {
    name: "Premium Leather Backpack",
    description: "Handcrafted genuine leather backpack with laptop compartment. Combines style and functionality.",
    price: "199.99",
    category: "Fashion",
    image: backpackImg,
    images: [backpackImg, backpackImg, backpackImg, backpackImg],
    inStock: true,
    rating: "4.7",
    featured: true,
  },
  {
    name: "Modern Brass Desk Lamp",
    description: "Mid-century inspired desk lamp with adjustable arm and warm LED bulb. Perfect for any workspace.",
    price: "129.99",
    category: "Home & Living",
    image: lampImg,
    images: [lampImg, lampImg, lampImg, lampImg],
    inStock: true,
    rating: "4.5",
    featured: false,
  },
  {
    name: "Artisan Ceramic Mug",
    description: "Handmade ceramic mug with matte finish. Perfect for your morning coffee or tea ritual.",
    price: "24.99",
    category: "Home & Living",
    image: mugImg,
    images: [mugImg, mugImg, mugImg, mugImg],
    inStock: true,
    rating: "4.4",
    featured: false,
  },
  {
    name: "Premium Smartphone Case",
    description: "Sleek protective case with shock absorption and wireless charging compatibility. Keeps your phone safe in style.",
    price: "39.99",
    category: "Electronics",
    image: phoneImg,
    images: [phoneImg, phoneImg, phoneImg, phoneImg],
    inStock: true,
    rating: "4.3",
    featured: false,
  },
  {
    name: "Designer Sunglasses",
    description: "Classic tortoiseshell sunglasses with UV400 protection. A timeless fashion statement.",
    price: "159.99",
    category: "Fashion",
    image: sunglassesImg,
    images: [sunglassesImg, sunglassesImg, sunglassesImg, sunglassesImg],
    inStock: false,
    rating: "4.7",
    featured: false,
  },
];

export class MemStorage implements IStorage {
  private products: Map<string, Product>;

  constructor() {
    this.products = new Map();
    this.seedProducts();
  }

  private seedProducts() {
    mockProducts.forEach((product) => {
      const id = randomUUID();
      this.products.set(id, { ...product, id });
    });
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductById(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  }

  async searchProducts(query: string): Promise<Product[]> {
    const lowerQuery = query.toLowerCase();
    return Array.from(this.products.values()).filter(
      (product) =>
        product.name.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery)
    );
  }
}

export const storage = new MemStorage();
