import { ProductInfo } from "../../interfaces/ProductInfo";
import DiscountCard from "./DiscountCard";

type HomeCardWrapperProps = {
  mode: "discountCard"; // here we can add more card designs
  productInfo: ProductInfo;
};

export default function HomeCardWrapper({
  mode,
  productInfo,
}: HomeCardWrapperProps) {
  switch (mode) {
    case "discountCard":
      return <DiscountCard productInfo={productInfo} />;
    default:
      return null;
  }
}
