import { useQuery } from "@tanstack/react-query";
import { ProductInfo } from "../interfaces/ProductInfo";
import ProductSlider from "./Slider/ProductSlider";
import { DotLoader } from "react-spinners";
import FetchError from "../classes/FetchError";
import { fetchFeaturedProducts } from "../util/http";

const LIMIT = 5;
export default function TrendingProducts() {
  const {
    data: featuredProductsData,
    isLoading,
    isError,
    error,
  } = useQuery<ProductInfo[], FetchError>(
    ["featuredProducts", { limit: LIMIT }],
    ({ signal }) => fetchFeaturedProducts({ signal, limit: LIMIT })
  );

  const renderContent = () => {
    if (isLoading) {
      return <DotLoader color="#f0056a" className="mx-auto" />;
    }

    if (isError) {
      return (
        <div className="bg-dangerLight p-4">
          <p className="text-black">
            <span className="bold text-danger">Error Code:</span>{" "}
            {error.code ?? "N/A"}
          </p>
          <p className="text-black">
            <span className="bold text-danger">Error Message:</span>{" "}
            {error.message ?? "N/A"}
          </p>
        </div>
      );
    }

    return featuredProductsData ? (
      <ProductSlider
        productsInfo={featuredProductsData}
        productCardMode="productCard3"
      />
    ) : null;
  };

  return (
    <section className="p-maxContainer md:p-24">
      <h2 className="text-center">Trending Products</h2>
      {renderContent()}
    </section>
  );
}
