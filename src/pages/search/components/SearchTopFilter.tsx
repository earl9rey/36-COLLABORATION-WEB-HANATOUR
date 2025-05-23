import filter from '@/shared/assets/icons/filter.svg';
import reset from '@/shared/assets/icons/reset.svg';

const SearchTopFilter = ({
  selectedFilters,
  onReset,
}: {
  selectedFilters: {
    selectedPeriod: string;
    selectedPackageType: string[];
    selectedTourCondition: string[];
    selectedHotelGrade: string[];
    selectedAirline: string[];
    selectedDepartureTime: string[];
    selectedDepartureDays: string[];
    selectedWhoWithTravel: string[];
  };
  onReset: () => void;
}) => {
  const {
    selectedPeriod,
    selectedPackageType,
    selectedTourCondition,
    selectedHotelGrade,
    selectedAirline,
    selectedDepartureTime,
    selectedDepartureDays,
    selectedWhoWithTravel,
  } = selectedFilters;

  const tags = [
    selectedPeriod && `${selectedPeriod}`,
    ...selectedPackageType,
    ...selectedTourCondition,
    ...selectedHotelGrade,
    ...selectedAirline,
    ...selectedDepartureTime,
    ...selectedDepartureDays,
    ...selectedWhoWithTravel,
  ].filter(Boolean);

  return (
    <div>
      <div className="sub1-sb-20 bg-purple100 mb-[2rem] p-[1rem] text-center text-white">
        미국 : 여행 전 입국 규정을 확인해 주세요
      </div>
      <div className="flex gap-[1.8rem]">
        <div className="flex items-center gap-[1.2rem] self-start">
          <img src={filter} alt="filterIcon" className="h-[3.6rem] w-[3.6rem]" />
          <div className="flex items-center gap-[0.6rem]">
            <p className="sub2-sb-17 whitespace-nowrap">필터</p>
            <div className="body5-r-14 bg-purple100 flex h-[1.8rem] w-[1.8rem] items-center justify-center rounded-full px-[0.3rem] py-[0.1rem] text-white">
              {tags.length}
            </div>
          </div>
        </div>

        <div className="flex w-[72.6rem] flex-wrap gap-x-[0.3rem] gap-y-[0.6rem]">
          {tags.map((tag, idx) => (
            <div
              key={idx}
              className="text-gray600 body6-m-13 bg-coolgray100 rounded-[0.5rem] px-[0.9rem] py-[0.7rem] leading-[2.1rem]">
              {tag}
            </div>
          ))}
          {tags.length > 0 && (
            <button
              onClick={onReset}
              className="body6-m-13 text-gray500 border-gray600 ml-[0.4rem] flex items-center gap-[0.5rem] rounded-[0.5rem] border-1 px-[0.9rem] py-[0.7rem]">
              <img src={reset} alt="resetIcon" />
              필터초기화
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchTopFilter;
