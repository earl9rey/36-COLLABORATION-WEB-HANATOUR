import searchdetailImage from '@/shared/assets/icons/searchdetailimage.png';
import location from '@/shared/assets/icons/location.svg';
import calendar from '@/shared/assets/icons/calender.svg';
import star from '@/shared/assets/icons/star.svg';
import likesmall from '@/shared/assets/icons/likesmall.svg';

const SearchDetail = () => {
  return (
    <div className="flex gap-[2.2rem] py-[2.8rem] pr-[2.8rem]">
      <div className="h-[19.8rem] w-[19.8rem] overflow-hidden">
        <img src={searchdetailImage} className="w-[100%} h-[100%] object-cover" />
      </div>
      <div>
        <div className="sub6-r-12 flex gap-[1.3rem]">
          <span className="bg-purple100 px-[0.6rem] py-[0.3rem] text-white">ZEUS</span>
          <span className="bg-light-purple100 text-purple100 px-[0.5rem] py-[0.3rem]">#럭셔리휴양</span>
        </div>
        <h1 className="sub1-sb-20 py-[1rem]">[단독 가이드] 빅아일랜드·오아후 7일</h1>
        <h2 className="body5-r-14 text-gray600">
          자연이 만든 걸작, 두 섬의 품격 있는 여정
          <br />
          단독 차량·가이드 / 엄선된 스페셜 다이닝 제공
        </h2>
        <div className="body7-r-13 text-gray600 pt-[2.3rem] pb-[1.2rem]">
          <div className="flex pb-[0.6rem]">
            <img src={location} />
            호놀룰루, 카일루아 코나
          </div>
          <div className="flex">
            <img src={calendar} />
            여행기간 7일
          </div>
        </div>
        <div className="body6-m-13 flex">
          <img src={star} />
          4.8 (1)
        </div>
      </div>
      <div>
        <h1 className="head6-sb-22">16,500,000원~</h1>
        <button className="sub3-sb-15 text-gray400 border-gray400 flex h-[4.7rem] w-[15.4rem] items-center justify-center gap-[0.4rem] rounded-[0.5rem] border-1">
          <img src={likesmall} />
          찜하기
        </button>
        <button></button>
      </div>
    </div>
  );
};

export default SearchDetail;
