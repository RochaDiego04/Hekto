import { Link } from "react-router-dom";
import { ProductInfo } from "../../interfaces/ProductInfo";
import { formatter } from "../../util/formatPrice";
import StarRating from "../StarRating";
import Button from "../Button/Button";
import CartIcon from "../../assets/CartIcon";
import HeartIcon from "../../assets/HeartIcon";
import ZoomIcon from "../../assets/ZoomIcon";
import { useAppDispatch } from "../../store/hooks";
import { addItemToCart } from "../../store/cart-slice";

type ProductCard4Props = {
  productInfo: ProductInfo;
  productsLayout: string;
};

export default function ProductCard4({
  productInfo,
  productsLayout,
}: ProductCard4Props) {
  const dispatch = useAppDispatch();

  function handleCartClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addItemToCart(productInfo));
  }

  return (
    <div className="productCard bg-whiteshadow-lg rounded-md p-2">
      <Link
        to={`/products/${productInfo.id}`}
        className={`${productsLayout === "flowLayout" ? "flex" : ""}`}
      >
        <img
          src={productInfo.images[0]}
          alt={productInfo.title}
          className={`${
            productsLayout === "flowLayout"
              ? "w-[20vw] h-max mr-7"
              : "w-full h-[35vh]"
          }  object-cover rounded-md`}
        />

        <div
          className={`p-2 flex flex-col my-3 gap-2${
            productsLayout === "flowLayout" ? " justify-end" : ""
          }`}
        >
          <div
            className={`flex ${
              productsLayout === "flowLayout"
                ? "flex-row justify-between items-center"
                : "flex-col"
            }`}
          >
            <h5 className="subtitle">{productInfo.title}</h5>
            <StarRating rating={productInfo.stars} className="pt-2" />
          </div>

          <p className=" inline-flex gap-4 pb-5">
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
          <p className="text-grey3">{productInfo.description}</p>
          <OptionButtons handleCartClick={handleCartClick} />
        </div>
      </Link>
    </div>
  );
}
type OptionButtonsProps = {
  handleCartClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const OptionButtons = ({ handleCartClick }: OptionButtonsProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div className="flex gap-8 mt-6">
      <Button
        mode="option"
        className="items-center w-9 h-9"
        href="#"
        Icon={() => <CartIcon fillColor="#7e33e0" width="18px" height="18px" />}
        onClick={handleCartClick}
      ></Button>
      <Button
        mode="option"
        className="items-center w-9 h-9"
        href="#"
        Icon={() => (
          <HeartIcon fillColor="#7e33e0" width="18px" height="18px" />
        )}
        onClick={handleClick}
      ></Button>
      <Button
        mode="option"
        className="items-center w-9 h-9"
        href="#"
        Icon={() => <ZoomIcon fillColor="#7e33e0" width="18px" height="18px" />}
        onClick={handleClick}
      ></Button>
    </div>
  );
};
