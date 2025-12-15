import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Service Areas | Cities We Serve | Boise HVAC Pros',
  description: 'HVAC services throughout the Treasure Valley. Serving Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding areas. Call (208) 505-9352.',
  alternates: { canonical: 'https://hvac-boise.com/cities-served' },
}

const cities = [
  { name: 'Boise', slug: 'boise', county: 'Ada County' },
  { name: 'Meridian', slug: 'meridian', county: 'Ada County' },
  { name: 'Nampa', slug: 'nampa', county: 'Canyon County' },
  { name: 'Caldwell', slug: 'caldwell', county: 'Canyon County' },
  { name: 'Eagle', slug: 'eagle', county: 'Ada County' },
  { name: 'Garden City', slug: 'garden-city', county: 'Ada County' },
  { name: 'Kuna', slug: 'kuna', county: 'Ada County' },
  { name: 'Star', slug: 'star', county: 'Ada County' },
  { name: 'Middleton', slug: 'middleton', county: 'Canyon County' },
]

export default function CitiesServedPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Service Areas</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Professional HVAC services throughout the Treasure Valley.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cities.map((city) => (
              <Link key={city.slug} href={`/cities-served/${city.slug}`} className="group flex items-center gap-4 bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
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
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
