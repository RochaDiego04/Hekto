import { useState } from "react";
import SelectDropdown from "../Dropdown/SelectDropdown";

export default function SelectorPagination() {
  const options = ["hellooooo", "hellooo"]; // TODO, get the options from backend
  const [paginationValue, setPaginationValue] = useState("");

  return (
    <div className="flex items-center gap-4">
      <p className="text-grey3 inline-block">Per Page</p>
      <SelectDropdown
        value={paginationValue}
        onChange={(newPaginationValue) =>
          setPaginationValue(newPaginationValue)
        }
        placeholder="Select pagination parameter"
        options={options}
      ></SelectDropdown>
    </div>
  );
}
