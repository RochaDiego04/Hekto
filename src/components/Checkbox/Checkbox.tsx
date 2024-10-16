import "./Checkbox.css";
import { CheckOutlined } from "@ant-design/icons";

type CheckboxProps = {
  mode: "primary" | "secondary" | "info";
};

export default function Checkbox({ mode }: CheckboxProps) {
  return (
    <div className="checkbox__wrapper">
      <input type="checkbox" id="check" />
      <label htmlFor="check">Checkbox</label>
    </div>
  );
}
