import { useState } from 'react';

interface FilterPropTypes {
  text: string;
  country: string;
  onClick: (country: string) => void;
  selected: string | null;
}

const Filter = ({ text, country, onClick, selected }: FilterPropTypes) => {
  const isClicked = selected === country;

  return (
    <button
      onClick={() => onClick(country)}
      className={`w-auto cursor-pointer rounded-full px-6 py-3 whitespace-nowrap transition-colors duration-300 ${
        isClicked ? 'bg-black text-white' : 'bg-white text-black'
      }`}>
      <p className="sub5-r-15">{text}</p>
    </button>
  );
};

export default Filter;
