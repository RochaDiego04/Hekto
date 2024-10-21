import { Link } from "react-router-dom";
import { HeaderCard as HeaderCardType } from "../../interfaces/HeaderCard";
import Button from "../Button/Button";
import "./HeaderCard.css";

type HeaderCardProps = {
  cardInfo: HeaderCardType;
};

export default function HeaderCard({ cardInfo }: HeaderCardProps) {
  return (
    <div className="headerCard__container px-10">
      <img
        src={cardInfo.sideImage}
        alt="card side image"
        className="max-h-[40vh]"
      />
      <div className="flex flex-col justify-center gap-3">
        <p className="text-primary bold">{cardInfo.slogan}</p>
        <h1>{cardInfo.title}</h1>
        <p className="text-grey3 max-w-[35rem] mb-2">{cardInfo.description}</p>
        <Link to={`/products/`} className=" inline-block w-fit">
          <Button className=" w-auto " mode="filled" href="#">
            Shop Now
          </Button>
        </Link>
      </div>
      <div className="headerCard__imageComposition">
        <img
          src="src/assets/headerSlider/Ellipse2.png"
          alt=""
          className="max-h-[50vh] self-end justify-self-start mt-5"
        />
        <img
          src="src/assets/headerSlider/Ellipse1.png"
          className="max-h-[50vh] self-start justify-self-center mt-5"
          alt=""
        />
        <div className="headerCard__productImage mt-10">
          <h3 className="headerCard__productImage__discountText text-white text-[2.25rem]">
            {cardInfo.discount}
            <br /> offer
          </h3>
          <img
            src="src/assets/headerSlider/discountBg.png"
            className="headerCard__productImage__discount"
            alt=""
          />
          <img
            src={cardInfo.productImage}
            alt="card side image"
            className="max-h-[50vh] mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
