import FetchError from "../classes/FetchError";

export type fetchOptionsProps = {
  signal?: AbortSignal;
  productId?: number | string;
  start?: number;
  end?: number;
  limit?: number;
};

export function buildUrl(
  baseUrl: string,
  { productId, start, end, limit }: fetchOptionsProps
): string {
  let url = baseUrl;
  const params = new URLSearchParams();

  if (productId !== undefined) {
    // If productId exists, ignore other filters and build the URL accordingly
    url += `/${productId}`;
  } else {
    // Add filters as query parameters if they exist
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
