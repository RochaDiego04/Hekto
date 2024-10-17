import { useQuery } from "@tanstack/react-query";
import { ProductInfo } from "../interfaces/ProductInfo";
import FetchError from "../classes/FetchError";
import { fetchProducts } from "../util/http";

export default function MainProductCatalog() {
  const {
    data: productsData,
    isLoading,
    isError,
    error,
  } = useQuery<ProductInfo[], FetchError>(["productsData"], ({ signal }) =>
    fetchProducts({ signal })
  );
  return <section>main catalog</section>;
}
