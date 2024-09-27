import { useEffect, useState } from 'react';

const Hero = () => {
  const [bannerClass, setBannerClass] = useState('hero-banner-thirteen');

  useEffect(() => {
    // Check if window object is available
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page');

      // Update the banner class based on the 'page' query parameter
      if (pageParam === '2') {
        setBannerClass('hero-banner-rteen'); // Replace with your desired class for ?page=2
      } else if (pageParam === '3') {
        setBannerClass('hero-banner-steen'); // Replace with your desired class for ?page=3
      } else {
        setBannerClass('hero-banner-thirteen'); // Default class
      }
    }
  }, []); // The empty dependency array ensures this runs once on component mount

  return (
    <div className={`${bannerClass} position-relative zn2 pt-190 pb-225 lg-pb-150 lg-pt-150 md-pb-80`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-10 m-auto">
            <div className="text-wrapper" data-aos="fade-up">
              <h1 className="hero-heading fw-500 text-white text-center">
                A Leading Supplier <br /> of Granite 
                <span className="position-relative p-2">
                  Worldwide.
                  <img
                    src="/images/shape/shape_161.svg"
                    alt="shape"
                    className="lazy-img shapes text-shape"
                  />
                </span>
              </h1>
              <p className="text-lg text-white mb-80 pt-35 text-center lg-pt-20 lg-mb-50">
                More than Thousand Designs to choose from 
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/images/shape/shape_159.svg"
        alt="shape"
        className="lazy-img shapes shape-one"
      />
    </div>
  );
};

export default Hero;
