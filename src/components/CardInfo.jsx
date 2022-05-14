import React from 'react';
import Michelle from '../images/avatar-michelle.jpg';

function CardInfo({ handleClick }) {
  return (
    <div className="flex h-[310px] w-full flex-col  bg-white px-8 pt-6 pb-4 md:h-[280px] md:w-[380px] md:px-10 lg:w-[445px]">
      <h1 className="py-2 text-base font-extrabold text-veryDarkGrayishBlue md:text-lg lg:text-xl">
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </h1>
      <p className="py-2 text-[0.785rem] leading-relaxed tracking-wide text-desaturatedDarkBlue md:py-0 lg:py-1">
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I’ve got some simple tips to help you make
        any room feel complete.
      </p>
      <div className="flex items-center gap-4 py-3">
        <img
          src={Michelle}
          className="h-12 rounded-full"
          alt="Michelle Appleton"
        />
        <p>
          <span className="text-sm font-bold text-desaturatedDarkBlue">
            Michelle Appleton
          </span>
          <br />
          <span className="text-sm text-grayishBlue">28 Jun 2020</span>
        </p>

        <div
          className="ml-auto cursor-pointer rounded-full bg-lightGrayishBlue p-3"
          onClick={handleClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
            <path
              fill="#6E8098"
              d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
