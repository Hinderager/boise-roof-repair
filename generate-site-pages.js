const fs = require('fs');
const path = require('path');

// ========================================
// SITE DATA CONFIGURATION
// ========================================

const siteConfig = {
  businessName: 'Boise Roof Repair Pros',
  phone: '(208) 505-9352',
  phoneRaw: '2085059352',
  domain: 'boise-roof-repair.com',
  region: 'Treasure Valley',
  state: 'Idaho',
  stateAbbr: 'ID',
};

// Locations for Boise area
const locations = [
  {
    slug: 'boise',
    name: 'Boise',
    county: 'Ada County',
    population: '235,000',
    description: 'the state capital and largest city in Idaho',
    neighborhoods: ['Downtown Boise', 'North End', 'East End', 'Bench', 'West Boise', 'Southeast Boise', 'Southwest Boise', 'Harris Ranch', 'Warm Springs', 'Boise Highlands', 'Collister', 'State Street'],
    climate: 'hot summers reaching 100°F and cold winters dropping below freezing'
  },
  {
    slug: 'meridian',
    name: 'Meridian',
    county: 'Ada County',
    population: '130,000',
    description: 'the second-largest and fastest-growing city in Idaho',
    neighborhoods: ['Downtown Meridian', 'The Village', 'Paramount', 'Lochsa Falls', 'Tuscany', 'Silverstone', 'Spurwing', 'Heritage Grove', 'Bridgetower', 'Reflection Ridge', 'Ten Mile', 'South Meridian'],
    climate: 'hot, dry summers and cold winters typical of the high desert climate'
  },
  {
    slug: 'nampa',
    name: 'Nampa',
    county: 'Canyon County',
    population: '108,000',
    description: 'the largest city in Canyon County',
    neighborhoods: ['Downtown Nampa', 'North Nampa', 'South Nampa', 'East Nampa', 'West Nampa', 'Southridge', 'Birch Lane', 'Ridgecrest', 'Greenhurst', 'Centennial', 'Karcher', 'Garrity'],
    climate: 'warm summers and cold winters with occasional temperature extremes'
  },
  {
    slug: 'caldwell',
    name: 'Caldwell',
    county: 'Canyon County',
    population: '65,000',
    description: 'the county seat of Canyon County',
    neighborhoods: ['Downtown Caldwell', 'West Caldwell', 'East Caldwell', 'North Caldwell', 'South Caldwell', 'Ustick Road', 'Cleveland Boulevard', 'Middleton Road', 'Farmway Road', 'Lake Lowell', 'Karcher Road', 'Indiana Avenue'],
    climate: 'hot summers and cold, sometimes harsh winters'
  },
  {
    slug: 'eagle',
    name: 'Eagle',
    county: 'Ada County',
    population: '35,000',
    description: 'an affluent suburb known for its beautiful foothill properties',
    neighborhoods: ['Downtown Eagle', 'North Eagle', 'South Eagle', 'Eagle Foothills', 'Floating Feather', 'Banbury Meadows', 'Dry Creek', 'Hidden Springs', 'Avimor', 'Eagle Island', 'Linder Road', 'State Street'],
    climate: 'varied temperatures due to foothill elevation changes'
  },
  {
    slug: 'garden-city',
    name: 'Garden City',
    county: 'Ada County',
    population: '15,000',
    description: 'a vibrant community along the Boise River',
    neighborhoods: ['Downtown Garden City', 'Riverside', 'Chinden Boulevard', 'Glenwood', '36th Street', '50th Street'],
    climate: 'hot summers and cold winters similar to Boise'
  },
  {
    slug: 'kuna',
    name: 'Kuna',
    county: 'Ada County',
    population: '25,000',
    description: 'a rapidly growing community south of Meridian',
    neighborhoods: ['Downtown Kuna', 'North Kuna', 'South Kuna', 'Crimson Point', 'Sailer Estates', 'Ten Mile'],
    climate: 'hot, dry summers and cold winters'
  },
  {
    slug: 'star',
    name: 'Star',
    county: 'Ada County',
    population: '15,000',
    description: 'a fast-growing community west of Eagle',
    neighborhoods: ['Downtown Star', 'North Star', 'South Star', 'Star River', 'Lanark'],
    climate: 'hot summers and cold winters typical of the Treasure Valley'
  },
  {
    slug: 'middleton',
    name: 'Middleton',
    county: 'Canyon County',
    population: '12,000',
    description: 'a charming small town between Star and Caldwell',
    neighborhoods: ['Downtown Middleton', 'North Middleton', 'South Middleton', 'Purple Sage'],
    climate: 'hot summers reaching into the 90s and cold winters'
  },
];

// Service categories and their sub-services
const serviceCategories = [
  {
    slug: 'leak-repair',
    name: 'Leak Repair',
    shortName: 'Leak Repair',
    description: 'Professional roof leak repair services to stop water damage and protect your home.',
    services: [
      {
        slug: 'emergency-leak-repair',
        name: 'Emergency Leak Repair',
        title: 'Emergency Roof Leak Repair',
        metaTitle: 'Emergency Roof Leak Repair {city} | 24/7 Service | Boise Roof Repair Pros',
        description: '24/7 emergency roof leak repair when you need it most. Fast response to stop water damage.',
        problems: ['Active roof leaks', 'Water stains on ceiling', 'Dripping water inside', 'Storm damage leaks', 'Ice dam leaks'],
        emergency: true
      },
      {
        slug: 'chimney-leak-repair',
        name: 'Chimney Leak Repair',
        title: 'Chimney Leak Repair & Flashing',
        metaTitle: 'Chimney Leak Repair {city} | Chimney Flashing | Boise Roof Repair Pros',
        description: 'Expert chimney leak repair and flashing replacement to stop water intrusion.',
        signs: ['Water stains around chimney', 'Damaged flashing', 'Cracks in chimney', 'Missing mortar'],
        emergency: false
      },
      {
        slug: 'valley-leak-repair',
        name: 'Valley Leak Repair',
        title: 'Roof Valley Leak Repair',
        metaTitle: 'Roof Valley Leak Repair {city} | Valley Flashing | Boise Roof Repair Pros',
        description: 'Professional roof valley leak repair and valley flashing replacement.',
        problems: ['Pooling water in valleys', 'Damaged valley flashing', 'Valley shingle damage', 'Improper valley installation'],
        emergency: false
      },
    ]
  },
  {
    slug: 'shingle-repair',
    name: 'Shingle Repair',
    shortName: 'Shingle Repair',
    description: 'Expert shingle repair and replacement services for all types of asphalt and composite shingles.',
    services: [
      {
        slug: 'missing-shingles',
        name: 'Missing Shingles',
        title: 'Missing Shingle Replacement',
        metaTitle: 'Missing Shingle Repair {city} | Shingle Replacement | Boise Roof Repair Pros',
        description: 'Fast missing shingle replacement to protect your roof from water damage.',
        causes: ['Wind damage', 'Age and wear', 'Poor installation', 'Storm damage'],
        emergency: true
      },
      {
        slug: 'damaged-shingles',
        name: 'Damaged Shingles',
        title: 'Damaged Shingle Repair',
        metaTitle: 'Damaged Shingle Repair {city} | Cracked Shingles | Boise Roof Repair Pros',
        description: 'Professional repair of cracked, curled, or damaged shingles.',
        signs: ['Curling shingles', 'Cracked shingles', 'Granule loss', 'Blistering shingles', 'Broken tabs'],
        emergency: false
      },
      {
        slug: 'wind-damage',
        name: 'Wind Damage',
        title: 'Wind Damage Shingle Repair',
        metaTitle: 'Wind Damage Shingle Repair {city} | Storm Damage | Boise Roof Repair Pros',
        description: 'Expert repair of wind-damaged shingles and storm damage.',
        problems: ['Lifted shingles', 'Torn shingles', 'Blown-off shingles', 'Exposed underlayment'],
        emergency: true
      },
    ]
  },
  {
    slug: 'emergency-repair',
    name: 'Emergency Repair',
    shortName: 'Emergency',
    description: '24/7 emergency roof repair services for urgent roofing problems.',
    services: [
      {
        slug: '24-7-service',
        name: '24/7 Emergency Service',
        title: '24/7 Emergency Roof Repair',
        metaTitle: '24/7 Emergency Roof Repair {city} | Immediate Service | Boise Roof Repair Pros',
        description: 'Round-the-clock emergency roof repair service. We are here when you need us most.',
        situations: ['Active leaks', 'Storm damage', 'Tree damage', 'Major wind damage', 'Structural damage'],
        emergency: true
      },
      {
        slug: 'storm-damage',
        name: 'Storm Damage',
        title: 'Storm Damage Roof Repair',
        metaTitle: 'Storm Damage Roof Repair {city} | Hail & Wind | Boise Roof Repair Pros',
        description: 'Fast storm damage roof repair after severe weather events.',
        types: ['Hail damage', 'Wind damage', 'Lightning damage', 'Heavy rain damage', 'Snow load damage'],
        emergency: true
      },
      {
        slug: 'temporary-tarping',
        name: 'Temporary Tarping',
        title: 'Emergency Roof Tarping',
        metaTitle: 'Emergency Roof Tarping {city} | Temporary Roof Cover | Boise Roof Repair Pros',
        description: 'Emergency roof tarping to prevent further water damage until permanent repairs can be made.',
        when: ['After storm damage', 'Major leak discovered', 'Tree falls on roof', 'Before permanent repairs'],
        emergency: true
      },
    ]
  },
  {
    slug: 'storm-damage',
    name: 'Storm Damage',
    shortName: 'Storm Damage',
    description: 'Complete storm damage roof repair including hail damage, wind damage, and tree damage.',
    services: [
      {
        slug: 'hail-damage-repair',
        name: 'Hail Damage Repair',
        title: 'Hail Damage Roof Repair',
        metaTitle: 'Hail Damage Roof Repair {city} | Insurance Claims | Boise Roof Repair Pros',
        description: 'Professional hail damage roof repair with insurance claim assistance.',
        signs: ['Dented shingles', 'Cracked shingles', 'Granule loss', 'Dented vents or flashing', 'Gutter damage'],
        emergency: false
      },
      {
        slug: 'wind-damage-repair',
        name: 'Wind Damage Repair',
        title: 'Wind Damage Roof Repair',
        metaTitle: 'Wind Damage Roof Repair {city} | Storm Repair | Boise Roof Repair Pros',
        description: 'Expert wind damage roof repair for all types of wind-related roofing damage.',
        problems: ['Missing shingles', 'Lifted shingles', 'Torn shingles', 'Damaged flashing', 'Exposed decking'],
        emergency: true
      },
      {
        slug: 'tree-damage-repair',
        name: 'Tree Damage Repair',
        title: 'Tree Damage Roof Repair',
        metaTitle: 'Tree Damage Roof Repair {city} | Emergency Service | Boise Roof Repair Pros',
        description: 'Emergency tree damage roof repair and restoration services.',
        includes: ['Tree removal coordination', 'Structural assessment', 'Temporary tarping', 'Full repair or replacement'],
        emergency: true
      },
    ]
  },
  {
    slug: 'flat-roof-repair',
    name: 'Flat Roof Repair',
    shortName: 'Flat Roof',
    description: 'Specialized flat roof repair services for commercial and residential flat roofing systems.',
    services: [
      {
        slug: 'membrane-repair',
        name: 'Membrane Repair',
        title: 'Flat Roof Membrane Repair',
        metaTitle: 'Flat Roof Membrane Repair {city} | TPO & EPDM | Boise Roof Repair Pros',
        description: 'Professional flat roof membrane repair for TPO, EPDM, and other roofing membranes.',
        types: ['TPO membrane', 'EPDM membrane', 'PVC membrane', 'Modified bitumen'],
        emergency: false
      },
      {
        slug: 'ponding-water',
        name: 'Ponding Water',
        title: 'Ponding Water Repair',
        metaTitle: 'Ponding Water Repair {city} | Flat Roof Drainage | Boise Roof Repair Pros',
        description: 'Fix ponding water issues on flat roofs before they cause serious damage.',
        problems: ['Standing water', 'Poor drainage', 'Sagging roof deck', 'Membrane deterioration'],
        emergency: false
      },
      {
        slug: 'flashing-repair',
        name: 'Flashing Repair',
        title: 'Flat Roof Flashing Repair',
        metaTitle: 'Flat Roof Flashing Repair {city} | Parapet Walls | Boise Roof Repair Pros',
        description: 'Expert flat roof flashing repair around parapet walls, vents, and penetrations.',
        areas: ['Parapet walls', 'HVAC units', 'Pipe penetrations', 'Expansion joints', 'Roof edges'],
        emergency: false
      },
    ]
  },
  {
    slug: 'gutter-repair',
    name: 'Gutter Repair',
    shortName: 'Gutter',
    description: 'Complete gutter repair, cleaning, and replacement services.',
    services: [
      {
        slug: 'gutter-cleaning',
        name: 'Gutter Cleaning',
        title: 'Professional Gutter Cleaning',
        metaTitle: 'Gutter Cleaning {city} | Downspout Cleaning | Boise Roof Repair Pros',
        description: 'Professional gutter cleaning to prevent water damage and maintain proper drainage.',
        benefits: ['Prevent water damage', 'Avoid foundation problems', 'Prevent ice dams', 'Extend gutter life', 'Prevent basement flooding'],
        emergency: false
      },
      {
        slug: 'downspout-repair',
        name: 'Downspout Repair',
        title: 'Downspout Repair & Replacement',
        metaTitle: 'Downspout Repair {city} | Gutter Downspouts | Boise Roof Repair Pros',
        description: 'Downspout repair and replacement to ensure proper roof drainage.',
        problems: ['Disconnected downspouts', 'Damaged downspouts', 'Clogged downspouts', 'Improper drainage'],
        emergency: false
      },
      {
        slug: 'gutter-replacement',
        name: 'Gutter Replacement',
        title: 'Gutter Replacement & Installation',
        metaTitle: 'Gutter Replacement {city} | New Gutters | Boise Roof Repair Pros',
        description: 'Complete gutter replacement and installation services.',
        types: ['Seamless gutters', 'Aluminum gutters', 'Copper gutters', 'Gutter guards'],
        emergency: false
      },
    ]
  },
];

// Additional standalone pages
const additionalPages = {
  about: [
    { slug: 'about-us', name: 'About Us', title: 'About Boise Roof Repair Pros' },
    { slug: 'testimonials', name: 'Testimonials', title: 'Customer Reviews & Testimonials' },
    { slug: 'licenses-insurance', name: 'Licenses & Insurance', title: 'Licenses & Insurance' },
    { slug: 'why-choose-us', name: 'Why Choose Us', title: 'Why Choose Boise Roof Repair Pros' },
    { slug: 'careers', name: 'Careers', title: 'Career Opportunities' },
  ],
  resources: [
    { slug: 'faq', name: 'FAQ', title: 'Frequently Asked Questions' },
    { slug: 'hvac-tips', name: 'HVAC Tips', title: 'DIY HVAC Tips' },
    { slug: 'repair-vs-replace', name: 'Repair vs Replace', title: 'Should You Repair or Replace?' },
    { slug: 'financing', name: 'Financing', title: 'HVAC Financing Options' },
    { slug: 'maintenance-plans', name: 'Maintenance Plans', title: 'HVAC Maintenance Agreements' },
  ],
};

// ========================================
// PAGE TEMPLATES
// ========================================

// Service Category Page Template
function generateServiceCategoryPage(category) {
  const servicesLinks = category.services.map(s =>
    `        { name: '${s.name}', href: '/services/${category.slug}/${s.slug}', description: '${s.description.substring(0, 60)}...' },`
  ).join('\n');

  return `import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: '${category.name} Services ${siteConfig.region} | ${siteConfig.businessName}',
  description: '${category.description} Serving Boise, Meridian, Nampa & the ${siteConfig.region}. Call ${siteConfig.phone}.',
  alternates: {
    canonical: 'https://${siteConfig.domain}/services/${category.slug}',
  },
}

const services = [
${servicesLinks}
]

export default function ${category.name.replace(/\s+/g, '')}Page() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/${category.slug}.webp"
          alt="${category.name} Services in ${siteConfig.region}"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">${category.name} Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">${category.description}</p>
          <a href="tel:${siteConfig.phoneRaw}" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />${siteConfig.phone}
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">Our ${category.name} Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-dark-blue mb-2 group-hover:text-[#0b7fb6] transition-colors">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-dark-blue font-semibold group-hover:text-[#0b7fb6]">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need ${category.name} Service?</h2>
          <p className="text-xl text-gray-300 mb-8">Call us for fast, reliable service throughout the ${siteConfig.region}.</p>
          <a href="tel:${siteConfig.phoneRaw}" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />${siteConfig.phone}
          </a>
        </div>
      </section>
    </main>
  )
}
`;
}

// Individual Service Page Template
function generateServicePage(category, service) {
  const problemsList = service.problems ? service.problems.map(p => `'${p}'`).join(', ') : '';

  return `import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: '${service.metaTitle.replace('{city}', siteConfig.region)} | ${siteConfig.businessName}',
  description: '${service.description} Serving Boise, Meridian, Nampa & the ${siteConfig.region}. ${service.emergency ? '24/7 emergency service available. ' : ''}Call ${siteConfig.phone}.',
  alternates: {
    canonical: 'https://${siteConfig.domain}/services/${category.slug}/${service.slug}',
  },
}

${service.problems ? `const commonProblems = [${problemsList}]` : ''}

export default function ${service.name.replace(/[\s\/&-]+/g, '')}Page() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/${service.slug}.webp"
          alt="${service.title} in ${siteConfig.region}"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          ${service.emergency ? '<div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">24/7 Emergency Service</div>' : ''}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">${service.title}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">${service.description}</p>
          <a href="tel:${siteConfig.phoneRaw}" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />${siteConfig.phone}
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Professional ${service.title} in the ${siteConfig.region}</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>${service.description} Our experienced technicians are equipped to handle all your ${category.shortName.toLowerCase()} needs, from minor repairs to complete system replacements.</p>
              <p>We serve homeowners throughout Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding communities. When you need ${service.name.toLowerCase()}, you can count on ${siteConfig.businessName} for fast, professional service.</p>
            </div>

            ${service.problems ? `
            <h3 className="text-2xl font-bold text-dark-blue mt-12 mb-6">Common Problems We Fix</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {commonProblems.map((problem) => (
                <div key={problem} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{problem}</span>
                </div>
              ))}
            </div>
            ` : ''}

            <h3 className="text-2xl font-bold text-dark-blue mt-12 mb-6">Why Choose ${siteConfig.businessName}?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Licensed & Insured:</strong> Fully licensed HVAC contractors you can trust.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Upfront Pricing:</strong> Know the cost before we start. No surprises.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Same-Day Service:</strong> Fast response when you need it most.</span>
              </li>
              ${service.emergency ? `<li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>24/7 Emergency:</strong> Available around the clock for urgent repairs.</span>
              </li>` : ''}
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>All Brands:</strong> We service Carrier, Trane, Lennox, Rheem, Goodman, and more.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need ${service.title}?</h3>
              <p className="text-gray-300 mb-6">Contact us today for fast, professional service.</p>
              <a href="tel:${siteConfig.phoneRaw}" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />${siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">Service Areas</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cities-served/boise" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Boise</Link>
            <Link href="/cities-served/meridian" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Meridian</Link>
            <Link href="/cities-served/nampa" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Nampa</Link>
            <Link href="/cities-served/caldwell" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Caldwell</Link>
            <Link href="/cities-served/eagle" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Eagle</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
`;
}

// Location Main Page Template
function generateLocationPage(location) {
  const neighborhoodsList = location.neighborhoods.slice(0, 12).map(n => `'${n}'`).join(', ');

  return `import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, MapPin, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roof Repair Services ${location.name} ${siteConfig.state} | Emergency & Storm Damage | ${siteConfig.businessName}',
  description: 'Professional roof repair services in ${location.name}, ${siteConfig.state}. Leak repair, shingle replacement, storm damage repair. Licensed & insured. 24/7 emergency service. Call ${siteConfig.phone}',
  keywords: ['Roof Repair ${location.name}', 'Emergency roof repair ${location.name} Idaho', 'shingle repair ${location.name}', 'storm damage repair ${location.name}', 'roof leak repair ${location.name}'],
  alternates: {
    canonical: 'https://${siteConfig.domain}/cities-served/${location.slug}',
  },
}

const neighborhoods = [${neighborhoodsList}]

const services = [
  { name: 'Emergency Leak Repair', href: '/cities-served/${location.slug}/emergency-leak-repair', description: 'Fast roof leak repair' },
  { name: 'Missing Shingles', href: '/cities-served/${location.slug}/missing-shingles', description: 'Shingle replacement' },
  { name: 'Storm Damage', href: '/cities-served/${location.slug}/storm-damage', description: 'Storm damage repair' },
  { name: 'Hail Damage', href: '/cities-served/${location.slug}/hail-damage-repair', description: 'Hail damage repair' },
  { name: 'Wind Damage', href: '/cities-served/${location.slug}/wind-damage-repair', description: 'Wind damage repair' },
  { name: 'Gutter Service', href: '/cities-served/${location.slug}/gutter-cleaning', description: 'Gutter repair & cleaning' },
]

export default function ${location.name.replace(/[\s-]+/g, '')}Page() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/${location.slug}-roof-repair.webp"
          alt="Roof Repair Services in ${location.name}, ${siteConfig.state}"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Roof Repair Services in ${location.name}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional roof repair services for ${location.name} homes and businesses. Licensed, insured, and available 24/7.</p>
          <a href="tel:${siteConfig.phoneRaw}" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />${siteConfig.phone}
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">${location.name} Roof Repair Services</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>${location.name} is ${location.description}. With ${location.climate}, your roof protects your home year-round. When you need roof repair service in ${location.name}, ${siteConfig.businessName} is here to help.</p>
              <p>We've served ${location.name} homeowners for years, handling everything from emergency leak repairs during storms to shingle replacements and routine maintenance. Our technicians know ${location.name} homes and the unique roofing challenges they face.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Our Services in ${location.name}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="group bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-dark-blue group-hover:text-[#0b7fb6]">{service.name}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </Link>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">${location.name} Areas We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
              {neighborhoods.map((neighborhood) => (
                <div key={neighborhood} className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-dark-blue flex-shrink-0" />
                  <span className="text-sm text-gray-700">{neighborhood}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Why ${location.name} Homeowners Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Local Service:</strong> We're based in the ${siteConfig.region} and know ${location.name} well.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fast Response:</strong> Same-day service available for ${location.name} residents.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>24/7 Emergency:</strong> HVAC emergencies don't wait—neither do we.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fair Pricing:</strong> Upfront quotes with no hidden fees.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need HVAC Service in ${location.name}?</h3>
              <p className="text-gray-300 mb-6">Call us for a free estimate. We'll get your system running right.</p>
              <a href="tel:${siteConfig.phoneRaw}" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />${siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">Also Serving Nearby Cities</h2>
          <div className="flex flex-wrap justify-center gap-4">
            ${locations.filter(l => l.slug !== location.slug).slice(0, 5).map(l =>
              `<Link href="/cities-served/${l.slug}" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">${l.name}</Link>`
            ).join('\n            ')}
          </div>
        </div>
      </section>
    </main>
  )
}
`;
}

// Location + Service Page Template
function generateLocationServicePage(location, service, category) {
  const problemsList = service.problems ? service.problems.slice(0, 6).map(p => `'${p}'`).join(', ') : '';

  return `import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: '${service.name} ${location.name} ${siteConfig.stateAbbr} | ${siteConfig.businessName}',
  description: '${service.description} in ${location.name}, ${siteConfig.state}. ${service.emergency ? '24/7 emergency service. ' : ''}Licensed & insured. Call ${siteConfig.phone}.',
  keywords: ['${service.name.toLowerCase()} ${location.name}', '${category.shortName.toLowerCase()} service ${location.name}', 'HVAC ${location.name} ${siteConfig.state}'],
  alternates: {
    canonical: 'https://${siteConfig.domain}/cities-served/${location.slug}/${service.slug}',
  },
}

${service.problems ? `const commonProblems = [${problemsList}]` : ''}

export default function ${location.name.replace(/[\s-]+/g, '')}${service.name.replace(/[\s\/&-]+/g, '')}Page() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/${service.slug}.webp"
          alt="${service.name} in ${location.name}, ${siteConfig.state}"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          ${service.emergency ? '<div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">24/7 Emergency Service</div>' : ''}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">${service.name} in ${location.name}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">${service.description} Serving ${location.name} and ${location.county}.</p>
          <a href="tel:${siteConfig.phoneRaw}" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />${siteConfig.phone}
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">${service.name} Services in ${location.name}</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Living in ${location.name} means ${location.climate}. When your ${category.shortName.toLowerCase()} system needs ${service.name.toLowerCase().includes('repair') ? 'repair' : 'service'}, you need a local team you can trust.</p>
              <p>${siteConfig.businessName} provides professional ${service.name.toLowerCase()} throughout ${location.name} and ${location.county}. Our experienced technicians arrive promptly, diagnose accurately, and fix problems right the first time.</p>
            </div>

            ${service.problems ? `
            <h3 className="text-2xl font-bold text-dark-blue mb-6">Common ${category.shortName} Problems We Fix in ${location.name}</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {commonProblems.map((problem) => (
                <div key={problem} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{problem}</span>
                </div>
              ))}
            </div>
            ` : ''}

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Why ${location.name} Residents Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fast ${location.name} Service:</strong> We respond quickly to ${location.name} service calls.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Upfront Pricing:</strong> Know the cost before we start any work.</span>
              </li>
              ${service.emergency ? `<li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>24/7 Emergency Service:</strong> Available around the clock for ${location.name} emergencies.</span>
              </li>` : ''}
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Licensed & Insured:</strong> Professional, trustworthy service.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need ${service.name} in ${location.name}?</h3>
              <p className="text-gray-300 mb-6">Call now for fast, professional service.</p>
              <a href="tel:${siteConfig.phoneRaw}" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />${siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">Other Services in ${location.name}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cities-served/${location.slug}" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">All ${location.name} Services</Link>
            <Link href="/cities-served/${location.slug}/ac-repair" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">AC Repair</Link>
            <Link href="/cities-served/${location.slug}/furnace-repair" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Furnace Repair</Link>
            <Link href="/cities-served/${location.slug}/hvac-maintenance" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">HVAC Maintenance</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
`;
}

// ========================================
// GENERATOR FUNCTIONS
// ========================================

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content);
  console.log(`Created: ${filePath}`);
}

function generateAllPages() {
  const appDir = path.join(__dirname, 'src', 'app');

  console.log('\\n========================================');
  console.log('GENERATING SITE PAGES');
  console.log('========================================\\n');

  let totalPages = 0;

  // 1. Generate service category and individual service pages
  console.log('\\n--- Service Pages ---');
  const servicesDir = path.join(appDir, 'services');
  ensureDir(servicesDir);

  // Services hub page
  writeFile(path.join(servicesDir, 'page.tsx'), generateServicesHubPage());
  totalPages++;

  for (const category of serviceCategories) {
    const categoryDir = path.join(servicesDir, category.slug);
    ensureDir(categoryDir);

    // Category page
    writeFile(path.join(categoryDir, 'page.tsx'), generateServiceCategoryPage(category));
    totalPages++;

    // Individual service pages
    for (const service of category.services) {
      const serviceDir = path.join(categoryDir, service.slug);
      ensureDir(serviceDir);
      writeFile(path.join(serviceDir, 'page.tsx'), generateServicePage(category, service));
      totalPages++;
    }
  }

  // 2. Generate location pages
  console.log('\\n--- Location Pages ---');
  const citiesDir = path.join(appDir, 'cities-served');
  ensureDir(citiesDir);

  // Cities hub page
  writeFile(path.join(citiesDir, 'page.tsx'), generateCitiesHubPage());
  totalPages++;

  for (const location of locations) {
    const locationDir = path.join(citiesDir, location.slug);
    ensureDir(locationDir);

    // Location main page
    writeFile(path.join(locationDir, 'page.tsx'), generateLocationPage(location));
    totalPages++;

    // Location + service pages (key services only to keep manageable)
    const keyServices = [
      { slug: 'emergency-leak-repair', name: 'Emergency Leak Repair', category: serviceCategories[0] },
      { slug: 'missing-shingles', name: 'Missing Shingles', category: serviceCategories[1] },
      { slug: 'damaged-shingles', name: 'Damaged Shingles', category: serviceCategories[1] },
      { slug: 'storm-damage', name: 'Storm Damage', category: serviceCategories[2] },
      { slug: 'hail-damage-repair', name: 'Hail Damage Repair', category: serviceCategories[3] },
      { slug: 'wind-damage-repair', name: 'Wind Damage Repair', category: serviceCategories[3] },
      { slug: 'gutter-cleaning', name: 'Gutter Cleaning', category: serviceCategories[5] },
      { slug: 'gutter-replacement', name: 'Gutter Replacement', category: serviceCategories[5] },
    ];

    for (const svc of keyServices) {
      const serviceInCategory = svc.category.services.find(s => s.slug === svc.slug) ||
        { slug: svc.slug, name: svc.name, description: `Professional ${svc.name.toLowerCase()} services.`, emergency: svc.slug.includes('repair') };

      const serviceDir = path.join(locationDir, svc.slug);
      ensureDir(serviceDir);
      writeFile(path.join(serviceDir, 'page.tsx'), generateLocationServicePage(location, serviceInCategory, svc.category));
      totalPages++;
    }
  }

  // 3. Generate About pages
  console.log('\\n--- About Pages ---');
  const aboutDir = path.join(appDir, 'about-us');
  ensureDir(aboutDir);
  writeFile(path.join(aboutDir, 'page.tsx'), generateAboutPage());
  totalPages++;

  for (const page of additionalPages.about.slice(1)) {
    const pageDir = path.join(aboutDir, page.slug);
    ensureDir(pageDir);
    writeFile(path.join(pageDir, 'page.tsx'), generateAboutSubPage(page));
    totalPages++;
  }

  // 4. Generate Resources pages
  console.log('\\n--- Resources Pages ---');
  const resourcesDir = path.join(appDir, 'resources');
  ensureDir(resourcesDir);
  writeFile(path.join(resourcesDir, 'page.tsx'), generateResourcesPage());
  totalPages++;

  for (const page of additionalPages.resources) {
    const pageDir = path.join(resourcesDir, page.slug);
    ensureDir(pageDir);
    writeFile(path.join(pageDir, 'page.tsx'), generateResourceSubPage(page));
    totalPages++;
  }

  // 5. Generate Contact page
  console.log('\\n--- Contact Page ---');
  const contactDir = path.join(appDir, 'contact');
  ensureDir(contactDir);
  writeFile(path.join(contactDir, 'page.tsx'), generateContactPage());
  totalPages++;

  console.log('\\n========================================');
  console.log(`TOTAL PAGES GENERATED: ${totalPages}`);
  console.log('========================================\\n');
}

// Hub/Additional Page Templates
function generateServicesHubPage() {
  return `import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HVAC Services | Heating & Cooling | ${siteConfig.businessName}',
  description: 'Complete HVAC services in the ${siteConfig.region}. AC repair, furnace installation, heat pumps, and more. Call ${siteConfig.phone}.',
  alternates: { canonical: 'https://${siteConfig.domain}/services' },
}

const categories = [
${serviceCategories.map(c => `  { name: '${c.name}', slug: '${c.slug}', description: '${c.description}' },`).join('\n')}
]

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our HVAC Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Complete roof repair services for the ${siteConfig.region}.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((cat) => (
              <Link key={cat.slug} href={\`/services/\${cat.slug}\`} className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-bold text-dark-blue mb-3 group-hover:text-[#0b7fb6]">{cat.name}</h2>
                <p className="text-gray-600 mb-4">{cat.description}</p>
                <span className="inline-flex items-center text-dark-blue font-semibold">View Services <ArrowRight className="w-4 h-4 ml-2" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Need HVAC Service?</h2>
          <a href="tel:${siteConfig.phoneRaw}" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />${siteConfig.phone}
          </a>
        </div>
      </section>
    </main>
  )
}
`;
}

function generateCitiesHubPage() {
  return `import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Service Areas | Cities We Serve | ${siteConfig.businessName}',
  description: 'HVAC services throughout the ${siteConfig.region}. Serving Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding areas. Call ${siteConfig.phone}.',
  alternates: { canonical: 'https://${siteConfig.domain}/cities-served' },
}

const cities = [
${locations.map(l => `  { name: '${l.name}', slug: '${l.slug}', county: '${l.county}' },`).join('\n')}
]

export default function CitiesServedPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Service Areas</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Professional HVAC services throughout the ${siteConfig.region}.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cities.map((city) => (
              <Link key={city.slug} href={\`/cities-served/\${city.slug}\`} className="group flex items-center gap-4 bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <MapPin className="w-8 h-8 text-dark-blue group-hover:text-[#0b7fb6]" />
                <div>
                  <h2 className="text-xl font-bold text-dark-blue group-hover:text-[#0b7fb6]">{city.name}</h2>
                  <p className="text-gray-600 text-sm">{city.county}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Need Service in Your Area?</h2>
          <a href="tel:${siteConfig.phoneRaw}" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />${siteConfig.phone}
          </a>
        </div>
      </section>
    </main>
  )
}
`;
}

function generateAboutPage() {
  return `import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Phone, Award, Shield, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | ${siteConfig.businessName}',
  description: 'Learn about ${siteConfig.businessName}. Local HVAC experts serving the ${siteConfig.region}. Licensed, insured, and committed to quality service.',
  alternates: { canonical: 'https://${siteConfig.domain}/about-us' },
}

export default function AboutPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About ${siteConfig.businessName}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Your trusted local HVAC experts in the ${siteConfig.region}.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>${siteConfig.businessName} is a locally owned and operated HVAC company serving homeowners throughout the ${siteConfig.region}. We provide complete roof repair services including AC repair, furnace installation, heat pump service, and preventive maintenance.</p>
              <p>Our team of licensed technicians is committed to providing honest, reliable service at fair prices. We believe in doing the job right the first time and standing behind our work.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Award className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">Fully licensed HVAC contractors with comprehensive insurance coverage.</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Quality Guarantee</h3>
                <p className="text-gray-600">We stand behind our work with comprehensive warranties.</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Local Team</h3>
                <p className="text-gray-600">${siteConfig.region} residents serving our neighbors.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/about-us/testimonials" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-bold text-dark-blue">Customer Reviews</h4>
                <p className="text-sm text-gray-600">See what our customers say about us</p>
              </Link>
              <Link href="/about-us/licenses-insurance" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-bold text-dark-blue">Licenses & Insurance</h4>
                <p className="text-sm text-gray-600">Our credentials and coverage</p>
              </Link>
              <Link href="/about-us/why-choose-us" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-bold text-dark-blue">Why Choose Us</h4>
                <p className="text-sm text-gray-600">What makes us different</p>
              </Link>
              <Link href="/about-us/careers" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-bold text-dark-blue">Careers</h4>
                <p className="text-sm text-gray-600">Join our team</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <a href="tel:${siteConfig.phoneRaw}" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />${siteConfig.phone}
          </a>
        </div>
      </section>
    </main>
  )
}
`;
}

function generateAboutSubPage(page) {
  return `import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: '${page.title} | ${siteConfig.businessName}',
  description: '${page.title} - ${siteConfig.businessName}. Serving the ${siteConfig.region}.',
  alternates: { canonical: 'https://${siteConfig.domain}/about-us/${page.slug}' },
}

export default function ${page.name.replace(/[\s&-]+/g, '')}Page() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">${page.title}</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>Content for ${page.title} coming soon.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <a href="tel:${siteConfig.phoneRaw}" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />${siteConfig.phone}
          </a>
        </div>
      </section>
    </main>
  )
}
`;
}

function generateResourcesPage() {
  return `import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HVAC Resources | Tips & Guides | ${siteConfig.businessName}',
  description: 'HVAC resources, tips, and guides from ${siteConfig.businessName}. Learn about heating and cooling for your home.',
  alternates: { canonical: 'https://${siteConfig.domain}/resources' },
}

const resources = [
${additionalPages.resources.map(r => `  { name: '${r.name}', slug: '${r.slug}', title: '${r.title}' },`).join('\n')}
]

export default function ResourcesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">HVAC Resources</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Helpful information for homeowners.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {resources.map((resource) => (
              <Link key={resource.slug} href={\`/resources/\${resource.slug}\`} className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-bold text-dark-blue mb-2 group-hover:text-[#0b7fb6]">{resource.title}</h2>
                <span className="inline-flex items-center text-dark-blue font-semibold">Learn More <ArrowRight className="w-4 h-4 ml-2" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Have Questions?</h2>
          <a href="tel:${siteConfig.phoneRaw}" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />${siteConfig.phone}
          </a>
        </div>
      </section>
    </main>
  )
}
`;
}

function generateResourceSubPage(page) {
  return `import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: '${page.title} | ${siteConfig.businessName}',
  description: '${page.title} - Helpful HVAC information from ${siteConfig.businessName}.',
  alternates: { canonical: 'https://${siteConfig.domain}/resources/${page.slug}' },
}

export default function ${page.name.replace(/[\s&-]+/g, '')}Page() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">${page.title}</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>Content for ${page.title} coming soon.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <a href="tel:${siteConfig.phoneRaw}" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />${siteConfig.phone}
          </a>
        </div>
      </section>
    </main>
  )
}
`;
}

function generateContactPage() {
  return `import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | ${siteConfig.businessName}',
  description: 'Contact ${siteConfig.businessName} for HVAC service in the ${siteConfig.region}. Call ${siteConfig.phone} for fast service.',
  alternates: { canonical: 'https://${siteConfig.domain}/contact' },
}

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Ready to schedule service? We're here to help.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-8 h-8 text-dark-blue flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-dark-blue">Phone</h3>
                    <a href="tel:${siteConfig.phoneRaw}" className="text-lg text-gray-600 hover:text-[#0b7fb6]">${siteConfig.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-8 h-8 text-dark-blue flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-dark-blue">Hours</h3>
                    <p className="text-gray-600">24/7 Emergency Service Available</p>
                    <p className="text-gray-600">Mon-Fri: 7am - 6pm</p>
                    <p className="text-gray-600">Sat: 8am - 4pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-dark-blue flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-dark-blue">Service Area</h3>
                    <p className="text-gray-600">${siteConfig.region}, ${siteConfig.state}</p>
                    <p className="text-gray-600">Boise, Meridian, Nampa, Caldwell, Eagle & More</p>
                  </div>
                </div>
              </div>
              <div className="bg-dark-blue p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Call Now</h3>
                <p className="text-gray-300 mb-6">Talk to a live person. We're here to help.</p>
                <a href="tel:${siteConfig.phoneRaw}" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-400 transition-colors">
                  <Phone className="w-6 h-6" />${siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
`;
}

// Run the generator
generateAllPages();
