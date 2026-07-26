export interface SubCategory {
  id: number;
  name: string;
  slug: string;
  image?: string | null;
  display_order: number;
}

export interface MainCategory {
  id: number;
  name: string;
  slug: string;
  image?: string | null;
  icon?: string | null;
  display_order: number;
  sub_categories: SubCategory[];
}