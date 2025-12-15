import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Furnace Repair Boise ID | Boise HVAC Pros',
  description: 'Expert furnace repair services for gas and electric furnaces. in Boise, Idaho. 24/7 emergency service. Licensed & insured. Call (208) 505-9352.',
  keywords: ['furnace repair Boise', 'furnace service Boise', 'HVAC Boise Idaho'],
  alternates: {
    canonical: 'https://hvac-boise.com/cities-served/boise/furnace-repair',
  },
}

const commonProblems = ['Furnace not heating', 'Furnace blowing cold air', 'Strange noises', 'Short cycling', 'Yellow pilot light', 'Burning smell']

export default function BoiseFurnaceRepairPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/furnace-repair.webp"
          alt="Furnace Repair in Boise, Idaho"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">24/7 Emergency Service</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Furnace Repair in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Expert furnace repair services for gas and electric furnaces. Serving Boise and Ada County.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Furnace Repair Services in Boise</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Living in Boise means hot summers reaching 100°F and cold winters dropping below freezing. When your furnace system needs repair, you need a local team you can trust.</p>
              <p>Boise HVAC Pros provides professional furnace repair throughout Boise and Ada County. Our experienced technicians arrive promptly, diagnose accurately, and fix problems right the first time.</p>
            </div>

            
            <h3 className="text-2xl font-bold text-dark-blue mb-6">Common Furnace Problems We Fix in Boise</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {commonProblems.map((problem) => (
                <div key={problem} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{problem}</span>
                </div>
              ))}
            </div>
            

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Why Boise Residents Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fast Boise Service:</strong> We respond quickly to Boise service calls.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Upfront Pricing:</strong> Know the cost before we start any work.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>24/7 Emergency Service:</strong> Available around the clock for Boise emergencies.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Licensed & Insured:</strong> Professional, trustworthy service.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Furnace Repair in Boise?</h3>
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
          <h2 className="text-2xl font-bold text-dark-blue mb-6">Other Services in Boise</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cities-served/boise" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">All Boise Services</Link>
            <Link href="/cities-served/boise/ac-repair" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">AC Repair</Link>
            <Link href="/cities-served/boise/furnace-repair" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Furnace Repair</Link>
            <Link href="/cities-served/boise/hvac-maintenance" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">HVAC Maintenance</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
