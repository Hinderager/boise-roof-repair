'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const faqs = [
  { question: 'How much does roof repair cost?', answer: 'Most repairs run between $200-800 depending on the damage. Simple shingle repairs might be $200-400, while more complex leak repairs can run $400-800. We provide upfront pricing before any work begins and offer free inspections.' },
  { question: 'How quickly can you fix a roof leak?', answer: 'For emergencies, we can usually get a tarp up within a few hours to stop active leaks. Permanent repairs are typically completed within 1-2 days, weather permitting. We prioritize leak repairs to prevent further damage to your home.' },
  { question: 'Do you offer 24/7 emergency service?', answer: 'Yes. Roof leak in the middle of the night? Storm damage on a weekend? We understand roof emergencies can\'t wait. Our emergency team is available around the clock to protect your home.' },
  { question: 'Will you work with my insurance company?', answer: 'Absolutely. We have extensive experience working with insurance claims for storm damage, hail damage, and wind damage. We can provide detailed documentation and work directly with your adjuster to make the process smooth.' },
  { question: 'Can you match my existing shingles?', answer: 'In most cases, yes. We work with all major shingle manufacturers and can usually match your existing roof color and style. For discontinued products, we\'ll find the closest match available.' },
  { question: 'How do I know if I need repair or replacement?', answer: 'Generally, if your roof is under 15 years old and the damage is localized, repair makes sense. If it\'s older with widespread issues, replacement might be more cost-effective long-term. We\'ll give you honest advice and both options.' },
  { question: 'Do you offer warranties on repairs?', answer: 'Yes. All our repairs come with a workmanship warranty. The specific terms depend on the type of repair, but we stand behind our work and will make it right if there are any issues.' },
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const toggleFAQ = (index: number) => setActiveIndex(activeIndex === index ? null : index)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-12 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
          <span className="text-dark-blue">Frequently Asked Questions</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-gray-200 last:border-b-0">
              <button onClick={() => toggleFAQ(index)} className="w-full flex items-center justify-between px-6 py-6 text-left transition-colors hover:bg-gray-50">
                <span className="text-xl md:text-2xl font-bold text-dark-blue pr-4">{faq.question}</span>
                <ChevronDown className={`w-6 h-6 text-dark-blue flex-shrink-0 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <div className={`grid transition-all duration-300 ease-in-out ${activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden"><div className="px-6 pb-6 text-gray-700 text-lg leading-relaxed">{faq.answer}</div></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-4 justify-center mt-12">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2085059352"><span className="md:hidden">Call Now</span><span className="hidden md:inline">(208) 505-9352</span></a>
          </Button>
        </div>
      </div>
    </section>
  )
}
