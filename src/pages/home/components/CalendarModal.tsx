import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '@/shared/styles/react-calendar.css';
import chevronLeftIcon from '@/shared/assets/icons/chevronLeftIcon.svg';
import chevronRightIcon from '@/shared/assets/icons/chevronRightIcon.svg';
import disabledChevIcon from '@/shared/assets/icons/disabledChevIcon.svg';

interface DateRangeTypes {
  arriveDate: Date | null;
  departDate: Date | null;
}

interface CalendarModalPropTypes {
  onClose: () => void;
  onSelectDate: (dates: DateRangeTypes) => void;
}

const LOCAL_STORAGE_KEY = 'calendar-selected-dates';

const CalendarModal = ({ onClose, onSelectDate }: CalendarModalPropTypes) => {
  const today = new Date();

  const [activeStartDate, setActiveStartDate] = useState<Date>(new Date());
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const isPrevDisabled =
    activeStartDate.getFullYear() === today.getFullYear() && activeStartDate.getMonth() === today.getMonth();
  const secondStartDate = new Date(activeStartDate.getFullYear(), activeStartDate.getMonth() + 1, 1);

  const handlePrev = () => {
    const prevDate = new Date(activeStartDate.getFullYear(), activeStartDate.getMonth() - 1, 1);
    setActiveStartDate(prevDate);
  };

  const handleNext = () => {
    const nextDate = new Date(activeStartDate.getFullYear(), activeStartDate.getMonth() + 1, 1);
    setActiveStartDate(nextDate);
  };

  const handleDateClick = (date: Date): void => {
    if ((startDate && isSameDay(date, startDate)) || (endDate && isSameDay(date, endDate))) {
      setStartDate(null);
      setEndDate(null);
      return;
    }

    if (startDate && endDate) {
      setStartDate(date);
      setEndDate(null);
      saveDatesToLocalStorage(date, null);
      return;
    }

    if (startDate && !endDate) {
      if (date < startDate) {
        setStartDate(date);
        setEndDate(startDate);
        saveDatesToLocalStorage(date, startDate);
      } else {
        setEndDate(date);
        saveDatesToLocalStorage(startDate, date);
      }
      return;
    }

    setStartDate(date);
    saveDatesToLocalStorage(date, null);
  };

  const isSameDay = (d1: Date, d2: Date) =>
    d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();

  const isInRange = (date: Date) => {
    if (!startDate || !endDate) return false;
    return date > startDate && date < endDate;
  };

  const isStart = (date: Date) => startDate !== null && isSameDay(date, startDate);
  const isEnd = (date: Date) => endDate !== null && isSameDay(date, endDate);

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view !== 'month') return null;

    const day = date.getDay();
    const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const isToday = isSameDay(date, today);

    const classes: string[] = [];

    if (isStart(date)) classes.push('range-start');
    if (isEnd(date)) classes.push('range-end');
    if (startDate && endDate) {
      if (isStart(date)) classes.push('bg');
      if (isEnd(date)) classes.push('bg');
    }
    if (isInRange(date)) classes.push('range-middle');

    if (isToday) classes.push('today-day');
    if (isPast) classes.push('past-day');

    if (day === 0 || day === 6) classes.push('red-day');
    else classes.push('black-day');

    return classes.length > 0 ? classes.join(' ') : null;
  };

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view !== 'month') return null;

    return <div className="selected-tile">{date.getDate()}</div>;
  };

  const formatDate = (date: Date): string => {
    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
    return `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date
      .getDate()
      .toString()
      .padStart(2, '0')}(${dayNames[date.getDay()]})`;
  };

  const handleSelectEntireMonth = (date: Date) => {
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const isCurrentMonth = date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth();

    const adjustedStart = isCurrentMonth ? today : startOfMonth;

    setStartDate(adjustedStart);
    setEndDate(endOfMonth);
  };

  const handleConfirm = () => {
    if (!startDate) return;

    onSelectDate({
      arriveDate: startDate,
      departDate: endDate ?? null,
    });

    onClose();
  };

  const saveDatesToLocalStorage = (start: Date | null, end: Date | null) => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify({
        startDate: start ? start.toISOString() : null,
        endDate: end ? end.toISOString() : null,
      })
    );
  };

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.startDate) setStartDate(new Date(parsed.startDate));
        if (parsed.endDate) setEndDate(new Date(parsed.endDate));
      } catch (e) {
        console.error('날짜 저장 실패:', e);
      }
    }
  }, []);

  return (
    <div className="border-gray800 relative flex w-[70.8rem] flex-col border bg-white shadow-[0_0.4rem_2rem_rgba(0,0,0,0.25)]">
      <div className="mt-[3.2rem] flex items-center justify-between px-[3.5rem]">
        <button onClick={handlePrev} disabled={isPrevDisabled} className="cursor-pointer">
          <img src={isPrevDisabled ? disabledChevIcon : chevronLeftIcon} />
        </button>
        <div className="flex gap-[17rem]">
          <div className="flex w-[17rem] items-center justify-end gap-[0.7rem]">
            <span className="text-gray800 body1-m-20 text-right whitespace-nowrap">
              {activeStartDate.getFullYear()}년 {activeStartDate.getMonth() + 1}월
            </span>
            <button
              onClick={() => handleSelectEntireMonth(activeStartDate)}
              className="body7-r-13 text-gray500 border-gray500 cursor-pointer rounded-[0.5rem] border px-[1rem] py-[0.5rem] whitespace-nowrap">
              월 전체
            </button>
          </div>
          <div className="flex w-[17rem] items-center justify-end gap-[0.7rem]">
            <span className="text-gray800 body1-m-20 text-right whitespace-nowrap">
              {secondStartDate.getFullYear()}년 {secondStartDate.getMonth() + 1}월
            </span>
            <button
              onClick={() => handleSelectEntireMonth(secondStartDate)}
              className="body7-r-13 text-gray500 border-gray500 cursor-pointer rounded-[0.5rem] border px-[1rem] py-[0.5rem] whitespace-nowrap">
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
            tileContent={tileContent}
            tileDisabled={({ date }: { date: Date }): boolean =>
              date < new Date(today.getFullYear(), today.getMonth(), today.getDate())
            }
            formatDay={() => ''}
            activeStartDate={activeStartDate}
            onClickDay={handleDateClick}
          />
        </div>
        <div className="flex-1">
          <Calendar
            calendarType="hebrew"
            tileClassName={tileClassName}
            tileContent={tileContent}
            formatDay={() => ''}
            activeStartDate={secondStartDate}
            onClickDay={handleDateClick}
          />
        </div>
      </div>
      <div className="bg-gray100 flex h-[11.9rem] w-full items-center justify-between px-[2.8rem] py-[2.5rem]">
        <div className="pb-[1.5rem]">
          <p className="text-gray500 sub5-r-15 mb-[0.9rem]">여행 시작일</p>
          <p className="text-gray600 sub3-sb-15">
            {startDate && endDate
              ? `${formatDate(startDate)} - ${formatDate(endDate)}`
              : startDate
                ? formatDate(startDate)
                : '캘린더에서 여행 시작일을 선택해주세요'}
          </p>
        </div>
        <button
          onClick={handleConfirm}
          className={`body2-r-17 h-[4.2rem] w-[11rem] cursor-pointer rounded-[0.5rem] py-[1rem] text-white ${startDate ? 'bg-purple100' : 'bg-gray300'}`}>
          선택완료
        </button>
      </div>
    </div>
  );
};

export default CalendarModal;
