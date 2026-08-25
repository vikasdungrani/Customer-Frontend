// types/ProductCard.ts

/* =========================================================
   CATEGORY TYPES
========================================================= */

export interface MainCategory {
  id: number;
  name: string;
  slug: string;

  image?: string | null;
  icon?: string | null;

  display_order?: number;

  sub_categories?: SubCategory[];
}

export interface SubCategory {
  id: number;
  name: string;
  slug: string;

  image?: string | null;

  display_order?: number;

  main_category?: number;
  main_category_name?: string;
}


/* =========================================================
   PRODUCT STATUS
========================================================= */

export type LiveStatus =
  | "LIVE"
  | "NOT_LIVE";

export type StockStatus =
  | "IN_STOCK"
  | "OUT_OF_STOCK";


/* =========================================================
   PRODUCT
========================================================= */

export interface Product {

  id: number;

  /* Product IDs */

  master_product_id: string | null;

  sub_product_id: string;

  product_name: string;

  mark_number?: string | null;

  product_find_by?: string | null;


  /* =====================================================
     CATEGORIES
  ===================================================== */

  main_category: MainCategory[];

  sub_category: SubCategory[];


  /* =====================================================
     PRODUCT DETAILS
  ===================================================== */

  size?: string | null;

  weight?: string | null;

  shipping_weight?: string | null;

  color?: string | null;

  description?: string | null;


  /* =====================================================
     PRODUCT IMAGES
  ===================================================== */

  photo_url?: string | null;

  photo_link_1?: string | null;

  photo_link_2?: string | null;

  photo_link_3?: string | null;

  photo_link_4?: string | null;

  original_image?: string | null;

  weight_image?: string | null;

  box_image?: string | null;

  box_weight_image?: string | null;


  /* =====================================================
     STATUS
  ===================================================== */

  live_status: LiveStatus;

  stock_status: StockStatus;


  /* =====================================================
     PRICE
  ===================================================== */

  telegram_price: string | number;


  /* =====================================================
     DATES
  ===================================================== */

  created_at?: string;

  updated_at?: string;
}