interface CardBenefitPropTypes {
  image: string;
  subtext: string;
  title: string;
}

const CardBenefit = ({ image, subtext, title }: CardBenefitPropTypes) => {
  return (
    <div className="flex h-[26.5rem] w-[26.6rem] flex-col">
      <img className="object-cover" src={image} alt={title}></img>
      <p className="sub5-r-15 text-gray500 mt-[2.0rem]">{subtext}</p>
      <p className="head7-m-17 text-gray600 mt-[0.6rem]">{title}</p>
    </div>
  );
};

export default CardBenefit;
