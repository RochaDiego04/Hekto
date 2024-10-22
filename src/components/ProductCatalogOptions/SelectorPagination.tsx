import SelectDropdown from "../Dropdown/SelectDropdown";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import { setItemsPerPage } from "../../store/filter-slice";

export default function SelectorPagination() {
  // Updated options to reflect only items per page
  const options = ["5", "10", "20"];
  const dispatch = useAppDispatch();

  // Get the current items per page from the state
  const itemsPerPage = useAppSelector(
    (state: RootState) => state.filter.itemsPerPage
  );

  // Handle change in selected items per page
  const handlePaginationChange = (newPaginationValue: string) => {
    const items = Number(newPaginationValue);
    dispatch(setItemsPerPage(items)); // Dispatch only the items per page
  };

  return (
    <div className="flex items-center gap-4">
      <p className="text-grey3 inline-block">Per Page</p>
      <SelectDropdown
        value={`${itemsPerPage}`} // Directly use itemsPerPage
        onChange={handlePaginationChange}
        placeholder="Select items per page"
        options={options}
      />
    </div>
  );
}
