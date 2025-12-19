import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Missing Shingle Repair Treasure Valley | Shingle Replacement | Boise Roof Repair Pros | Boise Roof Repair Pros',
  description: 'Fast missing shingle replacement to protect your roof from water damage. Serving Boise, Meridian, Nampa & the Treasure Valley. 24/7 emergency service available. Call (208) 505-9352.',
  alternates: {
    canonical: 'https://boise-roof-repair.com/services/shingle-repair/missing-shingles',
  },
}



export default function MissingShinglesPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/missing-shingles.webp"
          alt="Missing Shingle Replacement in Treasure Valley"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">24/7 Emergency Service</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Missing Shingle Replacement</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Fast missing shingle replacement to protect your roof from water damage.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Professional Missing Shingle Replacement in the Treasure Valley</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>Fast missing shingle replacement to protect your roof from water damage. Our experienced technicians are equipped to handle all your shingle repair needs, from minor repairs to complete system replacements.</p>
              <p>We serve homeowners throughout Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding communities. When you need missing shingles, you can count on Boise Roof Repair Pros for fast, professional service.</p>
            </div>

            

            <h3 className="text-2xl font-bold text-dark-blue mt-12 mb-6">Why Choose Boise Roof Repair Pros?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Licensed & Insured:</strong> Fully licensed Roofing contractors you can trust.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Upfront Pricing:</strong> Know the cost before we start. No surprises.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Same-Day Service:</strong> Fast response when you need it most.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>24/7 Emergency:</strong> Available around the clock for urgent repairs.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>All Brands:</strong> We service Carrier, Trane, Lennox, Rheem, Goodman, and more.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Missing Shingle Replacement?</h3>
              <p className="text-gray-300 mb-6">Contact us today for fast, professional service.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
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
