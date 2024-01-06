import React from "react";
import Card from "../Card/Card";
import image1 from "../aseets/image 1.png";
import image2 from "../aseets/image 2.png";
import image3 from "../aseets/image 3.png";
import css from "../ProductCards/ProductCards.module.css";

function ProductCards () {
  return (
    <div className={css.Card}>
      <Card
        image={image1}
        text={"Гарантия стабильной работы"}
      />

      <Card
        image={image2}
        text={"Тщательная отладка работы"}
      />
      <Card
        image={image3}
        text={"Удобство для пользователей"}
      />
    </div>
  );
}

export default ProductCards;
