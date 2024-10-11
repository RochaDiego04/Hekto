import { Link } from "react-router-dom";
import { ProductInfo } from "../../interfaces/ProductInfo";
import { formatter } from "../../util/formatPrice";
import Button from "../Button/Button";
import { DiscountCardInfo } from "../../interfaces/DiscountCardInfo";
import FetchError from "../../classes/FetchError";
import { useQuery } from "@tanstack/react-query";
import { fetchFeaturedProducts } from "../../util/http";

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
    ["featuredProducts"],
    ({ signal }) => fetchFeaturedProducts({ signal })
  );

  return (
    <>
      {discountCardData && productInfo ? (
        <>
          {/* Left side */}
          <div className=" flex-shrink-0 flex justify-center">
            <img
              src="./src/assets/img/unique-banner/sofa.png"
              alt=""
              className="md:mx-auto"
            />
          </div>

          {/* Right side */}
          <div>
            <h3 className="my-4 md:my-12">
              Unique Features Of leatest & Trending Poducts
            </h3>

            <ul className="flex flex-col gap-4 mb-12">
              <li className="text-grey3">
                <span className="inline-block h-2 w-2 bg-primary rounded-full mr-2"></span>
                All frames constructed with hardwood solids and laminates
              </li>
              <li className="text-grey3">
                <span className="inline-block h-2 w-2 bg-info rounded-full mr-2"></span>
                Reinforced with double wood dowels, glue, screw - nails corner
              </li>
              <li className="text-grey3">
                <span className="inline-block h-2 w-2 bg-success rounded-full mr-2"></span>
                Arms, backs and seats are structurally reinforced
              </li>
            </ul>
            <div className="flex gap-4 items-center">
              <Button className="" mode="filled">
                Shop Now
              </Button>
              <p>
                B&B Italian Sofa
                <br />
                <span> $32.00</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div>Test div rendering: No data</div>
      )}
    </>
  );
}
