import { ElementType, ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
  className?: string;
  buttonType?: "button" | "anchor";
  mode?: string;
  Icon?: ElementType | null;
  [key: string]: unknown;
};

export default function Button({
  children,
  className,
  buttonType = "button",
  mode,
  Icon,
  ...props
}: ButtonProps) {
  let cssClasses: string = mode ? `button ${mode}-button` : `button`;

  if (Icon) {
    cssClasses += " icon-button";
  }

  if (className) {
    cssClasses += " " + className;
  }

  const isAnchor = buttonType === "button" ? false : true;

  return (
    <>
      {isAnchor ? (
        <a className={cssClasses} {...props}>
          {Icon && (
            <span className="button-icon">
              <Icon />
            </span>
          )}
          {children}
        </a>
      ) : (
        <button className={cssClasses} {...props}>
          {Icon && (
            <span className="button-icon">
              <Icon />
            </span>
          )}
          {children}
        </button>
      )}
    </>
  );
}
