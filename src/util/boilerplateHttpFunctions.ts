import FetchError from "../classes/FetchError";

export type fetchOptionsProps = {
  signal?: AbortSignal;
  productId?: number | string;
  start?: number;
  end?: number;
  page?: number;
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
    page,
    limit,
    categories,
    brands,
    priceRange,
    stars,
    sortPriceOrder,
  }: fetchOptionsProps
): string {
  let url = baseUrl;
  const params = new URLSearchParams();

  if (productId !== undefined) {
    url += `/${productId}`;
  } else {
    // Pagination
    if (page !== undefined) {
      params.append("_page", `${page}`);
    }
    if (limit !== undefined) {
      params.append("_limit", `${limit}`);
    }

    if (categories?.length) {
      params.append("category_like", `(?:${categories.join("|")})`);
    }

    if (brands?.length) {
      params.append("brand_like", `(?:${brands.join("|")})`);
    }

    // Price range filter
    if (priceRange?.length === 2) {
      params.append("price_gte", `${priceRange[0]}`);
      params.append("price_lte", `${priceRange[1]}`);
    }

    if (stars?.length) {
      params.append("stars_like", `(?:${stars.join("|")})`);
    }

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

export async function fetchDataWithTotalCount(
  url: string,
  signal?: AbortSignal
) {
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

    console.log(response);
    const total = response.headers.get("X-Total-Count");
    const data = await response.json();

    return { data, total: total ? parseInt(total, 10) : 0 };
  } catch (error) {
    throw new FetchError(
      "Failed to fetch data. Please check your network or try again later.",
      0,
      null
    );
  }
}
