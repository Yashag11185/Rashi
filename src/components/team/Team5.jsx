import React from "react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    id: 10,
    name: "Palomino",
    role: "Developer",
    image: "/images/team/img_17.jpg",
    dataAosDelay: "",
  },
  {
    id: 9,
    name: "Wasabi",
    role: "CEO",
    image: "/images/team/img_16.jpg",
    dataAosDelay: "200",
  },
  {
    id: 11,
    name: "Fusion",
    role: "Designer",
    image: "/images/team/img_18.jpg",
    dataAosDelay: "300",
  },
  {
    id: 12,
    name: "Prada Gold",
    role: "Analyst",
    image: "/images/team/img_19.jpg",
    dataAosDelay: "400",
  },
  // Add more team members as needed
];

const Team5 = () => {
  return (
    <>
      {teamMembers.map((member) => (
        <div className="col-lg-3 col-sm-6" key={member.id}>
          <div
            className="team-block-three position-relative pb-40 lg-pb-30"
            data-aos="fade-up"
            data-aos-delay={member.dataAosDelay}
          >
            <div className="img-meta">
              <img
                src={member.image}
                alt={member.name}
                className="lazy-img team-img w-100"
                style={{height:'300px'}}
              />
              <div className="info text-center">
              <Link
                    to={`/portfolio/9`}
                    className="title tran3s d-flex flex-column align-items-center"
                  >
                    <h5 className="tx-dark fw-500 mb-5">{member.name}</h5>
                  </Link>
              </div>
              {/* /.info */}
            </div>
            {/* /.img-meta */}
          </div>
          {/* /.team-block-three */}
        </div>
      ))}
    </>
  );
};

export default Team5;
