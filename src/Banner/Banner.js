import React from 'react';
import css from './Banner.module.css';
import Wrapper from '../Wrapper/Wrapper';

function Banner() {
  return (
    <div className={css.Banner}>
      <div>
        <Wrapper>
          <h1 className={css.h1}>UncleSpace</h1>
          <div className={css.text}>Начните свой бизнес</div>
        </Wrapper>

      </div>
    </div>
  );
}

export default Banner;
