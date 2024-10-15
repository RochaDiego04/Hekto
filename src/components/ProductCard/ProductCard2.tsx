import CartIcon from "../../assets/CartIcon";
import HeartIcon from "../../assets/HeartIcon";
import ZoomIcon from "../../assets/ZoomIcon";
import Button from "../Button/Button";

import { Link } from "react-router-dom";
import { ProductInfo } from "../../interfaces/ProductInfo";
import { formatter } from "../../util/formatPrice";
import { useAppDispatch } from "../../store/hooks";
import { addItemToCart } from "../../store/cart-slice";

type ProductCard2Props = {
  productInfo: ProductInfo;
};

export default function ProductCard2({ productInfo }: ProductCard2Props) {
  const dispatch = useAppDispatch();

  function handleCartClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addItemToCart(productInfo));
  }

  return (
    <div className="productCard--2 bg-whiteshadow-lg rounded-md">
      <Link to={`/products/${productInfo.id}`}>
        <div className="productCard--2__topSection">
          <img
            src={productInfo.images[0]}
            alt={productInfo.title}
            className="w-full h-[35vh] object-cover rounded-md"
          />
          <OptionButtons handleCartClick={handleCartClick} />
        </div>

        <div className="p-2 flex flex-wrap">
          <p className="mr-auto">{productInfo.title}</p>
          <div className="justify-self-end flex gap-4">
            {productInfo.discountPrice ? (
              <>
                <p className="text-dark">
                  {formatter.format(productInfo.discountPrice)}
                </p>
                <p className="text-primary">
                  {formatter.format(productInfo.price)}
                </p>
              </>
            ) : (
              <p className="text-primary">
                {formatter.format(productInfo.price)}
              </p>
            )}
          </div>
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
    <div className="productCard--2__topSection__optionButtons">
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
