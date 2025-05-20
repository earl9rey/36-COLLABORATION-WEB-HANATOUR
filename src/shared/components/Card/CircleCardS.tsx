interface CircleCardSPropTypes {
  image: string;
  title: string;
  subText: string;
}

const CircleCardS = ({ image, title, subText }: CircleCardSPropTypes) => {
  return (
    <div className="flex h-[24.2rem] w-[18.1rem] flex-col items-center">
      {/* 이미지와 추천 뱃지를 감싸는 박스 */}
      <div className="h-[18.1rem] w-[18.1rem]">
        <img className="h-full w-full rounded-full object-cover" src={image}></img>
      </div>
      <p className="head4-sb-26 text-gray800 my-[1.1rem]">{title}</p>
      <p className="body5-r-14 text-gray500">{subText}</p>
    </div>
  );
};

export default CircleCardS;
