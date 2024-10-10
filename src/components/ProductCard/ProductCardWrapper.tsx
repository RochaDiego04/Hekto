import ProductCard1 from "./ProductCard1";
import ProductCard2 from "./ProductCard2";
import ProductCard3 from "./ProductCard3";
import { ProductInfo } from "../../interfaces/ProductInfo";

type ProductCardWrapperProps = {
  mode: "productCard1" | "productCard2" | "productCard3";
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
    case "productCard3":
      return <ProductCard3 productInfo={productInfo} />;
    default:
      return null;
  }
}
