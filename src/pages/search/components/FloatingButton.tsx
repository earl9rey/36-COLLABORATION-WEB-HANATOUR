import arrowDownIcon from '@/shared/assets/icons/arrowDown_lightgray.svg';

const FloatingButton = () => {
  return (
    <div className="border-gray600 bg-gray200 body7-r-13 fixed top-[30rem] right-[0rem] bottom-[1.4rem] flex h-[7.75rem] w-[11.6rem] flex-col items-center justify-center border-2">
      <div className="flex items-center justify-between py-[1.4rem]">
        최근 본 상품(1)
        <img src={arrowDownIcon} alt="arrowDownIcon" className="p-[0.3rem]" />
      </div>
      <div className="bg-gray400 h-[0.1rem] w-[11.6rem]"></div>
      <div className="py-[0.6rem]">▲ TOP</div>
    </div>
  );
};

export default FloatingButton;
