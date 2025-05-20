import down from '@/shared/assets/icons/down.svg';
import Divider from '@/shared/components/Divider/Divider';
import SearchDetail from './SearchDetail';
import SearchDetailViewMore from './SearchDetailViewMore';
import { useState } from 'react';
import SearchDetailMock from '@/pages/search/datas/SearchDetailMock.json';

interface ShowMoreMap {
  [key: number]: boolean;
}

interface DetailInfo {
  title: string;
  airline: string;
  date: string;
  memo: string;
  mainTag: string;
  subTag: string;
  underTag: string;
  price: string;
}

const SearchDetailWrapper = () => {
  const [searchDetailList, setSearchDetailList] = useState(SearchDetailMock);
  const [showMoreMap, setShowMoreMap] = useState<ShowMoreMap>({});

  const handleShowMore = (id: number) => {
    setShowMoreMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-[89.6rem]">
      <header className="flex items-center justify-between">
        <span className="sub5-r-15 py-[2rem]">
          호놀룰루 패키지 <span className="text-purple100">8</span>개
        </span>
        <span className="body5-r-14 border-gray400 flex w-[10rem] items-center justify-center gap-[0.3rem] border-2 py-[0.6rem]">
          추천순
          <img src={down} alt="downIcon" />
        </span>
      </header>
      <Divider color="gray300" />
      {searchDetailList.map((item) => (
        <div key={item.id}>
          <SearchDetail {...item} setIsShowMore={() => handleShowMore(item.id)} />
          {showMoreMap[item.id] && (
            <SearchDetailViewMore
              isshowMore={!!showMoreMap[item.id]}
              setIsShowMore={() => handleShowMore(item.id)}
              detailInfo={SearchDetailMock.find((info) => info.id === item.id) as DetailInfo}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default SearchDetailWrapper;
