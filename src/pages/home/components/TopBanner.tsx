import SearchBar from '@/pages/home/components/SearchBar';
import leftArrowIcon from '@/shared/assets/icons/leftArrowIcon.svg';
import pauseIcon from '@/shared/assets/icons/pauseIcon.svg';
import rightArrowIcon from '@/shared/assets/icons/rightArrowIcon.svg';

const TopBanner = () => {
  return (
    <div className="flex h-[65.6rem] w-full flex-col items-center bg-[url('./shared/assets/images/top_banner_bg.svg')] bg-cover bg-no-repeat pt-[6.4rem]">
      <div className="flex flex-col gap-[4rem]">
        <div className="flex flex-col gap-[2.4rem]">
          <div className="flex flex-col gap-[0.8rem]">
            <p className="head1-sb-36 text-white">올 여름 휴가는 중국으로 떠나요!</p>
            <p className="head7-m-17 text-white">도시 호캉스와 자연 힐링, 요즘 핫플까지! 취향에 따라 고르는 여행지</p>
          </div>
          <p className="sub3-sb-15 text-white underline">이벤트 바로가기</p>
          <div className="flex gap-[0.8rem]">
            <div className="bg-gray600 flex h-[3.6rem] w-[11.4rem] items-center justify-between rounded-[10rem] px-[1.6rem]">
              <div>
                <span className="body4-sb-14 text-white">8</span>
                <span className="body5-r-14 text-white">/</span>
                <span className="body5-r-14 text-white">13</span>
              </div>
              <div className="flex gap-[0.6rem]">
                <img src={leftArrowIcon} alt="왼쪽 화살표 아이콘" className="h-[1.4rem] w-[1.4rem]" />
                <div></div>
                <img src={rightArrowIcon} alt="오른쪽 화살표 아이콘" className="h-[1.4rem] w-[1.4rem]" />
              </div>
            </div>
            <div className="bg-gray600 flex h-[3.6rem] w-[3.6rem] items-center justify-center rounded-[50%]">
              <img src={pauseIcon} alt="정지 아이콘" className="h-[1.4rem] w-[1.4rem]" />
            </div>
          </div>
        </div>
        <SearchBar />
      </div>
    </div>
  );
};

export default TopBanner;
