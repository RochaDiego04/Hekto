import FetchError from "../classes/FetchError";

type fetchFeaturedProductProps = {
  signal: AbortSignal | undefined;
  start?: number;
  end?: number;
  limit?: number;
};

export async function fetchFeaturedProducts({
  signal,
  start,
  end,
  limit,
}: fetchFeaturedProductProps) {
  try {
    let url = "http://localhost:5000/featuredProducts";
    const params = new URLSearchParams();

    if (start !== undefined) {
      params.append("_start", `${start}`);
    }
    if (end !== undefined) {
      params.append("_end", `${end}`);
    }
    if (limit !== undefined) {
      params.append("_limit", `${limit}`);
    }

    if (params.toString()) {
      url += `?${params.toString()}`;
    }

    const response = await fetch(url);

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

type fetchProductProps = {
  signal: AbortSignal | undefined;
  productId?: string;
};

export async function fetchProducts({ signal, productId }: fetchProductProps) {
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
