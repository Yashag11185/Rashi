const FooterMenu = () => {
  const footerData = [
    {
      title: "Quick Links",
      links: [
        { title: "About Us", href: "/pages-menu/about-us-v2" },
        { title: "Gallery", href: "/pages-menu/gallery" },
        { title: "Inventory", href: "/portfolio/inventory" },
        { title: "Contact Us", href: "/contact/contact-v4" },
      ],
      colClass: "col-lg-2 col-sm-4 mb-30", // Add col class for this section
    },
    {
      title: "Legal",
      links: [
        { title: "Terms & Conditions", href: "/TnC" },
        { title: "Privacy Policy", href: "/privacy-policy" },
      ],
      colClass: "col-lg-2 col-sm-4 mb-30", // Add col class for this section
    },
  ];

  return (
    <>
      {footerData.map((section, index) => (
        <div className={section.colClass} key={index}>
          <h5 className="footer-title text-white fw-500">{section.title}</h5>
          <ul className="footer-nav-link style-none">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterMenu;
