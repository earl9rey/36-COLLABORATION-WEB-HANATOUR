interface RectCardFoodPropTypes {
  image: string;
  packageName: string;
  title: string;
  hashTag: string;
  price: string;
}

const RectCardFood = ({ image, packageName, title, hashTag, price }: RectCardFoodPropTypes) => {
  return (
    <div className="h-[40.7rem] w-[26.8rem]">
      <img className="h-[20rem] w-[26.8rem]" src={image} alt={title}></img>
      <div className="px-[2rem] pt-[1.3rem] pb-[7.5rem]">
        {/* 패키지 */}
        <p className="text-blue200 body7-r-13">{packageName}</p>
        {/* 타이틀 */}
        <p className="text-gray800 head7-m-17 mt-[0.7rem]">{title}</p>
        {/* 해시태그 */}
        <p className="text-gray600 body5-r-14 mt-[1.2rem] mb-[1.4rem]">#{hashTag}</p>
        <div className="flex flex-row items-center">
          {/* 가격 숫자*/}
          <p className="text-gray800 head6-sb-22">{price}</p>
          {/* 가격 숫자*/}
          <p className="text-gray800 body2-r-17">원</p>
        </div>
      </div>
    </div>
  );
};

export default RectCardFood;
