//types/ProductCard.ts
export type LiveStatus = "LIVE" | "NOT_LIVE";

export type StockStatus = "IN_STOCK" | "OUT_OF_STOCK";

export interface Product {
  id: number;

  master_product_id: string;
  sub_product_id: string;

  product_name: string;

  mark_number?: string | null;

  main_categories?: string | null;
  sub_categories?: string | null;

  description?: string | null;

  photo_url?: string | null;

  photo_link_1?: string | null;
  photo_link_2?: string | null;
  photo_link_3?: string | null;
  photo_link_4?: string | null;

  telegram_price: string;

  // Customer Portal
  live_status?: LiveStatus;

  // Inventory
  stock_status?: StockStatus;
}