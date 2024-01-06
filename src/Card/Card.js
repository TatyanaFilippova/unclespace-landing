import React from "react";
import css from "./Card.module.css";
 

function Card({image, text}) {
  return (
    <div>
      <img className={css.img} src={image}/>
      <div className={css.text}>{text}</div>
    </div>
  );
}

export default Card;
