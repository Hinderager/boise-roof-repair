import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HVAC Maintenance Star ID | Boise HVAC Pros',
  description: 'Professional hvac maintenance services. in Star, Idaho. Licensed & insured. Call (208) 505-9352.',
  keywords: ['hvac maintenance Star', 'ac service Star', 'HVAC Star Idaho'],
  alternates: {
    canonical: 'https://hvac-boise.com/cities-served/star/hvac-maintenance',
  },
}



export default function StarHVACMaintenancePage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/hvac-maintenance.webp"
          alt="HVAC Maintenance in Star, Idaho"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">HVAC Maintenance in Star</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional hvac maintenance services. Serving Star and Ada County.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">HVAC Maintenance Services in Star</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Living in Star means hot summers and cold winters typical of the Treasure Valley. When your ac system needs service, you need a local team you can trust.</p>
              <p>Boise HVAC Pros provides professional hvac maintenance throughout Star and Ada County. Our experienced technicians arrive promptly, diagnose accurately, and fix problems right the first time.</p>
            </div>

            

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Why Star Residents Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fast Star Service:</strong> We respond quickly to Star service calls.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Upfront Pricing:</strong> Know the cost before we start any work.</span>
              </li>
              
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Licensed & Insured:</strong> Professional, trustworthy service.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need HVAC Maintenance in Star?</h3>
              <p className="text-gray-300 mb-6">Call now for fast, professional service.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">Other Services in Star</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cities-served/star" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">All Star Services</Link>
            <Link href="/cities-served/star/ac-repair" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">AC Repair</Link>
            <Link href="/cities-served/star/furnace-repair" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Furnace Repair</Link>
            <Link href="/cities-served/star/hvac-maintenance" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">HVAC Maintenance</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
