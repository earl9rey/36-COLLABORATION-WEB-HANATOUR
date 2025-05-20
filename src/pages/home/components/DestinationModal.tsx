import ModalBase from './ModalBase';
import { useEffect, useState } from 'react';
import closeIcon from '@/shared/assets/icons/closeIcon.svg';
import chevronRightIcon from '@/shared/assets/icons/chevronRightIcon.svg';
import { regions } from '../../../shared/constants/destinationData';

interface DestinationModalProps {
  onClose: () => void;
  onSelectArrival: (city: string) => void;
}

const DestinationModal = ({ onClose, onSelectArrival }: DestinationModalProps) => {
  const [selectedRegionIndex, setSelectedRegionIndex] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const selectedRegion = regions[selectedRegionIndex];
  const countries = selectedRegion?.countries || [];
  const cities = countries.find((c) => c.id === selectedCountry)?.cities || [];

  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  const handleDeleteSearch = (name: string) => {
    setRecentSearches((prev) => {
      const updated = prev.filter((item) => item !== name);
      localStorage.setItem('recentSearches', JSON.stringify(updated));
      return updated;
    });
  };

  const handleClearAll = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  const handleCityClick = (cityName: string) => {
    setRecentSearches((prev) => {
      const updated = [cityName, ...prev.filter((v) => v !== cityName)].slice(0, 4);
      localStorage.setItem('recentSearches', JSON.stringify(updated));
      return updated;
    });
    onSelectArrival(cityName);
  };

  return (
    <ModalBase onClose={onClose}>
      <div className="border-gray800 flex w-[68.3rem] flex-col items-start border shadow-[0_0.25rem_1.25rem_rgba(0,0,0,0.25)]">
        {/* 최근 검색 */}
        <div className="flex w-full flex-col items-start gap-[1.7rem] self-stretch px-[2.6rem] py-[3.1rem]">
          <div className="w-full">
            <div className="border-b-gray300 flex items-center justify-between border-b pb-[1.4rem]">
              <p className="sub3-sb-15 text-gray800">최근 검색 지역</p>
              <button onClick={handleClearAll} className="text-gray500 sub6-r-12 cursor-pointer">
                전체삭제
              </button>
            </div>
            <div className="grid w-full grid-cols-2 gap-x-[2.7rem] gap-y-[1rem]">
              {recentSearches.map((name) => (
                <div key={name} className="flex w-full cursor-pointer items-center justify-between py-[1.2rem]">
                  <p onClick={() => handleCityClick(name)} className="text-gray800 sub3-sb-15">
                    {name}
                  </p>
                  <img
                    src={closeIcon}
                    alt="X 아이콘"
                    className="aspect-[1/1] h-[1.5rem] w-[1.5rem] cursor-pointer"
                    onClick={() => handleDeleteSearch(name)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 주요 도시 선택 탭 */}
          <div className="w-full">
            <div className="sub3-sb-15 text-gray800 pb-[1.4rem]">주요도시</div>
            <div className="flex w-full">
              <div className="border-gray800 sub3-sb-15 text-gray800 flex w-1/2 cursor-pointer items-center justify-center border bg-white py-[1.2rem]">
                해외
              </div>
              <div className="border-gray300 sub3-sb-15 text-gray800 bg-gray100 flex w-1/2 cursor-pointer items-center justify-center border py-[1.2rem]">
                국내
              </div>
            </div>
          </div>

          {/* 지역/국가/도시 */}
          <div className="border-gray300 flex h-[36rem] border">
            {/* 지역 */}
            <div className="border-gray300 flex w-[19rem] flex-col border-r">
              {regions.map((region, i) => (
                <div
                  key={region.id + i}
                  className={`body5-r-14 ${
                    i === selectedRegionIndex ? 'text-purple100 body4-sb-14 bg-white' : 'text-gray500 bg-gray100'
                  } border-gray300 flex cursor-pointer items-center border-b px-[1.2rem] py-[1.6rem]`}
                  onClick={() => {
                    setSelectedRegionIndex(i);
                    setSelectedCountry(null);
                  }}>
                  {region.label}
                </div>
              ))}
            </div>

            {/* 국가 */}
            <div className="border-gray300 w-[27rem] border-r px-[1.4rem] py-[1.1rem]">
              <div className="grid-auto-rows-[1.8rem] grid grid-cols-2 gap-[2.4rem]">
                {countries.map((country) => (
                  <div
                    key={country.id}
                    className="flex h-[1.8rem] cursor-pointer items-center justify-between"
                    onClick={() => setSelectedCountry(country.id)}>
                    <p
                      className={`flex h-[1.8rem] cursor-pointer items-center justify-between ${
                        country.id === selectedCountry ? 'text-purple100 body5-r-14' : 'text-gray800 body5-r-14'
                      }`}>
                      {country.name}
                    </p>
                    <img
                      src={chevronRightIcon}
                      alt="오른쪽 화살표 아이콘"
                      className="aspect-[1/1] h-[0.9rem] w-[0.6rem]"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 도시 */}
            <div className="flex w-[16.8rem] flex-col gap-[2.4rem] pt-[1.1rem] pr-[3.5rem] pl-[1.6rem]">
              {cities.map((city) => (
                <div
                  key={city.id}
                  className="flex cursor-pointer gap-[0.25rem]"
                  onClick={() => handleCityClick(city.name)}>
                  <p className="body5-r-14 whitespace-nowrap">{city.name}</p>
                  {city.hot && (
                    <div className="border-purple100 text-purple100 sub6-r-12 flex h-[1.8rem] w-[3.2rem] items-center justify-center rounded-[2px] border">
                      HOT
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 닫기 버튼 */}
        <div className="bg-gray100 flex w-full justify-end py-[0.8rem] pr-[1.8rem]">
          <button className="text-gray500 body7-r-13 cursor-pointer">닫기</button>
        </div>
      </div>
    </ModalBase>
  );
};

export default DestinationModal;
