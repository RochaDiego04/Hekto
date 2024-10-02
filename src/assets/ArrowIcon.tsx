type ArrowIconProps = {
  fillColor: string;
  width: string;
  height: string;
  [key: string]: unknown;
};

export default function ArrowIcon({
  fillColor,
  width,
  height,
  ...props
}: ArrowIconProps) {
  return (
    <div style={{ width, height }} {...props}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.99951 5L7.99967 10L12.9998 5"
          stroke={fillColor}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}
