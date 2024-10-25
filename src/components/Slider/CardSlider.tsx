import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Diamond } from "lucide-react";

import "./CardSlider.css";
import { useQuery } from "@tanstack/react-query";
import { fetchHeaderCard } from "../../util/http";
import { HeaderCard as HeaderCardType } from "../../interfaces/HeaderCard";
import FetchError from "../../classes/FetchError";
import HeaderCard from "../HeaderCard/HeaderCard";

export default function CardSlider() {
  const {
    data: headerCardsData,
    isLoading,
    isError,
    error,
  } = useQuery<HeaderCardType[], FetchError>(
    ["headerCardsData"],
    ({ signal }) => fetchHeaderCard({ signal })
  );

  const [cardIndex, setCardIndex] = useState(0);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !headerCardsData || headerCardsData.length === 0) {
    return <div>Error: {error?.message || "No header cards available"}</div>;
  }

  return (
    <div className="w-full bg-bgLightGrey h-[60vh] relative">
      <div className="w-full h-full flex overflow-hidden">
        {headerCardsData.map((info) => (
          <div
            key={info.id}
            className="card-slider--card w-full min-w-full h-full"
            style={{ translate: `${-100 * cardIndex}%` }}
          >
            <HeaderCard cardInfo={info} />
          </div>
        ))}
      </div>

      <div className="absolute bottom-2 mb-5 left-[50%] translate-x-[-50%] flex gap-3">
        {headerCardsData.map((_, index) => (
          <button
            key={index}
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
