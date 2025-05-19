import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '@/shared/styles/react-calendar.css';

const CalendarModal = () => {
  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const day = date.getDay();
      if (day === 0 || day === 6) return 'red-day'; // 일(0), 토(6)는 빨간색
      if (day === 5) return 'black-day'; // 금(5)은 검정색
    }
    return null;
  };
  return (
    <div className="border-gray800 flex h-[49.1rem] w-[70.8rem] flex-col border shadow-[0_0.4rem_2rem_rgba(0,0,0,0.25)]">
      <div className="flex gap-[3.6rem] px-[2.2rem] pt-[3.2rem] pb-[3rem]">
        <div className="flex-1">
          <Calendar
            calendarType="hebrew"
            tileClassName={tileClassName}
            formatDay={(_locale, date) => date.getDate().toString()}
          />
        </div>
        <div className="flex-1">
          <Calendar
            calendarType="hebrew"
            tileClassName={tileClassName}
            formatDay={(_locale, date) => date.getDate().toString()}
          />
        </div>
      </div>
      <div className="bg-gray100 flex h-[11.9rem] w-full items-center justify-between px-[2.8rem] py-[2.5rem]">
        <div className="pb-[1.5rem]">
          <p className="text-gray500 sub5-r-15 mb-[0.9rem]">여행 시작일</p>
          <p className="text-gray600 sub3-sb-15">2002.06.24(월)</p>
        </div>
        <button className="bg-purple100 body2-r-17 h-[4.2rem] w-[11rem] rounded-[0.5rem] py-[1rem] text-white">
          선택완료
        </button>
      </div>
    </div>
  );
};
export default CalendarModal;
