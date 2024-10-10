import { ProductInfo } from "../../interfaces/ProductInfo";
import DiscountCard from "./DiscountCard";

type HomeCardWrapperProps = {
  mode: "headerCard" | "discountCard";
  productInfo: ProductInfo;
};

export default function HomeCardWrapper({
  mode,
  productInfo,
}: HomeCardWrapperProps) {
  switch (mode) {
    case "headerCard":
      return <DiscountCard productInfo={productInfo} />;
    case "discountCard":
      return <DiscountCard productInfo={productInfo} />;
    default:
      return null;
  }
}
