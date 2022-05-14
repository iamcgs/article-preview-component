import React from 'react';
import CardImg from './CardImg';
import CardInfo from './CardInfo';

function Card({ handleClick }) {
  return (
    <div className=" mx-auto mt-4 flex h-[510px] w-[325px] flex-col overflow-hidden rounded-lg drop-shadow-2xl md:h-[280px] md:w-[630px] md:flex-row lg:w-[730px]">
      <section>
        <CardImg />
      </section>
      <section>
        <CardInfo handleClick={handleClick} />
      </section>
    </div>
  );
}
export default Card;
