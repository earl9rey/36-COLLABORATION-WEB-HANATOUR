import brandImg01 from '@/shared/assets/images/footerBrandImage01.png';
import brandImg02 from '@/shared/assets/images/footerBrandImage02.png';
import brandImg03 from '@/shared/assets/images/footerBrandImage03.png';
import brandImg04 from '@/shared/assets/images/footerBrandImage04.png';
import brandImg05 from '@/shared/assets/images/footerBrandImage05.png';
import brandImg06 from '@/shared/assets/images/footerBrandImage06.png';
import brandImg07 from '@/shared/assets/images/footerBrandImage07.png';
import brandImg08 from '@/shared/assets/images/footerBrandImage08.png';
import brandImg09 from '@/shared/assets/images/footerBrandImage09.png';

const Footer = () => {
  return (
    <footer className="flex flex-col pt-[2.7rem] pr-[11.8rem] pb-[3.5rem] pl-[11.4rem]">
      {/* 글자들 */}
      <div></div>
      {/* 저작권 */}
      <p className="sub6-r-12 text-gray500">COPYRIGHTⓒHANATOUR SERVICE INC. ALL RIGHTS RESERVED</p>
      {/* 브랜드 이미지 */}
      <div className="flex flex-row">
        <div className="flex flex-row gap-[7.6rem]">
          <div className="flex flex-row gap-[1.8rem]">
            <img src={brandImg01} className="w-[4.6rem]"></img>
            <p className="sub6-r-12 text-gray500">대한민국 100대 브랜드</p>
          </div>
          <div>
            <img src={brandImg02} className="w-[4.6rem]"></img>
          </div>
          <div>
            <img src={brandImg03} className="w-[4.6rem]"></img>
          </div>
        </div>
        <img src={brandImg04} className="w-[4.6rem]"></img>
        <img src={brandImg05} className="w-[4.6rem]"></img>
        <img src={brandImg06} className="w-[4.6rem]"></img>
        <img src={brandImg07} className="w-[4.6rem]"></img>
        <img src={brandImg08} className="w-[4.6rem]"></img>
        <img src={brandImg09} className="w-[4.6rem]"></img>
      </div>
    </footer>
  );
};

export default Footer;
