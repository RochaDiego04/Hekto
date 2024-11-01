type FacebookIconProps = {
  fillColor: string;
  width: string;
  height: string;
  [key: string]: unknown;
};

export default function FacebookIcon({
  fillColor,
  width,
  height,
  ...props
}: FacebookIconProps) {
  return (
    <div style={{ width, height }} {...props}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill={fillColor} />
        <path
          d="M13.3333 13.1001H15.2381L16 10.1667H13.3333V8.70008C13.3333 7.94475 13.3333 7.23341 14.8571 7.23341H16V4.76941C15.7516 4.73788 14.8137 4.66675 13.8232 4.66675C11.7547 4.66675 10.2857 5.88188 10.2857 8.11341V10.1667H8V13.1001H10.2857V19.3334H13.3333V13.1001Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
