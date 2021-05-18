import React from "react";
import { MouseEventHandler } from "react";
import "./Card.css";

type CardInformation = {
  onClick: MouseEventHandler;
  image: any;
  title: string;
  description: string;
};

const Card = (info: CardInformation) => (
  <div className="card" onClick={info.onClick}>
    <img src={info.image} alt="character" />
    <div className="text">
      <span className="title">{info.title}</span>
      <p>{info.description}</p>
      <span className="check-details">ver detalhes</span>
    </div>
  </div>
);

export default Card;
