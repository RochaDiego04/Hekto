import { useState } from "react";
import {
  ArrowBigLeft,
  ArrowBigRight,
  Circle,
  CircleDot,
  Diamond,
} from "lucide-react";

import "./CardSlider.css";

type CardSliderProps = {};

const cardsInfo = ["card 1", "card 2", "card 3"];

export default function CardSlider() {
  const [cardIndex, setCardIndex] = useState(0);

  function showNextCard() {
    setCardIndex((index) => {
      if (index === cardsInfo.length - 1) return 0;
      return index + 1;
    });
  }
  function showPrevCard() {
    setCardIndex((index) => {
      if (index === 0) return cardsInfo.length - 1;
      return index - 1;
    });
  }

  return (
    <div className=" w-full bg-bgCardSlider h-[60vh] relative">
      <div className=" w-full h-full flex overflow-hidden">
        {cardsInfo.map((info) => {
          return (
            <div
              className="card-slider--card w-full min-w-full h-full"
              style={{ translate: `${-100 * cardIndex}%` }}
            >
              {info}
            </div>
          );
        })}
      </div>
      {/* <img src="./src/assets/img/lamp.png" alt="" /> */}
      <button
        className="card-slider--btn card-slider--btn--left left-0"
        onClick={showPrevCard}
        aria-label="View Previous Card"
      >
        <ArrowBigLeft className="stroke-primary" />
      </button>
      <button
        className="card-slider--btn card-slider--btn--right right-0"
        onClick={showNextCard}
        aria-label="View Next Card"
      >
        <ArrowBigRight className="stroke-primary" />
      </button>

      <div className="absolute bottom-2 left-[50%] translate-x-[-50%] flex gap-3">
        {cardsInfo.map((_, index) => (
          <button
            className="card-slider--dot-btn"
            aria-label={`View Card Number ${index + 1}`}
            onClick={() => setCardIndex(index)}
          >
            <Diamond
              aria-hidden
              className={`${
                index === cardIndex ? "fill-primary" : "fill-none"
              } stroke-primary`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
