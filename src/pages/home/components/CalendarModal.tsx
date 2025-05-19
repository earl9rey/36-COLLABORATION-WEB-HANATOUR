import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '@/shared/styles/react-calendar.css';
import chevronLeftIcon from '@/shared/assets/icons/chevronLeftIcon.svg';
import chevronRightIcon from '@/shared/assets/icons/chevronRightIcon.svg';
import disabledChevIcon from '@/shared/assets/icons/disabledChevIcon.svg';

const CalendarModal = () => {
  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const day = date.getDay();
      const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());

      if (isPast) return 'past-day';
      else if (day === 0 || day === 6) return 'red-day';
      else if (day === 5) return 'black-day';
    }
    return null;
  };
  const today = new Date();
  const [activeStartDate, setActiveStartDate] = useState(new Date());
  const handlePrev = () => {
    const prevDate = new Date(activeStartDate.getFullYear(), activeStartDate.getMonth() - 1, 1);
    setActiveStartDate(prevDate);
  };

  const handleNext = () => {
    const nextDate = new Date(activeStartDate.getFullYear(), activeStartDate.getMonth() + 1, 1);
    setActiveStartDate(nextDate);
  };

  const isPrevDisabled =
    activeStartDate.getFullYear() === today.getFullYear() && activeStartDate.getMonth() === today.getMonth();

  const secondStartDate = new Date(activeStartDate.getFullYear(), activeStartDate.getMonth() + 1, 1);

  return (
    <div className="border-gray800 relative flex w-[70.8rem] flex-col border shadow-[0_0.4rem_2rem_rgba(0,0,0,0.25)]">
      <div className="absolute mt-[4rem] flex w-full justify-between px-[3rem]">
        <button onClick={handlePrev} className="px-2" disabled={isPrevDisabled}>
          {isPrevDisabled ? <img src={disabledChevIcon} /> : <img src={chevronLeftIcon} />}
        </button>
        <button onClick={handleNext} className="px-2">
          <img src={chevronRightIcon} className="h=[0.9rem] w-[0.6rem]" />
        </button>
      </div>
      <div className="flex gap-[3.6rem] px-[2.2rem] pt-[3.2rem] pb-[3rem]">
        <div className="flex-1">
          <Calendar
            calendarType="hebrew"
            tileClassName={tileClassName}
            tileDisabled={({ date }) => date < new Date(today.getFullYear(), today.getMonth(), today.getDate())}
            formatDay={(_locale, date) => date.getDate().toString()}
            activeStartDate={activeStartDate}
            onActiveStartDateChange={() => {}}
          />
        </div>
        <div className="flex-1">
          <Calendar
            calendarType="hebrew"
            tileClassName={tileClassName}
            formatDay={(_locale, date) => date.getDate().toString()}
            activeStartDate={secondStartDate}
            onActiveStartDateChange={() => {}}
          />
        </div>
      </div>
      <div className="bg-gray100 flex h-[11.9rem] w-full items-center justify-between px-[2.8rem] py-[2.5rem]">
        <div className="pb-[1.5rem]">
          <p className="text-gray500 sub5-r-15 mb-[0.9rem]">여행 시작일</p>
          <p className="text-gray600 sub3-sb-15">2002.06.24(월)</p>
        </div>
        <button className="bg-purple100 body2-r-17 h-[4.2rem] w-[11rem] cursor-pointer rounded-[0.5rem] py-[1rem] text-white">
          선택완료
        </button>
      </div>
    </div>
  );
};
export default CalendarModal;
