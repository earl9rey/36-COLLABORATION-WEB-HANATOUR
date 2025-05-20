import locationIcon from '@/shared/assets/icons/location.svg';
import calendarIcon from '@/shared/assets/icons/calender.svg';
import starIcon from '@/shared/assets/icons/star.svg';
import likesmallIcon from '@/shared/assets/icons/likesmall.svg';
import arrowUpIcon from '@/shared/assets/icons/upErrow_purple.svg';

interface SearchDetailPropsTypes {
  mainTag: string;
  underTag: string;
  title: string;
  description: string;
  price: string;
  location: string;
  star: string;
  travel_period: string;
  img: string;
  setIsShowMore: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchDetail = ({
  mainTag,
  underTag,
  title,
  description,
  price,
  location,
  star,
  travel_period,
  img,
  setIsShowMore,
}: SearchDetailPropsTypes) => {
  return (
    <div className="flex gap-[2.2rem] py-[2.8rem] pr-[2.8rem]">
      <div className="h-[19.8rem] w-[19.8rem] overflow-hidden">
        <img src={img} alt="detailImg" className="w-[100%} h-[100%] object-cover" />
      </div>
      <div className="min-w-[47rem]">
        <div className="sub6-r-12 flex gap-[1.3rem]">
          <span className="bg-purple100 px-[0.6rem] py-[0.3rem] text-white">{mainTag}</span>
          <span className="bg-light-purple100 text-purple100 px-[0.5rem] py-[0.3rem]">#{underTag}</span>
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
            여행기간 {travel_period}
          </div>
        </div>
        <div className="body6-m-13 flex">
          <img src={starIcon} alt="starIcon" />
          {star}
        </div>
      </div>
      <div>
        <h1 className="head6-sb-22 mb-[6.8rem]">{price}~</h1>
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
