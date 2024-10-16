import CheckboxGroup from "../../components/Checkbox/CheckboxGroup";
import StarRating from "../../components/StarRating";

export default function ProductsPage() {
  const filterGroups = {
    brand: {
      labels: ["casio", "apple", "sony", "nike", "Vke", "Glossiness"],
      mode: "info",
    },
    discount: {
      labels: ["20% cashback", "5% cashback", "25% discount offer"],
      mode: "primary",
    },
    rating: {
      labels: [
        <StarRating rating={5} className="inline-block" />,
        <StarRating rating={4} className="inline-block" />,
        <StarRating rating={3} className="inline-block" />,
        <StarRating rating={2} className="inline-block" />,
        <StarRating rating={1} className="inline-block" />,
      ],
      mode: "secondary",
    },
    categories: {
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
    },
    price: {
      labels: [
        "$0 - $150",
        "$150 - $350",
        "$350 - $500",
        "550 - $800",
        "$800+",
      ],
      mode: "primary",
    },
  };

  return (
    <>
      <CheckboxGroup
        labels={filterGroups.brand.labels}
        mode={filterGroups.brand.mode}
      />
      <CheckboxGroup
        labels={filterGroups.rating.labels}
        mode={filterGroups.rating.mode}
      />
      <CheckboxGroup
        labels={filterGroups.price.labels}
        mode={filterGroups.price.mode}
      />
    </>
  );
}
