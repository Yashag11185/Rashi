const services = [
  {
    id: 1,
    icon: "/images/icon/icon_143.svg",
    title: "Granite Production",
    list: [
      "Advanced Machinery",
      "Quality Control",
      "Custom Finishes",
    ],
  },
  {
    id: 2,
    icon: "/images/icon/icon_144.svg",
    title: "Global Export",
    list: ["International Shipping", "Market Presence", "Export Documentation"],
  },
  {
    id: 3,
    icon: "/images/icon/icon_145.svg",
    title: "Innovation",
    list: [
      "Cutting-Edge Technology",
      "Process Improvement",
      "Diverse Granite Varieties",
    ],
  },
  {
    id: 4,
    icon: "/images/icon/icon_146.svg",
    title: "Customer Satisfaction",
    list: [
      "Timely Delivery",
      "Quality Assurance",
      "Personalized Service",
    ],
  },
];

const Service2 = () => {
  return (
    <>
      {services.map((service) => (
        <div className="col-lg-3 col-sm-6" key={service.id} data-aos="fade-up">
          <div className="card-style-twentyThree mt-40">
            <div className="icon d-flex align-items-center justify-content-center">
              <img src={service.icon} alt="icon" className="lazy-img tran3s" />
            </div>
            <h4 className="title tx-dark">{service.title}</h4>
            <ul className="style-none">
              {service.list.map((item, index) => (
                <li key={`${service.id}-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
          {/* /.card-style-twentyThree */}
        </div>
      ))}
    </>
  );
};

export default Service2;
