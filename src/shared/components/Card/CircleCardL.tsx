interface CircleCardLPropTypes {
  image: string;
  title: string;
  subText: string;
  hashTag: string;
}

const CircleCardL = ({ image, title, subText, hashTag }: CircleCardLPropTypes) => {
  return (
    <div className="relative flex h-[38.1rem] w-[29rem] flex-col items-center">
      {/* 이미지와 추천 뱃지를 감싸는 박스 */}
      <div className="h-[29rem] w-[29rem]">
        <img className="h-full w-full rounded-full object-cover" src={image} alt={title}></img>
        {/* 추천뱃지 */}
        <div className="bg-purple100 absolute top-[1.9rem] left-[21.7rem] h-[4.9rem] w-[4.9rem] rounded-full">
          <p className="sub6-r-12 absolute px-[1.4rem] py-[1.6rem] text-white">추천</p>
        </div>
      </div>
      <p className="head4-sb-26 text-gray800 mt-[0.8rem]">{title}</p>
      <p className="body5-r-14 text-gray500 mt-[0.8rem]">{subText}</p>
      <p className="body5-r-14 text-gray500">#{hashTag}</p>
    </div>
  );
};

export default CircleCardL;
