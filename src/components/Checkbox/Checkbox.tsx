import { ReactNode, useState } from "react";
import "./Checkbox.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  setBrands,
  setCategories,
  setPriceRange,
  setStars,
} from "../../store/filter-slice";

type CheckboxProps = {
  label?: string;
  mode: "primary" | "secondary" | "info";
  filterType: "brands" | "categories" | "stars" | "price";
  children?: ReactNode;
};

// Checkbox filter functions are dispatched based on the filterType and their respective label.
// When there is not a label and there is a children element (rating stars case), extract the "rating" prop value

export default function Checkbox({
  label,
  mode,
  filterType,
  children,
}: CheckboxProps) {
  const dispatch = useAppDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const selectedBrands = useAppSelector((state) => state.filter.brands);
  const selectedCategories = useAppSelector((state) => state.filter.categories);
  const selectedPriceRanges = useAppSelector(
    (state) => state.filter.priceRange
  );
  const selectedStars = useAppSelector((state) => state.filter.stars);

  const handleCheckboxChange = () => {
    const nextChecked = !isChecked; // This is the next state
    setIsChecked(nextChecked);

    // Dispatch based on the nextChecked value
    if (filterType === "brands" && label) {
      const updatedBrands = nextChecked
        ? [...selectedBrands, label] // add label
        : selectedBrands.filter((brand) => brand !== label); // delete label

      dispatch(setBrands(updatedBrands));
    } else if (filterType === "categories" && label) {
      const updatedCategories = nextChecked
        ? [...selectedCategories, label] // add label
        : selectedCategories.filter((category) => category !== label); // delete label

      dispatch(setCategories(updatedCategories));
    } else if (filterType === "stars" && children) {
      // Extract rating number from StarRating JSX element (assuming children is a ReactElement with props.rating)
      const rating = (children as React.ReactElement).props.rating;

      const updatedStars = nextChecked
        ? [...selectedStars, rating] // Add rating to the selected stars
        : selectedStars.filter((star) => star !== rating); // Remove rating if unchecked

      dispatch(setStars(updatedStars));
    } else if (filterType === "price" && label) {
      const priceRange = label.includes("-")
        ? (label
            .split(" - ")
            .map((price) => parseInt(price.replace(/\D/g, ""))) as [
            number,
            number
          ])
        : ([parseInt(label.replace(/\D/g, "")), Number.MAX_SAFE_INTEGER] as [
            number,
            number
          ]);

      const updatedPriceRanges = nextChecked
        ? [...selectedPriceRanges, priceRange] // Add new price range
        : selectedPriceRanges.filter(
            (range) => range[0] !== priceRange[0] || range[1] !== priceRange[1]
          ); // Remove the price range if unchecked

      dispatch(setPriceRange(updatedPriceRanges));
    }
  };

  return (
    <div className={`checkbox__wrapper ${mode}`}>
      <label className="flex items-center">
        <input type="checkbox" onChange={handleCheckboxChange} />
        {/* {children ? <span>{children}</span> : <span>{label}</span>} */}
        <svg
          className={`checkbox checkbox--${mode} ${
            isChecked ? `checkbox__${mode}--active` : ""
          }`}
          aria-hidden="true"
          viewBox="0 0 15 11"
          fill="none"
        >
          <path
            d="M1 4.5L5 9L14 1"
            strokeWidth="2"
            stroke={isChecked ? "#fff" : "none"}
          />
        </svg>
        {/* show text or icons */}
        {children ? (
          <span>{children}</span>
        ) : (
          <span className=" capitalize">{label}</span>
        )}
      </label>
    </div>
  );
}
