import StarRating from "../StarRating";

interface FilterGroup {
  title: string;
  labels: Array<string | JSX.Element>;
  mode: "primary" | "secondary" | "info";
  filterType: "brands" | "categories" | "stars" | "price";
}

type FilterGroupsProps = {
  [key: string]: FilterGroup;
};

export const filterGroups: FilterGroupsProps = {
  brand: {
    title: "Product Brand",
    labels: ["casio", "apple", "sony", "nike", "vke", "glossiness"],
    mode: "info",
    filterType: "brands",
  },
  // discount: {
  //   title: "Discount Offer",
  //   labels: ["20% cashback", "5% cashback offer", "25% discount offer"],
  //   mode: "primary"
  // },
  rating: {
    title: "Rating",
    labels: [
      <StarRating rating={5} className="inline-block" />,
      <StarRating rating={4} className="inline-block" />,
      <StarRating rating={3} className="inline-block" />,
      <StarRating rating={2} className="inline-block" />,
      <StarRating rating={1} className="inline-block" />,
    ],
    mode: "secondary",
    filterType: "stars",
  },
  categories: {
    title: "Categories",
    labels: [
      "watches",
      "headphones",
      "laptop",
      "game console",
      "clothe",
      "jewelry",
      "perfume",
    ],
    mode: "primary",
    filterType: "categories",
  },
  price: {
    title: "Price",
    labels: ["$0 - $150", "$150 - $350", "$350 - $500", "$550 - $800", "$800+"],
    mode: "primary",
    filterType: "price",
  },
};
