const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  'Boise': { lat: 43.6150, lng: -116.2023 },
  'Meridian': { lat: 43.6121, lng: -116.3915 },
  'Nampa': { lat: 43.5407, lng: -116.5635 },
  'Caldwell': { lat: 43.6629, lng: -116.6874 },
  'Eagle': { lat: 43.6957, lng: -116.3535 },
}

const faqData = [
  { question: 'How much does roof repair cost in Boise?', answer: 'Most roof repairs in Boise cost between $200-800 depending on the damage. Simple shingle repairs run $200-400 while complex leak repairs are $400-800. We provide exact quotes before any work begins.' },
  { question: 'How quickly can you fix a roof leak?', answer: 'For emergencies, we can usually get a tarp up within hours. Permanent repairs are typically completed within 1-2 days, weather permitting.' },
  { question: 'Do you offer 24/7 emergency roof repair?', answer: 'Yes! We offer 24/7 emergency roof repair throughout the Treasure Valley. Call (208) 505-9352 for immediate service.' },
  { question: 'Will you work with my insurance company?', answer: 'Absolutely. We work directly with insurance companies on storm damage claims and provide detailed documentation for adjusters.' },
  { question: 'Can you match my existing shingles?', answer: 'Yes, we work with all major shingle manufacturers and can match your existing roof color and style in most cases.' },
  { question: 'What areas do you serve?', answer: 'We serve Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding Treasure Valley communities.' },
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": `Boise Roof Repair Pros - ${city}`,
    "description": `Professional roof repair services in ${city}, Idaho. Leak repair, shingle replacement, storm damage, emergency repairs. Licensed and insured. 24/7 emergency service.`,
    "url": "https://boise-roof-repair.com",
    "telephone": "+1-208-505-9352",
    "email": "info@boise-roof-repair.com",
    "address": { "@type": "PostalAddress", "addressLocality": city, "addressRegion": "ID", "addressCountry": "US" },
    "geo": { "@type": "GeoCoordinates", "latitude": coords.lat, "longitude": coords.lng },
    "areaServed": [
      { "@type": "City", "name": "Boise", "addressRegion": "ID" },
      { "@type": "City", "name": "Meridian", "addressRegion": "ID" },
      { "@type": "City", "name": "Nampa", "addressRegion": "ID" },
      { "@type": "City", "name": "Caldwell", "addressRegion": "ID" },
      { "@type": "City", "name": "Eagle", "addressRegion": "ID" }
    ],
    "serviceType": ["Roof Leak Repair", "Shingle Repair", "Emergency Roof Repair", "Storm Damage Repair", "Flat Roof Repair", "Gutter Repair", "Hail Damage Repair", "Wind Damage Repair"],
    "priceRange": "$$",
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "07:00", "closes": "19:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday", "Sunday"], "opens": "00:00", "closes": "23:59", "description": "24/7 Emergency Service" }
    ],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "87" }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Roof Repair Services",
    "provider": { "@type": "RoofingContractor", "name": "Boise Roof Repair Pros" },
    "areaServed": { "@type": "State", "name": "Idaho" },
    "description": `Professional roof repair services in ${city} and the Treasure Valley. Leak repair, shingle replacement, storm damage repair, and 24/7 emergency service.`
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}
