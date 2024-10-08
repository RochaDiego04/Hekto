import CartIcon from "../../assets/CartIcon";
import HeartIcon from "../../assets/HeartIcon";
import ZoomIcon from "../../assets/ZoomIcon";
import Button from "../Button/Button";

import { formatter } from "../../util/formatPrice";
import "./ProductCard.css";
import { ProductInfo } from "../../interfaces/ProductInfo";

type ProductCardProps = {
  productInfo: ProductInfo;
};

export default function ProductCard({ productInfo }: ProductCardProps) {
  return (
    <div className="productCard bg-white shadow-xl text-center">
      <div className="productCard__topSection mb-6">
        <img
          src={productInfo.images[0]}
          alt=""
          className="w-full h-[250px] object-cover"
        />
        <div className="productCard__topSection__optionButtons">
          <Button
            mode="option"
            className="items-center w-9 h-9"
            href="#"
            Icon={() => (
              <CartIcon fillColor="#7e33e0" width="18px" height="18px" />
            )}
          ></Button>
          <Button
            mode="option"
            className="items-center w-9 h-9"
            href="#"
            Icon={() => (
              <HeartIcon fillColor="#7e33e0" width="18px" height="18px" />
            )}
          ></Button>
          <Button
            mode="option"
            className="items-center w-9 h-9"
            href="#"
            Icon={() => (
              <ZoomIcon fillColor="#7e33e0" width="18px" height="18px" />
            )}
          ></Button>
        </div>

        <Button
          className="productCard__topSection__detailsButton w-auto mx-auto"
          mode="smallGreen"
          href="#"
        >
          View Details
        </Button>
      </div>
      <label className="bold text-primary mb-6 block">
        {productInfo.title}
      </label>
      <label className="small mb-2 block text-grey3">
        Code -{productInfo.code}
      </label>
      <label className="bold mb-6 block text-black">
        {formatter.format(productInfo.price)}
      </label>
    </div>
  );
}
