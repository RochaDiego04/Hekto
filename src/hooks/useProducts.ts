import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

const useProducts = () => {
  const filters = useSelector((state) => state.filters);

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
