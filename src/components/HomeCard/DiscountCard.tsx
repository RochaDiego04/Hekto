import { Link } from "react-router-dom";
import { ProductInfo } from "../../interfaces/ProductInfo";
import { formatter } from "../../util/formatPrice";
import Button from "../Button/Button";

type DiscountCardProps = {
  productInfo: ProductInfo;
};

export default function DiscountCard({ productInfo }: DiscountCardProps) {
  return (
    <div className="productCard bg-white shadow-xl text-center">
      <div className="productCard__topSection mb-6">
        <img
          src={productInfo.images[0]}
          alt={productInfo.title}
          className="w-full h-[200px] md:h-[30vh] object-cover"
        />

        <Link
          to={`/products/${productInfo.id.toString()}`}
          className="productCard__topSection__detailsButton"
        >
          <Button className=" w-auto mx-auto" mode="smallGreen" href="#">
            View Details
          </Button>
        </Link>
      </div>
      <label className="bold text-primary mb-6 block">
        {productInfo.title}
      </label>
      <label className="small mb-2 block text-grey3">
        Code - {productInfo.code}
      </label>
      <label className="bold mb-6 block text-black">
        {formatter.format(productInfo.price)}
      </label>
    </div>
  );
}
