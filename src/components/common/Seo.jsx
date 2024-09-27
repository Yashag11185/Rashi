import { Helmet, HelmetProvider } from "react-helmet-async";
const Seo = ({ pageTitle }) => (
  <HelmetProvider>
    <Helmet>
      <title>
        {pageTitle &&
          `${pageTitle} || Rashi Granite`}
      </title>
    </Helmet>
  </HelmetProvider>
);

export default Seo;
