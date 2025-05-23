import calendarIcon from '@/shared/assets/icons/calender.svg';
import likesmallIcon from '@/shared/assets/icons/likesmall.svg';
import locationIcon from '@/shared/assets/icons/location.svg';
import starIcon from '@/shared/assets/icons/star.svg';
import arrowUpIcon from '@/shared/assets/icons/upErrow_purple.svg';

interface SearchDetailPropsTypes {
  mainTag: string;
  subTag: string;
  title: string;
  description: string;
  price: string;
  location: string;
  travel_period: string;
  image_url: string;
  setIsShowMore: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchDetail = ({
  mainTag,
  subTag,
  title,
  description,
  price,
  location,
  travel_period,
  image_url,
  setIsShowMore,
}: SearchDetailPropsTypes) => {
  return (
    <div className="flex w-full justify-between py-[2.8rem] pr-[2.8rem]">
      <div className="flex gap-[2.2rem]">
        <div className="h-[19.8rem] w-[19.8rem] overflow-hidden">
          <img src={image_url} alt="detailImg" className="w-[100%} h-[100%] object-cover" />
        </div>
        <div>
          <div className="sub6-r-12 flex gap-[1.3rem]">
            <span className="bg-purple100 px-[0.6rem] py-[0.3rem] text-white">{mainTag}</span>
            {subTag && <span className="bg-light-purple100 text-purple100 px-[0.5rem] py-[0.3rem]">#{subTag}</span>}
          </div>
          <h1 className="sub1-sb-20 py-[1rem]">{title}</h1>
          <h2 className="body5-r-14 text-gray600">{description}</h2>
          <div className="body7-r-13 text-gray600 pt-[2.3rem] pb-[1.2rem]">
            <div className="flex pb-[0.6rem]">
              <img src={locationIcon} alt="locationIcon" />
              {location}
            </div>
            <div className="flex">
              <img src={calendarIcon} alt="calendarIcon" />
              여행기간 {travel_period}일
            </div>
          </div>
          <div className="body6-m-13 flex">
            <img src={starIcon} alt="starIcon" />
            4.6 (1)
          </div>
        </div>
      </div>
      <div>
        <h1 className="head6-sb-22 mb-[6.8rem]">{price}원~</h1>
        <button className="sub3-sb-15 text-gray400 border-gray400 flex h-[4.7rem] w-[15.4rem] items-center justify-center gap-[0.4rem] rounded-[0.5rem] border-1">
          <img src={likesmallIcon} alt="likesmallIcon" />
          찜하기
        </button>
        <button
          onClick={() => setIsShowMore((prev) => !prev)}
          className="sub3-sb-15 text-purple100 border-purple100 mt-[0.6rem] flex h-[4.7rem] w-[15.4rem] items-center justify-center gap-[0.4rem] rounded-[0.5rem] border-1">
          자세히 보기
          <img src={arrowUpIcon} alt="arrowUpIcon" />
        </button>
      </div>
    </div>
  );
};

export default SearchDetail;
