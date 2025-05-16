type TravelCard1Props = {
  image: string;
  hashTag: string;
  title: string;
  subText: string;
  priceNum: string;
  feature1: string;
  feature2: string;
};

const Card1 = ({ image, hashTag, title, subText, priceNum, feature1, feature2 }: TravelCard1Props) => {
  return (
    <div className="h-[36.6rem] w-[26.9rem]">
      <img src={image} alt={title} className="h-[20.1rem] w-[26.9rem]"></img>
      <div className="mt-[1.5rem]">
        {/* 해시태그 */}
        <p className="text-blue200 body7-r-13">#{hashTag}</p>
        {/* 제목 */}
        <h1 className="text-gray800 head7-m-17 my-[0.7rem]">{title}</h1>
        {/* 서브텍스트 */}
        <p className="text-gray600 body5-r-14">#{subText}</p>
        <div className="mt-[1.5rem] flex flex-row items-center">
          {/* 가격 숫자*/}
          <p className="text-gray800 head6-sb-22">{priceNum}</p>
          {/* 가격 원 */}
          <p className="text-gray800 body2-r-17">원</p>
        </div>
        {/* 특징 */}
        <div className="mt-[1.2rem] flex flex-row">
          <div className="border-gray500 border-0.1 mr-[0.9rem] border p-[0.7rem]">
            <p className="text-gray500">{feature1}</p>
          </div>
          <div className="border-gray500 border-0.1 border p-[0.7rem]">
            <p className="text-gray500">{feature2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
