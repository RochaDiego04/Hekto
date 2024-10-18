import SelectDropdown from "../Dropdown/SelectDropdown";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import { setPagination } from "../../store/filter-slice";

export default function SelectorPagination() {
  const options = ["1 - 5", "1 - 10", "1 - 20"]; // TODO, get the options from backend
  const dispatch = useAppDispatch();
  const paginationValue = useAppSelector(
    (state: RootState) => state.filter.pagination
  );
  const handlePaginationChange = (newPaginationValue: string) => {
    const [min, max] = newPaginationValue.split(" - ").map(Number);
    dispatch(setPagination([min, max]));
  };

  return (
    <div className="flex items-center gap-4">
      <p className="text-grey3 inline-block">Per Page</p>
      <SelectDropdown
        value={`${paginationValue[0]} - ${paginationValue[1]}`}
        onChange={handlePaginationChange}
        placeholder="Select pagination parameter"
        options={options}
      ></SelectDropdown>
    </div>
  );
}
