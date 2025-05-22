interface RectCardFoodPropTypes {
  image: string;
  title: string;
  hashTag1: string | null;
  hashTag2: string | null;
  hashTag3: string | null;
  price: number;
}

const RectCardFood = ({ image, title, hashTag1, hashTag2, hashTag3, price }: RectCardFoodPropTypes) => {
  return (
    <div className="h-full w-[26.8rem] shadow-[0_0.25rem_1.25rem_rgba(0,0,0,0.25)]">
      <img className="h-[20rem] w-[26.8rem]" src={image} alt={title}></img>
      <div className="bg-white px-[2rem] pt-[1.3rem] pb-[7.5rem]">
        <p className="text-gray800 head7-m-17 mt-[0.7rem]">{title}</p>
        <div className="flex gap-[0.3rem] bg-white">
          {hashTag1 && <p className="text-gray600 body5-r-14 mt-[1.2rem] mb-[1.4rem]">#{hashTag1}</p>}
          {hashTag2 && <p className="text-gray600 body5-r-14 mt-[1.2rem] mb-[1.4rem]">#{hashTag2}</p>}
          {hashTag3 && <p className="text-gray600 body5-r-14 mt-[1.2rem] mb-[1.4rem]">#{hashTag3}</p>}
        </div>
        <div className="flex flex-row items-center bg-white">
          <p className="text-gray800 head6-sb-22">{price}</p>
          <p className="text-gray800 body2-r-17">원 ~</p>
        </div>
      </div>
    </div>
  );
};

export default RectCardFood;
