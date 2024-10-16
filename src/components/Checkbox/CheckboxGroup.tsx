import Checkbox from "./Checkbox";

type CheckboxGroupProps = {
  labels: Array<string | JSX.Element>;
  mode: "primary" | "secondary" | "info";
};

export default function CheckboxGroup({ labels, mode }: CheckboxGroupProps) {
  return (
    <div>
      {labels.map((label, index) => (
        <Checkbox
          key={index}
          label={typeof label === "string" ? label : undefined}
          mode={mode}
        >
          {typeof label !== "string" && label}
        </Checkbox>
      ))}
    </div>
  );
}
