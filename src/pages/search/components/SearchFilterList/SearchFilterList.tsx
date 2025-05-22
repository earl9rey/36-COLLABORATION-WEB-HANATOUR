import checkboxIcon from '@/shared/assets/icons/checkbox.svg';
import downIcon from '@/shared/assets/icons/downIcon_gray.svg';
import flightIcon from '@/shared/assets/icons/flightFilterIcon.svg';
import groupTourIcon from '@/shared/assets/icons/groupTourFilterIcon.svg';
import noFlightIcon from '@/shared/assets/icons/noFlightFilterIcon.svg';
import nonCheckboxIcon from '@/shared/assets/icons/non_checkbox.svg';
import ourTourIcon from '@/shared/assets/icons/ourTourFilterIcon.svg';
import searchIcon from '@/shared/assets/icons/SearchIcon.svg';
import upIcon from '@/shared/assets/icons/upIcon_black.svg';
import slide from '@/shared/assets/images/slider.svg';
import Accordion from '@/shared/components/Accordion/Accordion';

import {
  AIRLINE,
  DEPARTURE_DAYS,
  DEPARTURE_TIME,
  HOTEL_GRADE,
  PACKAGE_TYPE,
  TOUR_CONDITION,
  TRAVEL_PERIOD,
  WHO_WITH_TRAVEL,
} from '@/pages/search/constants/filter';
import Divider from '@/shared/components/Divider/Divider';
import { useSearchFilters } from '../../hooks/useSearchFilters';

const SearchFilterList = () => {
  const {
    selectedPeriod,
    selectedPackageType,
    selectedTourCondition,
    selectedHotelGrade,
    selectedAirline,
    selectedDepartureTime,
    selectedDepartureDays,
    selectedWhoWithTravel,
    handleSelectPeriod,
    handleSelectPackageType,
    handleSelectTourCondition,
    handleSelectHotelGrade,
    handleSelectAirline,
    handleSelectDepartureTime,
    handleSelectDepartureDays,
    handleSelectWhoWithTravel,
  } = useSearchFilters();

  return (
    <div className="w-[23.6rem]">
      <div className="mt-[1.2rem] mb-[2.6rem] flex flex-col gap-[1.7rem]">
        <div className="flex gap-[1.2rem]">
          <div className="flex flex-col items-center gap-[1.6rem]">
            <img src={flightIcon} alt="" className="h-[5rem] w-[5rem]" />
            <p className="text-purple100 body6-m-13 text-center">항공포함</p>
          </div>
          <div className="flex flex-col items-center gap-[1.6rem]">
            <img src={noFlightIcon} alt="" className="h-[5rem] w-[5rem]" />
            <p className="text-purple100 body6-m-13 text-center">
              항공
              <br /> 불포함
            </p>
          </div>
          <div className="flex flex-col items-center gap-[1.6rem]">
            <img src={groupTourIcon} alt="" className="h-[5rem] w-[5rem]" />
            <p className="body6-m-13 text-gray500 text-center">단체여행</p>
          </div>
          <div className="flex flex-col items-center gap-[1.6rem]">
            <img src={ourTourIcon} alt="" className="h-[5rem] w-[5rem]" />
            <p className="text-purple100 body6-m-13 text-center">
              우리끼리
              <br /> 여행
            </p>
          </div>
        </div>
        <div className="text-gray500 sub6-r-12 bg-gray100 h-[4.8rem] w-full py-[0.8rem] pl-[1rem]">
          한공 포함 여부와 행사 종류 선택에 따라
          <br />
          다양한 패키지를 검색할 수 있습니다.
        </div>
      </div>

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

      {/* 항공사 */}
      <Accordion>
        {({ isVisible }) => (
          <div className="my-[2.4rem]">
            <Accordion.Header>
              <div className="flex items-center justify-between">
                <p className="sub3-sb-15">항공사</p>
                <img src={isVisible ? upIcon : downIcon} alt="toggle icon" className="w-[1.4rem]" />
              </div>
            </Accordion.Header>

            <Accordion.Content>
              <div className="mt-[2rem] flex flex-col gap-y-[1.6rem]">
                {AIRLINE.map((category) => {
                  const isRootChecked = selectedAirline.includes(category.name);
                  return (
                    <Accordion key={category.id}>
                      {({ isVisible }) => (
                        <div>
                          <Accordion.Header>
                            <div className="flex items-center justify-between">
                              <label className="flex cursor-pointer items-center">
                                <input
                                  type="checkbox"
                                  className="sr-only"
                                  checked={isRootChecked}
                                  onChange={() => handleSelectAirline(category.name)}
                                />
                                <img
                                  src={isRootChecked ? checkboxIcon : nonCheckboxIcon}
                                  alt={isRootChecked ? 'checked' : 'unchecked'}
                                  className="mr-[1rem] h-[2rem] w-[2rem]"
                                />
                                <span className="sub5-r-15 text-gray700">{category.name}</span>
                              </label>
                              <img src={isVisible ? upIcon : downIcon} alt="toggle icon" className="w-[1.4rem]" />
                            </div>
                          </Accordion.Header>

                          <Accordion.Content>
                            {/* placeholder 내용: 1, 2, 3 (추후 수정) */}
                            <div className="bg-gray100 mt-[1rem] flex w-full flex-col gap-[1.4rem] px-[4rem] py-[1.4rem]">
                              {category.value.map((airline) => {
                                const isChecked = selectedAirline.includes(airline.name);
                                return (
                                  <label key={airline.id} className="flex cursor-pointer items-center">
                                    <input
                                      type="checkbox"
                                      className="sr-only"
                                      checked={isChecked}
                                      onChange={() => handleSelectAirline(airline.name)}
                                    />
                                    <img
                                      src={isChecked ? checkboxIcon : nonCheckboxIcon}
                                      alt={isChecked ? 'checked' : 'unchecked'}
                                      className="mr-[1rem] h-[2rem] w-[2rem]"
                                    />
                                    <span className="sub5-r-15 text-gray700">{airline.name}</span>
                                  </label>
                                );
                              })}
                            </div>
                          </Accordion.Content>
                        </div>
                      )}
                    </Accordion>
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

      {/* 1인당 여행 예산 */}
      <Accordion>
        {({ isVisible }) => (
          <div className="my-[2.4rem]">
            <Accordion.Header>
              <div className="flex items-center justify-between">
                <p className="sub3-sb-15">1인당 여행 예산</p>
                <img src={isVisible ? upIcon : downIcon} alt="up 아이콘" className="w-[1.4rem]" />
              </div>
            </Accordion.Header>

            <Accordion.Content>
              <div className="mt-[2rem] flex flex-col gap-y-[2rem]">
                <img src={slide} alt="슬라이더 이미지" />
                <div className="bg-gray100 h-[8.9rem] w-full pt-[1.6rem] pb-[1rem]">
                  <p className="body6-m-13 px-[1.6rem]">직접 입력</p>
                  <div className="flex items-center gap-[1.4rem] px-[1.7rem] py-[1.2rem]">
                    <div className="flex items-center gap-[0.6rem]">
                      <div className="text-gray500 body5-r-14 border-gray300 flex h-[2.2rem] w-[6.5rem] items-center justify-center rounded-[2px] border">
                        0
                      </div>
                      <p className="body6-m-13 text-gray600">만원 ~</p>
                    </div>

                    <div className="flex items-center gap-[0.6rem]">
                      <div className="text-gray500 body5-r-14 border-gray300 flex h-[2.2rem] w-[6.5rem] items-center justify-center rounded-[2px] border">
                        0
                      </div>
                      <p className="body6-m-13 text-gray600">만원 ~</p>
                    </div>
                  </div>
                </div>
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
