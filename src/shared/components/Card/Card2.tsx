const Card2 = () => {
  return (
    <div className="h-[40.7rem] w-[26.8rem]">
      <img
        className="h-[20rem] w-[26.8rem]"
        src="https://travel.rakuten.com/contents/sites/contents/files/styles/max_1300x1300/public/2023-07/best-japan-itineraries_9.jpg?itok=o6BpF6X9"
        alt="관광지 사진1"></img>
      <div className="px-[2rem] pt-[1.3rem] pb-[7.5rem]">
        {/* 패키지 */}
        <p className="text-blue200 body7-r-13">패키지</p>
        {/* 타이틀 */}
        <p className="text-gray800 head7-m-17 mt-[0.7rem]">타이틀</p>
        {/* 해시태그 */}
        <p className="text-gray600 body5-r-14 mt-[1.2rem] mb-[1.4rem]">#해시태그</p>
        <div className="flex flex-row items-center">
          {/* 가격 숫자*/}
          <p className="text-gray800 head6-sb-22">123,456</p>
          {/* 가격 숫자*/}
          <p className="text-gray800 body2-r-17">원</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
