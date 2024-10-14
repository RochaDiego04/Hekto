import CartIcon from "../../assets/CartIcon";
import HeartIcon from "../../assets/HeartIcon";
import ZoomIcon from "../../assets/ZoomIcon";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { ProductInfo } from "../../interfaces/ProductInfo";
import { formatter } from "../../util/formatPrice";
import { useAppDispatch } from "../../store/hooks";
import { addItemToCart } from "../../store/cart-slice";
import "./ProductCard.css";

type ProductCard1Props = {
  productInfo: ProductInfo;
};

export default function ProductCard1({ productInfo }: ProductCard1Props) {
  const dispatch = useAppDispatch();

  function handleCartClick() {
    dispatch(addItemToCart(productInfo));
  }

  return (
    <div className="productCard bg-white shadow-xl text-center">
      <div className="productCard__topSection mb-6">
        <img
          src={productInfo.images[0]}
          alt={productInfo.title}
          className="w-full h-[200px] md:h-[30vh] object-cover"
        />
        <OptionButtons handleCartClick={handleCartClick} />

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

type OptionButtonsProps = {
  handleCartClick: () => void;
};

const OptionButtons = ({ handleCartClick }: OptionButtonsProps) => (
  <div className="productCard__topSection__optionButtons">
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
      Icon={() => <HeartIcon fillColor="#7e33e0" width="18px" height="18px" />}
    ></Button>
    <Button
      mode="option"
      className="items-center w-9 h-9"
      href="#"
      Icon={() => <ZoomIcon fillColor="#7e33e0" width="18px" height="18px" />}
    ></Button>
  </div>
);
