import SelectDropdown from "../Dropdown/SelectDropdown";
import { useAppDispatch } from "../../store/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setSortPriceOrder } from "../../store/filter-slice";

export default function SelectorSortProducts() {
  const options = ["price: high -> low", "price: low -> high"]; // TODO, get the options from backend
  const dispatch = useAppDispatch();
  const sortValue = useSelector(
    (state: RootState) => state.filter.sortPriceOrder
  );

  const handleSortChange = (newSortValue: string) => {
    const sortOrder =
      newSortValue === "price: high -> low" ? "highToLow" : "lowToHigh";
    dispatch(setSortPriceOrder(sortOrder));
  };

  return (
    <div className="flex items-center gap-4">
      <p className="text-grey3">Sort By</p>
      <SelectDropdown
        value={
          sortValue === "lowToHigh"
            ? "price: low -> high"
            : "price: high -> low"
        }
        onChange={handleSortChange}
        placeholder="Select sort parameter"
        options={options}
      ></SelectDropdown>
    </div>
  );
}
