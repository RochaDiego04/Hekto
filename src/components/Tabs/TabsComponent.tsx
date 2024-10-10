import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { DotLoader } from "react-spinners";
import FetchError from "../../classes/FetchError";
import { ProductInfo } from "../../interfaces/ProductInfo";
import Button from "../Button/Button";

type TabsComponentProps = {
  tabs: {
    label: string;
    queryKey: (string | { limit: number })[];
    queryFn: ({
      signal,
    }: {
      signal: AbortSignal | undefined;
    }) => Promise<ProductInfo[]>;
  }[];
  renderProduct: (product: ProductInfo) => JSX.Element;
};

export function TabsComponent({ tabs, renderProduct }: TabsComponentProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const { data, isLoading, isError, error } = useQuery<
    ProductInfo[],
    FetchError
  >(activeTab.queryKey, ({ signal }) => activeTab.queryFn({ signal }));

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 mb-16">
        {tabs.map((tab, index) => (
          <Button
            key={index}
            className={`${
              tab.label === activeTab.label ? "text-primary" : ""
            } p-0`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Content */}
      <div>
        {isLoading ? (
          <DotLoader color="#f0056a" className="mx-auto" />
        ) : isError ? (
          <div className="bg-dangerLight p-4">
            <p className="text-black">
              <span className="bold text-danger">Error Code:</span>{" "}
              {error?.code ?? "N/A"}
            </p>
            <p className="text-black">
              <span className="bold text-danger">Error Message:</span>{" "}
              {error?.message ?? "N/A"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 grid-rows-2">
            {data && data.map((product) => renderProduct(product))}
          </div>
        )}
      </div>
    </div>
  );
}
