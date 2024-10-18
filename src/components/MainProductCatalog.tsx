import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { ProductInfo } from "../interfaces/ProductInfo";
import FetchError from "../classes/FetchError";
import fetchProducts from "../util/fetchProducts";
import ProductCard4 from "./ProductCard/ProductCard4";

type MainProductCatalogProps = {
  productsLayout: string;
};

export default function MainProductCatalog({
  productsLayout,
}: MainProductCatalogProps) {
  const filters = useSelector((state: RootState) => state.filter);

  const {
    data: productsData,
    isLoading,
    isError,
    error,
  } = useQuery<ProductInfo[], FetchError>(
    ["productsData", filters],
    ({ signal }) =>
      fetchProducts({
        signal,
        start: (filters.pagination[0] - 1) * filters.pagination[1],
        end: filters.pagination[1],
        categories: filters.categories,
        brands: filters.brands,
        priceRange: filters.priceRange[0],
        stars: filters.stars,
        sortPriceOrder: filters.sortPriceOrder,
      }),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <section
      className={`${
        productsLayout === "flowLayout"
          ? "flex flex-col"
          : "grid sm:grid-cols-2 md:grid-cols-3"
      } gap-8`}
    >
      {productsData?.map((productData) => (
        <ProductCard4
          key={productData.id}
          productInfo={productData}
          productsLayout={productsLayout}
        />
      ))}
    </section>
  );
}
