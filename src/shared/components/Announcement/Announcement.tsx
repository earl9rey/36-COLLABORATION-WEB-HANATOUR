import facebook from '@/shared/assets/icons/facebook.svg';
import instagram from '@/shared/assets/icons/instagram.svg';
import naverblog from '@/shared/assets/icons/naverblog.svg';
import kakao from '@/shared/assets/icons/kakaoChannel.svg';
import youtube from '@/shared/assets/icons/youtube.svg';
import kakaostory from '@/shared/assets/icons/kakaostory.svg';

const Announcement = () => {
  return (
    <div className="flex flex-row items-center justify-between px-[11.4rem] py-[1.4rem]">
      {/* 공지 더보기 기타 */}
      <div className="flex w-[49.1rem] flex-row justify-between">
        <div className="flex flex-row gap-[2rem]">
          <p className="body5-r-14 text-gray500">공지</p>
          <p className="body6-m-13 text-gray500">[여행만보]25년 5월 미션 변동 사항 안내</p>
        </div>
        <p className="body6-m-13 text-gray500">더보기</p>
      </div>
      {/* 각종 사이트 링크(?)들 */}
      <div className="flex flex-row justify-end gap-[1.7rem]">
        <img src={facebook} alt="페이스북 로고 이미지" className="w-[2.6rem]"></img>
        <img src={instagram} alt="인스타그램 로고 이미지" className="w-[2.6rem]"></img>
        <img src={naverblog} alt="네이버 블로그 로고 이미지" className="w-[2.6rem]"></img>
        <img src={kakao} alt="카카오 로고 이미지" className="w-[2.6rem]"></img>
        <img src={youtube} alt="유튜브 로고 이미지" className="w-[2.6rem]"></img>
        <img src={kakaostory} alt="카카오스토리 로고 이미지" className="w-[2.6rem]"></img>
      </div>
    </div>
  );
};

export default Announcement;
