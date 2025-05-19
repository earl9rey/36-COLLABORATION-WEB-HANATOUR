import down from '@/shared/assets/icons/down.svg';
import Divider from '@/shared/components/Divider/Divider';
import SearchDetail from './SearchDetail';
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
      <SearchDetail />
    </div>
  );
};

export default SearchDetailWrapper;
