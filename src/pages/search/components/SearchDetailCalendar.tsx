import arrowLeftSmallIcon from '@/shared/assets/icons/arrowLeft_small.svg';
import arrowRightSmallIcon from '@/shared/assets/icons/arrowRight_small.svg';
import { useState } from 'react';

const calendarData = [
  { day: '일', date: 1, price: null },
  { day: '월', date: 2, price: null },
  { day: '화', date: 3, price: '1,650만' },
  { day: '수', date: 4, price: '1,650만' },
  { day: '목', date: 5, price: '1,650만' },
  { day: '금', date: 6, price: '1,650만' },
  { day: '토', date: 7, price: '1,650만' },
  { day: '일', date: 8, price: '1,650만' },
  { day: '월', date: 9, price: '1,650만' },
  { day: '화', date: 10, price: '1,650만' },
  { day: '수', date: 11, price: '1,650만' },
  { day: '목', date: 12, price: '1,650만' },
  { day: '금', date: 13, price: '1,650만' },
  { day: '토', date: 14, price: '1,650만' },
  { day: '일', date: 15, price: '1,650만' },
  { day: '월', date: 16, price: '1,650만' },
];

const SearchDetailCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(3);

  return (
    <div className="border-gray300 flex border-1 bg-white px-[2.3rem] py-[0.8rem]">
      <img src={arrowLeftSmallIcon} className="pt-[3rem]" />
      {calendarData.map((item, idx) => (
        <div
          key={idx}
          onClick={() => setSelectedDate(item.date)}
          className="relative flex w-[60px] flex-col items-center">
          <div className={`body4-sb-14 ${item.day === '토' || item.day === '일' ? 'text-red100' : 'text-gray500'}`}>
            {item.day}
          </div>

          <div
            className={`body4-sb-14 mt-[1.6rem] flex h-[4rem] w-[4rem] cursor-pointer items-center justify-center rounded-full ${selectedDate === item.date ? 'bg-purple100 text-white' : ''}`}>
            {item.date}
          </div>

          <div className="text-gray500 sub6-r-12 text-center leading-tight">
            {item.price ? (
              <>
                <span
                  className={`${selectedDate === item.date ? 'text-red100' : ''} "text-gray500 text-red100' : '' text-[10px]`}>
                  최저가
                </span>
                <br />
                <span className={selectedDate === item.date ? 'text-red100' : ''}>{item.price}</span>
              </>
            ) : (
              <>-</>
            )}
          </div>
        </div>
      ))}
      <img src={arrowRightSmallIcon} className="pt-[3rem]" />
    </div>
  );
};
export default SearchDetailCalendar;
