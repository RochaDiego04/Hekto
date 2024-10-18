import {
  buildUrl,
  fetchData,
  fetchOptionsProps,
} from "./boilerplateHttpFunctions";
import { BASE_URL } from "./http";

export default async function fetchProducts({
  signal,
  start,
  end,
  limit,
  productId,
  categories,
  brands,
  priceRange,
  stars,
  sortPriceOrder,
}: fetchOptionsProps & {
  categories?: string[];
  brands?: string[];
  priceRange?: [number, number];
  stars?: number[];
  sortPriceOrder?: "lowToHigh" | "highToLow";
}) {
  const url = buildUrl(`${BASE_URL}/products`, {
    productId,
    start,
    end,
    limit,
    categories,
    brands,
    priceRange,
    stars,
    sortPriceOrder,
  });
  console.log(url);

  const products = await fetchData(url, signal);

  if (productId && Array.isArray(products)) {
    return products[0];
  }

  return products;
}
