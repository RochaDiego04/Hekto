import FetchError from "../classes/FetchError";

export type fetchOptionsProps = {
  signal?: AbortSignal;
  productId?: number | string;
  start?: number;
  end?: number;
  limit?: number;
  categories?: string[];
  priceRange?: [number, number];
  stars?: number[];
  brands?: string[];
  sortPriceOrder?: "lowToHigh" | "highToLow";
};
export function buildUrl(
  baseUrl: string,
  {
    productId,
    start,
    end,
    limit,
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
  }
): string {
  let url = baseUrl;
  const params = new URLSearchParams();

  if (productId !== undefined) {
    url += `/${productId}`;
  } else {
    // Pagination
    if (start !== undefined) {
      params.append("_start", `${start}`);
    }
    if (end !== undefined) {
      params.append("_end", `${end}`);
    }
    if (limit !== undefined) {
      params.append("_limit", `${limit}`);
    }

    // Categories filter
    if (categories?.length) {
      categories.forEach((category) => {
        params.append("category", category);
      });
    }

    // Brands filter
    if (brands?.length) {
      brands.forEach((brand) => {
        params.append("brand", brand);
      });
    }

    // Price range filter
    if (priceRange?.length === 2) {
      params.append("price_gte", `${priceRange[0]}`);
      params.append("price_lte", `${priceRange[1]}`);
    }

    // Stars filter
    if (stars?.length) {
      stars.forEach((star) => {
        params.append("stars", `${star}`);
      });
    }

    // Sorting by price
    if (sortPriceOrder) {
      params.append("_sort", "price");
      params.append("_order", sortPriceOrder === "lowToHigh" ? "asc" : "desc");
    }

    if (params.toString()) {
      url += `?${params.toString()}`;
    }
  }

  return url;
}

export async function fetchData(url: string, signal?: AbortSignal) {
  try {
    const response = await fetch(url, { signal });

    if (!response.ok) {
      const errorInfo = await response.json();
      throw new FetchError(
        "An error occurred while fetching data",
        response.status,
        errorInfo
      );
    }

    return await response.json();
  } catch (error) {
    throw new FetchError(
      "Failed to fetch data. Please check your network or try again later.",
      0,
      null
    );
  }
}
