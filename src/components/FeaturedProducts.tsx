import { useQuery } from "@tanstack/react-query";
import { fetchFeaturedProducts } from "../util/http";
import { ProductInfo } from "../interfaces/ProductInfo";
import ProductSlider from "./Slider/ProductSlider";

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

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="p-maxContainer md:p-24">
      <h2 className="text-center mb-12">Featured Products</h2>
      {featuredProductsData && (
        <ProductSlider productsInfo={featuredProductsData} />
      )}
    </section>
  );
}
