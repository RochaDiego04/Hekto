import { ProductInfo } from "../../interfaces/ProductInfo";
import { fetchFeaturedProducts } from "../../util/http";

import { TabsComponent } from "./TabsComponent";

export default function ProductTabs() {
  const limit = 6;
  const tabs = [
    {
      label: "New Arrival",
      queryKey: ["newArrivalProducts", { limit: limit }],
      queryFn: ({ signal }) => fetchFeaturedProducts({ signal, limit }),
    },
    {
      label: "Best Seller",
      queryKey: ["bestSellerProducts", { limit: limit }],
      queryFn: ({ signal }) => fetchFeaturedProducts({ signal, limit }),
    },
    {
      label: "Featured",
      queryKey: ["featuredProducts", { limit: limit }],
      queryFn: ({ signal }) => fetchFeaturedProducts({ signal, limit }),
    },
    {
      label: "Special Seller",
      queryKey: ["bestSellerProducts", { limit: limit }],
      queryFn: ({ signal }) => fetchFeaturedProducts({ signal, limit }),
    },
  ];

  const renderProduct = (product: ProductInfo) => (
    <div key={product.id} className="product-card">
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );

  return <TabsComponent tabs={tabs} renderProduct={renderProduct} />;
}
