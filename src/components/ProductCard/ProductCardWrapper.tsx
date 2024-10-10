import ProductCard1 from "./ProductCard1";
import { ProductInfo } from "../../interfaces/ProductInfo";
import ProductCard2 from "./ProductCard2";

type ProductCardWrapperProps = {
  mode: "productCard1" | "productCard2";
  productInfo: ProductInfo;
};

export default function ProductCardWrapper({
  mode,
  productInfo,
}: ProductCardWrapperProps) {
  switch (mode) {
    case "productCard1":
      return <ProductCard1 productInfo={productInfo} />;
    case "productCard2":
      return <ProductCard2 productInfo={productInfo} />;
    default:
      return null;
  }
}
