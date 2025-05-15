import callButton from '@/shared/assets/icons/callButton.svg';
import hanatourLogo from '@/shared/assets/icons/hanatourLogo.svg';
import likeIcon from '@/shared/assets/icons/likeIcon.svg';
import menuIcon from '@/shared/assets/icons/menuIcon.svg';
import myMenuIcon from '@/shared/assets/icons/myMenuIcon.svg';
import reservationIcon from '@/shared/assets/icons/reservationIcon.svg';
import searchIcon from '@/shared/assets/icons/searchIcon.svg';
import talkButton from '@/shared/assets/icons/talkButton.svg';
import Divider from '@/shared/components/Divider/Divider';

const Header = () => {
  return (
    <header className="w-full">
      <section className="m-auto flex h-[6.2rem] max-w-[114.7rem] justify-between">
        <div className="flex items-center gap-[2.3rem] pt-[1rem] pb-[1.3rem]">
          <p className="head6-sb-22">세주여행사</p>
          <div className="flex items-center gap-[0.6rem]">
            <button type="button" className="cursor-pointer">
              <img className="w-[13.2rem]" src={callButton} alt="전화 상담 버튼" />
            </button>
            <button type="button" className="cursor-pointer">
              <img className="w-[9.3rem]" src={talkButton} alt="톡 상담 버튼" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-[0.6rem] pt-[1.2rem] pb-[1.6rem]">
          <img src={hanatourLogo} alt="하나투어 로고" />
          <p className="sub3-sb-15 text-gray500 border-gray500 border-l px-[1.2rem] py-[0.4rem]">공식인증예약센터</p>
        </div>
      </section>

      <Divider direction="horizontal" color="gray400" length={'100%'} />

      <section className="m-auto flex max-w-[117.4rem] justify-between">
        <div className="flex items-center gap-[1.9rem] pt-[4.5rem] pb-[1.8rem]">
          <img src={hanatourLogo} alt="하나투어 대표 로고" className="w-[16.3rem]" />
          <div className="flex items-center gap-[3.8rem]">
            <div className="border-gray700 flex h-[4.4rem] w-[38.9rem] rounded-[2.2rem] border-[2px] px-[2.2rem] py-[1.2rem]">
              <input
                type="text"
                className="body4-sb-14 text-gray500 placeholder-gray500 w-full"
                placeholder="#구매 즉시 사용⚡전세계 인기 입장권/패스"
              />
              <img src={searchIcon} alt="검색 아이콘" className="size-[2rem]" />
            </div>
            <div className="flex items-center gap-[0.6rem]">
              <div className="border-purple100 text-purple100 sub6-r-12 flex h-[1.8rem] w-[3.2rem] items-center justify-center rounded-[2px] border">
                HOT
              </div>
              <p className="body7-r-13 text-gray500">싱가포르</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[1.6rem] pt-[1.6rem] pb-[1.8rem]">
          <ul className="sub6-r-12 text-gray500 flex gap-[1.6rem] self-end">
            <li>로그인</li>
            <li>회원가입</li>
            <li>고객센터</li>
          </ul>

          <ul className="flex gap-[1.8rem]">
            <li className="flex w-[4.1rem] flex-col items-center gap-[0.2rem]">
              <img src={myMenuIcon} alt="마이 메뉴 아이콘" className="w-[2.4rem]" />
              <p className="sub6-r-12 text-gray500 whitespace-nowrap">마이메뉴</p>
            </li>
            <li className="flex w-[4.1rem] flex-col items-center gap-[0.2rem]">
              <img src={reservationIcon} alt="예약내역 아이콘" className="w-[2.4rem]" />
              <p className="sub6-r-12 text-gray500 whitespace-nowrap">예약내역</p>
            </li>
            <li className="flex w-[4.1rem] flex-col items-center gap-[0.2rem]">
              <img src={likeIcon} alt="찜 아이콘" className="w-[2.4rem]" />
              <p className="sub6-r-12 text-gray500 whitespace-nowrap">찜</p>
            </li>
          </ul>
        </div>
      </section>

      <Divider direction="horizontal" color="gray400" length={'100%'} />

      <section className="m-auto flex max-w-[114.2rem] justify-between">
        <nav className="flex items-center gap-[2.5rem]">
          <div className="] border-gray400 flex h-[5.2rem] items-center gap-[0.8rem] border-x px-[2.6rem]">
            <img src={menuIcon} alt="메뉴 아이콘" className="w-[2rem]" />
            <p className="sub5-r-15 text-gray600">전체 메뉴</p>
          </div>
          <ul className="text-gray500 body5-r-14 flex gap-[2.3rem]">
            <li>해외여행</li>
            <li>호텔</li>
            <li>항공+호텔</li>
            <li>국내여행</li>
            <li>테마여행</li>
          </ul>
        </nav>
        <ul className="text-gray500 sub5-r-15 flex items-center gap-[1.1rem]">
          <li>여행기획전</li>
          <li>이달의 혜택</li>
        </ul>
      </section>

      <Divider direction="horizontal" color="gray400" length={'100%'} />
    </header>
  );
};

export default Header;
