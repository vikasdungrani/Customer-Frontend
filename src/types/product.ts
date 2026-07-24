export interface Product {
  id: number;

  masterProductId: string;
  subProductId: string;

  productName: string;

  markNumber?: string | null;

  mainCategories?: string | null;
  subCategories?: string | null;

  description?: string | null;

  photo_url?: string | null;
  photoLink1?: string | null;
  photoLink2?: string | null;
  photoLink3?: string | null;
  photoLink4?: string | null;

  telegramPrice: string;
}