import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Cloud, Wind, Snowflake, Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Common Roof Problems in Boise Idaho (And How to Fix Them)',
  description: 'Idaho weather puts your roof through the wringer. Here are the most common roof problems we see in Boise and the Treasure Valley—and what to do about them.',
  alternates: {
    canonical: 'https://boise-roof-repair.com/blogs/common-roof-problems-boise',
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
            Common Roof Problems in Boise (And How to Fix Them)
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            Idaho weather puts your roof through the wringer. Here are the issues we see most often.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Boise has weather that tests roofs in every direction. Cold winters with snow loads. Hot, dry summers. Spring windstorms. Hail when you least expect it.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              After years of working on roofs across the Treasure Valley, we see the same problems over and over. Some are minor annoyances. Others need immediate attention.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Here's what causes most of the roof repair calls we get, and what you can do about each one.
            </p>
          </div>
        </div>
      </section>

      {/* Problem 1 - Wind Damage */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Wind className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-dark-blue">Wind Damage to Shingles</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Spring winds in the Treasure Valley can be aggressive. We regularly see gusts over 40 mph, and occasionally much higher. That's enough to lift and tear shingles, especially older ones.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Wind damage usually shows up on the edges and ridges first—places where shingles are most exposed. You might find shingles in your yard after a storm, or notice that edges are lifting when you look up from the ground.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>What causes it:</strong> Shingles lose their adhesive seal over time. Wind catches the edges and works them loose. Once one goes, adjacent shingles become more vulnerable.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>The fix:</strong> Replace missing shingles and reseal lifted ones. If wind damage is widespread, it might indicate your roof is nearing the end of its lifespan. Check your insurance—storm damage is often covered.
            </p>
          </div>
        </div>
      </section>

      {/* Problem 2 - Ice Dam Issues */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Snowflake className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gunmetal">Ice Dams and Winter Damage</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ice dams form when snow on your roof melts from heat escaping through your attic, runs down to the cold eaves, and refreezes. This creates a dam of ice that blocks proper drainage.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Water backs up behind the dam and works its way under shingles. From there it can leak into your attic, walls, and ceilings. You'll see water stains inside or icicles hanging from the eaves—both are warning signs.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>What causes it:</strong> Poor attic insulation and ventilation. Heat from your living space escapes into the attic, warms the roof deck, and melts the snow unevenly.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>The fix:</strong> Improve attic insulation and ventilation to keep the roof deck cold. Add ice and water shield underlayment during roof replacement. In the short term, use a roof rake to remove snow after heavy storms.
            </p>
          </div>
        </div>
      </section>

      {/* Problem 3 - UV Degradation */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gunmetal">UV and Heat Degradation</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Boise summers are hot and sunny. All that UV exposure and heat gradually breaks down asphalt shingles. They become brittle, crack, curl, and lose their protective granules.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              South and west-facing slopes take the worst of it. You'll often see more deterioration on those sides of the roof compared to north-facing sections.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>What causes it:</strong> UV radiation breaks down the chemical bonds in asphalt. Heat accelerates the process. Over 20+ years, this is normal wear and tear.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>The fix:</strong> There's no preventing age-related UV damage—it's part of why roofs don't last forever. When degradation is extensive, it's time for replacement. Higher-quality shingles with better UV protection last longer.
            </p>
          </div>
        </div>
      </section>

      {/* Problem 4 - Flashing Failures */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Flashing Failures Around Chimneys and Vents</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Flashing is the metal or rubber material that seals joints where your roof meets chimneys, vent pipes, skylights, or walls. When flashing fails, leaks follow quickly.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We see flashing problems caused by improper installation, deteriorated caulk, rust on metal flashing, and material breakdown from temperature cycles. Sometimes the flashing itself is fine but the seal around it has failed.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>What causes it:</strong> Temperature swings make materials expand and contract. Over time, this breaks seals. Caulk dries out. Metal corrodes. Cheap materials fail prematurely.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>The fix:</strong> Replace damaged flashing and reseal properly. This is straightforward work if caught early. Wait too long, and water damage to the underlying structure gets expensive.
            </p>
          </div>
        </div>
      </section>

      {/* Problem 5 - Hail Damage */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gunmetal">Hail Damage</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Hailstorms in Idaho can be brutal. Even moderate-sized hail can bruise or crack shingles, knock off granules, and compromise your roof's protective capability.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Hail damage isn't always obvious. You might not see it from the ground. But close inspection reveals dents, missing granules in circular patterns, or cracks in the shingle surface.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>What causes it:</strong> Hailstones larger than about 1 inch can damage asphalt shingles. Older, more brittle shingles are more susceptible than newer ones.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>The fix:</strong> Document the damage and file an insurance claim. Most homeowner policies cover hail damage. Depending on the extent, you might need full replacement, which insurance typically covers minus your deductible.
            </p>
          </div>
        </div>
      </section>

      {/* Problem 6 - Poor Ventilation */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Poor Attic Ventilation</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Adequate attic ventilation is critical for roof longevity. Without it, heat and moisture build up, causing premature aging of roofing materials, ice dams in winter, and higher cooling costs in summer.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Signs of ventilation problems include excessive heat in your attic during summer, ice dams in winter, mold or mildew growth on roof decking, and shingles that age faster than they should.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>What causes it:</strong> Blocked or insufficient vents, improper installation, or attic insulation that's covering soffit vents. Sometimes homes were built without adequate ventilation to begin with.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>The fix:</strong> Add or improve intake and exhaust vents. Common solutions include soffit vents for intake and ridge vents or powered attic fans for exhaust. Proper ventilation can extend your roof's life significantly.
            </p>
          </div>
        </div>
      </section>

      {/* Problem 7 - Tree Damage */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">Overhanging Trees and Debris</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Trees near your roof cause multiple problems. Branches scrape shingles during wind. Falling limbs puncture or crack the roof. Leaves and needles accumulate, trapping moisture and promoting rot.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Shade from trees also keeps roofs damp longer after rain or snow, which encourages moss and algae growth. And squirrels or other animals use branches as highways to your roof, where they can cause additional damage.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>What causes it:</strong> Trees that weren't a problem when small become hazards as they grow. Or a storm weakens a branch that eventually falls.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>The fix:</strong> Trim branches back at least 6-10 feet from the roof. Remove dead or damaged limbs before they fall. Keep gutters clean of debris. Consider removing trees that pose significant risk.
            </p>
          </div>
        </div>
      </section>

      {/* When to Call - Dark Blue Section */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">When to Call for Roof Repair in Boise</h2>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              Most of these problems start small and get worse over time. Early intervention saves money and prevents secondary damage to your home's interior.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              We offer free roof inspections to identify problems before they become emergencies. We'll give you a detailed assessment and honest recommendations about what needs immediate attention and what can wait.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Free roof inspections</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Storm damage assessment</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Insurance claim assistance</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Emergency repair service</span>
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
              Idaho's climate creates specific challenges for roofs. Wind damage, ice dams, UV degradation, flashing failures, hail damage, poor ventilation, and tree problems are the issues we see most often in the Treasure Valley.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Most are preventable or fixable if you catch them early. Regular inspections—especially after major storms—help you spot problems before they become expensive.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Your roof protects everything else about your home. It's worth paying attention to.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Noticed Any of These Problems?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              We'll inspect your roof and give you an honest assessment of what needs fixing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2085059352"
                className="inline-block bg-[#FFC845] hover:bg-yellow-400 text-dark-blue font-bold text-lg px-8 py-4 rounded-lg transition-colors"
              >
                Call (208) 505-9352
              </a>
              <span className="text-blue-100 self-center">Serving Boise, Meridian, Nampa & the Treasure Valley</span>
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
