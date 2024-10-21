import {
  buildUrl,
  fetchData,
  fetchOptionsProps,
} from "./boilerplateHttpFunctions";

export const BASE_URL = import.meta.env.VITE_API_URL;

// Fetch Featured Products
type fetchFeaturedProductProps = fetchOptionsProps;

export async function fetchFeaturedProducts({
  signal,
  start,
  end,
  limit,
  productId,
}: fetchFeaturedProductProps) {
  const url = buildUrl(`${BASE_URL}/featuredProducts`, {
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

export async function fetchHeaderCard({
  signal,
  productId,
}: fetchDiscountCardsProps) {
  const url = buildUrl(`${BASE_URL}/headerCards`, { productId });
  const featuredProducts = await fetchData(url, signal);

  return featuredProducts;
}

// Fetch Discount Cards (related to products)
type fetchDiscountCardsProps = {
  signal?: AbortSignal;
  productId?: number;
};

export async function fetchDiscountCard({
  signal,
  productId,
}: fetchDiscountCardsProps) {
  const url = buildUrl(`${BASE_URL}/discountCards`, {
    productId,
  });
  const featuredProducts = await fetchData(url, signal);

  return featuredProducts;
}

// Fetch Product Categories
type fetchProductCategoriesProps = fetchOptionsProps;

export async function fetchProductCategories({
  signal,
  start,
  end,
  limit,
  productId,
}: fetchProductCategoriesProps) {
  const url = buildUrl(`${BASE_URL}/productCategories`, {
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

// Fetch Latest Blogs
type fetchLatestBlogsProps = {
  signal?: AbortSignal;
  limit?: number;
};

export async function fetchLatestBlogs({
  signal,
  limit,
}: fetchLatestBlogsProps) {
  const url = buildUrl(`${BASE_URL}/latestBlogs`, { limit });

  const latestBlogs = await fetchData(url, signal);

  return latestBlogs;
}
