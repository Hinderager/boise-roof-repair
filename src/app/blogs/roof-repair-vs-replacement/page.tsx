import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roof Repair vs Replacement: Which Do You Need? | Boise Roofing',
  description: 'Should you repair or replace your roof in Boise? Here\'s how to decide when a repair makes sense and when you\'re just throwing money away.',
  alternates: {
    canonical: 'https://boise-roof-repair.com/blogs/roof-repair-vs-replacement',
  },
}

export default function BlogPost() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-dark-blue">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4">
          <Link
            href="/blogs"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Roof Repair vs Replacement: Which Do You Actually Need?
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            Sometimes a repair makes sense. Sometimes you're just throwing money away. Here's how to decide.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              It's the question every homeowner with roof problems asks: Should I repair this or just replace the whole thing?
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Neither answer is always right. Sometimes a few hundred dollars in repairs buys you years of service. Other times, repair work is just delaying the inevitable—and costing you more in the long run.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Here's how to figure out which makes sense for your situation.
            </p>
          </div>
        </div>
      </section>

      {/* Age Factor */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Start With Your Roof's Age</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A roof's age tells you a lot about whether repair makes sense. Most asphalt shingle roofs last 20-25 years. Some premium materials go longer. Metal roofs can hit 50 years.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              If your roof is under 10 years old and you're having problems, repair usually makes sense—unless there was a major storm or installation defect. The bulk of the roof's life is still ahead of it.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              If it's 15-20 years old, you're in the gray area. A small repair might be worth it. Extensive work probably isn't.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Over 20 years? Replacement starts making more financial sense, even if the immediate problem seems fixable.
            </p>
          </div>
        </div>
      </section>

      {/* Extent of Damage */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Consider the Extent of Damage</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              How much of your roof has problems? A few damaged shingles in one area is a repair. Widespread issues across the entire roof point toward replacement.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Good candidates for repair:</strong> Isolated damage from a fallen branch, missing shingles from wind, localized leaks around a chimney or vent, damaged flashing in one area.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Signs you need replacement:</strong> Multiple leaks in different areas, widespread granule loss, curling or buckling across large sections, sagging or structural issues, extensive storm damage.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              A good rule of thumb: If more than 30% of your roof needs work, replacement becomes more cost-effective than piecemeal repairs.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Do the Math</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Compare repair costs to replacement costs, factoring in how much life you're buying.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Let's say your roof is 18 years old, and repairs would cost $2,000. A full replacement costs $12,000 and lasts 20-25 years.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              That repair might buy you 2-4 more years before you need replacement anyway. You're spending $2,000 now, then $12,000 in a few years—total outlay of $14,000.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Or you replace now for $12,000 and you're done for the next two decades.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Sometimes delaying makes sense if you're planning to sell soon or need to spread out expenses. But from a pure cost perspective, replacement often wins with older roofs.
            </p>
          </div>
        </div>
      </section>

      {/* Performance Issues */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Think About Performance</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              An older roof doesn't just have visible damage. It's also less effective at protecting your home and regulating temperature.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Shingles lose their weather resistance over time. Seals deteriorate. The roof becomes more vulnerable to wind, water, and temperature extremes. Your energy bills might be higher because the roof system isn't performing like it used to.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              A new roof with modern materials and proper ventilation can actually pay for itself over time through lower energy costs and avoided repair bills.
            </p>
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Factor in Your Future Plans</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              How long do you plan to stay in this house? That should influence your decision.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Planning to sell in the next year or two? A repair that gets you through might be fine. Buyers will likely want to replace anyway, or factor it into their offer.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              But if you're staying long-term, replacement makes more sense. You get to enjoy a new roof with full warranty protection, better performance, and no repair headaches for decades.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Also consider that a new roof can improve resale value and marketability when you do eventually sell.
            </p>
          </div>
        </div>
      </section>

      {/* Warranty Considerations */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Check Your Warranty Status</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If your roof is still under warranty, that changes the calculation. Some storm damage, manufacturing defects, or installation issues might be covered.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Review your warranty documents or contact your original installer. You might find that certain repairs cost nothing, or that you have coverage that reduces replacement costs.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Also note that piecemeal repairs by different contractors can sometimes void existing warranties. Check before you hire someone new.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Factor */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Don't Forget Insurance</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If storm damage caused your roof problems, your homeowner's insurance might cover repairs or replacement.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              File a claim and have an adjuster inspect the damage. They'll determine what's covered. Sometimes they'll approve a full replacement when the damage is extensive enough, even if you thought you only needed repairs.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Just be aware that filing claims can affect future premiums. For small repairs, it might not be worth involving insurance. For major damage or replacement, it usually is.
            </p>
          </div>
        </div>
      </section>

      {/* Get Professional Opinion - Dark Blue Section */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Get a Professional Opinion</h2>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              You can research all day, but a qualified roofer looking at your actual situation will give you better information than any guide.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              We offer free inspections and honest assessments. If a repair makes sense, we'll tell you. If replacement is the smarter move, we'll explain why. And we'll give you pricing for both options so you can make an informed decision.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Free roof inspections</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Detailed written estimates</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Photos and documentation</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">No pressure sales tactics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">The Bottom Line</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Repair makes sense when your roof is relatively young, damage is isolated, and the fix is straightforward. Replacement makes sense when the roof is old, problems are widespread, or repair costs approach 25-30% of replacement cost.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Consider age, extent of damage, costs, future plans, warranties, and insurance coverage. The right answer depends on your specific situation.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              And when in doubt, get a professional inspection. Someone who's been doing this for years can spot things you can't and give you straight talk about your options.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Not Sure Which Option Makes Sense?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              We'll inspect your roof and give you honest recommendations with pricing for both repair and replacement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2085059352"
                className="inline-block bg-[#FFC845] hover:bg-yellow-400 text-dark-blue font-bold text-lg px-8 py-4 rounded-lg transition-colors"
              >
                Call (208) 505-9352
              </a>
              <span className="text-blue-100 self-center">Free inspections in the Treasure Valley</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gunmetal mb-8 text-center">
            More Articles
          </h2>
          <div className="text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center text-dark-blue font-semibold hover:text-[#0b7fb6] transition-colors"
            >
              View All Posts
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
