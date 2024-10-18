import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "../store/hooks";

const useProducts = () => {
  const filters = useAppSelector((state) => state.filter);

  const queryInfo = useQuery(["products", filters], () =>
    fetchProducts({
      priceRange: filters.priceRange,
      stars: filters.stars,
      categories: filters.categories,
      brands: filters.brands,
    })
  );

  return queryInfo;
};
