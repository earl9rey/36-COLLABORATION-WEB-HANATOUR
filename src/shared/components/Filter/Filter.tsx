import { useState } from 'react';

type FilterProps = {
  text: string;
};

const Filter = ({ text }: FilterProps) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      onClick={() => setIsClicked(!isClicked)}
      className={`cursor-pointer rounded-full px-6 py-3 whitespace-nowrap transition-colors duration-300 ${
        isClicked ? 'bg-black text-white' : 'bg-white text-black'
      }`}>
      <p className="sub5-r-15 text-center">{text}</p>
    </button>
  );
};

export default Filter;
