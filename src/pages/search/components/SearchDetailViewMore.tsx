import arrowLeftIcon from '@/shared/assets/icons/arrowLeft.svg';
import arrowRightIcon from '@/shared/assets/icons/arrowRight.svg';
import down from '@/shared/assets/icons/down.svg';
import arrowUp_black from '@/shared/assets/icons/arrowUp_black.svg';
import SearchDetailCalendar from './SearchDetailCalendar';
import SearchDetailViewMoreInfo from './SearchDetailViewMoreInfo';

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

interface SearchDetailViewMorePropsTypes {
  isshowMore: boolean;
  setIsShowMore: React.Dispatch<React.SetStateAction<boolean>>;
  detailInfo: DetailInfo;
}

const SearchDetailViewMore = ({ isshowMore, setIsShowMore, detailInfo }: SearchDetailViewMorePropsTypes) => {
  return (
    <div className="w-100% bg-coolgray100 relative px-[3.4rem] py-[3rem]">
      <header className="relative flex h-[2.9rem] items-center justify-end">
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-[2.6rem]">
          <img src={arrowLeftIcon} />
          <div className="head6-sb-22">2025년 6월</div>
          <img src={arrowRightIcon} />
        </div>
        <div className="flex items-center gap-[0.2rem]">
          <div className="bg-purple100 h-[0.5rem] w-[0.5rem] rounded-[100%]"></div>
          <div className="body6-m-13">예약상태 안내</div>
          <div className="body6-m-13 h-[1.4rem] w-[1.4rem] rounded-[100%] bg-white text-center leading-[1.4rem]">?</div>
        </div>
      </header>
      <div className="mt-[2.4rem]">
        <SearchDetailCalendar />
      </div>
      <div className="mt-[3.8rem] mb-[1.5rem] flex items-center justify-between">
        <div className="body3-sb-15">
          총 <span className="text-purple100">1</span>개
        </div>
        <div className="body4-sb-14 flex items-center gap-[0.5rem]">
          출발확정순
          <img src={down} />
        </div>
      </div>
      <SearchDetailViewMoreInfo
        title={detailInfo.title}
        airline={detailInfo.airline}
        date={detailInfo.date}
        memo={detailInfo.memo}
        mainTag={detailInfo.mainTag}
        subTag={detailInfo.subTag}
        underTag={detailInfo.underTag}
        price={detailInfo.price}
      />
      <div
        onClick={() => setIsShowMore((prev) => !prev)}
        className="body3-sb-15 mt-[2rem] flex cursor-pointer items-center justify-center gap-[0.9rem]">
        접기
        <img src={arrowUp_black} />
      </div>
    </div>
  );
};

export default SearchDetailViewMore;
