import FetchError from "../classes/FetchError";

export async function fetchFeaturedProducts() {
  try {
    const response = await fetch("http://localhost:5000/featuredProducts");

    if (!response.ok) {
      const errorInfo = await response.json();
      throw new FetchError(
        "An error occurred fetching featured products",
        response.status,
        errorInfo
      );
    }

    const featuredProducts = await response.json();
    return featuredProducts;
  } catch (error) {
    throw new FetchError(
      "Failed to fetch featured products. Please check your network or try again later.",
      0,
      null
    );
  }
}
