import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
  const siteTitle = "KebunData.my";
  const fullTitle = `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Social Media (Open Graph) */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default SEO;