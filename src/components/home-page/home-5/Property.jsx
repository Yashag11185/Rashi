import { Link } from "react-router-dom";

const Property = () => {
  const properties = [
    {
      image: "/images/media/img_73.jpg",
      title: "Condos",
      delay: "100",
    },
    {
      image: "/images/media/img_74.jpeg",
      title: "Property",
      delay: "200",
    },
    {
      image: "/images/media/img_75.jpg",
      title: "Delievery",
      delay: "300",
    },
  ];

  return (
    <>
      {properties.map((property, index) => (
        <div
          className="col-lg-4 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={property.delay}
        >
          <div className="card-style-twentyOne position-relative mt-35">
            <img
              src={property.image}
              alt={property.title}
              style={{ height: '500px', objectFit: 'cover' }} 
              className="lazy-img w-100" 
            />
            <div className="hover-overlay d-flex flex-column align-items-center position-absolute tran3s">
              {/* <h3 className="text-white">{property.title}</h3> */}
            </div>
            {/* /.hover-overlay */}
          </div>
          {/* /.card-style-twentyOne */}
        </div>
      ))}
    </>
  );
};

export default Property;
