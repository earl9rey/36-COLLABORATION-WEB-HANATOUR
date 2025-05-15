const Card4 = () => {
  return (
    <div className="flex h-[9.8rem] w-[30.4rem] flex-row">
      <img
        className="h-[9.8rem] w-[9.7rem] object-cover"
        src="https://www.casenews.co.kr/news/photo/202408/16250_35442_5945.jpg"
        alt="여행사진"></img>
      <div className="ml-[1.9rem]">
        <p className="body3-sb-15 text-gray800 mt-[0.3rem]">#타이틀</p>
        <p className="body5-r-14 text-gray500 mt-[0.5rem]">나라이름</p>
        <div className="mt-[1.1rem] mb-[2.3rem] flex flex-row items-center">
          <p className="body3-sb-15 text-gray800">123,456</p>
          <p className="body7-r-13 text-gray800">원~</p>
        </div>
      </div>
    </div>
  );
};

export default Card4;
