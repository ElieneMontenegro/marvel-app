import React, { useEffect, useState } from "react";
import "../assets/styles/InfoPage.css";
import BigCard from "./BigCardChars";
import Card from "./Card";

import { characters as cards } from "../utils/info";

import rightArrow from "../assets/images/arrow.png";
import { PopupInfo } from "../interfaces";

export default () => {
  const [count, setCount] = useState(0);
  const [popup, setPopup] = useState(false);
  const [popupInfo, setPopupInfo] = useState({});

  const showPopup = (item: PopupInfo) => {
    setPopupInfo(item);
    setPopup(true);
  };

  return (
    <div className="chars">
      {cards.length > count + 1 && (
        <button className="right-scroll" onClick={() => setCount(count + 1)}>
          <img src={rightArrow} alt="button-to-scroll-right" />
        </button>
      )}
      {popup && (
        <BigCard
          popupInfo={popupInfo}
          setPopup={setPopup}
          className="big-card"
        />
      )}
      <div className="image-scroller">
        {cards
          .map((item) => (
            <Card
              onClick={() => showPopup(item)}
              image={item.image}
              title={item.title}
              description={item.description}
              className="card"
            />
          ))
          .slice(count, count + 3)}
      </div>
    </div>
  );
};
