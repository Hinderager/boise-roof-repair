import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Indoor Air Quality Services Treasure Valley | Boise HVAC Pros',
  description: 'Indoor air quality services to improve the air you breathe. Serving Boise, Meridian, Nampa & the Treasure Valley. Call (208) 505-9352.',
  alternates: {
    canonical: 'https://hvac-boise.com/services/indoor-air-quality',
  },
}

const services = [
        { name: 'Air Purifiers', href: '/services/indoor-air-quality/air-purifiers', description: 'Whole-home air purifier installation for cleaner, healthier ...' },
        { name: 'Duct Cleaning', href: '/services/indoor-air-quality/duct-cleaning', description: 'Professional air duct cleaning to remove dust, debris, and a...' },
        { name: 'UV Light Installation', href: '/services/indoor-air-quality/uv-light-installation', description: 'UV light installation for your HVAC system to kill mold, bac...' },
]

export default function IndoorAirQualityPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/indoor-air-quality.webp"
          alt="Indoor Air Quality Services in Treasure Valley"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Indoor Air Quality Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Indoor air quality services to improve the air you breathe.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">Our Indoor Air Quality Services</h2>
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
          <h2 className="text-3xl font-bold text-white mb-4">Need Indoor Air Quality Service?</h2>
          <p className="text-xl text-gray-300 mb-8">Call us for fast, reliable service throughout the Treasure Valley.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
