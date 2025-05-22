interface CircleCardSPropTypes {
  image: string;
  title: string;
  subText: string;
}

const CircleCardS = ({ image, title, subText }: CircleCardSPropTypes) => {
  return (
    <div className="flex h-[24.2rem] w-[18.1rem] flex-col items-center text-center">
      <div className="h-[18.1rem] w-[18.1rem]">
        <img className="h-full w-full rounded-full object-cover" src={image}></img>
      </div>
      <p className="head7-m-17 text-gray800 my-[1.1rem] whitespace-nowrap">{title}</p>
      <p className="body5-r-14 text-gray500 w-[15rem]">{subText}</p>
    </div>
  );
};

export default CircleCardS;
