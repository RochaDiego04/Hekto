import FetchError from "../classes/FetchError";

type fetchFeaturedProductProps = {
  signal: AbortSignal | undefined;
  start?: number;
  end?: number;
  limit?: number;
  productId?: number;
};

export async function fetchFeaturedProducts({
  signal,
  start,
  end,
  limit,
  productId,
}: fetchFeaturedProductProps) {
  try {
    let url = "http://localhost:5000/featuredProducts";
    const params = new URLSearchParams();

    if (productId !== undefined) {
      // if search by id, ignore other filters
      url += `/${productId}`;
    } else {
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

    let featuredProducts = await response.json();

    // convert single object response to an array (to manage them as the same)
    if (productId !== undefined && !Array.isArray(featuredProducts)) {
      featuredProducts = [featuredProducts];
    }

    return featuredProducts; // if just one object returned, manage it as an array
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
