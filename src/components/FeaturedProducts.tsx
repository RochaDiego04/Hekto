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
    queryKey: ["featuredProducts", { limit: 6 }],
    queryFn: ({ signal }) => fetchFeaturedProducts({ signal, limit: 6 }),
  });

  if (isLoading)
    return (
      <section className="p-maxContainer md:p-24">
        <h2 className="text-center mb-12">Featured Products</h2>
        <DotLoader color="#f0056a" className="mx-auto"></DotLoader>
      </section>
    );

  if (isError)
    return (
      <section className="p-maxContainer md:p-24 bg-dangerLight">
        <h2 className="text-center mb-12">Featured Products</h2>
        <p className=" text-black">
          <span className="bold text-danger">Error Code:</span>{" "}
          {error.code ?? "N/A"}
        </p>
        <p className=" text-black">
          <span className="bold text-danger">Error Message:</span>{" "}
          {error.message ?? "N/A"}
        </p>
      </section>
    );

  return (
    <section className="p-maxContainer md:p-24">
      <h2 className="text-center mb-12">Featured Products</h2>
      {featuredProductsData && (
        <ProductSlider productsInfo={featuredProductsData} />
      )}
    </section>
  );
}
