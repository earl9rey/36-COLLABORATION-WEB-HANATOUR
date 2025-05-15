const Card3 = () => {
  return (
    <div className="h-[32.9rem] w-[26.9rem]">
      <img
        src="https://flexible.img.hani.co.kr/flexible/normal/700/466/imgdb/original/2021/0603/20210603504045.jpg"
        alt="예시 이미지"></img>
      <div className="mt-[2.8rem]">
        <p className="text-blue200 body7-r-13">패키지</p>
        <p className="head7-m-17 my-[0.5rem]">타이틀</p>
        <div className="flex flex-row items-center">
          <p className="text-gray800 head6-sb-22">123,456</p>
          <p className="text-gray800 body2-r-17">원</p>
        </div>
      </div>
    </div>
  );
};

export default Card3;
