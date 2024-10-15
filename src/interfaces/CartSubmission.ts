import { CartProduct } from "./CartProduct";

export interface CartSubmission {
  id: string;
  items: Array<CartProduct>;
  subtotal: number;
  shipping: number;
  total: number;
}
