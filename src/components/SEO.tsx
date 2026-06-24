import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  image?: string;
}

export default function SEO({ 
  title, 
  description, 
  name = 'Craks', 
  type = 'website',
  image = '/assets/logo_azul.png' 
}: SEOProps) {
  const location = useLocation();
  const canonicalUrl = `https://www.crakshuevos.com${location.pathname}`;

  // Structured Data (JSON-LD) para un negocio local u organización
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Craks",
    "url": "https://www.crakshuevos.com",
    "logo": "https://www.crakshuevos.com/assets/logo_azul.png",
    "description": description,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+57-315-222-5332",
      "contactType": "customer service",
      "areaServed": "CO",
      "availableLanguage": ["es", "en"]
    }
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* OpenGraph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={name} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
