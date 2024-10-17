import SelectorPagination from "./SelectorPagination";
import SelectorSortProducts from "./SelectorSortProducts";
import ViewProductsToggle from "./ViewProductsToggle";

type ProductCatalogOptionsProps = {
  productsLayout: string;
  onSetProductsLayout: (layout: string) => void;
};

export default function ProductCatalogOptions({
  productsLayout,
  onSetProductsLayout,
}: ProductCatalogOptionsProps) {
  return (
    <div className="flex justify-end gap-16 mb-8">
      <SelectorPagination></SelectorPagination>
      <SelectorSortProducts></SelectorSortProducts>
      <ViewProductsToggle
        productsLayout={productsLayout}
        onSetProductsLayout={onSetProductsLayout}
      ></ViewProductsToggle>
    </div>
  );
}
