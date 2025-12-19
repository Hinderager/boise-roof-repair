import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roof Repair Costs in Boise: What to Expect in 2025',
  description: 'Wondering what roof repairs cost in Boise? Here\'s the straightforward explanation of pricing for common roof repairs in the Treasure Valley.',
  alternates: {
    canonical: 'https://boise-roof-repair.com/blogs/roof-repair-cost-guide',
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
            Roof Repair Costs in Boise: What to Expect
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            Wondering what roof repairs cost? Here's the straightforward explanation.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Nobody likes getting hit with an unexpected repair bill. So when your roof needs work, you probably want to know what it's going to cost before you make the call.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The frustrating answer is: it depends. But that's not helpful, so let's break down what affects roof repair costs in Boise and what you can reasonably expect to pay for common repairs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              These are ballpark figures based on our experience working in the Treasure Valley. Your actual costs will depend on your specific situation, but this should give you a starting point.
            </p>
          </div>
        </div>
      </section>

      {/* Small Repairs */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-dark-blue">Small Repairs: $150-$500</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>What this covers:</strong> Replacing a few damaged or missing shingles, resealing lifted shingles, minor flashing repairs, fixing small leaks around vents or pipes.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              This is the lower end of professional roof repair. You're paying for the roofer's time, materials, and the cost of getting their truck and equipment to your house. Even a quick 30-minute fix has minimum costs associated with it.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Some companies have minimum service charges of $200-300, so don't expect to get work done for less than that. And honestly, if you can find someone reliable who'll show up for a small repair at that price, that's reasonable.
            </p>
          </div>
        </div>
      </section>

      {/* Medium Repairs */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Medium Repairs: $500-$1,500</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>What this covers:</strong> Replacing a section of damaged roof (several square feet), repairing or replacing chimney flashing, fixing multiple leaks, replacing damaged roof decking in a small area, gutter repairs.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              This is where most common roof repairs fall. Something's wrong that needs proper attention, but it's not a major overhaul. The roofer will probably be at your house for a few hours to a full day.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Materials start to matter more at this level. Premium shingles cost more than basic ones. Quality flashing costs more than cheap stuff. But good materials last longer and perform better.
            </p>
          </div>
        </div>
      </section>

      {/* Large Repairs */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Large Repairs: $1,500-$4,000</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>What this covers:</strong> Replacing a significant section of roof, extensive decking replacement due to water damage, repairing or replacing multiple valleys, comprehensive flashing replacement, fixing structural issues.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              At this price point, you're getting into substantial work. Multiple workers, multiple days potentially. Significant material costs. And sometimes you're fixing problems that went unnoticed for a while and caused secondary damage.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Here's where the "repair vs. replace" calculation becomes important. If you're looking at $3,000-4,000 in repairs on an older roof, it might make more sense to invest in replacement instead of throwing money at a dying system.
            </p>
          </div>
        </div>
      </section>

      {/* What Affects Cost */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">What Affects Roof Repair Costs?</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Several factors push costs up or down. Understanding these helps you understand why estimates vary.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Roof pitch and accessibility:</strong> Steep roofs are harder and more dangerous to work on. They require more safety equipment and take longer. Difficulty accessing your roof (tight spaces, no easy ladder placement) adds time and complexity.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Material matching:</strong> If you're replacing shingles, they need to match what's already there. Sometimes finding exact matches for older or discontinued shingles is difficult or impossible, which complicates repairs.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Hidden damage:</strong> Sometimes what looks like a simple fix reveals more extensive problems once work begins. Roofers can't always see what's under the shingles until they remove them.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Season and timing:</strong> Emergency repairs during a storm cost more. Winter work can be more difficult. Peak season (spring/summer) sometimes means higher rates due to demand.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Repairs */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Emergency Repairs: Premium Pricing</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If your roof is actively leaking and you need someone now—middle of the night, weekend, during a storm—expect to pay premium rates. Emergency service might cost 50-100% more than scheduled work.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Is it worth it? Depends on what you're protecting. Water pouring into your home causes damage fast. Drywall, insulation, flooring, belongings—the costs add up quickly. An expensive emergency patch can be cheaper than water damage restoration.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              That said, emergency tarping or temporary fixes should be temporary. Get a proper repair scheduled once the crisis is handled.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Coverage */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">What About Insurance?</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Homeowner's insurance covers roof damage from storms, hail, wind, fire, and other sudden events. It doesn't cover normal wear and tear or damage from lack of maintenance.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              If storm damage caused your roof problems, file a claim. Your insurance will send an adjuster to assess the damage. If approved, they'll cover repair or replacement costs minus your deductible.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Typical deductibles in Idaho range from $500 to $2,500. So if repairs cost $1,000 and your deductible is $1,000, insurance doesn't help much. But if you need a $15,000 replacement with a $1,000 deductible, that's a different story.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              We work with insurance companies regularly and can help document damage and navigate the claims process.
            </p>
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Pricing Red Flags to Avoid</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Some pricing approaches signal potential problems. Here's what to watch out for.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Unusually low bids:</strong> If one estimate is dramatically lower than others, ask why. They might be cutting corners, using inferior materials, or planning to add charges later. Quality work costs what it costs.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Pressure to decide immediately:</strong> Legitimate roofers don't need you to sign today. Be wary of "this price is only good right now" tactics.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Large upfront deposits:</strong> Requesting 50% or more upfront before work begins is unusual. Standard practice is a smaller deposit with payment due upon completion.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>No written estimate:</strong> Everything should be in writing—scope of work, materials, costs, timeline. Verbal agreements lead to disputes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach - Dark Blue Section */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Pricing Approach</h2>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              We provide free inspections and detailed written estimates before any work begins. You'll know exactly what we're fixing, what materials we're using, and what it costs.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              If we find additional problems during the repair, we'll discuss them with you before proceeding. No surprise charges.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Free roof inspections</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Written estimates</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">No hidden fees</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Insurance claim assistance</span>
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
              Small roof repairs in Boise typically run $150-500. Medium repairs cost $500-1,500. Large repairs can hit $1,500-4,000 or more. Emergency service costs premium rates but might save you from expensive water damage.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Costs depend on the extent of damage, roof accessibility, materials, and whether there's hidden damage underneath. Insurance covers storm damage but not wear and tear.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Get multiple estimates, ask questions, and make sure everything's in writing. Quality work costs what it costs—suspiciously low bids usually mean problems down the road.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need a Free Estimate?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              We'll inspect your roof and give you detailed pricing for exactly what needs fixing.
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
