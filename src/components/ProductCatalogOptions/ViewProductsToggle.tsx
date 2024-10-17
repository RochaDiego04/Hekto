import { LayoutGrid, StretchHorizontal } from "lucide-react";
import "./ViewProductsToggle.css";

type ViewProductsToggleProps = {
  productsLayout: string;
  onSetProductsLayout: (layout: string) => void;
};

export default function ViewProductsToggle({
  productsLayout,
  onSetProductsLayout,
}: ViewProductsToggleProps) {
  const isFlowLayout = productsLayout === "flowLayout";

  return (
    <div className="flex items-center gap-4">
      <p className="text-grey3">View</p>
      <div
        className="toggle-container"
        onClick={() =>
          onSetProductsLayout(isFlowLayout ? "gridLayout" : "flowLayout")
        }
      >
        <span className={`toggle-label ${!isFlowLayout ? "active" : ""}`}>
          <LayoutGrid
            className={`${!isFlowLayout ? " fill-primary" : ""} stroke-1`}
          />
        </span>
        <span className={`toggle-label ${isFlowLayout ? "active" : ""}`}>
          <StretchHorizontal
            className={`${isFlowLayout ? " fill-primary" : ""} stroke-1`}
          />
        </span>
      </div>
    </div>
  );
}
