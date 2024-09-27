const BlockContact5 = () => {
  const addressBlocks = [
    {
      icon: "/images/icon/icon_178.svg",
      title: "Rashi Granite Export [I] Pvt. Ltd.",
      content: "117 & 118, Bommasandra Indl. Area, 4th Phase,Jigani Link Road, Bangalore – 560 099, India.",
      delay: "100",
    },
    {
      icon: "/images/icon/icon_179.svg",
      title: "Contact Info",
      content: "Fax: 080 27839072 / 76",
      link: "tel:7760984254 / 9611903300",
      delay: "200",
    },
    {
      icon: "/images/icon/icon_180.svg",
      title: "E-mail",
      content: "Write us on",
      link: "kandoi@indiagranite.com",
      delay: "300",
    },
  ];

  return (
    <>
      {addressBlocks.map((block, index) => (
        <div
          className="col-md-4"
          key={index}
          data-aos="fade-up"
          data-aos-delay={block.delay}
        >
          <div className="address-block-two text-center mb-40">
            <div className="icon border rounded-circle d-flex align-items-center justify-content-center m-auto">
              <img src={block.icon} alt="icon" />
            </div>
            <h5 className="title">{block.title}</h5>
            <p>
              {block.content} <br />
              {block.link && (
                <a
                  href={block.link}
                  className={
                    block.link.includes("tel:") ? "call" : "webaddress"
                  }
                >
                  {block.link.replace("tel:", "")}
                </a>
              )}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockContact5;
