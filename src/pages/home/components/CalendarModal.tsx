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
      const isToday =
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate();

      if (isToday) return 'today-day';
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
      <div className="mt-[3.2rem] flex items-center justify-between px-[3.5rem]">
        <button onClick={handlePrev} disabled={isPrevDisabled} className="cursor-pointer">
          <img src={isPrevDisabled ? disabledChevIcon : chevronLeftIcon} />
        </button>
        <div className="flex gap-[17rem]">
          <div className="flex w-[17rem] items-center justify-end gap-[0.7rem]">
            <span className="text-gray800 body1-m-20 text-right whitespace-nowrap">
              {activeStartDate.getFullYear()}년 {activeStartDate.getMonth() + 1}월
            </span>
            <button className="body7-r-13 text-gray500 border-gray500 cursor-pointer rounded-[0.5rem] border px-[1rem] py-[0.5rem] whitespace-nowrap">
              월 전체
            </button>
          </div>
          <div className="flex w-[17rem] items-center justify-end gap-[0.7rem]">
            <span className="text-gray800 body1-m-20 text-right whitespace-nowrap">
              {secondStartDate.getFullYear()}년 {secondStartDate.getMonth() + 1}월
            </span>
            <button className="body7-r-13 text-gray500 border-gray500 cursor-pointer rounded-[0.5rem] border px-[1rem] py-[0.5rem] whitespace-nowrap">
              월 전체
            </button>
          </div>
        </div>
        <button onClick={handleNext} className="cursor-pointer">
          <img src={chevronRightIcon} />
        </button>
      </div>
      <div className="flex gap-[3.6rem] px-[2.2rem] pt-[3rem] pb-[3rem]">
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
