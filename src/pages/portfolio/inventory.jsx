import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import Footer from "../../components/home-page/home-5/footer";
import PortfolioTopTitle from "../../components/portfolio/PortfolioTopTitle";
import PortfolioGallery2 from "../../components/portfolio/PortfolioGallery2";

import CallToAction from "../../components/portfolio/CallToAction";

const PortfolioV2 = () => {
  return (
    <>
      <Seo pageTitle="Inventory" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <PortfolioTopTitle />

      {/* <!-- 
        =============================================
        Portfolio Gallery Three
        ============================================== 
        --> */}
      <PortfolioGallery2 />

      {/*
			=====================================================
				Fancy Short Banner Twelve
			=====================================================
			*/}
      <CallToAction />

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <Footer />
    </>
  );
};

export default PortfolioV2;
