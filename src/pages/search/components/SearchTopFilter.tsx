import filter from '@/shared/assets/icons/filter.svg';
import reset from '@/shared/assets/icons/reset.svg';

const SearchTopFilter = () => {
  return (
    <div className="">
      <div className="sub1-sb-20 bg-purple100 mb-[2rem] w-[89.6rem] p-[1rem] text-center text-white">
        미국 : 여행 전 입국 규정을 확인해 주세요
      </div>
      <div className="flex gap-[1.8rem]">
        <div className="sub2-sb-17 flex items-center gap-[1rem]">
          <img src={filter}></img>
          필터
          <div className="body5-r-14 bg-purple100 rounded-full px-[0.3rem] py-[0.1rem] text-white">15</div>
        </div>
        <div className="flex gap-[0.7rem]">
          <div className="text-gray600 body6-m-13 bg-coolgray100 rounded-[0.5rem] px-[0.9rem] py-[0.7rem]">
            항공포함
          </div>
          <button className="body6-m-13 text-gray500 border-gray600 flex items-center gap-[0.5rem] rounded-[0.5rem] border-1 px-[0.9rem] py-[0.7rem]">
            <img src={reset} />
            필터초기화
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchTopFilter;
