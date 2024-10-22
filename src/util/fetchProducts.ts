import {
  buildUrl,
  fetchDataWithTotalCount,
  fetchOptionsProps,
} from "./boilerplateHttpFunctions";
import { BASE_URL } from "./http";

export default async function fetchProducts({
  signal,
  start,
  end,
  page,
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
    page,
    limit,
    categories,
    brands,
    priceRange,
    stars,
    sortPriceOrder,
  });
  console.log(url);

  const { data: products, total } = await fetchDataWithTotalCount(url, signal);

  if (productId && Array.isArray(products)) {
    return { products: products[0], total };
  }

  return { products, total };
}
