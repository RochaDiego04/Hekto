import { ProductInfo } from "../../interfaces/ProductInfo";
import { fetchFeaturedProducts } from "../../util/http";
import HomeCardWrapper from "../HomeCard/HomeCardWrapper";

import { TabsComponent } from "./TabsComponent";

type SignalType = {
  signal: AbortSignal | undefined;
};

export default function DiscountTabs() {
  const tabs = [
    {
      label: "Headphones",
      queryKey: ["newArrivalProducts", { productId: 2 }],
      queryFn: ({ signal }: SignalType) =>
        fetchFeaturedProducts({ signal, productId: 2 }),
    },
    {
      label: "Laptop",
      queryKey: ["bestSellerProducts", { productId: 3 }],
      queryFn: ({ signal }: SignalType) =>
        fetchFeaturedProducts({ signal, productId: 3 }),
    },
    {
      label: "More",
      queryKey: ["products", { productId: 4321 }],
      queryFn: ({ signal }: SignalType) =>
        fetchFeaturedProducts({ signal, productId: 4321 }),
    },
  ];

  const renderDiscountCards = (product: ProductInfo) => (
    <HomeCardWrapper
      key={product.id}
      mode="discountCard"
      productInfo={product}
    />
  );

  return (
    <TabsComponent tabs={tabs} renderDiscountCards={renderDiscountCards} />
  );
}
