import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard/ProductCard";
import { fetchFeaturedProducts } from "../util/http";
import { ProductInfo } from "../interfaces/ProductInfo";

export default function FeaturedProducts() {
  const {
    data: featuredProductsData,
    isLoading,
    isError,
    error,
  } = useQuery<ProductInfo[]>({
    queryKey: ["featuredProducts"],
    queryFn: fetchFeaturedProducts,
  });

  return (
    <section className="p-maxContainer md:p-24">
      <h2 className=" text-center mb-12">Featured Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-maxContainer mx-auto justify-center gap-8">
        {featuredProductsData &&
          featuredProductsData.map((productInfo) => (
            <ProductCard
              productInfo={productInfo}
              key={productInfo.id}
            ></ProductCard>
          ))}
      </div>

      {isLoading && <p>Loading</p>}
    </section>
  );
}
