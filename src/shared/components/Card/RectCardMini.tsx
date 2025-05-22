interface RectCardMiniPropTypes {
  image: string;
  title: string;
  countryName: string;
  price: string;
}

const RectCardMini = ({ image, title, countryName, price }: RectCardMiniPropTypes) => {
  return (
    <div className="flex h-[9.8rem] w-[30.4rem] flex-row">
      <img className="h-[9.8rem] w-[9.7rem] object-cover" src={image} alt={title}></img>
      <div className="ml-[1.9rem]">
        <p className="body3-sb-15 text-gray800 mt-[0.3rem]">#{title}</p>
        <p className="body5-r-14 text-gray500 mt-[0.5rem]">{countryName}</p>
        <div className="mt-[1.1rem] mb-[2.3rem] flex flex-row items-center">
          <p className="body3-sb-15 text-gray800">{price}</p>
          <p className="body7-r-13 text-gray800">원~</p>
        </div>
      </div>
    </div>
  );
};

export default RectCardMini;
