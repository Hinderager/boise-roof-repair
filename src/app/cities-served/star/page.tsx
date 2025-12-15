import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, MapPin, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HVAC Services Star Idaho | AC & Heating | Boise HVAC Pros',
  description: 'Professional HVAC services in Star, Idaho. AC repair, furnace installation, heating services. Licensed & insured. 24/7 emergency service. Call (208) 505-9352.',
  keywords: ['HVAC Star', 'AC repair Star Idaho', 'furnace repair Star', 'heating services Star', 'air conditioning Star'],
  alternates: {
    canonical: 'https://hvac-boise.com/cities-served/star',
  },
}

const neighborhoods = ['Downtown Star', 'North Star', 'South Star', 'Star River', 'Lanark']

const services = [
  { name: 'AC Repair', href: '/cities-served/star/ac-repair', description: 'Fast air conditioning repair' },
  { name: 'AC Installation', href: '/cities-served/star/ac-installation', description: 'New AC system installation' },
  { name: 'Furnace Repair', href: '/cities-served/star/furnace-repair', description: 'Expert furnace repair' },
  { name: 'Furnace Installation', href: '/cities-served/star/furnace-installation', description: 'New furnace installation' },
  { name: 'Heat Pump Service', href: '/cities-served/star/heat-pump-repair', description: 'Heat pump repair & install' },
  { name: 'HVAC Maintenance', href: '/cities-served/star/hvac-maintenance', description: 'Preventive maintenance' },
]

export default function StarPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/star-hvac.webp"
          alt="HVAC Services in Star, Idaho"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">HVAC Services in Star</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional heating and cooling services for Star homes and businesses. Licensed, insured, and available 24/7.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Star HVAC Services</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Star is a fast-growing community west of Eagle. With hot summers and cold winters typical of the Treasure Valley, your HVAC system works hard year-round. When you need heating or cooling service in Star, Boise HVAC Pros is here to help.</p>
              <p>We've served Star homeowners for years, handling everything from emergency AC repairs during summer heat waves to furnace installations before winter hits. Our technicians know Star homes and the unique HVAC challenges they face.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Our Services in Star</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="group bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-dark-blue group-hover:text-[#0b7fb6]">{service.name}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </Link>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Star Areas We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
              {neighborhoods.map((neighborhood) => (
                <div key={neighborhood} className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-dark-blue flex-shrink-0" />
                  <span className="text-sm text-gray-700">{neighborhood}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Why Star Homeowners Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Local Service:</strong> We're based in the Treasure Valley and know Star well.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fast Response:</strong> Same-day service available for Star residents.</span>
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
              <h3 className="text-2xl font-bold text-white mb-4">Need HVAC Service in Star?</h3>
              <p className="text-gray-300 mb-6">Call us for a free estimate. We'll get your system running right.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">Also Serving Nearby Cities</h2>
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
