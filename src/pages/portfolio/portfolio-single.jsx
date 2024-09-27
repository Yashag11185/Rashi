import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import Footer from "../../components/home-page/home-5/footer";
import SocialShare from "../../components/portfolio/portfolio-details/SocialShare";
import ProjectDetails from "../../components/portfolio/portfolio-details/ProjectDetails";
import ProjectSlide from "../../components/portfolio/portfolio-details/ProjectSlide";
import CallToAction from "../../components/portfolio/CallToAction";
import PortfolioGallery from "../../components/portfolio/portfolio-details/PortfolioGallery";
import Modal from "../../components/modal";
import { useEffect, useState } from "react";
import items from "../../data/portfolio"
import portfolioData from "../../data/portfolio";
import PortfolioDetailsTitle from "../../components/portfolio/portfolio-details/PortfolioDetailsTitle";
import { useParams } from "react-router-dom";

const DynamicPortfolioDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [portfolio, setPortfolio] = useState({});
  let params = useParams();
  const id = params.id;
  const [activeTab, setActiveTab] = useState('specifications');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setPortfolio(portfolioData.find((item) => item.id == id));

    return () => { };
  }, [id]);

  return (
    <>
      <Seo pageTitle="Portfolio Details" />
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

      {/* <div className="fancy-feature-fiftyOne position-relative mt-200">
      <div className="container">
        <div className="row">
          <div className="col-lg-7" data-aos="fade-right">
            <div className="title-style-five mb-65 lg-mb-40">
              <div className="sc-title-two fst-italic position-relative">
                {portfolio?.tag}
              </div>
              <h2 className="main-title fw-500 tx-dark">{portfolio?.name}</h2>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/images/shape/shape_172.svg"
        alt="shap"
        className="lazy-img shapes shape-two"
      />
      <img
        src="/images/shape/shape_175.svg"
        alt="shap"
        className="lazy-img shapes shape-three"
      />
    </div> */}


      {/* 
			=============================================
				Portfolio Details Two
			============================================== 
			*/}
      <div className="portfolio-details-two pt-20 mt-200 pb-50 lg-pb-10 md-pt-10">
        <div className="project-desctiption">
          <div className="container">
            <div className="row">
              <div className="col-lg-8" data-aos="fade-right">
                <ProjectSlide slide={portfolio} />
              </div>

              <div className="col-lg-4" data-aos="fade-left">
                <div className="sidebar ms-xl-5">
                  <h1 className="main-title fw-500 tx-dark">{portfolio?.name}</h1>
                  <p className="border-bottom pb-15  lg-pb-20">
                    <div className="title-style-five  lg-mb-40">
                      <div className="sc-title-two fst-italic position-relative">
                        {portfolio?.tag}
                      </div>
                    </div>

                  </p>
                  <div className="row">
                    <ProjectDetails details={portfolio} />
                  </div>

                  <div className="request-quote-btn">
                    <button
                      className="btn"
                      style={{ background: '#e7bd74', color: 'white' }}
                      onClick={() => setIsModalOpen(true)}
                    >
                      Request A Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-80">
              <div className="col-md-12">
                <div className="responsive-tabs-wrapper">
                  <div className="responsive-tabs responsive-tabs--enabled">
                    <ul className="responsive-tabs__list" role="tablist">
                      <li
                        className={`responsive-tabs__list__item ${activeTab === 'specifications' ? 'responsive-tabs__list__item--active' : ''}`}
                        onClick={() => handleTabClick('specifications')}
                        role="tab"
                        aria-controls="tablist1-panel1"
                        tabIndex="0"
                      >
                        Product Specifications
                      </li>
                      <li
                        className={`responsive-tabs__list__item ${activeTab === 'packing' ? 'responsive-tabs__list__item--active' : ''}`}
                        onClick={() => handleTabClick('packing')}
                        role="tab"
                        aria-controls="tablist1-panel2"
                        tabIndex="0"
                      >
                        Quantity
                      </li>
                      
                    </ul>

                    <div
                      id="tablist1-panel1"
                      className={`responsive-tabs__panel ${activeTab === 'specifications' ? 'responsive-tabs__panel--active' : ''}`}
                      aria-hidden={activeTab !== 'specifications'}
                      role="tabpanel"
                      aria-labelledby="tablist1-tab1"
                    >
                      <div className="row product-specifications mt-10">
                        <div className="col-md-6">
                          <div className="spec-head">
                            <h5>Info:</h5>
                            <table>
                              <tbody>
                                <tr><th>Thickness</th><td>16 mm, 18 mm, 20 mm, 25 mm, 30 mm Available</td></tr>
                                <tr><th>Slab Sizes</th><td>	Cutter Size available from Length- 7ft to 10ft and Height- 2.5ft to 3ft</td></tr>
                                <tr><th>Finishes</th><td>Leather, Flamed, Brushed, Polished, Honed, Lapatura</td></tr>
                                <tr><th>Applications</th><td>Counter/Vanity Top, Flooring, Cladding, Marble Handicrafts, Swimming Pool Areas, Bathroom Walls & Floors, Fireplace Walls, External & Internal Aids In Construction</td></tr>
                                <tr><th>Types</th><td>Polished , Gloss</td></tr>
                                <tr><th>Color</th><td>Grey, Gold</td></tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="spec-head mt-10">
                            <h5>Details:</h5>
                            <table>
                              <tbody>
                                <tr><th>Water Absorption</th><td>0.1%</td></tr>
                                <tr><th>Bulk Density</th><td>2.40g/cm3</td></tr>
                                <tr><th>Specular Gloss</th><td>50°</td></tr>
                                <tr><th>Surface Flatness </th><td>0.50 mm</td></tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="col-md-6">
                         
                          <div className="spec-head">
                            <h5>Additional Information:</h5>
                            <table>
                              <tbody>
                                <tr><th>Maintenance</th><td>Easy to clean with mild detergent and water</td></tr>
                                <tr><th>Environmental </th><td>Sourced sustainably with eco-friendly practices</td></tr>
                                <tr><th>Custom Fabrication</th><td>Custom cutting and shaping services offered</td></tr>

                              </tbody>
                            </table>
                          </div>
                          <div className="spec-head">
                            <h5>Certifications:</h5>
                            <p style={{fontSize:'1px'}}>Complies with ASTM standards for granite</p>

                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="tablist1-panel2"
                      className={`responsive-tabs__panel ${
                        activeTab === "packing"
                          ? "responsive-tabs__panel--active"
                          : ""
                      }`}
                      aria-hidden={activeTab !== "packing"}
                      role="tabpanel"
                      aria-labelledby="tablist1-tab2"
                    >
                      <div className="quantity-options">
                        <div className="quantity-card">
                          <h4>1 Slab</h4>
                          <p>Perfect for small projects or sample needs.</p>
                        </div>
                        <div className="quantity-card">
                          <h4>1-10 Slabs</h4>
                          <p>
                            Ideal for medium-sized projects and renovations.
                          </p>
                        </div>
                        <div className="quantity-card">
                          <h4>10-50 Slabs</h4>
                          <p>
                            Suitable for larger commercial projects and multiple
                            installations.
                          </p>
                        </div>
                        <div className="quantity-card">
                          <h4>50+ Slabs</h4>
                          <p>
                            Great for substantial construction projects and
                            large-scale applications.
                          </p>
                        </div>
                        <div className="quantity-card">
                          <h4>100+ Slabs</h4>
                          <p>
                            For extensive and high-volume projects. Custom
                            orders available.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      id="tablist1-panel3"
                      className={`responsive-tabs__panel ${activeTab === 'customize' ? 'responsive-tabs__panel--active' : ''}`}
                      aria-hidden={activeTab !== 'customize'}
                      role="tabpanel"
                      aria-labelledby="tablist1-tab3"
                    >
                      <form
                        action="https://npguar.com/products/product_customise"
                        id="pro_sp_form"
                        method="post"
                        acceptCharset="utf-8"
                      >
                        <div className="row">
                          <div className="col-md-4 form-group">
                            <label htmlFor="c1">Company Name</label>
                            <input type="text" name="c1" id="c1" className="form-control" required />
                          </div>
                          <div className="col-md-4 form-group">
                            <label htmlFor="c2">Contact Person</label>
                            <input type="text" name="c2" id="c2" className="form-control" required />
                          </div>
                          <div className="col-md-4 form-group">
                            <label htmlFor="c3">Mobile</label>
                            <input type="text" name="c3" id="c3" className="form-control" required />
                          </div>
                          <div className="col-md-4 form-group">
                            <label htmlFor="c4">Email</label>
                            <input type="email" name="c4" id="c4" className="form-control" required />
                          </div>
                          <div className="col-md-4 form-group">
                            <label htmlFor="c5">Country</label>
                            <input type="text" name="c5" id="c5" className="form-control" required />
                          </div>
                          <div className="col-md-4 form-group">
                            <label htmlFor="c6">City</label>
                            <input type="text" name="c6" id="c6" className="form-control" required />
                          </div>
                          <div className="col-md-12 form-group">
                            <label htmlFor="c7">Address</label>
                            <textarea name="c7" id="c7" className="form-control" rows="3" required></textarea>
                          </div>
                          <div className="col-md-12 form-group">
                            <label htmlFor="c8">Message</label>
                            <textarea name="c8" id="c8" className="form-control" rows="3" required></textarea>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9  mt-60 lg-mt-80">

              <div
                className="title-style-twelve mb-45 mt-60 lg-mb-30 lg-mt-80"
                data-aos="fade-up"
              >
                <div className="sc-title fst-italic position-relative">
                  More Choices
                </div>
                <h2 className="main-title fw-500 tx-dark">Explore Our Stone Collection</h2>
              </div>
              {/* /.title-style-twelve */}

              <p data-aos="fade-up">
                Discover a wide range of natural stones, each offering unique textures, colors, and durability. Whether you're looking for granite, marble, or other stones, our collection ensures that you find the perfect match for your project.
              </p>
              <p data-aos="fade-up">
                Navigate easily to view the previous or next stone in our collection to explore all available options.
              </p>
            </div>
            {/* End col-xl-9 */}

            <div className="project-pagination m-auto pt-20 pb-60 lg-pt-50 sm-pt-10">
              <div className="row gx-xxl-5">
                <div className="col-sm-6">
                  <div
                    className="arrow-block position-relative "
                    data-aos="fade-right"
                  >
                    <img
                      src="/images/media/img_92.jpg"
                      alt="media"
                      className="lazy-img w-100" style={{ height: '350px' }}
                    />
                    <div className="hover-content tran3s position-absolute d-flex flex-column align-items-center justify-content-center">
                      <div className="text-white fw-500 pg-title">

                      </div>
                      <a
                        href="#"
                        className="arrow rounded-circle text-center tran3s"
                      >
                        <i className="bi bi-arrow-left" />
                      </a>
                    </div>
                    {/* /.hover-content */}
                  </div>
                  {/* /.arrow-block */}
                </div>
                {/* End .col-6 */}

                <div className="col-sm-6">
                  <div
                    className="arrow-block position-relative "
                    data-aos="fade-left"
                  >
                    <img
                      src="/images/media/img_93.jpg"
                      alt="media"
                      className="lazy-img w-100" style={{ height: '350px' }}
                    />
                    <div className="hover-content tran3s position-absolute d-flex flex-column align-items-center justify-content-center">
                      <div className="text-white fw-500 pg-title">

                      </div>
                      <a
                        href="#"
                        className="arrow rounded-circle text-center tran3s"
                      >
                        <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                    {/* /.hover-content */}
                  </div>
                  {/* /.arrow-block */}
                </div>
                {/* End .col-6 */}
              </div>
              {/* End .row */}
            </div>
            {/* /.project-pagination */}
          </div>
          {/* End .container */}
        </div>
        {/* /.project-desctiption */}
      </div>
      {/* /.project-details */}

      {/*
			=====================================================
				Fancy Short Banner Twelve
			=====================================================
			*/}
      {/* <CallToAction /> */}

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <Footer />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default DynamicPortfolioDetails;
