const properties = [
  {
    imgSrc: "/images/media/img_76.png",
    name: "Agatha",
    address: "Mirpur 10, Stadium dhaka 1208",
    price: "$34,900",
  },
  {
    imgSrc: "/images/media/img_77.png",
    name: "Imperial Gold",
    address: "Mirpur 10, Stadium dhaka 1208",
    price: "$28,100",
  },
  {
    imgSrc: "/images/media/img_78.jpg",
    name: "Green Marble",
    address: "Mirpur 10, Stadium dhaka 1208",
    price: "$42,500",
  },
];

const Property = () => {
  return (
    <>
      {properties.map((property, index) => (
        <div key={index} className="col-lg-4 col-sm-6">
          <div className="card-style-twentyTwo mt-35">
            <img src={property.imgSrc} alt="media" className="lazy-img w-100"  style={{ height: '300px', objectFit: 'cover' }} />
            <div className="text-meta">
           
             
              <div >
              <h4 className="d-flex align-items-center justify-content-between">
                <a href="/portfolio/9" className="property-name">
                  {property.name}
                </a>
                <a href="/portfolio/9" className="read-more tran3s">
                  <i className="bi bi-arrow-up-right" />
                </a>
              </h4>
              </div>
            </div>
            {/* /.text-meta */}
          </div>
          {/* /.card-style-twentyTwo */}
        </div>
      ))}
    </>
  );
};

export default Property;
