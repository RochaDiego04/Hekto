type SearchIconProps = {
  fillColor: string;
  width: string;
  height: string;
};

export default function SearchIcon({
  fillColor,
  width,
  height,
}: SearchIconProps) {
  return (
    <div style={{ width, height }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.8315 12.9884L11.6068 10.78C12.4704 9.70246 12.8886 8.33476 12.7754 6.95814C12.6623 5.58151 12.0264 4.30059 10.9985 3.37875C9.97062 2.45692 8.62888 1.96424 7.24917 2.00202C5.86946 2.03981 4.55665 2.60518 3.58069 3.58189C2.60472 4.5586 2.03978 5.8724 2.00202 7.25316C1.96427 8.63392 2.45657 9.97668 3.37771 11.0053C4.29884 12.034 5.57879 12.6704 6.95437 12.7836C8.32996 12.8968 9.69661 12.4783 10.7733 11.6141L12.98 13.8225C13.0358 13.8787 13.1021 13.9234 13.1752 13.9538C13.2482 13.9843 13.3266 14 13.4058 14C13.4849 14 13.5633 13.9843 13.6364 13.9538C13.7094 13.9234 13.7758 13.8787 13.8315 13.8225C13.9396 13.7106 14 13.5611 14 13.4054C14 13.2498 13.9396 13.1003 13.8315 12.9884ZM7.40932 11.6141C6.57914 11.6141 5.76759 11.3678 5.07732 10.9062C4.38704 10.4446 3.84904 9.78855 3.53134 9.02097C3.21364 8.25339 3.13051 7.40877 3.29247 6.59392C3.45444 5.77906 3.85421 5.03057 4.44124 4.4431C5.02827 3.85562 5.7762 3.45554 6.59043 3.29346C7.40467 3.13137 8.24865 3.21456 9.01564 3.5325C9.78263 3.85044 10.4382 4.38885 10.8994 5.07965C11.3607 5.77045 11.6068 6.58262 11.6068 7.41343C11.6068 8.52753 11.1646 9.59599 10.3774 10.3838C9.59022 11.1716 8.52257 11.6141 7.40932 11.6141Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
