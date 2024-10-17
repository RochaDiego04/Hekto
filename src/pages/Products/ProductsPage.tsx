import { useCallback, useState } from "react";
import CheckboxFilters from "../../components/Checkbox/CheckboxFilters";
import ProductCatalogOptions from "../../components/ProductCatalogOptions/ProductCatalogOptions";

export default function ProductsPage() {
  const [productsLayout, setProductsLayout] = useState("flowLayout");
  console.log(productsLayout);

  const handleSetProductsLayout = useCallback((layout: string) => {
    // memoizing value
    setProductsLayout(layout);
  }, []);

  return (
    <section className=" p-maxContainer md:p-24">
      <ProductCatalogOptions
        productsLayout={productsLayout}
        onSetProductsLayout={handleSetProductsLayout}
      ></ProductCatalogOptions>
      <CheckboxFilters></CheckboxFilters>
      {/* product catalog component with the productsLayout prop */}
    </section>
  );
}
