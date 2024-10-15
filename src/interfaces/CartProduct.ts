import { ProductInfo } from "./ProductInfo";

export interface CartProduct extends ProductInfo {
  quantity: number;
}
