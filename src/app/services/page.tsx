import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HVAC Services | Heating & Cooling | Boise HVAC Pros',
  description: 'Complete HVAC services in the Treasure Valley. AC repair, furnace installation, heat pumps, and more. Call (208) 505-9352.',
  alternates: { canonical: 'https://hvac-boise.com/services' },
}

const categories = [
  { name: 'Air Conditioning', slug: 'air-conditioning', description: 'Complete air conditioning services including repair, maintenance, and installation for homes and businesses.' },
  { name: 'Heating', slug: 'heating', description: 'Complete heating services including heater repair, maintenance, and installation.' },
  { name: 'Furnaces', slug: 'furnaces', description: 'Complete furnace services including repair, maintenance, and installation.' },
  { name: 'Heat Pumps', slug: 'heat-pumps', description: 'Complete heat pump services including repair, maintenance, and installation.' },
  { name: 'Indoor Air Quality', slug: 'indoor-air-quality', description: 'Indoor air quality services to improve the air you breathe.' },
  { name: 'Ductwork', slug: 'ductwork', description: 'Ductwork services including repair, replacement, and sealing.' },
]

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our HVAC Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Complete heating and cooling services for the Treasure Valley.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/services/${cat.slug}`} className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
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
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
