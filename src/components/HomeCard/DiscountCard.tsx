import { Link } from "react-router-dom";
import { ProductInfo } from "../../interfaces/ProductInfo";
import Button from "../Button/Button";
import { DiscountCardInfo } from "../../interfaces/DiscountCardInfo";
import FetchError from "../../classes/FetchError";
import { useQuery } from "@tanstack/react-query";
import { fetchDiscountCard } from "../../util/http";
import { Check } from "lucide-react";

type DiscountCardProps = {
  productInfo: ProductInfo;
};

export default function DiscountCard({ productInfo }: DiscountCardProps) {
  const {
    data: discountCardData,
    isLoading,
    isError,
    error,
  } = useQuery<DiscountCardInfo, FetchError>(
    ["discountCards", { cardId: productInfo.id }],
    ({ signal }) => fetchDiscountCard({ signal, productId: productInfo.id }) // get the card related to the product
  );

  return (
    <>
      {discountCardData && productInfo ? (
        <div className="flex justify-around flex-col-reverse md:flex-row">
          {/* Right side */}
          <div className="flex flex-col gap-6">
            <h3 className=" md:mt-12 pt-12">{discountCardData.cardTitle}</h3>

            <h5 className="subtitle2 text-primary">{productInfo.title}</h5>

            <p className="text-grey3">{productInfo.description}</p>

            <ul className="grid grid-cols-2 gap-x-8 gap-y-6">
              {discountCardData.additionalInfo.map((listElement) => (
                <li
                  key={listElement.listId}
                  className="text-grey3 flex items-center gap-2"
                >
                  <Check className=" inline-block"></Check>
                  {listElement.content}
                </li>
              ))}
            </ul>
            <div className="flex gap-4 items-center">
              <Link to={`/products/${productInfo.id}`}>
                <Button mode="filled">Shop Now</Button>
              </Link>
            </div>
          </div>

          {/* Left side */}
          <div className="flex justify-center">
            <img
              src={discountCardData.productImage[0]}
              alt=""
              className="md:mx-auto"
            />
          </div>
        </div>
      ) : (
        <div>Test div rendering: No Discount card data</div>
      )}
    </>
  );
}
