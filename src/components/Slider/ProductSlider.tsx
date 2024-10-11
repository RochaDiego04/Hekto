import { useMemo, useState } from "react";
import { Minus } from "lucide-react";
import { ProductInfo } from "../../interfaces/ProductInfo";
import "./CardSlider.css";
import ProductCardWrapper from "../ProductCard/ProductCardWrapper";
import { ProductCategories } from "../../interfaces/ProductCategories";

const ITEMS_PER_SLIDE = 4;

type ProductSliderProps = {
  productsInfo: ProductInfo[] | ProductCategories[];
  productCardMode:
    | "productCard1"
    | "productCard2"
    | "productCard3"
    | "categoriesCard";
};

export default function ProductSlider({
  productsInfo,
  productCardMode,
}: ProductSliderProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  // Total number of slides needed
  const totalSlides = useMemo(
    () => Math.ceil(productsInfo.length / ITEMS_PER_SLIDE),
    [productsInfo]
  );

  // Get the products for each slide
  const getProductsForSlide = useMemo(() => {
    return (slideIndex: number) => {
      const startIndex = slideIndex * ITEMS_PER_SLIDE;
      return productsInfo.slice(startIndex, startIndex + ITEMS_PER_SLIDE);
    };
  }, [productsInfo]);

  return (
    <div className="w-full relative">
      <div
        className="w-full h-full flex overflow-hidden "
        style={{ willChange: "transform" }}
      >
        {Array.from({ length: totalSlides }).map((_, gridSlideIndex) => (
          <div
            key={gridSlideIndex}
            className={`grid grid-cols-2 md:grid-cols-${ITEMS_PER_SLIDE} gap-4 w-full min-w-full h-full card-slider--card px-10 pt-10 pb-20 transition-transform duration-300`}
            style={{
              transform: `translateX(${-100 * slideIndex}%)`,
            }}
          >
            {getProductsForSlide(gridSlideIndex).map((productInfo) => (
              <ProductCardWrapper
                key={productInfo.id}
                mode={productCardMode}
                productInfo={productInfo}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-2 left-[50%] translate-x-[-50%] flex gap-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className="card-slider--dot-btn"
            aria-label={`View Slide Number ${index + 1}`}
            onClick={() => setSlideIndex(index)}
          >
            <Minus
              aria-hidden
              className={`${
                index === slideIndex ? "stroke-primary" : "stroke-[#FEBAD7]"
              } product-slider--line-btn`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
