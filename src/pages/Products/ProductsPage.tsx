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
    <section className="p-maxContainer md:p-24 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-16">
      {/* Full width row */}
      <div className="col-span-1 md:col-span-2">
        <ProductCatalogOptions
          productsLayout={productsLayout}
          onSetProductsLayout={handleSetProductsLayout}
        />
      </div>

      {/* Filters column */}
      <div className="col-span-1">
        <CheckboxFilters />
      </div>

      {/* Products catalog column */}
      <div className="col-span-1">
        <MainProductCatalog productsLayout={productsLayout} />
      </div>
    </section>
  );
}
