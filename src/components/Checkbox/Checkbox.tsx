import { ReactNode, useState } from "react";
import "./Checkbox.css";

type CheckboxProps = {
  label?: string;
  mode: "primary" | "secondary" | "info";
  children?: ReactNode;
};

export default function Checkbox({ label, mode, children }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={`checkbox__wrapper ${mode}`}>
      <label>
        <input type="checkbox" onChange={() => setIsChecked(!isChecked)} />
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
        {children ? <span>{children}</span> : <span>{label}</span>}
      </label>
    </div>
  );
}
