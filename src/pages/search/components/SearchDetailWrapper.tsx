import { useGetSearchFilterQuery } from '@/shared/apis/getSearchFilterQuery';
import down from '@/shared/assets/icons/down.svg';
import Divider from '@/shared/components/Divider/Divider';
import { useState } from 'react';
import SearchDetail from './SearchDetail';
import SearchDetailViewMore from './SearchDetailViewMore';

interface ShowMoreMap {
  [key: string]: boolean;
}

const SearchDetailWrapper = ({ period, page, size }: { period: string; page: number; size: number }) => {
  const [showMoreMap, setShowMoreMap] = useState<ShowMoreMap>({});
  const { data, isLoading, error } = useGetSearchFilterQuery({ period, page, size });

  const packageList = data?.result?.result ?? [];

  const handleShowMore = (id: string) => {
    setShowMoreMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-[130.6rem]">
      <header className="flex w-full items-center justify-between">
        <span className="sub5-r-15 py-[2rem]">
          호놀룰루 패키지 <span className="text-purple100"> {isLoading || error ? '-' : packageList.length}</span>개
        </span>
        <span className="body5-r-14 border-gray400 flex w-[10rem] items-center justify-center gap-[0.3rem] border-2 py-[0.6rem]">
          추천순
          <img src={down} alt="downIcon" />
        </span>
      </header>
      <Divider color="gray300" />

      {isLoading && <div>로딩 중...</div>}
      {error && <div>에러 발생</div>}

      {!isLoading &&
        !error &&
        packageList.map((item: any) => (
          <div key={item.packageId}>
            <SearchDetail
              title={item.title}
              price={item.price.toLocaleString()}
              image_url={item.imageUrl}
              mainTag={item.tags.tagName1}
              subTag={item.tags.tagName2}
              setIsShowMore={() => handleShowMore(item.packageId)}
              description={item.description}
              location={item.schedules.departure}
              travel_period={period}
            />
            <Divider color="gray300" />
            {showMoreMap[item.packageId] && (
              <SearchDetailViewMore
                setIsShowMore={() => handleShowMore(item.packageId)}
                detailInfo={{
                  title: item.title,
                  airline: `${item.schedules.departure} → ${item.schedules.arrival}`,
                  date: `${item.schedules.departDate} ~ ${item.schedules.arriveDate}`,
                  memo: `${item.companion}, ${item.hotelGrade}`,
                  mainTag: item.tags.tagName1,
                  subTag: item.tags.tagName3,
                  underTag: item.tags.tagName2,
                  price: item.price.toLocaleString(),
                }}
              />
            )}
          </div>
        ))}
    </div>
  );
};

export default SearchDetailWrapper;
