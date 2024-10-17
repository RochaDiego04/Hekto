import { useState } from "react";
import SelectDropdown from "../Dropdown/SelectDropdown";

export default function SelectorSortProducts() {
  const options = ["defg", "abc"]; // TODO, get the options from backend
  const [sortValue, setSortValue] = useState("");

  return (
    <div className="flex items-center gap-4">
      <p className="text-grey3">Sort By</p>
      <SelectDropdown
        value={sortValue}
        onChange={(newSortValue) => setSortValue(newSortValue)}
        placeholder="Select sort parameter"
        options={options}
      ></SelectDropdown>
    </div>
  );
}
