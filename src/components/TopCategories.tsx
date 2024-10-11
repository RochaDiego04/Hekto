import { useQuery } from "@tanstack/react-query";
import ProductSlider from "./Slider/ProductSlider";
import { DotLoader } from "react-spinners";
import FetchError from "../classes/FetchError";
import { fetchProductCategories } from "../util/http";
import { ProductCategories } from "../interfaces/ProductCategories";

export default function TopCategories() {
  const {
    data: productCategories,
    isLoading,
    isError,
    error,
  } = useQuery<ProductCategories[], FetchError>(
    ["productCategories"],
    ({ signal }) => fetchProductCategories({ signal })
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

    return productCategories ? (
      <ProductSlider
        productsInfo={productCategories}
        productCardMode="categoriesCard"
      />
    ) : null;
  };

  return (
    <section className="p-maxContainer md:p-24">
      <h2 className="text-center">Top Categories</h2>
      {renderContent()}
    </section>
  );
}
