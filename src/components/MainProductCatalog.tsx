import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { ProductInfo } from "../interfaces/ProductInfo";
import FetchError from "../classes/FetchError";
import fetchProducts from "../util/fetchProducts";
import ProductCard4 from "./ProductCard/ProductCard4";
import PaginationButtons from "./ProductCatalogOptions/PaginationButtons";

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
  } = useQuery<{ products: ProductInfo[]; total: number }, FetchError>(
    ["productsData", filters],
    ({ signal }) =>
      fetchProducts({
        signal,
        page: filters.currentPage,
        limit: filters.itemsPerPage,
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
  console.log(productsData.total);

  return (
    <>
      <section
        className={`${
          productsLayout === "flowLayout"
            ? "flex flex-col"
            : "grid sm:grid-cols-2 md:grid-cols-3"
        } gap-8`}
      >
        {productsData?.products.map((productData) => (
          <ProductCard4
            key={productData.id}
            productInfo={productData}
            productsLayout={productsLayout}
          />
        ))}
      </section>
      <PaginationButtons totalItems={productsData?.total} />
    </>
  );
}
