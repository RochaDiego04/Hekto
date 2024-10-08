import FetchError from "../classes/FetchError";

export async function fetchFeaturedProducts() {
  const response = await fetch("http://localhost:5000/featuredProducts");

  if (!response.ok) {
    const errorInfo = await response.json();
    throw new FetchError(
      "An error occurred fetching featuredProducts",
      response.status,
      errorInfo
    );
  }

  const featuredProducts = await response.json();
  console.log(featuredProducts);
  return featuredProducts;
}
