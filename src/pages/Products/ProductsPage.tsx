import { useCallback, useState } from "react";
import CheckboxFilters from "../../components/Checkbox/CheckboxFilters";
import ProductCatalogOptions from "../../components/ProductCatalogOptions/ProductCatalogOptions";
import MainProductCatalog from "../../components/MainProductCatalog";

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
      <MainProductCatalog></MainProductCatalog>
      {/* product catalog component with the productsLayout prop */}
    </section>
  );
}
