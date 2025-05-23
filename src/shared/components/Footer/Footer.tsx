import brandImg01 from '@/shared/assets/images/footerBrandImage01.png';
import brandImg02 from '@/shared/assets/images/footerBrandImage02.png';
import brandImg03 from '@/shared/assets/images/footerBrandImage03.png';
import brandImg04 from '@/shared/assets/images/footerBrandImage04.png';
import brandImg05 from '@/shared/assets/images/footerBrandImage05.png';
import brandImg06 from '@/shared/assets/images/footerBrandImage06.png';
import brandImg07 from '@/shared/assets/images/footerBrandImage07.png';
import brandImg08 from '@/shared/assets/images/footerBrandImage08.png';
import brandImg09 from '@/shared/assets/images/footerBrandImage09.png';
import arrowR from '@/shared/assets/icons/footerRightArrow.svg';
import arrowL from '@/shared/assets/icons/footerLeftArrow.svg';
import footerLine from '@/shared/assets/icons/footerLine.svg';
import footerHeadset from '@/shared/assets/icons/footerHeadset.svg';
import footerEcllipse from '@/shared/assets/icons/footerEllipse.svg';
import underline1 from '@/shared/assets/icons/footerUnderline1.svg';
import underline2 from '@/shared/assets/icons/footerUnderline2.svg';
import underline3 from '@/shared/assets/icons/footerUnderline3.svg';

const Footer = () => {
  return (
    <footer className="m-auto flex max-w-[150rem] flex-col px-[11.8rem] pt-[2.7rem] pb-[3.5rem]">
      {/* 글자들 */}
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="mb-[2rem] flex flex-row items-center">
            {/* 회사소개 */}
            <p className="text-gray500 body6-m-13">회사소개</p>
            <img src={footerLine} alt="구분선" className="mx-[1.3rem]"></img>
            <p className="text-gray500 body6-m-13">이용약관</p>
            <img src={footerLine} alt="구분선" className="mx-[1.3rem]"></img>
            <p className="text-gray500 body6-m-13">개인정보처리방침</p>
            <img src={footerLine} alt="구분선" className="mx-[1.3rem]"></img>
            <p className="text-gray500 body6-m-13">여행약관</p>
            <img src={footerLine} alt="구분선" className="mx-[1.3rem]"></img>
            <p className="text-gray500 body6-m-13">해외여행자보험</p>
            <img src={footerLine} alt="구분선" className="mx-[1.3rem]"></img>
            <p className="text-gray500 body6-m-13">마케팅제휴</p>
            <img src={footerLine} alt="구분선" className="mx-[1.3rem]"></img>
            <p className="text-gray500 body6-m-13">공식인증예약센터 검색</p>
            <img src={footerLine} alt="구분선" className="ml-[1.3rem]"></img>
          </div>
          {/* 하나투어~주소 */}
          <div className="mb-[0.8rem] flex flex-row items-center">
            <p className="text-gray500 sub6-r-12">(주)하나투어</p>
            <img src={footerLine} alt="구분선" className="mr-[2.4rem] ml-[1.3rem]"></img>
            <p className="text-gray500 sub6-r-12">대표 : 송미선</p>
            <img src={footerLine} alt="구분선" className="mr-[2.4rem] ml-[1.3rem]"></img>
            <p className="text-gray500 sub6-r-12">주소 : (03161) 서울특별시 종로구 인사동 5길 41</p>
            <img src={footerLine} alt="구분선" className="ml-[1.3rem]"></img>
          </div>
          {/* 사업자등록번호~등록관청 */}
          <div className="mb-[0.8rem] flex flex-row items-center">
            <p className="text-gray500 sub6-r-12">사업자등록번호 : 102-81-39440</p>
            <img src={footerLine} alt="구분선" className="mr-[2.4rem] ml-[1.3rem]"></img>
            <div>
              <p className="text-gray700 sub6-r-12">사업자정보확인</p>
              <img src={underline1} alt="사업자정보확인 강조 밑줄"></img>
            </div>
            <img src={footerLine} alt="구분선" className="mr-[2.4rem] ml-[1.3rem]"></img>
            <p className="text-gray500 sub6-r-12">통신판매업신고번호:종로01-1808호</p>
            <img src={footerLine} alt="구분선" className="mr-[2.4rem] ml-[1.3rem]"></img>
            <p className="text-gray500 sub6-r-12">관광사업자 등록번호 : 제1993-000008호</p>
            <img src={footerLine} alt="구분선" className="mr-[2.4rem] ml-[1.3rem]"></img>
            <p className="text-gray500 sub6-r-12">등록관청 : 서울특별시 종로구청</p>
            <img src={footerLine} alt="구분선" className="ml-[1.3rem]"></img>
          </div>
          {/* 개인번호보호책임자~이메일 */}
          <div className="mb-[0.8rem] flex flex-row items-center">
            <p className="text-gray500 sub6-r-12">개인정보 보호책임자 : 전준형</p>
            <img src={footerLine} alt="구분선" className="mr-[2.4rem] ml-[1.3rem]"></img>
            <p className="text-gray500 sub6-r-12">영업보증공세 15억 1천만원 가입 | 기획여행보증공채 7억원 가입</p>
            <img src={footerLine} alt="구분선" className="mr-[2.4rem] ml-[1.3rem]"></img>
            <p className="text-gray500 sub6-r-12">팩스 : 02-734-0392</p>
            <img src={footerLine} alt="구분선" className="mr-[2.4rem] ml-[1.3rem]"></img>
            <p className="text-gray500 sub6-r-12 mr-[0.4rem]">이메일 : </p>
            <div>
              <p className="text-gray800 sub6-r-12">15771233@hanatour.com</p>
              <img src={underline2} alt="이메일 강조 밑줄"></img>
            </div>
            <img src={footerLine} alt="구분선" className="mr-[2.4rem] ml-[1.3rem]"></img>
          </div>
          {/* 고객센터 */}
          <div className="flex flex-row items-center">
            <img src={footerHeadset} alt="고객센터 헤드셋 아이콘"></img>
            <p className="body6-m-13 text-gray600 ml-[0.4rem]">고객센터</p>
            <p className="body6-m-13 text-gray600 mr-[2.1rem] ml-[1.8rem]">1577-1233</p>
            <img src={footerHeadset} alt="고객센터 헤드셋 아이콘"></img>
            <p className="body6-m-13 text-gray600 ml-[0.4rem]">해외항공권문의</p>
            <p className="body6-m-13 text-gray600 ml-[1.8rem]">1899-1833</p>
          </div>
          {/* 신고 어쩌구리리 */}
          <div className="py-[1.4rem]">
            <div className="flex flex-row items-center">
              <img src={footerEcllipse} className="mr-[0.4rem] h-[0.4rem] w-[0.4rem]"></img>
              <p className="body6-m-13 text-gray500">
                부득이한 사정에 의해 여행일정이 변경되는 경우 사전 동의를 받습니다.
              </p>
            </div>
            <div className="flex flex-row items-center">
              <img src={footerEcllipse} className="mr-[0.4rem] h-[0.4rem] w-[0.4rem]"></img>
              <div>
                <p className="body6-m-13 text-gray500">
                  하나투어는 개별 항공권 및 일부 여행상품에 대하여 통신판매중개자의 지위를 가지며, 해당 상품의 정보 및
                  거래 등에 관한 책임은 판매자에게 있습니다.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <img src={footerEcllipse} className="mr-[0.4rem] h-[0.4rem] w-[0.4rem]"></img>
              <p className="body6-m-13 text-gray500">
                예금주 하나투어가 아닌 계좌(개인, 대리점 등)로 입금하실 경우 당사에 대한 유효한 자금이 아니며, 당사는
                책임지지 않습니다.
              </p>
            </div>
            <p className="body6-m-13 text-gray500 ml-[0.9rem]">
              하나투어 가상 계좌가 아닌 다른 계좌(개인, 대리점 등)에 대한 입금 유도가 있는 경우, 반드시 입금 전에
              하나투어 고객센터로 문의/신고 하여 주시기 바랍니다.
            </p>
          </div>
        </div>

        {/* 하나은행 구매안전 서비스 */}
        <div className="ml-[4.3rem] flex flex-col">
          <p className="sub6-r-12 mb-[0.8rem] text-black">하나은행 구매안전 서비스</p>
          <p className="sub6-r-12 text-gray500">고객님은 안전거래를 위해 현금으로 결제시</p>
          <p className="sub6-r-12 text-gray500 mb-[0.8rem]">구매안전서비스를 이용하실 수 있습니다.</p>
          <div>
            <p className="sub6-r-12 text-gray500">서비스가입사실 확인</p>
            <img src={underline3} alt="서비스가입사실 확인 강조 밑줄"></img>
          </div>
        </div>
      </div>

      {/* 저작권 */}
      <p className="sub6-r-12 text-gray500 py-[0.8rem]">COPYRIGHTⓒHANATOUR SERVICE INC. ALL RIGHTS RESERVED</p>
      {/* 브랜드 이미지 */}
      <div className="flex flex-row pt-[1.3rem]">
        <div className="flex flex-row gap-[7.6rem]">
          <div className="flex flex-row items-center gap-[1.8rem]">
            <img src={brandImg01} className="w-[4.6rem]" alt="대한민국100대 브랜드 로고 사진"></img>
            <div>
              <p className="sub6-r-12 text-gray500">대한민국</p>
              <p className="sub6-r-12 text-gray500">100대 브랜드</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-[1.8rem]">
            <img
              src={brandImg02}
              className="w-[4.6rem]"
              alt="한국능률협회선정 21년연속(2005~2025) 브랜드파워1위 로고 사진"></img>
            <div>
              <p className="sub6-r-12 text-gray500">한국능률협회선정</p>
              <p className="sub6-r-12 text-gray500">21년연속(2005~2025)</p>
              <p className="sub6-r-12 text-gray500">브랜드파워1위</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-[1.8rem]">
            <img src={brandImg03} className="w-[4.6rem]" alt="소비자중심 공정가게위원회 로고 사진"></img>
            <div>
              <p className="sub6-r-12 text-gray500">소비자중심경영 (CCM)</p>
              <p className="sub6-r-12 text-gray500">7 회 연속 인증 (2012~2024)</p>
            </div>
          </div>
        </div>
        <div className="mr-[1rem] ml-[2.4rem] flex flex-col gap-0">
          <img src={arrowL} alt="왼쪽을 가리키는 화살표"></img>
          <img src={arrowR} alt="오른쪽을 가리키는 화살표"></img>
        </div>

        <div className="flex flex-row gap-[2.1rem]">
          <img src={brandImg04} className="h-[4.6rem] w-[4.6rem]" alt="국무총리상 대한민국 브랜드 대상 로고 사진"></img>
          <img
            src={brandImg05}
            className="h-[4.6rem] w-[4.6rem]"
            alt="국외여행상품 정보제공 표준안 참여 여행사 로고"></img>
          <img src={brandImg06} className="h-[4.6rem] w-[4.6rem]" alt="ePrivacy 로고 사진"></img>
          <img src={brandImg07} className="h-[4.6rem] w-[8.8rem]" alt="소비자중심 공정가게위원회 로고 사진"></img>
          <img src={brandImg08} className="h-[4.6rem] w-[4.6rem]" alt="정보보호 관리체계 인증 로고 사진"></img>
          <img src={brandImg09} className="h-[4.6rem] w-[4.6rem]" alt="현금영수증 의무방행가맹점 로고 사진"></img>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
