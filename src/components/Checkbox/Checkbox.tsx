import { ReactNode, useState, useEffect } from "react";
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

  // Sync isChecked with the actual selected values in the Redux store
  useEffect(() => {
    if (filterType === "brands" && label) {
      setIsChecked(selectedBrands.includes(label));
    } else if (filterType === "categories" && label) {
      setIsChecked(selectedCategories.includes(label));
    } else if (filterType === "stars" && children) {
      const rating = (children as React.ReactElement).props.rating;
      setIsChecked(selectedStars.includes(rating));
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

      setIsChecked(
        selectedPriceRanges.some(
          (range) => range[0] === priceRange[0] && range[1] === priceRange[1]
        )
      );
    }
  }, [
    selectedBrands,
    selectedCategories,
    selectedStars,
    selectedPriceRanges,
    filterType,
    label,
    children,
  ]);

  const handleCheckboxChange = () => {
    const nextChecked = !isChecked; // Toggle the state
    setIsChecked(nextChecked);

    // Dispatch based on the state value previous to be clicked
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
      // Extracting rating number from StarRating JSX element
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
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
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
