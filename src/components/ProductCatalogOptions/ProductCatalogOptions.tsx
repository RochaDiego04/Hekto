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
    <div>
      <SelectorPagination></SelectorPagination>
      <SelectorSortProducts></SelectorSortProducts>
      <ViewProductsToggle
        productsLayout={productsLayout}
        onSetProductsLayout={onSetProductsLayout}
      ></ViewProductsToggle>
    </div>
  );
}
