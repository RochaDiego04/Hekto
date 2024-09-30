type CartIconProps = {
  fillColor: string;
  width: string;
  height: string;
};

export default function CartIcon({ fillColor, width, height }: CartIconProps) {
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
          d="M0.999023 1.59916C0.999023 1.44001 1.06225 1.28738 1.17478 1.17484C1.28732 1.06231 1.43995 0.999084 1.5991 0.999084H2.04556C2.80566 0.999084 3.26172 1.51035 3.52175 1.98561C3.69538 2.30245 3.82099 2.6697 3.91941 3.00255C3.94602 3.00045 3.97271 2.99938 3.99942 2.99935H13.9991C14.6632 2.99935 15.1433 3.63463 14.9608 4.27391L13.4983 9.40178C13.3671 9.86173 13.0897 10.2664 12.708 10.5546C12.3263 10.8427 11.8611 10.9987 11.3828 10.9988H6.62376C6.14169 10.9988 5.67296 10.8405 5.2896 10.5482C4.90625 10.2559 4.6295 9.84585 4.50188 9.38098L3.8938 7.16309L2.88567 3.76425L2.88487 3.75785C2.76005 3.30419 2.64324 2.87933 2.46882 2.56249C2.30159 2.25445 2.16718 2.19924 2.04636 2.19924H1.5991C1.43995 2.19924 1.28732 2.13602 1.17478 2.02348C1.06225 1.91095 0.999023 1.75831 0.999023 1.59916ZM5.05795 6.87185L5.65883 9.06334C5.77885 9.497 6.1733 9.79864 6.62376 9.79864H11.3828C11.6002 9.79863 11.8116 9.7278 11.9852 9.59685C12.1587 9.46591 12.2849 9.28199 12.3445 9.07294L13.7343 4.1995H4.26745L5.04675 6.82945L5.05795 6.87185Z"
          fill={fillColor}
        />
        <path
          d="M7.80003 13.4007C7.80003 13.8251 7.63143 14.2322 7.33134 14.5323C7.03124 14.8324 6.62422 15.001 6.19982 15.001C5.77542 15.001 5.3684 14.8324 5.0683 14.5323C4.7682 14.2322 4.59961 13.8251 4.59961 13.4007C4.59961 12.9763 4.7682 12.5693 5.0683 12.2692C5.3684 11.9691 5.77542 11.8005 6.19982 11.8005C6.62422 11.8005 7.03124 11.9691 7.33134 12.2692C7.63143 12.5693 7.80003 12.9763 7.80003 13.4007ZM6.59987 13.4007C6.59987 13.2946 6.55772 13.1929 6.4827 13.1179C6.40767 13.0428 6.30592 13.0007 6.19982 13.0007C6.09372 13.0007 5.99196 13.0428 5.91694 13.1179C5.84191 13.1929 5.79977 13.2946 5.79977 13.4007C5.79977 13.5068 5.84191 13.6086 5.91694 13.6836C5.99196 13.7587 6.09372 13.8008 6.19982 13.8008C6.30592 13.8008 6.40767 13.7587 6.4827 13.6836C6.55772 13.6086 6.59987 13.5068 6.59987 13.4007Z"
          fill={fillColor}
        />
        <path
          d="M13.4006 13.4007C13.4006 13.8251 13.232 14.2322 12.9319 14.5323C12.6318 14.8324 12.2248 15.001 11.8004 15.001C11.376 15.001 10.969 14.8324 10.6689 14.5323C10.3688 14.2322 10.2002 13.8251 10.2002 13.4007C10.2002 12.9763 10.3688 12.5693 10.6689 12.2692C10.969 11.9691 11.376 11.8005 11.8004 11.8005C12.2248 11.8005 12.6318 11.9691 12.9319 12.2692C13.232 12.5693 13.4006 12.9763 13.4006 13.4007ZM12.2005 13.4007C12.2005 13.2946 12.1583 13.1929 12.0833 13.1179C12.0083 13.0428 11.9065 13.0007 11.8004 13.0007C11.6943 13.0007 11.5925 13.0428 11.5175 13.1179C11.4425 13.1929 11.4004 13.2946 11.4004 13.4007C11.4004 13.5068 11.4425 13.6086 11.5175 13.6836C11.5925 13.7587 11.6943 13.8008 11.8004 13.8008C11.9065 13.8008 12.0083 13.7587 12.0833 13.6836C12.1583 13.6086 12.2005 13.5068 12.2005 13.4007Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
