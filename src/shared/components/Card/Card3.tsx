type TravelCard3Props = {
  image: string;
  packageName: string;
  title: string;
  price: string;
};

const Card3 = ({ image, packageName, title, price }: TravelCard3Props) => {
  return (
    <div className="h-[32.9rem] w-[26.9rem]">
      <img src={image} alt={title}></img>
      <div className="mt-[2.8rem]">
        <p className="text-blue200 body7-r-13">{packageName}</p>
        <p className="head7-m-17 my-[0.5rem]">{title}</p>
        <div className="flex flex-row items-center">
          <p className="text-gray800 head6-sb-22">{price}</p>
          <p className="text-gray800 body2-r-17">원</p>
        </div>
      </div>
    </div>
  );
};

export default Card3;
