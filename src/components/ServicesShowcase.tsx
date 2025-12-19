import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const services = [
  {
    title: 'Leak Repair',
    description: 'Found a leak? We act fast to stop water damage and fix the source. Most leaks can be repaired same-day.',
    image: '/generated/leak-repair.webp',
    link: '/services/leak-repair',
    buttonText: 'Learn More'
  },
  {
    title: 'Shingle Repair & Replacement',
    description: 'Missing or damaged shingles leave your roof vulnerable. We match your existing shingles and make repairs that last.',
    image: '/generated/shingle-repair.webp',
    link: '/services/shingle-repair',
    buttonText: 'Learn More'
  },
  {
    title: 'Storm Damage Repair',
    description: 'Idaho storms can be brutal on roofs. We handle wind damage, hail damage, and fallen tree limbs.',
    image: '/generated/storm-damage.webp',
    link: '/services/storm-damage',
    buttonText: 'Learn More'
  },
  {
    title: '24/7 Emergency Service',
    description: 'Roof emergency at 2 AM? We answer the phone and get someone to your property fast to prevent further damage.',
    image: '/generated/emergency-repair.webp',
    link: '/services/emergency-repair',
    buttonText: 'Learn More'
  }
]

export function ServicesShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark-blue mb-4 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>Serving Boise and the Treasure Valley</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">From Boise to Nampa, Meridian to Caldwell, we provide reliable roof repair service to keep your home protected.</p>
        </div>

        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <div key={service.title} className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] lg:hidden w-full">{service.title}</h3>
              <div className={`relative w-full ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative aspect-[4/3]">
                  <Image src={service.image} alt={service.title} fill loading={index === 0 ? "eager" : "lazy"} className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" quality={85} />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <h3 className="hidden lg:block text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-8">{service.description}</p>
                <Link href={service.link} className="inline-block bg-[#FFC845] hover:bg-[#e5b13d] text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 uppercase tracking-wide">{service.buttonText}</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-4 justify-center mt-16">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2085059352"><span className="md:hidden">Call Now</span><span className="hidden md:inline">(208) 505-9352</span></a>
          </Button>
        </div>
      </div>
    </section>
  )
}
