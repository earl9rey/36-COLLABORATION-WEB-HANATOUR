import location from '@/shared/assets/icons/location.svg';

const departureLocations = ['인천/김포', '부산', '대구', '청주', '제주', '양양'] as const;

const DepartureModal = () => {
  const handleClicklocation = (location: string) => {
    console.log('출발지 선택', location);
  };

  return (
    <div className="border-purple100 w-[34.2rem] overflow-hidden rounded-[0.5rem] border shadow-[0_0.25rem_1.25rem_rgba(0,0,0,0.25)]">
      <div className="flex items-center gap-[0.8rem] px-[1.6rem] py-[2.1rem]">
        <img src={location} alt="위치 아이콘" className="text-gray600 h-[1.6rem] w-[1.6rem]" />
        <span className="body2-r-17">출발지 전체</span>
      </div>
      <div>
        <div
          onClick={() => handleClicklocation('전체')}
          className="body2-r-17 bg-gray300 flex cursor-pointer items-center px-[3.2rem] py-[0.8rem] text-black">
          전체
        </div>
        {departureLocations.map((loc) => (
          <div
            key={loc}
            onClick={() => handleClicklocation(loc)}
            className="body2-r-17 hover:bg-gray100 flex cursor-pointer items-center bg-white px-[3.2rem] py-[0.8rem] text-black">
            {loc}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartureModal;
