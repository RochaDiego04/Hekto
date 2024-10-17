import Checkbox from "./Checkbox";

type CheckboxGroupProps = {
  title: string;
  labels: Array<string | JSX.Element>;
  mode: "primary" | "secondary" | "info";
};

export default function CheckboxGroup({
  title,
  labels,
  mode,
}: CheckboxGroupProps) {
  return (
    <div>
      <h5 className="subtitle3 inline-block pb-1 mb-4 border-b-[1px] border-solid border-black">
        {title}
      </h5>
      <div className="flex flex-col gap-2">
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
    </div>
  );
}
