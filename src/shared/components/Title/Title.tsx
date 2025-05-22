interface TitlePropTypes {
  title: string;
  subTitle: string;
}

const Title = ({ title, subTitle }: TitlePropTypes) => {
  return (
    <div className="flex w-full flex-col pt-[6rem]">
      <p className="head4-sb-26 text-gray800">{title}</p>
      <p className="sub5-r-15 text-gray500 mt-[0.5rem]">{subTitle}</p>
    </div>
  );
};

export default Title;
