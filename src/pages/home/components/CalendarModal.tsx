import Calendar from 'react-calendar';

const CalendarModal = () => {
  return (
    <div className="border-gray800 flex h-[49.1rem] w-[70.8rem] flex-col border shadow-[0_0.4rem_2rem_rgba(0,0,0,0.25)]">
      <div className="flex gap-[3.6rem] px-[2.2rem] pt-[3.2rem] pb-[3rem]">
        <div className="flex-1">
          <Calendar />
        </div>
        <div className="flex-1">
          <Calendar />
        </div>
      </div>
      <div className="bg-gray100 flex h-[11.2rem] w-full items-center justify-between px-[2.8rem] py-[2.5rem]">
        <div className="pb-[1.5rem]">
          <p className="text-gray400 sub5-r-15 mb-[0.9rem]">여행 시작일</p>
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
