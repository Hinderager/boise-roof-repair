import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Boise HVAC Pros',
  description: 'Contact Boise HVAC Pros for HVAC service in the Treasure Valley. Call (208) 505-9352 for fast service.',
  alternates: { canonical: 'https://hvac-boise.com/contact' },
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
                    <a href="tel:2085059352" className="text-lg text-gray-600 hover:text-[#0b7fb6]">(208) 505-9352</a>
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
                    <p className="text-gray-600">Treasure Valley, Idaho</p>
                    <p className="text-gray-600">Boise, Meridian, Nampa, Caldwell, Eagle & More</p>
                  </div>
                </div>
              </div>
              <div className="bg-dark-blue p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Call Now</h3>
                <p className="text-gray-300 mb-6">Talk to a live person. We're here to help.</p>
                <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-400 transition-colors">
                  <Phone className="w-6 h-6" />(208) 505-9352
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
