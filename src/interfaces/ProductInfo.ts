export interface ProductInfo {
  id: number;
  title: string;
  code: string;
  brand: string;
  category: string;
  price: number;
  discountPrice: number | null;
  stars: number;
  description: string;
  images: Array<string>;
}
