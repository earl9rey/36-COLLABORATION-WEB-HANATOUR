import { useCards } from '@/pages/home/apis/getCardsQuery';
import CardContainer from '@/shared/components/Card/CardContainer';
import CardBenefit from '@/shared/components/Card/CardBenefit'; // 카드 혜택
import CircleCardS from '@/shared/components/Card/CircleCardS'; // 원형 작은 카드
import CircleCardL from '@/shared/components/Card/CircleCardL'; // 원형 큰 카드
import RectCardBottom from '@/shared/components/Card/RectCardBottom'; // 추천여행 카드들
import RectCardFood from '@/shared/components/Card/RectCardFood'; // 미식탐방 카드들
import RectCardTop from '@/shared/components/Card/RectCardTop'; // 할인런 카드들
import Filter from '@/shared/components/Filter/Filter'; // 미식 탐방 필터 버튼
import Title from '@/shared/components/Title/Title'; // 제목 영역들들
import { useState } from 'react';
import { useDiscountRun } from './apis/getDiscountRunQuery';
import { useFood } from './apis/getFoodQuery';
import { useMycountry } from './apis/getMycountryQuery';
import { useRecommend } from './apis/getRecommendQuery';
import { useTimedeal } from './apis/getTimedealQuery';
import TopBanner from './components/TopBanner';
import SingarporeBanner from './components/SingaporeBanner'; // 싱가포르 배너
import PromotionBanner from './components/PromotionBanner';
import AdvertisementBanner from './components/AdvertisementBanner';

const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('일본'); // 기본값 선택 가능
  const { data: cards, isLoading, isError } = useCards();
  const { data: timedeals } = useTimedeal();
  const { data: recommends } = useRecommend();
  const { data: mycountrys } = useMycountry();
  const { data: foods } = useFood(selectedCountry);
  const { data: discountruns } = useDiscountRun();

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생!</p>;

  return (
    <div className="flex flex-col gap-[1rem]">
      <TopBanner />
      <div className="flex w-full flex-col gap-[1rem] px-[16rem]">
        <Title title={'계속되는 여행 할인런🏃‍♀️🏃‍♂️'} subTitle={'최대 25%, 위클리 릴레이 세일'} />
        <CardContainer>
          {discountruns?.result.map((discountrun, index) => (
            <RectCardTop
              key={index}
              image={discountrun.imageUrl}
              title={discountrun.title}
              tagName1={discountrun.tagName1}
              tagName2={discountrun.tagName2}
              tagName3={discountrun.tagName3}
              price={discountrun.price}
              feature1={discountrun.bottomTag1}
              feature2={discountrun.bottomTag2}
            />
          ))}
        </CardContainer>
        <Title title={'📣지금이 딱 예약할 때!'} subTitle={'선착순 타임특가⏰부터 다양한 혜택 상품 모음🎁까지!'} />
        <CardContainer>
          {timedeals?.result.map((timedeal, index) => (
            <RectCardTop
              key={index}
              image={timedeal.imageUrl}
              title={timedeal.title}
              tagName1={timedeal.tagName1}
              tagName2={timedeal.tagName2}
              tagName3={timedeal.tagName3}
              price={timedeal.price}
              feature1={timedeal.bottomTag1}
              feature2={timedeal.bottomTag2}
            />
          ))}
        </CardContainer>
        <AdvertisementBanner />
        <div className="relative mt-[4rem] mb-[2rem] flex h-[57rem] items-center">
          <div className="absolute h-[53.7rem] w-[41.2rem] bg-[url('./shared/assets/images/food_banner_image.svg')] pt-[6.6rem] pl-[5.7rem]">
            <p className="head1-sb-36 flex flex-col gap-[0.2rem] text-white">
              <span>미식 탐방</span>
              <span>맛있는</span>
              <span>여행</span>
            </p>
            <div className="flex flex-col items-start gap-[1.1rem] pt-[2.6rem]">
              <Filter
                text="편의점마저 맛난, 일본🍱"
                country="일본"
                onClick={setSelectedCountry}
                selected={selectedCountry}
              />
              <Filter
                text="식도락 여행지🍜 동남아지!"
                country="동남아"
                onClick={setSelectedCountry}
                selected={selectedCountry}
              />
              <Filter
                text="요리대가🧑‍🍳 중국음식 탐방기"
                country="중국"
                onClick={setSelectedCountry}
                selected={selectedCountry}
              />
              <Filter
                text="유럽도 빠질 수 없지?!🍕"
                country="유럽"
                onClick={setSelectedCountry}
                selected={selectedCountry}
              />
            </div>
          </div>
          <div className="absolute ml-[30rem] flex justify-between gap-[2.2rem]">
            {foods?.result.map((food, index) => {
              return (
                <RectCardFood
                  key={index}
                  image={food.imageUrl}
                  title={food.title}
                  hashTag1={food.tag1}
                  hashTag2={food.tag2}
                  hashTag3={food.tag3}
                  price={food.price}
                />
              );
            })}
          </div>
        </div>
        <Title title={'고객님만을 위한 추천여행'} subTitle={''} />
        <CardContainer>
          {recommends?.result.map((recommend, index) => (
            <RectCardBottom
              key={index}
              image={recommend.imageUrl}
              title={recommend.titleAndTags}
              price={recommend.price}
            />
          ))}
        </CardContainer>
      </div>
      <SingarporeBanner />
      <div className="flex w-full flex-col gap-[1rem] px-[16rem]">
        <Title title={'내나라 구석구석'} subTitle={''} />
        <CardContainer>
          {mycountrys?.result.map((mycountry, index) =>
            index === 2 ? (
              <CircleCardL
                key={index}
                image={mycountry.imageUrl}
                title={mycountry.title}
                hashTag={mycountry.description}
                subText={''}
              />
            ) : (
              <CircleCardS
                key={index}
                image={mycountry.imageUrl}
                title={mycountry.title}
                subText={mycountry.description}
              />
            )
          )}
        </CardContainer>
      </div>
      <PromotionBanner />
      <div className="flex w-full flex-col gap-[1rem] px-[16rem]">
        <Title title={'🎼 쏠쏠한 혜택, 하나투어가 한 번 더 알려드려요~!'} subTitle={''} />
        <CardContainer>
          {cards?.result.map((card, index) => (
            <CardBenefit key={index} image={card.imageUrl} title={card.cardName} subtext={card.description} />
          ))}
        </CardContainer>
      </div>
    </div>
  );
};

export default Home;
