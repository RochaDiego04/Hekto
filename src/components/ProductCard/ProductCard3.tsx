import CartIcon from "../../assets/CartIcon";
import HeartIcon from "../../assets/HeartIcon";
import ZoomIcon from "../../assets/ZoomIcon";
import Button from "../Button/Button";

import { Link } from "react-router-dom";
import { ProductInfo } from "../../interfaces/ProductInfo";
import { formatter } from "../../util/formatPrice";

type ProductCard3Props = {
  productInfo: ProductInfo;
};

export default function ProductCard3({ productInfo }: ProductCard3Props) {
  return (
    <div className="productCard bg-whiteshadow-lg rounded-md">
      <Link to={`/products/${productInfo.id}`}>
        <img
          src={productInfo.images[0]}
          alt={productInfo.title}
          className="w-full h-[35vh] object-cover rounded-md"
        />

        <div className="p-2 flex flex-col my-3">
          <p className="text-center bold text-primary mb-2">
            {productInfo.title}
          </p>

          <p className=" inline-flex gap-4 justify-center">
            {productInfo.discountPrice ? (
              <>
                {formatter.format(productInfo.discountPrice)}
                <span className="text-grey3 line-through">
                  {formatter.format(productInfo.price)}
                </span>
              </>
            ) : (
              formatter.format(productInfo.price)
            )}
          </p>
        </div>
      </Link>
    </div>
  );
}
