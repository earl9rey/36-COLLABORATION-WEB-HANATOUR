const Card1 = () => {
  return (
    <div className="h-[12.6rem] w-[16.81rem]">
      <img
        src="https://image1.lottetour.com/static/trvtour/201910/1715/011ee82200cbf4f301c382e19f44b28e"
        alt="여행사진"
        className="h-[12.6rem] w-[16.81rem]"></img>
      <div className="mt-[0.94rem]">
        {/* 해시태그 */}
        <p className="text-blue200 body7-r-13">#태그</p>
        {/* 제목 */}
        <h1 className="head7-m-17 mt-[0.44rem]">제목</h1>
        {/* 서브텍스트 */}
        <p className="body5-r-14 mt-[0.44rem]">#서브텍스트</p>
        <div className="mt-[0.94rem] flex flex-row items-center">
          {/* 가격 숫자*/}
          <p className="head6-sb-22">121322</p>
          {/* 가격 원 */}
          <p className="body2-r-17">원</p>
        </div>
        {/* 특징 */}
        <div className="mt-[0.75rem] flex flex-row">
          <div className="border-gray500 border-0.1 mr-[0.56rem] border p-[0.44rem]">
            <p className="text-gray500">텍스트</p>
          </div>
          <div className="border-gray500 border-0.1 border p-[0.44rem]">
            <p className="text-gray500">텍스트</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
