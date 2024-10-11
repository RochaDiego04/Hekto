import {
  buildUrl,
  fetchData,
  fetchOptionsProps,
} from "./boilerplateHttpFunctions";

// Fetch Featured Products
type fetchFeaturedProductProps = fetchOptionsProps;

export async function fetchFeaturedProducts({
  signal,
  start,
  end,
  limit,
  productId,
}: fetchFeaturedProductProps) {
  const url = buildUrl("http://localhost:5000/featuredProducts", {
    productId,
    start,
    end,
    limit,
  });
  let featuredProducts = await fetchData(url, signal);

  // Ensure the result is always an array for consistency
  if (productId !== undefined && !Array.isArray(featuredProducts)) {
    featuredProducts = [featuredProducts];
  }

  return featuredProducts;
}

// Fetch Products by ID
type fetchProductProps = {
  signal?: AbortSignal;
  productId?: string;
};

export async function fetchProducts({ signal, productId }: fetchProductProps) {
  const url = buildUrl("http://localhost:5000/featuredProducts", { productId });
  const products = await fetchData(url, signal);

  // If fetching by productId, return the first (and only) product
  if (productId && Array.isArray(products)) {
    return products[0];
  }

  return products;
}
