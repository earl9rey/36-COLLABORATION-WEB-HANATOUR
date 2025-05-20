import { useState } from 'react';
import type { FilterOption } from '@/pages/home/types';
import dropDown from '@/shared/assets/icons/dropDown.svg';
import dropUp from '@/shared/assets/icons/dropUp_purple.svg';
import checkedCircle from '@/shared/assets/icons/checkedCircle.svg';
import uncheckedCircle from '@/shared/assets/icons/uncheckedCircle.svg';
import location from '@/shared/assets/icons/location.svg';
import calendar from '@/shared/assets/icons/calendar.svg';
import DestinationModal from './DestinationModal';
import DepartureModal from './DepartureModal';
import CalendarModal from './CalendarModal';
import ModalBase from './ModalBase';

type ModalType = 'destination' | 'departure' | 'calendar' | null;

const SearchBar = () => {
  const [isFilterDrop, setIsFilterDrop] = useState<boolean>(false);
  const [checkedFilters, setCheckedFilters] = useState<Record<FilterOption, boolean>>({
    flight: false,
    group: false,
  });

  const handleClickFilter = (filterOption: FilterOption) => {
    setCheckedFilters((prev) => ({
      ...prev,
      [filterOption]: !prev[filterOption],
    }));
  };

  const handleDropFilter = () => {
    setIsFilterDrop((prev) => !prev);
  };

  const formatDateString = (date: Date): string => {
    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
    return `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date
      .getDate()
      .toString()
      .padStart(2, '0')}(${dayNames[date.getDay()]})`;
  };

  const formatDateISO = (date: Date): string => {
    const tzOffset = date.getTimezoneOffset() * 60000;
    const localISOTime = new Date(date.getTime() - tzOffset).toISOString().slice(0, 19);
    return localISOTime;
  };

  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [selectedArrival, setSelectedArrival] = useState<string | null>(null);
  const [selectedDeparture, setSelectedDeparture] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<{ arriveDate: Date | null; departDate: Date | null }>({
    arriveDate: null,
    departDate: null,
  });

  console.log(
    'API 연동 Date : ',
    selectedDate.arriveDate ? formatDateISO(selectedDate.arriveDate) : '없음',
    selectedDate.departDate ? formatDateISO(selectedDate.departDate) : '없음'
  );
  console.log(
    'UI date : ',
    selectedDate.arriveDate ? formatDateString(selectedDate.arriveDate) : '없음',
    selectedDate.departDate ? formatDateString(selectedDate.departDate) : '없음'
  );

  const closeModal = () => setActiveModal(null);

  const renderModal = () => {
    switch (activeModal) {
      case 'destination': {
        const modalPositionClass = isFilterDrop ? 'left-[3.2rem] top-[34rem]' : 'left-[3.2rem] top-[27rem]';
        return (
          <ModalBase onClose={closeModal} wrapperClassName={modalPositionClass}>
            <DestinationModal
              onClose={closeModal}
              onSelectArrival={(city) => {
                setSelectedArrival(city);
                closeModal();
              }}
            />
          </ModalBase>
        );
      }
      case 'departure': {
        const modalPositionClass = isFilterDrop ? 'left-[38.9rem] top-[25rem]' : 'left-[38.9rem] top-[18.2rem]';
        return (
          <ModalBase onClose={closeModal} wrapperClassName={modalPositionClass}>
            <DepartureModal
              onClose={closeModal}
              onSelectDeparture={(location) => {
                setSelectedDeparture(location);
                closeModal();
              }}
            />
          </ModalBase>
        );
      }
      case 'calendar': {
        const modalPositionClass = isFilterDrop ? 'left-[39rem] top-[34rem]' : 'left-[39rem] top-[27rem]';
        return (
          <ModalBase onClose={closeModal} wrapperClassName={modalPositionClass}>
            <CalendarModal
              onClose={closeModal}
              onSelectDate={(date) => {
                setSelectedDate(date);
                closeModal();
              }}
            />
          </ModalBase>
        );
      }
      default:
        return null;
    }
  };

  return (
    <div className="relative inline-flex w-[121.6rem] flex-col items-start rounded-[0.5px] bg-white p-[0.5rem] shadow-[0_0.25rem_1.25rem_rgba(0,0,0,0.25)]">
      <div className="flex w-full items-center justify-center px-[1.5rem] pt-[3.2rem]">
        <div className="bg-purple100 head4-sb-26 flex w-full items-center justify-center px-[15.5rem] py-[1rem] text-center whitespace-nowrap text-white">
          패키지
        </div>
        <div className="text-gray600 head5-r-26 flex w-full items-center justify-center bg-white px-[15.5rem] py-[1rem] text-center whitespace-nowrap">
          호텔
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-[2.4rem] self-stretch px-[2.4rem] py-[3.2rem]">
        <div className="flex w-full items-center justify-between">
          <div className="text-grey800 flex gap-[0.5rem]">
            <p className="head5-r-26 whitespace-nowrap">고객님,</p>
            <p className="head4-sb-26 whitespace-nowrap">어떤 여행을 꿈꾸시나요?</p>
          </div>
          <div
            onClick={() => handleDropFilter()}
            className="border-purple100 flex cursor-pointer items-center gap-[0.5rem] rounded-[0.5rem] border-[0.15rem] px-[1.7rem] py-[0.5rem]">
            <p className="body2-r-17 text-purple100 whitespace-nowrap">고급 필터</p>
            {isFilterDrop ? <img src={dropUp} alt="드롭 업 아이콘" /> : <img src={dropDown} alt="드롭다운 아이콘" />}
          </div>
        </div>
        {isFilterDrop && (
          <div className="items-[center] flex gap-[1.6rem] pr-[81.4rem]">
            <div
              onClick={() => handleClickFilter('flight')}
              className={`flex cursor-pointer items-center gap-[0.8rem] rounded-[0.5rem] border-[0.15rem] bg-white px-[1.6rem] py-[1.2rem] ${
                checkedFilters.flight ? 'border-purple100 text-purple100' : 'border-gray300 text-gray500'
              }`}>
              {checkedFilters.flight ? (
                <img src={checkedCircle} alt="채워진 체크박스 아이콘" className="aspect-[1/1] h-[1.5rem] w-[1.5rem]" />
              ) : (
                <img src={uncheckedCircle} alt="빈 체크박스 아이콘" className="aspect-[1/1] h-[1.5rem] w-[1.5rem]" />
              )}
              <p className="body7-r-13 w-[9.7rem]">항공권 포함</p>
            </div>
            <div
              onClick={() => handleClickFilter('group')}
              className={`flex cursor-pointer items-center gap-[0.8rem] rounded-[0.5rem] border-[0.15rem] bg-white px-[1.6rem] py-[1.2rem] ${
                checkedFilters.group ? 'border-purple100 text-purple100' : 'border-gray300 text-gray500'
              }`}>
              {checkedFilters.group ? (
                <img src={checkedCircle} alt="채워진 체크박스 아이콘" className="aspect-[1/1] h-[1.5rem] w-[1.5rem]" />
              ) : (
                <img src={uncheckedCircle} alt="빈 체크박스 아이콘" className="aspect-[1/1] h-[1.5rem] w-[1.5rem]" />
              )}{' '}
              <p className="body7-r-13 w-[9.7rem]">단체 여행</p>
            </div>
          </div>
        )}
        <div className="flex items-center gap-[1rem] self-stretch">
          <div
            onClick={() => setActiveModal('destination')}
            className="bg-gray100 flex h-[6.8rem] w-full cursor-pointer items-center gap-[1rem] rounded-[0.5rem] px-[1.6rem] py-[2.1rem]">
            <p className="text-gray600 body1-m-20" onClick={() => setActiveModal('destination')}>
              {selectedArrival ? selectedArrival : '어디로 떠나세요?'}
            </p>
          </div>
          <div
            onClick={() => setActiveModal('departure')}
            className="bg-gray100 flex h-[6.8rem] w-full cursor-pointer items-center gap-[0.8rem] rounded-[0.5rem] px-[1.6rem] py-[2.1rem]">
            <img src={location} alt="위치 아이콘" className="aspect-[1/1] h-[1.5rem] w-[1.5rem]" />
            <p className="text-gray600 body1-m-20">{selectedDeparture ? selectedDeparture : '출발지 전체'}</p>
          </div>
          <div
            onClick={() => setActiveModal('calendar')}
            className="bg-gray100 flex h-[6.8rem] w-full cursor-pointer items-center gap-[0.8rem] rounded-[0.5rem] px-[1.6rem] py-[2.1rem]">
            <img src={calendar} alt="캘린더 아이콘" className="aspect-[1/1] h-[1.5rem] w-[1.5rem]" />
            <p className="text-gray600 body1-m-20">
              {!selectedDate.arriveDate
                ? '여행시작일 선택'
                : !selectedDate.departDate
                  ? formatDateString(selectedDate.arriveDate)
                  : `${formatDateString(selectedDate.arriveDate)} - ${formatDateString(selectedDate.departDate)}`}
            </p>
          </div>
          <div className="bg-gray600 body2-r-17 flex h-[6.8rem] w-[7.8rem] flex-shrink-0 cursor-pointer items-center justify-center gap-[1rem] rounded-[0.5rem] px-[1.5rem] py-[2.3rem] text-center text-white">
            검색
          </div>
        </div>
      </div>
      {activeModal && <div className="fixed z-1 h-full w-full" onClick={closeModal} />}
      {renderModal()}
    </div>
  );
};

export default SearchBar;
