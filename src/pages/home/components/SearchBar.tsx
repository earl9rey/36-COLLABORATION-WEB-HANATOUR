import { useState } from 'react';
import type { FilterOption } from '@/pages/home/types';
import dropDown from '@/shared/assets/icons/dropDown.svg';
import dropUp from '@/shared/assets/icons/dropUp.svg';
import checkedCircle from '@/shared/assets/icons/checkedCircle.svg';
import uncheckedCircle from '@/shared/assets/icons/uncheckedCircle.svg';
import location from '@/shared/assets/icons/location.svg';
import calendar from '@/shared/assets/icons/calendar.svg';

const SearchBar = () => {
  const [isFilterDrop, setIsFilterDrop] = useState<boolean>(false);
  const [isCheckedFlightFilter, setIsCheckedFlightFilter] = useState<boolean>(false);
  const [isCheckedGroupFilter, setIsCheckedGroupFilter] = useState<boolean>(false);

  const handleClickFilter = (filterOption: FilterOption) => {
    if (filterOption === 'flight') {
      setIsCheckedFlightFilter(!isCheckedFlightFilter);
    } else if (filterOption === 'group') {
      setIsCheckedGroupFilter(!isCheckedGroupFilter);
    }
  };

  const handleDropFilter = () => {
    setIsFilterDrop(!isFilterDrop);
  };

  return (
    <div className="w-[121.6rem] inline-flex p-[0.5rem] flex-col items-start rounded-[0.5px] bg-white shadow-[0_0.25rem_1.25rem_rgba(0,0,0,0.25)]">
      <div className="w-full flex pt-[2rem] px-[1.5rem] justify-center items-center">
        <div className="w-full flex px-[15.5rem] py-[1rem] justify-center items-center bg-purple100 text-white text-center whitespace-nowrap head4-sb-26">
          패키지
        </div>
        <div className="w-full flex px-[15.5rem] py-[1rem] justify-center items-center bg-white text-gray600 text-center whitespace-nowrap head5-r-26">
          호텔
        </div>
      </div>
      <div className="w-full flex px-[2rem] py-[1.5rem] flex-col items-start gap-[1.5rem] self-stretch">
        <div className="w-full flex items-center justify-between">
          <div className="flex text-grey800 gap-[0.5rem]">
            <p className="head5-r-26 whitespace-nowrap">고객님,</p>
            <p className="head4-sb-26 whitespace-nowrap">어떤 여행을 꿈꾸시나요?</p>
          </div>
          <div
            onClick={() => handleDropFilter()}
            className="flex px-[1.7rem] py-[0.5rem] items-center gap-[0.5rem] rounded-[0.5rem] border-[0.15rem] border-purple100 cursor-pointer">
            <p className="body2-r-17 text-purple100 whitespace-nowrap">고급 필터</p>
            {isFilterDrop ? (
              <img src={dropUp} alt="드롭 업 아이콘" className="" />
            ) : (
              <img src={dropDown} alt="드롭다운 아이콘" className="" />
            )}
          </div>
        </div>
        {isFilterDrop && (
          <div className="flex pr-[81.4rem] items-[center] gap-[1rem]">
            <div
              onClick={() => handleClickFilter('flight')}
              className={`flex px-[1.6rem] py-[1.2rem] items-center gap-[0.8rem] border-[0.15rem] rounded-[0.5rem] cursor-pointer bg-white ${isCheckedFlightFilter ? 'border-purple100 text-purple100' : 'border-gray300 text-gray500'}`}>
              {isCheckedFlightFilter ? (
                <img src={checkedCircle} alt="채워진 체크박스 아이콘" className="w-[1.5rem] h-[1.5rem] aspect-[1/1]" />
              ) : (
                <img src={uncheckedCircle} alt="빈 체크박스 아이콘" className="w-[1.5rem] h-[1.5rem] aspect-[1/1]" />
              )}
              <p className="w-[9.7rem] body7-r-13">항공권 포함</p>
            </div>
            <div
              onClick={() => handleClickFilter('group')}
              className={`flex px-[1.6rem] py-[1.2rem] items-center gap-[0.8rem] border-[0.15rem] rounded-[0.5rem] cursor-pointer bg-white ${isCheckedGroupFilter ? 'border-purple100 text-purple100' : 'border-gray300 text-gray500 '}`}>
              {isCheckedGroupFilter ? (
                <img src={checkedCircle} alt="채워진 체크박스 아이콘" className="w-[1.5rem] h-[1.5rem] aspect-[1/1]" />
              ) : (
                <img src={uncheckedCircle} alt="빈 체크박스 아이콘" className="w-[1.5rem] h-[1.5rem] aspect-[1/1]" />
              )}{' '}
              <p className="w-[9.7rem] body7-r-13">단체 여행</p>
            </div>
          </div>
        )}
        <div className="flex items-center gap-[1rem] self-stretch">
          <div className="flex items-center w-full h-[6.8rem] px-[1rem] py-[2.1rem] gap-[1rem] rounded-[0.5rem] bg-gray100">
            <p className="text-gray600 body1-m-20">어디로 떠나세요?</p>
          </div>
          <div className="flex items-center w-full h-[6.8rem] px-[1rem] py-[2.1rem] gap-[0.8rem] rounded-[0.5rem] bg-gray100">
            <img src={location} alt="위치 아이콘" className="w-[1.5rem] h-[1.5rem] aspect-[1/1]" />
            <p className="text-gray600 body1-m-20">출발지 전체</p>
          </div>
          <div className="flex items-center w-full h-[6.8rem] px-[1rem] py-[2.1rem] gap-[0.8rem] rounded-[0.5rem] bg-gray100">
            <img src={calendar} alt="캘린더 아이콘" className="w-[1.5rem] h-[1.5rem] aspect-[1/1]" />
            <p className="text-gray600 body1-m-20">여행시작일 선택</p>
          </div>
          <div className="flex px-[1.5rem] w-[7.8rem] h-[6.8rem] py-[2.3rem] justify-center items-center gap-[1rem] flex-shrink-0 rounded-[0.5rem] bg-gray600 text-white text-center body2-r-17">
            검색
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
