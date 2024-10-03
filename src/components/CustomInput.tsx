import { ElementType } from "react";
import Button from "./Button/Button";

type CustomInputProps = {
  className?: string;
  Icon?: ElementType | null;
};

export default function CustomInput({ className, Icon }: CustomInputProps) {
  return (
    <div
      className={`flex bg-white items-center justify-center rounded-lg p-[1px] border border-grey2 text-sm pl-4 w-full md:w-auto mx-12 md:mx-0 ${className}`}
    >
      <input
        type="text"
        placeholder="Search"
        className="w-full md:w-auto focus:border-none focus:outline-none text-black"
      />
      <Button
        className="light"
        buttonType="anchor"
        Icon={
          Icon
            ? () => <Icon fillColor="#fff" width="24px" height="24px" />
            : undefined
        }
      ></Button>
    </div>
  );
}
