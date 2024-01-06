import React from "react";
import css from "./Menu.module.css";
import Wrapper from "../Wrapper/Wrapper";

function Menu() {
  return (
    <Wrapper>
      <div className={css.Menu}>

          
        <div>услуги</div>
        <div>процесс</div>
        <div>цены</div>
        <div>порфолио</div>
        <div>команда</div>
      </div>
      <hr />
    </Wrapper>
  );
}

export default Menu;
