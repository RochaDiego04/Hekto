import { useQuery } from "@tanstack/react-query";
import { ProductInfo } from "../interfaces/ProductInfo";
import FetchError from "../classes/FetchError";
import { fetchFeaturedProducts, fetchProducts } from "../util/http";
import ProductCard4 from "./ProductCard/ProductCard4";

type MainProductCatalogProps = {
  productsLayout: string;
};

export default function MainProductCatalog({
  productsLayout,
}: MainProductCatalogProps) {
  const {
    data: productsData,
    isLoading,
    isError,
    error,
  } = useQuery<ProductInfo[], FetchError>(["productsData"], ({ signal }) =>
    fetchFeaturedProducts({ signal })
  );
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
          productInfo={productData}
          productsLayout={productsLayout}
        ></ProductCard4>
      ))}
    </section>
  );
}
