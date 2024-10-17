import CheckboxGroup from "./CheckboxGroup";
import { filterGroups } from "./FilterGroups";

export default function CheckboxFilters() {
  return (
    <div className="flex flex-col gap-12">
      {Object.entries(filterGroups).map(([key, group]) => (
        <CheckboxGroup
          key={key}
          title={group.title}
          labels={group.labels}
          mode={group.mode}
        />
      ))}
    </div>
  );
}
