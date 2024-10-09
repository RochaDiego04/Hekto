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

export async function fetchProducts({ signal, productId }) {
  let url = "http://localhost:5000/featuredProducts";

  if (productId) {
    url += "/?id=" + productId;
  }
  console.log(url);
  try {
    const response = await fetch(url);

    if (!response.ok) {
      const errorInfo = await response.json();
      throw new FetchError(
        "An error occurred fetching products",
        response.status,
        errorInfo
      );
    }

    const products = await response.json();

    if (productId) {
      return products[0]; // return the only element in the array
    }
    return products;
  } catch (error) {
    throw new FetchError(
      "Failed to fetch products. Please check your network or try again later.",
      0,
      null
    );
  }
}
