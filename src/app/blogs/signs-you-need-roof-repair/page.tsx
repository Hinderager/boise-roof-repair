import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AlertTriangle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: '8 Signs You Need Roof Repair Before It\'s Too Late | Boise Roofing',
  description: 'Your roof usually warns you before it fails. Here are 8 signs you need roof repair in Boise—catch problems early and avoid expensive damage.',
  alternates: {
    canonical: 'https://boise-roof-repair.com/blogs/signs-you-need-roof-repair',
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
            8 Signs You Need Roof Repair (Before It's Too Late)
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            Your roof usually warns you before it fails. Here's what to watch for.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Roofs don't just collapse without warning. They give you signs—subtle at first, then increasingly obvious. The trick is paying attention before a small leak becomes a major repair bill.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Idaho weather is particularly hard on roofs. Winter snow loads, summer heat, spring windstorms—your roof handles it all. Any weakness in the system gets amplified over time.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Here are eight warning signs that your roof needs attention. Catch these early, and you're looking at a straightforward repair. Ignore them, and you might be dealing with interior water damage or a full replacement.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 1 */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-dark-blue">1. Missing or Damaged Shingles</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This one's visible from the ground if you know where to look. Missing shingles leave your roof deck exposed to weather. Damaged shingles—cracked, curled, or with missing granules—can't protect properly.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Windstorms are usually the culprit in Boise. A strong gust catches the edge of a shingle that's already lifting, and suddenly you're down a few pieces. Sometimes you'll find them in your yard after a storm.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Check your roof after major weather events. Even a few missing shingles need replacement. The longer you wait, the more likely you are to develop leaks.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 2 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">2. Water Stains on Your Ceiling</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Water stains don't lie. If you see discoloration on your ceiling or walls, water's getting in somewhere. Maybe it's dripping during heavy rain. Maybe it's just seeping in slowly, soaking insulation.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Not all ceiling stains mean roof problems—could be plumbing or condensation. But if the stain appears on your top floor or follows rain patterns, your roof is the likely source.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Don't wait on this one. Water damage spreads. What starts as a small stain can turn into mold, rotted framing, and damaged drywall. Get it checked.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 3 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">3. Granules in Your Gutters</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Asphalt shingles are coated with granules that protect against UV rays and weather. As shingles age, they shed these granules. A little shedding is normal, especially on a newer roof. A lot is not.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Check your gutters and downspouts. If you're seeing heavy accumulation of sand-like material, your shingles are deteriorating. This accelerates as the protective layer wears away.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Heavy granule loss usually means your roof is nearing the end of its lifespan. Even if it's not leaking yet, you're on borrowed time.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 4 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">4. Sagging Roof Deck</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A roof should have clean, straight lines. If you notice sagging, dipping, or waviness, something's wrong with the structure underneath.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Common causes include water damage to the decking, inadequate support, or excessive weight from snow accumulation over years. Sometimes it's a sign that moisture has rotted the wood.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              A sagging roof deck is serious. It indicates structural problems that won't fix themselves. This isn't a DIY situation—call a professional to assess the damage.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 5 */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">5. Daylight Through the Roof Boards</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Go into your attic on a sunny day. Turn off the lights. If you can see daylight coming through the roof boards, you have gaps or holes.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Where light gets in, water gets in. And so does cold air in winter and hot air in summer, which affects your energy bills.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              While you're up there, look for water stains on the underside of the roof deck or on the rafters. Dark streaks or discoloration indicate current or past leaks.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 6 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">6. Damaged or Missing Flashing</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Flashing seals the joints where your roof meets chimneys, vents, skylights, or walls. It's often metal or rubber. When it fails, water finds its way in.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Look for flashing that's cracked, rusted, lifted, or missing entirely. Sometimes caulk or sealant around flashing deteriorates, creating gaps.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Flashing problems are common and fixable, but they cause leaks fast. If you spot damaged flashing, get it addressed before the next rain.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 7 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">7. Moss or Algae Growth</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Moss, algae, and lichen aren't just cosmetic issues. They hold moisture against your shingles, which accelerates deterioration. Moss roots can work their way under shingles and lift them.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              This is particularly common on north-facing slopes and shaded areas where moisture lingers. You'll see dark streaks (algae) or thick green growth (moss).
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Professional cleaning can remove growth, but if it's extensive, you might have underlying damage. Don't power wash it yourself—high pressure can damage shingles.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 8 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">8. Your Roof Is Over 20 Years Old</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Age alone is a warning sign. Most asphalt shingle roofs last 20-25 years, depending on quality, installation, and weather exposure. If your roof is approaching or past that age, it's living on borrowed time.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Even without visible problems, older roofs are more prone to sudden failures. Materials become brittle. Seals weaken. Weather resistance declines.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              If you don't know your roof's age, look for clues: check your home purchase records, ask neighbors if they know when it was done, or have a roofer inspect and estimate its age based on condition.
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
              If you notice any of these signs, don't panic—but don't ignore them either. Most roof problems are easier and cheaper to fix when caught early.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              We offer free inspections to assess the extent of damage and give you honest recommendations. Sometimes a small repair is all you need. Sometimes replacement makes more sense. We'll tell you which.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Free roof inspections</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Emergency repair service</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Licensed & insured</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Honest pricing, no surprises</span>
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
              Your roof talks to you through warning signs. Missing shingles, water stains, granule loss, sagging, visible light from the attic, damaged flashing, growth, and age—all indicate problems that need attention.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              A repair now is almost always cheaper than emergency fixes later or water damage to your home's interior. And it's definitely less stressful than dealing with a leak during a rainstorm.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Listen to what your roof is telling you. When it starts complaining, it's probably time to have someone take a look.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Notice Any of These Signs?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              We'll inspect your roof and give you honest recommendations on what needs fixing.
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
