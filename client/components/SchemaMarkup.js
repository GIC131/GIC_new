// client/components/SchemaMarkup.js
import Script from 'next/script'

const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "GetInterviewConfidence",
    "image": "https://www.getinterviewconfidence.com/images/logo.jpg", // URL to your logo
    "@id": "https://www.getinterviewconfidence.com",
    "url": "https://www.getinterviewconfidence.com",
    "telephone": "+919674168149",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4a, Rakhal Mukherjee Rd, Bakul Bagan, Bhowanipore, Kolkata, West Bengal 700025", // Be specific
      "addressLocality": "Kolkata",
      "postalCode": "700025",
      "addressRegion": "WB",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.5270285",
      "longitude": "88.3428057"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "10:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/get.interview.confidence/",
      "https://www.linkedin.com/company/get-inteview-confidence/"
    ] 
  };

  return (
    <Script 
      id="schema-markup" 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default SchemaMarkup