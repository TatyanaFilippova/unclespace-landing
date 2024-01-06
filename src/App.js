import React from "react";
import css from "./App.module.css";
import Banner from "./Banner/Banner";
import Menu from "./Menu/Menu";
import Description from "./Description/Description";
import ProductCards from "./ProductCards/ProductCards";

 
function App() {
  return (
    <div className={css.Wrapper}>
 
      <Banner /> 

      <Menu />
      <Description />
      <ProductCards>

      </ProductCards>

    </div>
  );
}

export default App;
