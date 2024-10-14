import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./CategoryCard.css";
import { ProductCategories } from "../../interfaces/ProductCategories";

type CategoryCardProps = {
  categoryInfo: ProductCategories;
};

export default function CategoryCard({ categoryInfo }: CategoryCardProps) {
  return (
    <div className="categoryCard  text-center flex flex-col items-center">
      <div className="categoryCard__topSection mb-6 justify-center">
        <div className="categoryCard__imageWrapper">
          <img
            src={categoryInfo.categoryImage[0]}
            alt={"image " + categoryInfo.categoryName}
            className="object-cover mx-auto items-center"
          />
        </div>

        <Link
          to={`/products/${categoryInfo.id.toString()}`}
          className="categoryCard__topSection__detailsButton mx-auto mb-5"
        >
          <Button className=" w-auto" mode="smallGreen" href="#">
            View Category
          </Button>
        </Link>
      </div>
      <h5 className="subtitle3 mb-6">{categoryInfo.categoryName}</h5>
    </div>
  );
}
