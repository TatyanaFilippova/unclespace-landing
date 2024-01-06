import React from 'react';
import css from './Description.module.css';
import Wrapper from '../Wrapper/Wrapper';

function Description() {
  return (
    <Wrapper>
      <h1 className={css.Title}>Мы пишем современные цифровые продукты</h1>
      <div className={css.Border} />
      {/* eslint-disable-next-line max-len */}
      <div className={css.Text}>Мы уже более 10 лет на рынке. Следим за всеми последними трендами и решениями.</div>
      <div className={css.Text}>
        Каждый наш проект - результат тщательного изучения рынка, применение самых
        {' '}
      </div>
      <div className={css.Text}>
        передовых технологий, работа высококлассных специалистов
        {' '}
      </div>
    </Wrapper>
  );
}

export default Description;
