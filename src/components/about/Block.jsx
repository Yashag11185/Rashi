import React from "react";

const blocksData = [
  {
    id: 1,
    iconSrc: "/images/icon/icon_153.svg",
    title: "Expert Solutions",
    content: "We help our clients fulfill their needs with our extensive expertise and industry-leading knowledge.",
    dataAos: "fade-up",
    dataAosDelay: "",
  },
  {
    id: 2,
    iconSrc: "/images/icon/icon_152.svg",
    title: "Proven Excellence",
    content: "Our long-standing reputation for quality and innovation ensures that you receive the best products and services.",
    dataAos: "fade-up",
    dataAosDelay: "100",
  },
  {
    id: 3,
    iconSrc: "/images/icon/icon_155.svg",
    title: "Global Leadership",
    content: "As a top granite exporter, we deliver exceptional solutions with a global reach and advanced technology.",
    dataAos: "fade-up",
    dataAosDelay: "200",
  },
  {
    id: 4,
    iconSrc: "/images/icon/icon_154.svg",
    title: "Customer-Centric Approach",
    content: "We are dedicated to delivering exceptional granite products and services.",
    dataAos: "fade-up",
    dataAosDelay: "300",
  },
  // Add more blocks as needed
];

const Block = () => {
  return (
    <>
      {blocksData.map((block) => (
        <div className="col-sm-6" key={block.id}>
          <div
            className="card-style-twentyFour bg-white mt-30"
            data-aos={block.dataAos}
            data-aos-delay={block.dataAosDelay}
          >
            <div className="icon">
              <img src={block.iconSrc} alt="icon" className="lazy-img mh-100" />
            </div>
            <h4 className="fw-bold tx-dark mt-30 mb-15">{block.title}</h4>
            <p className="fs-18">{block.content}</p>
          </div>
          {/* /.card-style-twentyFour */}
        </div>
      ))}
    </>
  );
};

export default Block;
