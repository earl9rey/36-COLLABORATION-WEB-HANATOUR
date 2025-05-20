import downIcon from '@/shared/assets/icons/downIcon_gray.svg';
import upIcon from '@/shared/assets/icons/upIcon_black.svg';
import Accordion from '@/shared/components/Accordion/Accordion';
import Divider from '@/shared/components/Divider/Divider';
import { useState } from 'react';
import { DEPARTURE_TIME, TOUR_CONDITION, TRAVEL_PERIOD } from '../constants/filter';

const SearchFilterList = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string[]>([]);
  const [selectedTourCondition, setSelectedTourCondition] = useState<string[]>([]);
  const [selectedDepartureTime, setSelectedDepartureTime] = useState<string[]>([]);

  const handleSelectPeriod = (period: string) => {
    if (selectedPeriod.includes(period)) {
      setSelectedPeriod(selectedPeriod.filter((item) => item !== period));
    } else {
      setSelectedPeriod([...selectedPeriod, period]);
    }
  };

  const handleSelectTourCondition = (condition: string) => {
    if (selectedTourCondition.includes(condition)) {
      setSelectedTourCondition(selectedTourCondition.filter((item) => item !== condition));
    } else {
      setSelectedTourCondition([...selectedTourCondition, condition]);
    }
  };

  const handleSelectDepartureTime = (time: string) => {
    if (selectedDepartureTime.includes(time)) {
      setSelectedDepartureTime(selectedDepartureTime.filter((item) => item !== time));
    } else {
      setSelectedDepartureTime([...selectedDepartureTime, time]);
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
                <img src={isVisible ? upIcon : downIcon} alt="up 아이콘" className="w-[1.4rem]" />
              </div>
            </Accordion.Header>

            <Accordion.Content>
              <div>2일</div>
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
    </div>
  );
};

export default SearchFilterList;
