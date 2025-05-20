import checkboxIcon from '@/shared/assets/icons/checkbox.svg';
import downIcon from '@/shared/assets/icons/downIcon_gray.svg';
import nonCheckboxIcon from '@/shared/assets/icons/non_checkbox.svg';
import searchIcon from '@/shared/assets/icons/SearchIcon.svg';
import upIcon from '@/shared/assets/icons/upIcon_black.svg';
import Accordion from '@/shared/components/Accordion/Accordion';

import Divider from '@/shared/components/Divider/Divider';
import { useState } from 'react';
import {
  DEPARTURE_DAYS,
  DEPARTURE_TIME,
  HOTEL_GRADE,
  PACKAGE_TYPE,
  TOUR_CONDITION,
  TRAVEL_PERIOD,
  WHO_WITH_TRAVEL,
} from '../constants/filter';

const SearchFilterList = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string[]>([]);
  const [selectedPackageType, setSelectedPackageType] = useState<string[]>([]);
  const [selectedTourCondition, setSelectedTourCondition] = useState<string[]>([]);
  const [selectedHotelGrade, setSelectedHotelGrade] = useState<string[]>([]);
  const [selectedDepartureTime, setSelectedDepartureTime] = useState<string[]>([]);
  const [selectedDepartureDays, setSelectedDepartureDays] = useState<string[]>([]);
  const [selectedWhoWithTravel, setSelectedWhoWithTravel] = useState<string[]>([]);

  const handleSelectPeriod = (period: string) => {
    if (selectedPeriod.includes(period)) {
      setSelectedPeriod(selectedPeriod.filter((item) => item !== period));
    } else {
      setSelectedPeriod([...selectedPeriod, period]);
    }
  };

  const handleSelectPackageType = (type: string) => {
    if (selectedPackageType.includes(type)) {
      setSelectedPackageType(selectedPackageType.filter((item) => item !== type));
    } else {
      setSelectedPackageType([...selectedPackageType, type]);
    }
  };

  const handleSelectTourCondition = (condition: string) => {
    if (selectedTourCondition.includes(condition)) {
      setSelectedTourCondition(selectedTourCondition.filter((item) => item !== condition));
    } else {
      setSelectedTourCondition([...selectedTourCondition, condition]);
    }
  };

  const handleSelectHotelGrade = (grade: string) => {
    if (selectedHotelGrade.includes(grade)) {
      setSelectedHotelGrade(selectedHotelGrade.filter((item) => item !== grade));
    } else {
      setSelectedHotelGrade([...selectedHotelGrade, grade]);
    }
  };

  const handleSelectDepartureTime = (time: string) => {
    if (selectedDepartureTime.includes(time)) {
      setSelectedDepartureTime(selectedDepartureTime.filter((item) => item !== time));
    } else {
      setSelectedDepartureTime([...selectedDepartureTime, time]);
    }
  };

  const handleSelectDepartureDays = (day: string) => {
    if (selectedDepartureDays.includes(day)) {
      setSelectedDepartureDays(selectedDepartureDays.filter((item) => item !== day));
    } else {
      setSelectedDepartureDays([...selectedDepartureDays, day]);
    }
  };

  const handleSelectWhoWithTravel = (withType: string) => {
    if (selectedWhoWithTravel.includes(withType)) {
      setSelectedWhoWithTravel(selectedWhoWithTravel.filter((item) => item !== withType));
    } else {
      setSelectedWhoWithTravel([...selectedWhoWithTravel, withType]);
    }
  };

  return (
    <div className="w-[23.6rem]">
      <Divider />

      {/* 여행기간 */}
      <Accordion>
        {({ isVisible }) => (
          <div className="my-[2.4rem]">
            <Accordion.Header>
              <div className="flex items-center justify-between">
                <p className="sub3-sb-15">여행기간</p>
                <img src={isVisible ? upIcon : downIcon} alt="up 아이콘" className="w-[1.4rem]" />
              </div>
            </Accordion.Header>

            <Accordion.Content>
              <div className="mt-[2rem] flex flex-wrap gap-x-[0.2rem] gap-y-[0.6rem]">
                {TRAVEL_PERIOD.map((period) => {
                  const isSelected = selectedPeriod.includes(period.name);

                  return (
                    <div
                      key={period.id}
                      onClick={() => handleSelectPeriod(period.name)}
                      className={`body6-m-13 ${isSelected ? 'text-purple100' : 'text-gray800'} ${isSelected ? 'border-purple100' : 'border-gray300'} flex h-[3.4rem] w-[11.7rem] cursor-pointer items-center justify-center rounded-[2px] border`}>
                      {period.name}
                    </div>
                  );
                })}
              </div>
            </Accordion.Content>
          </div>
        )}
      </Accordion>

      <Divider />

      {/* 상품구분 */}
      <Accordion>
        {({ isVisible }) => (
          <div className="my-[2.4rem]">
            <Accordion.Header>
              <div className="flex items-center justify-between">
                <p className="sub3-sb-15">상품구분</p>
                <img src={isVisible ? upIcon : downIcon} alt="toggle icon" className="w-[1.4rem]" />
              </div>
            </Accordion.Header>

            <Accordion.Content>
              <div className="mt-[2rem] flex flex-col gap-y-[1.6rem]">
                {PACKAGE_TYPE.map((type) => {
                  const isChecked = selectedPackageType.includes(type.name);

                  return (
                    <label key={type.id} className="flex cursor-pointer items-center">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={isChecked}
                        onChange={() => handleSelectPackageType(type.name)}
                      />
                      <img
                        src={isChecked ? checkboxIcon : nonCheckboxIcon}
                        alt={isChecked ? 'checked' : 'unchecked'}
                        className="mr-[1rem] h-[2rem] w-[2rem]"
                      />
                      <span className="sub5-r-15 text-gray700">{type.name}</span>
                    </label>
                  );
                })}
              </div>
            </Accordion.Content>
          </div>
        )}
      </Accordion>

      <Divider />

      {/* 투어조건 */}
      <Accordion>
        {({ isVisible }) => (
          <div className="my-[2.4rem]">
            <Accordion.Header>
              <div className="flex items-center justify-between">
                <p className="sub3-sb-15">투어조건</p>
                <img src={isVisible ? upIcon : downIcon} alt="up 아이콘" className="w-[1.4rem]" />
              </div>
            </Accordion.Header>

            <Accordion.Content>
              <div className="mt-[2rem] flex flex-wrap gap-x-[0.2rem] gap-y-[0.6rem]">
                {TOUR_CONDITION.map((condition) => {
                  const isSelected = selectedTourCondition.includes(condition.name);

                  return (
                    <div
                      key={condition.id}
                      onClick={() => handleSelectTourCondition(condition.name)}
                      className={`body6-m-13 ${isSelected ? 'text-purple100' : 'text-gray800'} ${isSelected ? 'border-purple100' : 'border-gray300'} flex h-[3.4rem] w-[11.7rem] cursor-pointer items-center justify-center rounded-[2px] border`}>
                      {condition.name}
                    </div>
                  );
                })}
              </div>
            </Accordion.Content>
          </div>
        )}
      </Accordion>

      <Divider />

      {/* 호텔성급 */}
      <Accordion>
        {({ isVisible }) => (
          <div className="my-[2.4rem]">
            <Accordion.Header>
              <div className="flex items-center justify-between">
                <p className="sub3-sb-15">호텔성급</p>
                <img src={isVisible ? upIcon : downIcon} alt="toggle icon" className="w-[1.4rem]" />
              </div>
            </Accordion.Header>

            <Accordion.Content>
              <div className="mt-[2rem] flex flex-col gap-y-[1.6rem]">
                {HOTEL_GRADE.map((grade) => {
                  const isChecked = selectedHotelGrade.includes(grade.name);

                  return (
                    <label key={grade.id} className="flex cursor-pointer items-center">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={isChecked}
                        onChange={() => handleSelectHotelGrade(grade.name)}
                      />
                      <img
                        src={isChecked ? checkboxIcon : nonCheckboxIcon}
                        alt={isChecked ? 'checked' : 'unchecked'}
                        className="mr-[1rem] h-[2rem] w-[2rem]"
                      />
                      <span className="sub5-r-15 text-gray700">{grade.name}</span>
                    </label>
                  );
                })}
              </div>
            </Accordion.Content>
          </div>
        )}
      </Accordion>

      <Divider />

      {/* 출발 항공 시간대 */}
      <Accordion>
        {({ isVisible }) => (
          <div className="my-[2.4rem]">
            <Accordion.Header>
              <div className="flex items-center justify-between">
                <p className="sub3-sb-15">출발 항공 시간대</p>
                <img src={isVisible ? upIcon : downIcon} alt="up 아이콘" className="w-[1.4rem]" />
              </div>
            </Accordion.Header>

            <Accordion.Content>
              <div className="mt-[2rem] flex flex-wrap gap-x-[0.2rem] gap-y-[0.6rem]">
                {DEPARTURE_TIME.map((time) => {
                  const isSelected = selectedDepartureTime.includes(time.name);

                  return (
                    <div
                      key={time.id}
                      onClick={() => handleSelectDepartureTime(time.name)}
                      className={`body6-m-13 ${isSelected ? 'text-purple100' : 'text-gray800'} ${isSelected ? 'border-purple100' : 'border-gray300'} flex h-[3.4rem] w-[11.7rem] cursor-pointer items-center justify-center rounded-[2px] border`}>
                      {time.name}
                    </div>
                  );
                })}
              </div>
            </Accordion.Content>
          </div>
        )}
      </Accordion>

      <Divider />

      {/* 출발 요일 */}
      <Accordion>
        {({ isVisible }) => (
          <div className="my-[2.4rem]">
            <Accordion.Header>
              <div className="flex items-center justify-between">
                <p className="sub3-sb-15">출발 요일</p>
                <img src={isVisible ? upIcon : downIcon} alt="up 아이콘" className="w-[1.4rem]" />
              </div>
            </Accordion.Header>

            <Accordion.Content>
              <div className="mt-[2rem] flex flex-wrap gap-x-[0.2rem]">
                {DEPARTURE_DAYS.map((day) => {
                  const isSelected = selectedDepartureDays.includes(day.name);

                  return (
                    <div
                      key={day.id}
                      onClick={() => handleSelectDepartureDays(day.name)}
                      className={`body6-m-13 ${isSelected ? 'text-purple100' : 'text-gray800'} ${isSelected ? 'border-purple100' : 'border-gray300'} flex h-[3.1rem] w-[3.2rem] cursor-pointer items-center justify-center rounded-[2px] border`}>
                      {day.name}
                    </div>
                  );
                })}
              </div>
            </Accordion.Content>
          </div>
        )}
      </Accordion>

      <Divider />

      {/* 누구와 떠나세요? */}
      <Accordion>
        {({ isVisible }) => (
          <div className="my-[2.4rem]">
            <Accordion.Header>
              <div className="flex items-center justify-between">
                <p className="sub3-sb-15">누구와 떠나세요?</p>
                <img src={isVisible ? upIcon : downIcon} alt="toggle icon" className="w-[1.4rem]" />
              </div>
            </Accordion.Header>

            <Accordion.Content>
              <div className="mt-[2rem] flex flex-col gap-y-[1.6rem]">
                {WHO_WITH_TRAVEL.map((withType) => {
                  const isChecked = selectedWhoWithTravel.includes(withType.name);

                  return (
                    <label key={withType.id} className="flex cursor-pointer items-center">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={isChecked}
                        onChange={() => handleSelectWhoWithTravel(withType.name)}
                      />
                      <img
                        src={isChecked ? checkboxIcon : nonCheckboxIcon}
                        alt={isChecked ? 'checked' : 'unchecked'}
                        className="mr-[1rem] h-[2rem] w-[2rem]"
                      />
                      <span className="sub5-r-15 text-gray700">{withType.name}</span>
                    </label>
                  );
                })}
              </div>
            </Accordion.Content>
          </div>
        )}
      </Accordion>

      <Divider />

      {/* 결과 내 검색 */}
      <div className="mt-[2.4rem] mb-[1.4rem] flex w-full flex-col gap-[1.8rem]">
        <p className="sub3-sb-15">결과 내 검색</p>
        <div className="border-gray300 flex h-[4.2rem] w-full items-center justify-between rounded-[2px] border pr-[1.3rem] pl-[1rem]">
          <input
            className="body5-r-14 text-gray500 placeholder-gray500 w-[12.5rem]"
            type="text"
            placeholder="상품명을 입력해주세요"
          />
          <img src={searchIcon} alt="검색 아이콘" />
        </div>
      </div>

      <Divider />
    </div>
  );
};

export default SearchFilterList;
