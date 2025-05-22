import singapore from '@/shared/assets/images/imageMiddleBannerAd.png';
import ad1 from '@/shared/assets/images/imageMiddleBannerAd2.png';
import ad2 from '@/shared/assets/images/imageMiddleBannerAd3.png';
import RectCardMini from '@/shared/components/Card/RectCardMini';

const SingarporeBanner = () => {
  return (
    <div className="bg-skyblue100 flex h-[69.6rem] flex-row gap-[4.8rem] px-[11.4rem] py-[9.3rem]">
      <img src={singapore} className="w-[55.9rem]"></img>
      <div className="flex flex-col">
        {/* 텍스트 묶음 */}
        <div className="flex flex-col">
          <p className="sub3-sb-15 text-gray600">핵심 명소부터 센토사 섬까지 다채로운 그 곳!</p>
          <p className="head3-sb-30 text-gray600 mt-[1.6rem] mb-[2.4rem]">매력넘치는 싱가포르 🎨</p>
          <div className="body5-r-14 text-gray500">
            <div className="mb-[1.6rem]">
              <p>낮에는 싱그러움 VS 밤에는 화려함</p>
              <p>자연과 도시가 공존하는, 안전하고 다양한 매력 여행지</p>
            </div>

            <div className="mb-[1.6rem]">
              <p>#싱가포르 메인 스트릿, 쇼핑의 거리 오차드 로드</p>
              <p>#도심 속 자연을 만끽하기 좋은 센토사 섬에서 액티비티를!</p>
              <p>#떠오르는 명소, 가든스 바이 더 베이에서 슈퍼트리쇼~</p>
            </div>

            <div>
              <p>쇼핑, 맛집, 액티비티 다 준비되어 있는 곳</p>
              <p>홀로여행, 가족여행 and 친구여행도 OKAY!</p>
            </div>
          </div>
        </div>

        {/* 카드 묶음 */}
        <div className="mt-[3.2rem] flex flex-col gap-[1.6rem]">
          <RectCardMini
            image={ad1}
            title="#1일자유 or 전일관광 #완전특가"
            countryName="싱가포르 5일"
            price="699,900"></RectCardMini>
          <RectCardMini
            image={ad2}
            title="#NO쇼핑 #NO팁 #스타가이드"
            countryName="[하나팩 2.0] 싱가포르 5일"
            price="1,299,900"></RectCardMini>
        </div>
      </div>
    </div>
  );
};

export default SingarporeBanner;
