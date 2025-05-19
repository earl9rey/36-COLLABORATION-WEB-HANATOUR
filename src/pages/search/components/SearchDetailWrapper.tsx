import down from '@/shared/assets/icons/down.svg';
import Divider from '@/shared/components/Divider/Divider';
import SearchDetail from './SearchDetail';
import searchdetailImage from '@/shared/assets/icons/searchdetailimage.png';
const SearchDetailWrapper = () => {
  return (
    <div className="w-[89.6rem]">
      <header className="flex items-center justify-between">
        <span className="sub5-r-15 py-[2rem]">
          호놀룰루 패키지 <span className="text-purple100">8</span>개
        </span>
        <span className="body5-r-14 border-gray400 flex w-[10rem] items-center justify-center gap-[0.3rem] border-2 py-[0.6rem]">
          추천순
          <img src={down} />
        </span>
      </header>
      <Divider color="gray300" />
      <SearchDetail
        mainTag="ZEUS"
        subTag="럭셔리휴양"
        title="[단독 가이드] 빅아일랜드·오아후 7일"
        description="자연이 만든 걸작, 두 섬의 품격 있는 여정"
        location="호놀룰루, 카일루아 코나"
        date="여행기간 7일"
        star="4.8 (1)"
        price="1,200,000원"
        img={searchdetailImage}
      />
    </div>
  );
};

export default SearchDetailWrapper;
