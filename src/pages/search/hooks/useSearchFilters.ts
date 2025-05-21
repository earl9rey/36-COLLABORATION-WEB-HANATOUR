import { useState } from 'react';

/**
 * 커스텀 훅: 검색 필터 상태 및 토글 핸들러 관리
 */
export const useSearchFilters = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string[]>([]);
  const [selectedPackageType, setSelectedPackageType] = useState<string[]>([]);
  const [selectedTourCondition, setSelectedTourCondition] = useState<string[]>([]);
  const [selectedHotelGrade, setSelectedHotelGrade] = useState<string[]>([]);
  const [selectedAirline, setSelectedAirline] = useState<string[]>([]);
  const [selectedDepartureTime, setSelectedDepartureTime] = useState<string[]>([]);
  const [selectedDepartureDays, setSelectedDepartureDays] = useState<string[]>([]);
  const [selectedWhoWithTravel, setSelectedWhoWithTravel] = useState<string[]>([]);

  // 공통 로직: 토글 선택 항목
  const toggleSelection = (
    value: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return {
    selectedPeriod,
    selectedPackageType,
    selectedTourCondition,
    selectedHotelGrade,
    selectedAirline,
    selectedDepartureTime,
    selectedDepartureDays,
    selectedWhoWithTravel,
    handleSelectPeriod: (period: string) => toggleSelection(period, selectedPeriod, setSelectedPeriod),
    handleSelectPackageType: (type: string) => toggleSelection(type, selectedPackageType, setSelectedPackageType),
    handleSelectTourCondition: (condition: string) =>
      toggleSelection(condition, selectedTourCondition, setSelectedTourCondition),
    handleSelectHotelGrade: (grade: string) => toggleSelection(grade, selectedHotelGrade, setSelectedHotelGrade),
    handleSelectAirline: (airline: string) => toggleSelection(airline, selectedAirline, setSelectedAirline),
    handleSelectDepartureTime: (time: string) => toggleSelection(time, selectedDepartureTime, setSelectedDepartureTime),
    handleSelectDepartureDays: (day: string) => toggleSelection(day, selectedDepartureDays, setSelectedDepartureDays),
    handleSelectWhoWithTravel: (withType: string) =>
      toggleSelection(withType, selectedWhoWithTravel, setSelectedWhoWithTravel),
  };
};
