import { ProductInfo } from "../../interfaces/ProductInfo";
import { fetchFeaturedProducts } from "../../util/http";
import ProductCardWrapper from "../ProductCard/ProductCardWrapper";

import { TabsComponent } from "./TabsComponent";

type SignalType = {
  signal: AbortSignal | undefined;
};

export default function ProductTabs() {
  const limit = 6;
  const tabs = [
    {
      label: "New Arrival",
      queryKey: ["newArrivalProducts", { limit: limit }],
      queryFn: ({ signal }: SignalType) =>
        fetchFeaturedProducts({ signal, limit }),
    },
    {
      label: "Best Seller",
      queryKey: ["bestSellerProducts", { limit: limit }],
      queryFn: ({ signal }: SignalType) =>
        fetchFeaturedProducts({ signal, limit }),
    },
    {
      label: "Featured",
      queryKey: ["featuredProducts", { limit: limit }],
      queryFn: ({ signal }: SignalType) =>
        fetchFeaturedProducts({ signal, limit }),
    },
    {
      label: "Special Seller",
      queryKey: ["bestSellerProducts", { limit: limit }],
      queryFn: ({ signal }: SignalType) =>
        fetchFeaturedProducts({ signal, limit }),
    },
  ];

  const renderProduct = (product: ProductInfo) => (
    <ProductCardWrapper
      key={product.id}
      mode="productCard2"
      productInfo={product}
    />
  );

  return <TabsComponent tabs={tabs} renderProduct={renderProduct} />;
}
