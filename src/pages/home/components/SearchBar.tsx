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

  return (
    <div className="inline-flex w-[121.6rem] flex-col items-start rounded-[0.5px] bg-white p-[0.5rem] shadow-[0_0.25rem_1.25rem_rgba(0,0,0,0.25)]">
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
            {isFilterDrop ? (
              <img src={dropUp} alt="드롭 업 아이콘" className="" />
            ) : (
              <img src={dropDown} alt="드롭다운 아이콘" className="" />
            )}
          </div>
        </div>
        {isFilterDrop && (
          <div className="items-[center] flex gap-[1.6rem] pr-[81.4rem]">
            <div
              onClick={() => handleClickFilter('flight')}
              className={`flex cursor-pointer items-center gap-[0.8rem] rounded-[0.5rem] border-[0.15rem] bg-white px-[1.6rem] py-[1.2rem] ${checkedFilters.flight ? 'border-purple100 text-purple100' : 'border-gray300 text-gray500'}`}>
              {checkedFilters.flight ? (
                <img src={checkedCircle} alt="채워진 체크박스 아이콘" className="aspect-[1/1] h-[1.5rem] w-[1.5rem]" />
              ) : (
                <img src={uncheckedCircle} alt="빈 체크박스 아이콘" className="aspect-[1/1] h-[1.5rem] w-[1.5rem]" />
              )}
              <p className="body7-r-13 w-[9.7rem]">항공권 포함</p>
            </div>
            <div
              onClick={() => handleClickFilter('group')}
              className={`flex cursor-pointer items-center gap-[0.8rem] rounded-[0.5rem] border-[0.15rem] bg-white px-[1.6rem] py-[1.2rem] ${checkedFilters.group ? 'border-purple100 text-purple100' : 'border-gray300 text-gray500'}`}>
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
          <div className="bg-gray100 flex h-[6.8rem] w-full items-center gap-[1rem] rounded-[0.5rem] px-[1.6rem] py-[2.1rem]">
            <p className="text-gray600 body1-m-20">어디로 떠나세요?</p>
          </div>
          <div className="bg-gray100 flex h-[6.8rem] w-full items-center gap-[0.8rem] rounded-[0.5rem] px-[1.6rem] py-[2.1rem]">
            <img src={location} alt="위치 아이콘" className="aspect-[1/1] h-[1.5rem] w-[1.5rem]" />
            <p className="text-gray600 body1-m-20">출발지 전체</p>
          </div>
          <div className="bg-gray100 flex h-[6.8rem] w-full items-center gap-[0.8rem] rounded-[0.5rem] px-[1.6rem] py-[2.1rem]">
            <img src={calendar} alt="캘린더 아이콘" className="aspect-[1/1] h-[1.5rem] w-[1.5rem]" />
            <p className="text-gray600 body1-m-20">여행시작일 선택</p>
          </div>
          <div className="bg-gray600 body2-r-17 flex h-[6.8rem] w-[7.8rem] flex-shrink-0 items-center justify-center gap-[1rem] rounded-[0.5rem] px-[1.5rem] py-[2.3rem] text-center text-white">
            검색
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
