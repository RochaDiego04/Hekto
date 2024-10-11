import { ElementType } from "react";
import Button from "./Button/Button";

type CustomInputProps = {
  className?: string;
  Icon?: ElementType | null;
  buttonText?: string;
  buttonMode?:
    | "option"
    | "filled"
    | "filledDark"
    | "smallGreen"
    | "smallDarkGreen";
  placeholder?: string;
};

export default function CustomInput({
  className,
  Icon,
  buttonText,
  buttonMode,
  placeholder,
}: CustomInputProps) {
  return (
    <div
      className={`flex bg-white items-center justify-center rounded-lg p-[1px] border border-grey2 text-sm pl-4 ${className}`}
    >
      <input
        type="text"
        placeholder={placeholder ?? "Search"}
        className="w-full focus:border-none focus:outline-none text-black mr-auto"
      />
      <Button
        href="#"
        className="text-center"
        mode={buttonMode}
        buttonType="anchor"
        {...(Icon && {
          Icon: () => <Icon fillColor="#fff" width="24px" height="24px" />,
        })}
      >
        {buttonText}
      </Button>
    </div>
  );
}
