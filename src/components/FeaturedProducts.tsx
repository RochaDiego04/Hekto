import { useQuery } from "@tanstack/react-query";
import { ProductInfo } from "../interfaces/ProductInfo";
import ProductSlider from "./Slider/ProductSlider";
import { DotLoader } from "react-spinners";
import FetchError from "../classes/FetchError";
import { fetchFeaturedProducts } from "../util/http";

export default function FeaturedProducts() {
  const {
    data: featuredProductsData,
    isLoading,
    isError,
    error,
  } = useQuery<ProductInfo[], FetchError>({
    queryKey: ["featuredProducts"],
    queryFn: fetchFeaturedProducts,
  });

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
      <ProductSlider productsInfo={featuredProductsData} />
    ) : null;
  };

  return (
    <section className="p-maxContainer md:p-24">
      <h2 className="text-center">Featured Products</h2>
      {renderContent()}
    </section>
  );
}
