import { useState, useEffect } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

const ProjectSlide = ({ slide }) => {
  const images = [slide?.image ?? "", slide?.image ?? "", slide?.image ?? ""];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const carousel = document.getElementById("gallery-carousel");

    const updateSlide = () => {
      const activeIndex = [...carousel.querySelectorAll('.carousel-item')].findIndex(item => item.classList.contains('active'));
      setCurrentSlide(activeIndex);
    };

    carousel.addEventListener('slid.bs.carousel', updateSlide);

    return () => {
      carousel.removeEventListener('slid.bs.carousel', updateSlide);
    };
  }, []);

  return (
    <div className="position-relative">
      {/* Carousel */}
      <div
        id="gallery-carousel"
        className="carousel slide me-xxl-5 md-mb-40"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Previous button */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#gallery-carousel"
          data-bs-slide="prev"
        >
          <i className="bi bi-chevron-left"></i>
          <span className="visually-hidden">Previous</span>
        </button>

        {/* Next button */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#gallery-carousel"
          data-bs-slide="next"
        >
          <i className="bi bi-chevron-right"></i>
          <span className="visually-hidden">Next</span>
        </button>

        {/* Zoom Button */}
        <div className="position-absolute top-0 end-0 p-3">
          <Gallery>
            {images.map((image, index) => (
              <Item
                key={index}
                original={image}
                thumbnail={image}
                width="100%"
                height="100%"
              >
                {({ ref, open }) => (
                  <span
                    role="button"
                    title="Click for large view"
                    className="fancybox d-flex align-items-center justify-content-center position-absolute top-0 end-0 m-3"
                    ref={ref}
                    onClick={open}
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      boxShadow: "0 0 5px rgba(0,0,0,0.3)",
                      zIndex: 1000,
                    }}
                  >
                    <i className="bi bi-arrows-fullscreen" style={{ fontSize: "20px", color: "#000" }}></i> {/* Zoom icon */}
                  </span>
                )}
              </Item>
            ))}
          </Gallery>
        </div>

        {/* Slide number display */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 bg-white p-2 rounded">
          <span className="fw-bold text-dark">{currentSlide + 1}</span> out of {images.length}
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
