import ProductCard1 from "./ProductCard1";
import ProductCard2 from "./ProductCard2";
import ProductCard3 from "./ProductCard3";
import { ProductInfo } from "../../interfaces/ProductInfo";
import CategoryCard from "./CategoryCard";
import { ProductCategories } from "../../interfaces/ProductCategories";

type ProductCardWrapperProps =
  | {
      mode: "productCard1" | "productCard2" | "productCard3";
      productInfo: ProductInfo;
    }
  | {
      mode: "categoriesCard";
      productInfo: ProductCategories;
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
    case "categoriesCard":
      return <CategoryCard categoryInfo={productInfo as ProductCategories} />;
    default:
      return null;
  }
}
