import calendar from '@/shared/assets/icons/calender.svg';
import downErrow from '@/shared/assets/icons/downErrow.svg';
import location from '@/shared/assets/icons/location.svg';
import Divider from '@/shared/components/Divider/Divider';

interface SearchHeaderPropsTypes {
  arrival: string;
  departure: string;
  date: string;
}

const SearchHeader = ({ arrival, departure, date }: SearchHeaderPropsTypes) => {
  return (
    <div className="mx-auto my-[2.7rem] flex max-w-[119.2rem] flex-col items-center justify-center">
      <div className="my-[1.8rem] flex w-full justify-between">
        <div className="flex items-center gap-[1.4rem]">
          <span className="head3-sb-30">{arrival}</span>
          <img src={downErrow} alt="downErrowIcon" className="w-[1.6rem]" />
        </div>
        <div className="sub5-r-15 flex gap-[1rem]">
          <div className="border-gray300 flex w-[21.7rem] gap-[0.7rem] rounded-[0.5rem] border-1 px-[1.4rem] py-[1.5rem] text-gray-600">
            <img src={location} alt="locationIcon" className="w-[1.4rem]" />
            {departure} 출발
          </div>
          <div className="border-gray300 flex gap-[0.7rem] rounded-[0.5rem] border-1 px-[1.4rem] py-[1.5rem] text-gray-800">
            <img src={calendar} alt="calendarIcon" className="w-[1.4rem]" />
            {date}
          </div>
        </div>
      </div>
      <Divider direction="horizontal" color="black" thickness="2px" length="100%" />
    </div>
  );
};
export default SearchHeader;
