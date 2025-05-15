import downErrow from '@/shared/assets/downErrow.svg';
import location from '@/shared/assets/location.svg';
import calender from '@/shared/assets/calender.svg';
const SearchHeader = () => {
  return (
    <div className="my-[2.7rem] flex justify-between pr-[9.2rem] pl-[11.4rem]">
      <div className="flex gap-[1.4rem]">
        <span className="head3-sb-30">호놀룰루</span>
        <img src={downErrow} className="w-[1.6rem]" />
      </div>
      <div className="sub5-r-15 flex gap-[1rem]">
        <div className="flex h-[3.9rem] w-[21.7rem] rounded-[0.5rem] border-1 border-gray-300 leading-[3.9rem] text-gray-600">
          <img src={location} className="w-[1.4rem]" />
          인천/김포 출발
        </div>
        <div className="flex h-[3.9rem] w-[25.6rem] rounded-[0.5rem] border-1 border-gray-300 leading-[3.9rem] text-gray-800">
          <img src={calender} className="w-[1.4rem]" />
          2025.06.03(화) ~ 2025.06.09(월)
        </div>
      </div>
    </div>
  );
};
export default SearchHeader;
