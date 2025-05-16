import closeIcon from '@/shared/assets/icons/closeIcon.svg';
import chevronRightIcon from '@/shared/assets/icons/chevronRightIcon.svg';

const DestinationModal = () => {
  return (
    <div className="border-gray800 flex w-[68.3rem] flex-col items-start border">
      <div className="flex flex-col items-start gap-[1.7rem] self-stretch px-[2.6rem] py-[3.1rem]">
        <div className="w-full">
          <div className="border-b-gray300 flex items-center justify-between border-b pb-[1.4rem]">
            <p className="sub3-sb-15 text-gray800">최근 검색 지역</p>
            <button className="text-gray500 sub6-r-12">전체삭제</button>
          </div>
          <div className="grid w-full grid-cols-2 gap-x-[2.7rem] gap-y-[1rem]">
            <div className="flex w-full items-center justify-between py-[1.2rem]">
              <p className="text-gray800 sub3-sb-15">호놀룰루</p>
              <img src={closeIcon} alt="X 아이콘" className="aspect-[1/1] h-[1.5rem] w-[1.5rem]" />
            </div>
            <div className="flex w-full items-center justify-between py-[1.2rem]">
              <p className="text-gray800 sub3-sb-15">베트남</p>
              <img src={closeIcon} alt="X 아이콘" className="aspect-[1/1] h-[1.5rem] w-[1.5rem]" />
            </div>
            <div className="flex w-full items-center justify-between py-[1.2rem]">
              <p className="text-gray800 sub3-sb-15">나트랑</p>
              <img src={closeIcon} alt="X 아이콘" className="aspect-[1/1] h-[1.5rem] w-[1.5rem]" />
            </div>
            <div className="flex w-full items-center justify-between py-[1.2rem]">
              <p className="text-gray800 sub3-sb-15">다낭</p>
              <img src={closeIcon} alt="X 아이콘" className="aspect-[1/1] h-[1.5rem] w-[1.5rem]" />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="sub3-sb-15 text-gray800 pb-[1.4rem]">주요도시</div>
          <div className="flex w-full">
            <div className="border-gray800 sub3-sb-15 text-gray800 flex w-1/2 items-center justify-center border bg-white py-[1.2rem]">
              해외
            </div>
            <div className="border-gray300 sub3-sb-15 text-gray800 bg-gray100 flex w-1/2 items-center justify-center border py-[1.2rem]">
              국내
            </div>
          </div>
        </div>
        <div className="border-gray300 flex w-full border">
          <div className="border-gray300 flex w-[19rem] flex-col border-r">
            <div className="body4-sb-14 text-purple100 border-gray300 flex items-center border-b bg-white px-[1.2rem] py-[1.6rem]">
              동남아/대만/서남아
            </div>
            <div className="body5-r-14 text-gray500 bg-gray100 border-gray300 flex items-center border-b px-[1.2rem] py-[1.6rem]">
              일본
            </div>
            <div className="body5-r-14 text-gray500 bg-gray100 border-gray300 flex items-center border-b px-[1.2rem] py-[1.6rem]">
              중국/홍콩/마카오/몽골/중앙아시아
            </div>
          </div>
          <div className="border-gray300 border-r px-[1.4rem] py-[1.1rem]">
            <div className="border-gray300 grid-auto-rows-[1.8rem] grid w-[27rem] grid-cols-2 gap-[2.4rem]">
              <div className="flex h-[1.8rem] items-center justify-between">
                <p className="body5-r-14 text-gray800">베트남</p>
                <img src={chevronRightIcon} alt="오른쪽 화살표 아이콘" className="aspect-[1/1] h-[0.9rem] w-[0.6rem]" />
              </div>
              <div className="flex h-[1.8rem] items-center justify-between">
                <p className="body5-r-14 text-gray800">태국</p>
                <img src={chevronRightIcon} alt="오른쪽 화살표 아이콘" className="aspect-[1/1] h-[0.9rem] w-[0.6rem]" />
              </div>
              <div className="flex h-[1.8rem] items-center justify-between">
                <p className="body5-r-14 text-gray800">필리핀</p>
                <img src={chevronRightIcon} alt="오른쪽 화살표 아이콘" className="aspect-[1/1] h-[0.9rem] w-[0.6rem]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[2.4rem] pt-[1.1rem] pr-[3.6rem] pl-[1.6rem]">
            <div className="flex gap-[0.2rem]">
              <p className="body5-r-14">다낭</p>
              <div className="border-purple100 text-purple100 sub6-r-12 flex h-[1.8rem] w-[3.2rem] items-center justify-center rounded-[2px] border">
                HOT
              </div>
            </div>
            <div className="flex gap-[0.2rem]">
              <p className="body5-r-14">나트랑</p>
              <div className="border-purple100 text-purple100 sub6-r-12 flex h-[1.8rem] w-[3.2rem] items-center justify-center rounded-[2px] border">
                HOT
              </div>
            </div>
            <div className="flex gap-[0.2rem]">
              <p className="body5-r-14">푸꾸옥</p>
              <div className="border-purple100 text-purple100 sub6-r-12 flex h-[1.8rem] w-[3.2rem] items-center justify-center rounded-[2px] border">
                HOT
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray100 flex w-full justify-end py-[0.8rem] pr-[1.8rem]">
        <button className="text-gray500 body7-r-13">닫기</button>
      </div>
    </div>
  );
};

export default DestinationModal;
