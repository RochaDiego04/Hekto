import { Rate } from "antd";

type StarRatingProps = {
  className: string;
  rating: number;
};

const StarRating = ({ className, rating }: StarRatingProps) => {
  return (
    <div className={className}>
      <Rate
        value={rating}
        style={{ color: "var(--secondary)" }}
        allowHalf
        disabled
      />
    </div>
  );
};

export default StarRating;
