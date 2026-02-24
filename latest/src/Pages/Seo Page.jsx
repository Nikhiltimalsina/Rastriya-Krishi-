// ═══════════════════════════════════════════════════════════
// SEO.jsx — Reusable SEO meta component (works with React Helmet or react-helmet-async)
// Usage: <SEO title="..." description="..." />
// ═══════════════════════════════════════════════════════════
//
// SETUP: npm install react-helmet-async
//
// Wrap your App root with <HelmetProvider>:
//   import { HelmetProvider } from 'react-helmet-async';
//   <HelmetProvider><App /></HelmetProvider>
//
// ═══════════════════════════════════════════════════════════

import { Helmet } from "react-helmet-async";

const SITE_NAME = "Rastriya Krishi Company Nepal Limited";
const SITE_URL = "https://rastriyakrishi.com.np";
const DEFAULT_IMG = "https://rastriyakrishi.com.np/wp-content/uploads/2024/07/Logo_long.jpg";

export default function SEO({
  title,
  description = "Rastriya Krishi Company Nepal Limited empowers Nepalese farmers through sustainable agriculture, modern inputs, market linkages, and training programs across all 7 provinces.",
  keywords = "rastriya krishi, nepal agriculture, nepalese farmers, farming company nepal, organic farming nepal, agricultural inputs nepal",
  image = DEFAULT_IMG,
  url = SITE_URL,
  type = "website",
  noIndex = false,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  return (
    <Helmet>
      {/* ── Primary Meta Tags ── */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      <link rel="canonical" href={url} />

      {/* ── Open Graph / Facebook ── */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* ── Geo Tags (Nepal-specific) ── */}
      <meta name="geo.region" content="NP" />
      <meta name="geo.placename" content="Kathmandu, Nepal" />
      <meta name="geo.position" content="27.7172;85.3240" />
      <meta name="ICBM" content="27.7172, 85.3240" />

      {/* ── Language ── */}
      <meta httpEquiv="content-language" content="en,ne" />
    </Helmet>
  );
}

// ═══════════════════════════════════════════════════════════
// USAGE EXAMPLES PER PAGE:
// ═══════════════════════════════════════════════════════════
//
// HomePage:
// <SEO
//   title="Empowering Nepalese Farmers"
//   description="Rastriya Krishi Company connects farmers to markets, provides modern agricultural inputs, and promotes sustainable farming across Nepal's 7 provinces."
//   url="https://rastriyakrishi.com.np"
// />
//
// ServicesPage:
// <SEO
//   title="Our Services"
//   description="Training, agrotourism, market linkages, sustainable practices, and waste management — comprehensive support for Nepalese farmers."
//   url="https://rastriyakrishi.com.np/services"
//   keywords="agricultural training nepal, market linkages farmers nepal, sustainable farming nepal"
// />
//
// ContactPage:
// <SEO
//   title="Contact Us"
//   description="Get in touch with Rastriya Krishi Company. Call 01-5922911 or visit our office in New Baneshwor, Kathmandu."
//   url="https://rastriyakrishi.com.np/contact"
// />
//
// BlogPost (dynamic):
// <SEO
//   title={post.title}
//   description={post.excerpt}
//   image={post.img}
//   url={`https://rastriyakrishi.com.np/blog/${post.slug}`}
//   type="article"
// />
//
// GalleryPage:
// <SEO
//   title="Gallery"
//   description="Photos from our farms, training programs, and farmer communities across Nepal."
//   url="https://rastriyakrishi.com.np/gallery"
// />

// ═══════════════════════════════════════════════════════════
// StructuredData.jsx — JSON-LD for Google Rich Results
// Add this to your main layout or App.jsx
// ═══════════════════════════════════════════════════════════
export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://rastriyakrishi.com.np/#organization",
        "name": "Rastriya Krishi Company Nepal Limited",
        "url": "https://rastriyakrishi.com.np",
        "logo": "https://rastriyakrishi.com.np/wp-content/uploads/2024/07/Logo_long.jpg",
        "description": "Nepal's leading agricultural company empowering farmers through sustainable practices, modern inputs, and market linkages.",
        "telephone": "+977-01-5922911",
        "email": "info@rastriyakrishi.com.np",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "New Baneshwor",
          "addressLocality": "Kathmandu",
          "addressRegion": "Bagmati Province",
          "postalCode": "44600",
          "addressCountry": "NP",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 27.7172,
          "longitude": 85.3240,
        },
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61564078713356",
          "https://www.linkedin.com/company/rastriya-krishi-company-nepali-limited/",
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "17:30",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://rastriyakrishi.com.np/#website",
        "url": "https://rastriyakrishi.com.np",
        "name": "Rastriya Krishi Company Nepal Limited",
        "publisher": { "@id": "https://rastriyakrishi.com.np/#organization" },
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}