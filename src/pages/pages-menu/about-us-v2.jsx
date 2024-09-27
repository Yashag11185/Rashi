import Seo from "../../components/common/Seo";
import Header5 from "../../components/header/Header5";
import Quote from "../../components/home-page/home-5/Quote";
import About from "../../components/home-page/home-5/about";
import CallToActions from "../../components/services/CallToActions";
import Blog from "../../components/home-page/home-5/Blog";
import Footer from "../../components/home-page/home-5/footer";
import Team5 from "../../components/team/Team5";
import { Link } from "react-router-dom";
import Counter2 from "../../components/about/Counter2";
import AboutCeo from "../../components/about/AboutCeo";
import Block from "../../components/about/Block";

const AboutUsV2 = () => {
  return (
    <>
      <Seo pageTitle="About Us v2" />

      {/* <!--  =============================================
        Theme Header3 Menu
        ============================================== 	--> */}
      <Header5 />

      {/* 
        =============================================
        Theme Inner Banner
        ============================================== 
        */}
      <div className="inner-banner-one text-center">
        <div className="container">
          <h2 className="title fw-500 text-white">About Us</h2>
        </div>
      </div>
      {/* /.inner-banner-one */}

      {/* 
        =============================================
        Feature Section Forty Six
        ============================================== 
        */}
      <div className="fancy-feature-two position-relative pt-150 lg-pt-90">
        <div className="container">
          <div className="row align-items-center">
            <AboutCeo />
          </div>
        </div>{" "}
        <div className="container">
          <div className="row justify-content-center pt-60 md-pt-40">
            <Counter2 />
          </div>
        </div>
      </div>

      {/* 
        =============================================
        Feature Section Forty Eight
        ============================================== 
        */}
      <div className="fancy-feature-fiftyFour p-30 mt-75 lg-mt-90">
        <div className="bg-wrapper position-relative zn2 pt-140 lg-pt-60 pb-140 lg-pb-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <div className="title-style-one mt-30">
                  <div className="sc-title text-uppercase">Why us?</div>
                  <h2 className="main-title fw-bold tx-dark">
                    Why <span>choose</span> Us.
                  </h2>
                </div>{" "}
                <p className="text-lg mt-40 lg-mt-20">
                We offer expert assistance to ensure you find the perfect granite for your needs.
                </p>
                {/* <img
                  src="/images/shape/shape_179.svg"
                  alt="icon"
                  className="lazy-img d-none d-lg-block mt-80"
                /> */}
              </div>

              <div className="col-lg-7 ms-auto">
                <div className="row gx-xxl-5">
                  <Block />
                </div>
              </div>
            </div>
          </div>
          <img
            src="/images/shape/shape_11.svg"
            alt="icon"
            className="lazy-img shapes shape-one"
          />
          <img
            src="/images/shape/shape_13.svg"
            alt="icon"
            className="lazy-img shapes shape-two"
          />
          <img
            src="/images/shape/shape_10.svg"
            alt="icon"
            className="lazy-img shapes shape-three"
          />
          <img
            src="/images/shape/shape_12.svg"
            alt="icon"
            className="lazy-img shapes shape-four"
          />
        </div>{" "}
      </div>
      {/*
        =====================================================
        Team Section Three
        =====================================================
        */}
      <div className="team-section-four mt-75 mb-75 lg-mt-90">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xxl-6 col-md-7" data-aos="fade-right">
              <div className="title-style-one text-center text-md-start">
                <div className="sc-title text-uppercase">OUR COLLECTION</div>
                <h2 className="main-title fw-bold tx-dark m0">
                Explore our stunning  granite varieties.
                </h2>
              </div>{" "}
              {/* /.title-style-one */}
            </div>
            <div
              className="col-xxl-6 col-md-5 text-center text-md-end"
              data-aos="fade-left"
            >
              <a href="/portfolio/inventory" className="btn-one fw-500 sm-mt-30">
                View Collection
              </a>
            </div>
          </div>{" "}
          {/* /.row */}
          <div className="wrapper border-bottom pt-80 lg-pt-50">
            <div className="row gx-xxl-5">
              <Team5 />
            </div>
            {/* /.row */}
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.team-section-three */}

      {/*
        =====================================================
        Feedback Section Fourteen
        =====================================================
        */}
      {/* <div className="feedback-section-fourteen position-relative zn2">
        <div className="container">
          <div className="line-bg-wrapper position-relative zn2 pt-250 pb-180 lg-pt-120 lg-pb-80">
            <div className="row">
              <div className="col-md-6" data-aos="fade-right">
                <div className="title-style-five">
                  <h2 className="main-title fw-500 tx-dark">
                    Check our client lovely words.
                  </h2>
                </div>
                <div className="mt-120 lg-mt-40 ps-xl-5 ms-xl-5">
                  <div className="feedback_slider_eleven">
                    <Testimonial />
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-5 col-md-6 ms-auto">
                <div
                  className="img-holder position-relative mt-25"
                  data-aos="fade-left"
                >
                  <img
                    src="/images/media/img_84.jpg"
                    alt="shape"
                    className="lazy-img ms-auto"
                  />

                  <div className="rating-box bg-black text-white d-flex flex-column justify-content-center align-items-center">
                    <strong className="fw-500">4.8</strong>
                    <span>avg rating</span>
                  </div>

                  <img
                    src="/images/shape/shape_163.svg"
                    alt="shape"
                    className="lazy-img shapes shape-one"
                  />
                  <img
                    src="/images/shape/shape_168.svg"
                    alt="shape"
                    className="lazy-img shapes shape-two"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/images/shape/shape_169.svg"
          alt="shape"
          className="lazy-img shapes shape-three"
        />
      </div> */}

    
      {/* <div className="blog-section-six position-relative zn2 pt-150 pb-200 lg-pt-90 lg-pb-100">
        <div className="container">
          <div className="position-relative">
            <div className="title-style-five text-center text-sm-start mb-30 lg-mb-10">
              <h2 className="main-title fw-500 tx-dark">Our Blog</h2>
            </div>
          

            <div className="row gx-xxl-5">
              <Blog />
            </div>
            

            <div className="btn-holder text-center">
              <div className="btn-eighteen position-relative d-inline-block tx-dark">
                <Link to="/blog/blog-v1" className="fw-500 tran3s">
                  Check our all news <i className="fa-solid fa-angle-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/images/shape/shape_163.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
      </div> */}

{/* <CallToActions /> */}
      <Footer />
    </>
  );
};

export default AboutUsV2;
