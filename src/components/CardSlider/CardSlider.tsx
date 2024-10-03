import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";

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
    <div className=" w-full bg-green-300 h-[60vh] relative">
      <div className=" w-full h-full flex ">
        {cardsInfo.map((info) => {
          return (
            <div
              className="card-slider--card w-full min-w-full h-full overflow-hidden"
              style={{ translate: `${-100 * cardIndex}%` }}
            >
              {info}
            </div>
          );
        })}
      </div>
      {/* <img src="./src/assets/img/lamp.png" alt="" /> */}
      <button className="card-slider--btn left-0" onClick={showPrevCard}>
        <ArrowBigLeft />
      </button>
      <button className="card-slider--btn right-0" onClick={showNextCard}>
        <ArrowBigRight />
      </button>

      <div className="absolute bottom-2 left-[50%] translate-x-[-50%] flex gap-1">
        {cardsInfo.map((_, index) => (
          <button
            className="card-slider--dot-btn"
            onClick={() => setCardIndex(index)}
          >
            {index === cardIndex ? <CircleDot></CircleDot> : <Circle></Circle>}
          </button>
        ))}
      </div>
    </div>
  );
}
