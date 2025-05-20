import locationIcon from '@/shared/assets/icons/location.svg';
import calendarIcon from '@/shared/assets/icons/calendar.svg';
import memoIcon from '@/shared/assets/icons/memoIcon.svg';

interface SearchDetailViewMoreInfoPropsTypes {
  title: string;
  airline: string;
  date: string;
  memo: string;
  mainTag: string;
  subTag: string;
  underTag: string;
  price: string;
}

const SearchDetailViewMoreInfo = ({
  title,
  airline,
  date,
  memo,
  mainTag,
  subTag,
  underTag,
  price,
}: SearchDetailViewMoreInfoPropsTypes) => {
  return (
    <div className="flex justify-between bg-white p-[2rem]">
      <section className="w-[47rem]">
        <div className="sub6-r-12 flex items-center gap-[0.5rem] text-white">
          <div className="bg-purple100 px-[0.6rem] py-[0.3rem]">{mainTag}</div>
          <div className="bg-mint100 px-[0.6rem] py-[0.3rem]">{subTag}</div>
        </div>
        <div className="body3-sb-15 mt-[1.7rem] mb-[1.6rem]">{title}</div>
        <div className="body7-r-13 flex flex-col gap-[0.6rem]">
          <div className="flex items-center gap-[0.5rem]">
            <img src={locationIcon} alt="locationIcon" />
            {airline}, <div className="text-red100">잔여 1석</div>
          </div>
          <div className="flex items-center gap-[0.5rem]">
            <img src={calendarIcon} className="w-[1.4rem]" />
            {date}
          </div>
          <div className="flex items-center gap-[0.5rem]">
            <img src={memoIcon} className="w-[1.05rem]" />
            {memo}
          </div>
        </div>
        <div className="body6-m-13 mt-[2rem] flex">
          <div className="bg-light-purple100 text-purple100 px-[0.6rem] py-[0.3rem]">#{underTag}</div>
        </div>
      </section>
      <section className="flex flex-col items-end justify-between pr-[1rem]">
        <div className="flex flex-col items-end">
          <div className="sub6-r-12 bg-blue300 rounded-[5rem] px-[0.8rem] py-[0.4rem] text-white">예약 가능</div>
          <div className="head6-sb-22 mt-[1rem]">{price}</div>
          <div className="body5-r-14 text-gray500">
            하나투어 회원만 <span className="text-purple100">{price}</span> 적립
          </div>
        </div>

        <div className="mt-[1.5rem] flex gap-[0.7rem]">
          <button className="body7-r-13 border-gray600 text-gray600 cursor-pointer rounded-[0.5rem] border-1 px-[2rem] py-[0.9rem]">
            AI 상품 비교하기
          </button>
          <button className="body7-r-13 bg-purple100 cursor-pointer rounded-[0.5rem] px-[2.2rem] py-[0.9rem] text-white">
            상세일정보기
          </button>
        </div>
      </section>
    </div>
  );
};

export default SearchDetailViewMoreInfo;
