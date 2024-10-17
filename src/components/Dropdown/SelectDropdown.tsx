import { ChevronDown } from "lucide-react";
import { useState } from "react";

type SelectDropdownProps = {
  value: string;
  onChange: (newValue: string) => void;
  placeholder: string;
  options: Array<string>;
};

export default function SelectDropdown({
  value,
  onChange,
  placeholder,
  options,
}: SelectDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative max-w-[320px]">
      <div
        tabIndex={0}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-2 py-2 px-3 border-2 border-grey2 rounded-lg cursor-pointer focus:shadow-[0px_0px_0px_1px_rgb(182,207,255,0.25)]"
      >
        <p className={`${value ? "text-black" : "text-grey3"} capitalize`}>
          {value ? value : placeholder}
        </p>
        <ChevronDown
          className={`stroke-1 text-black transition-all ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {open && (
        <div className=" absolute top-[105%] left-0 w-full max-h-[320px] py-2 border-2 border-grey2 rounded-lg bg-white">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className={`flex py-2 px-3 cursor-pointer ${
                option === value ? "bg-gray-200" : "bg-white"
              } hover:bg-gray-200 rounded-sm`}
            >
              <p className=" capitalize text-black">{option}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
