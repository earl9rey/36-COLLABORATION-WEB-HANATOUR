import advertisementImage from '@/shared/assets/images/advertisement_banner.svg';

const AdvertisementBanner = () => {
  return (
    <div className="mx-auto flex flex-col items-center gap-[1.4rem]">
      <img src={advertisementImage} alt="" className="w-[113.8rem]" />
      <div className="flex gap-[0.7rem]">
        <div className="bg-gray600 h-[0.8rem] w-[1.6rem] rounded-[1rem]"> </div>
        <div className="bg-gray300 h-[0.8rem] w-[0.8rem] rounded-[50%]"></div>
      </div>
    </div>
  );
};

export default AdvertisementBanner;
