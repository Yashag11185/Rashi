import { useState } from "react";
import items from "../../data/portfolio";
import { Gallery } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { Link } from "react-router-dom";

const PortfolioGallery2 = () => {
  const [filter, setFilter] = useState({ category: "*", color: "*", quantity: "*", type: "*" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [showMoreColors, setShowMoreColors] = useState(false);

  const handleFilterChange = (key, value) => {
    setFilter({ ...filter, [key]: value });
    setCurrentPage(1); // Reset to page 1 after filter change
  };

  const resetFilters = () => {
    setFilter({ category: "*", color: "*", quantity: "*", type: "*" });
    setCurrentPage(1);
  };

  const filteredItems = items.slice(8).filter((item) => {
    return (
      (filter.category === "*" || item.category.includes(filter.category)) &&
      (filter.color === "*" || item.color === filter.color) &&
      (filter.quantity === "*" || item.quantity === filter.quantity) &&
      (filter.type === "*" || item.type === filter.type)
    );
  });

  const toggleMoreColors = () => {
    setShowMoreColors(!showMoreColors);
  };

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getPagination = () => {
    let paginationItems = [];
    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        paginationItems.push(i);
      }
    } else {
      paginationItems.push(1);
      if (currentPage > 3) {
        paginationItems.push("...");
      }
      for (let i = Math.max(currentPage - 1, 2); i <= Math.min(currentPage + 1, totalPages - 1); i++) {
        paginationItems.push(i);
      }
      if (currentPage < totalPages - 2) {
        paginationItems.push("...");
      }
      if (totalPages > 1) {
        paginationItems.push(totalPages);
      }
    }
    return paginationItems;
  };

  return (
    <div className="portfolio-gallery-three pt-30">
      <div className="container">
        {/* Filters Row */}
        <div className="filters-wrapper d-flex flex-wrap justify-content-between align-items-center mb-4">
          {/* Category Filter */}
          <ul className="style-none isotop-menu-wrapper g-control-nav-two d-flex flex-wrap align-items-center">
            <li className={filter.category === "*" ? "is-checked" : ""} onClick={() => handleFilterChange("category", "*")}>
              All
            </li>
            <li className={filter.category === "design" ? "is-checked" : ""} onClick={() => handleFilterChange("category", "design")}>
              Granite
            </li>
            <li className={filter.category === "marble" ? "is-checked" : ""} onClick={() => handleFilterChange("category", "marble")}>
              Marble
            </li>
            <li className={filter.category === "others" ? "is-checked" : ""} onClick={() => handleFilterChange("category", "others")}>
              Others
            </li>
          </ul>

          {/* Additional Filters (Color, Quantity, Type) */}
          <div className="additional-filters d-flex flex-wrap align-items-center">
            <div className="color-dropdown me-3">
             
              <div className="color-options d-flex align-items-center">
              Colors:
                <span className={`color-circle ${filter.color === "white" ? "is-checked" : ""}`} style={{ backgroundColor: "white" }} onClick={() => handleFilterChange("color", "white")}></span>
                <span className={`color-circle ${filter.color === "blue" ? "is-checked" : ""}`} style={{ backgroundColor: "blue" }} onClick={() => handleFilterChange("color", "blue")}></span>
                <span className={`color-circle ${filter.color === "green" ? "is-checked" : ""}`} style={{ backgroundColor: "green" }} onClick={() => handleFilterChange("color", "green")}></span>
                {showMoreColors && (
                  <>
                    <span className={`color-circle ${filter.color === "gold" ? "is-checked" : ""}`} style={{ backgroundColor: "gold" }} onClick={() => handleFilterChange("color", "gold")}></span>
                    <span className={`color-circle ${filter.color === "black" ? "is-checked" : ""}`} style={{ backgroundColor: "black" }} onClick={() => handleFilterChange("color", "black")}></span>
                  </>
                )}
                <span className="color-circle plus-circle" onClick={toggleMoreColors}>{showMoreColors ? "-" : "+"}</span>
              </div>
            </div>

            <div className="me-3">
              <select className="form-select form-select-sm" value={filter.quantity} onChange={(e) => handleFilterChange("quantity", e.target.value)} style={{ width: "120px" }}>
                <option value="*">Quantity</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>

            <div className="me-3">
              <select className="form-select form-select-sm" value={filter.type} onChange={(e) => handleFilterChange("type", e.target.value)} style={{ width: "120px" }}>
                <option value="*">Type</option>
                <option value="premium">Premium</option>
                <option value="standard">Standard</option>
              </select>
            </div>

            <button onClick={resetFilters} aria-label="Reset filters" className="reset-filters-button">
              <i className="fa fa-refresh"></i>
            </button>
          </div>
        </div>

        {/* Gallery */}
        <div className="row pt-90 lg-pt-50">
          <Gallery>
            {paginatedItems.map((item) => (
              <div key={item.id} className={`col-lg-4 col-md-6 ${item.category}`}>
                <div className="portfolio-block-four mb-50">
                  <div className="img-meta position-relative">
                    <img src={item.image} alt="gallery" className="w-100" style={{ height: "275px", objectFit: "cover", borderRadius: "8px" }} />
                    <Link to={`/portfolio/${item.id}`}>
                      <span title="View" className="expend-btn d-flex align-items-center justify-content-center" style={{ height: '275px' }}>View</span>
                    </Link>
                  </div>
                  <Link to={`/portfolio/9`} className="title tran3s d-flex flex-column align-items-center" style={{ textDecoration: "none", color: "#333" }}>
                    <span className="pj-name tran3s fw-500">{item.name}</span>
                  </Link>
                </div>
              </div>
            ))}
          </Gallery>
        </div>

        {/* Pagination */}
        <div className="pagination-wrapper d-flex justify-content-center mt-4">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`} onClick={handlePreviousPage}>
              <span className="page-link">Previous</span>
            </li>
            {getPagination().map((page, index) => (
              <li key={index} className={`page-item ${page === currentPage ? "active" : ""}`} onClick={() => (typeof page === "number" ? handlePageChange(page) : null)}>
                <span className="page-link">{page}</span>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`} onClick={handleNextPage}>
              <span className="page-link">Next</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGallery2;
