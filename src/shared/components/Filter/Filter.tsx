import { useState } from 'react';

interface FilterPropTypes {
  text: string;
}

const Filter = ({ text }: FilterPropTypes) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      onClick={() => setIsClicked((prev) => !prev)}
      className={`cursor-pointer rounded-full px-6 py-3 whitespace-nowrap transition-colors duration-300 ${
        isClicked ? 'bg-black text-white' : 'bg-white text-black'
      }`}>
      <p className="sub5-r-15 text-center">{text}</p>
    </button>
  );
};

export default Filter;
