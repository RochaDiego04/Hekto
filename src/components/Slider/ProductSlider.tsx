import { useState } from "react";
import { Diamond } from "lucide-react";
import "./CardSlider.css";
import ProductCard from "../ProductCard/ProductCard";
import { ProductInfo } from "../../interfaces/ProductInfo";

const ITEMS_PER_SLIDE = 4;

type ProductSliderProps = {
  productsInfo: ProductInfo[];
};

export default function ProductSlider({ productsInfo }: ProductSliderProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  // Total number of slides needed
  const totalSlides = Math.ceil(productsInfo.length / ITEMS_PER_SLIDE);

  // Get the products for each slide
  const getProductsForSlide = (slideIndex: number) => {
    const startIndex = slideIndex * ITEMS_PER_SLIDE;
    return productsInfo.slice(startIndex, startIndex + ITEMS_PER_SLIDE);
  };

  return (
    <div className="w-full bg-red-300 relative">
      <div className="w-full h-full flex overflow-hidden">
        {Array.from({ length: totalSlides }).map((_, gridSlideIndex) => (
          <div
            key={gridSlideIndex}
            className={`grid grid-cols-2 md:grid-cols-${ITEMS_PER_SLIDE} gap-4 w-full min-w-full h-full card-slider--card p-10 pb-20 transition-transform duration-300`}
            style={{
              transform: `translateX(${-100 * slideIndex}%)`,
            }}
          >
            {getProductsForSlide(gridSlideIndex).map((productInfo) => (
              <ProductCard key={productInfo.id} productInfo={productInfo} />
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
            <Diamond
              aria-hidden
              className={`${
                index === slideIndex ? "fill-primary" : "fill-none"
              } stroke-primary`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
