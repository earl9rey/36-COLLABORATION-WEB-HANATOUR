import bannerRightImage from '@/shared/assets/images/promotion_banner_right_image.svg';

const PromotionBanner = () => {
  return (
    <div className="mt-[4rem] h-[71.1rem] w-full bg-[url('./shared/assets/images/promotion_banner_image.svg')] bg-cover bg-no-repeat pt-[5.8rem] pb-[9.3rem]">
      <div className="mx-auto flex w-[113.9rem] flex-col gap-[3rem]">
        <h3 className="head3-sb-30 text-white">🐨 호주 외않가? 호주에서만 만날 수 있는 귀요미들</h3>
        <div style={{ boxShadow: '8px 8px 30px rgba(0, 0, 0, 0.15)' }} className="flex h-[49.1rem] w-full">
          <div className="flex w-[42.3rem] flex-col items-center justify-center gap-[3.2rem] bg-white px-[2.8rem] py-[4.8rem]">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/WSPHoMyczIQ?si=ShX_yNyF0gm4ZbBr"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <div className="flex flex-col gap-[2.6rem]">
              <div className="flex flex-col gap-[1.1rem]">
                <p className="sub1-sb-20 text-gray800">귀여움이 세상을 구한다ㅣ호주 동물편 🐨</p>
                <p className="sub5-r-15 text-gray500">
                  👀 코알라? 캥거루? 쿼카?
                  <br />
                  그냥 귀엽기만 한 줄 알았지?!
                  <br />
                  지금 호주는 귀여움+자연+트렌드+감성
                  <br />다 되는 핵인싸 여행지
                </p>
              </div>
              <p className="body7-r-13 gray600">호주 여행 가보면 알게 돼요💛</p>
            </div>
          </div>

          {/* 중간 */}
          <div className="flex w-[42.3rem] bg-[url('./shared/assets/images/promotion_banner_middle_image.svg')] px-[2.8rem] pb-[4.6rem]">
            <div className="flex flex-col gap-[4.5rem] self-end">
              <div className="flex flex-col gap-[1.1rem]">
                <p className="sub1-sb-20 text-white">세상에서 가장 귀여운 동물 만나러 가기!</p>
                <p className="sub5-r-15 text-white">
                  #4~5월은 호주의 가을, 덥지도 춥지도 않아 여행 최적기
                  <br />
                  #성수기(12~2월 여름)보다 여유롭고 가성비도 GOOD
                  <br />
                  #손 위에 코알라 얹고 사진 한 컷 📸
                </p>
              </div>
              <p className="body7-r-13 text-white">호주에서만 만날 수 있는 귀요미들 보러가기🦘 &gt;</p>
            </div>
          </div>

          {/* 오른쪽 */}
          <div className="flex w-[29.3rem] flex-col items-center gap-[2.9rem] bg-white pt-[3.9rem] pb-[4.6rem]">
            <img src={bannerRightImage} alt="프로모션 배너 오른쪽 이미지" className="h-[20.9rem] w-[20.9rem]" />
            <div className="flex flex-col gap-[4.5rem]">
              <div className="flex flex-col gap-[1.1rem]">
                <p className="sub1-sb-20 text-gray800">🌏호주 여행 딱 좋은 이유!</p>
                <p className="sub5-r-15 text-gray500">
                  ✅ 대자연 속으로 '감성+힐링' 여행
                  <br />✅ 시드니 도시 감성도! 놓칠 수 없다
                  <br />✅ 호주 최대 축제! 비비드 시드니
                </p>
              </div>
              <p className="text-gray600 body7-r-13">📍 지금 핫한 호주여행 상품 보러가기 &gt;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionBanner;
