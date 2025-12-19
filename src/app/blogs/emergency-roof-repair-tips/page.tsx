import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AlertTriangle, CheckCircle, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Emergency Roof Repair: What to Do When Your Roof Leaks | Boise',
  description: 'Discovered a roof leak in Boise? Here\'s how to minimize damage and what to do while waiting for emergency roof repair.',
  alternates: {
    canonical: 'https://boise-roof-repair.com/blogs/emergency-roof-repair-tips',
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
            Emergency Roof Repair: What to Do When Your Roof Leaks
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            Discovered a leak? Here's how to minimize damage while waiting for help.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              There's never a convenient time for a roof leak. But discovering water dripping from your ceiling during a rainstorm ranks pretty high on the list of homeowner nightmares.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              You probably can't fix it yourself—not properly. And you might not be able to get a roofer there immediately, especially if it's nighttime, a weekend, or during a major storm when everyone else is dealing with the same problem.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Here's what you can do to minimize damage while you wait for professional help.
            </p>
          </div>
        </div>
      </section>

      {/* Step 1 */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h2 className="text-3xl font-bold text-dark-blue">Contain the Water Inside</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              First priority: stop the water from spreading and causing more interior damage.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Grab buckets, trash cans, towels—whatever you have. Place containers under active drips. Use towels to soak up standing water and create barriers to keep water from spreading across floors.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              If water's coming through a light fixture, turn off power to that circuit immediately. Water and electricity don't mix. If you're not sure which breaker controls that fixture, shut off the main breaker to that area.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Move furniture, electronics, and anything valuable away from the leak. Water damage to possessions adds up fast.
            </p>
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h2 className="text-3xl font-bold text-gunmetal">Poke a Hole in Bulging Ceiling</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This sounds counterintuitive, but if you have a bulging, sagging ceiling from water accumulation, you need to drain it before the weight collapses the ceiling.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Place a bucket directly under the bulge. Use a screwdriver or small knife to carefully poke a hole in the center. Water will drain out—probably a lot of it. Better controlled drainage into a bucket than sudden ceiling collapse.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              You're going to need ceiling repair anyway. Making a small drainage hole prevents a much bigger repair job.
            </p>
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h2 className="text-3xl font-bold text-gunmetal">Document Everything</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Take photos and videos of the leak, water damage, and any visible roof damage from the ground. Document time, date, and weather conditions.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              This documentation is crucial for insurance claims. Show the extent of damage, what was affected, and how severe the leak was. Don't wait to do this—document as soon as it's safe.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Also document any emergency measures you take and money you spend on temporary fixes or cleanup. Insurance might reimburse reasonable expenses to prevent further damage.
            </p>
          </div>
        </div>
      </section>

      {/* Step 4 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h2 className="text-3xl font-bold text-gunmetal">Call for Emergency Roof Repair</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Once you've contained the immediate problem, call a roofing company that offers emergency service. Explain the situation clearly—where it's leaking, how much water, any visible roof damage.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Be realistic about response times. During major storms when multiple roofs are leaking across Boise, you might wait several hours or longer. Professional roofers prioritize based on severity and order of calls.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              If you can't get anyone immediately, at least get on the schedule for first thing in the morning or as soon as weather permits safe roof access.
            </p>
          </div>
        </div>
      </section>

      {/* Step 5 */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h2 className="text-3xl font-bold text-gunmetal">Temporary Tarping (If Safe)</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you can safely access your roof and you have the materials, a temporary tarp can reduce water intrusion until professional help arrives. Key word: safely.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Don't attempt this during active rain, at night, on steep roofs, or if you're not comfortable working at height. Falling off your roof creates a much bigger emergency than water damage.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              If conditions allow, cover the damaged area with a heavy-duty tarp, extending it well beyond the leak location. Secure it with boards and weights—not nails, which create more holes.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Honestly, this is better left to professionals who have proper equipment and experience. But if you're handy and conditions are safe, a tarp can help.
            </p>
          </div>
        </div>
      </section>

      {/* What NOT to Do */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gunmetal">What NOT to Do</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Some responses to roof leaks make things worse. Avoid these common mistakes.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Don't ignore it hoping it'll stop:</strong> Even small leaks cause damage over time. Mold, rot, structural problems—they develop fast when water's involved.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Don't attempt major roof work yourself:</strong> Emergency tarping under safe conditions? Maybe. Trying to fix flashing or replace shingles during a storm? No. Leave real repairs to professionals.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Don't delay calling your insurance:</strong> Most policies require prompt notification of damage. Waiting weeks to file a claim can cause problems with coverage.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Don't use just anyone who shows up:</strong> Storm-chasers and scammers target neighborhoods after major weather events. Verify licensing, insurance, and references before hiring anyone.
            </p>
          </div>
        </div>
      </section>

      {/* After Emergency */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gunmetal mb-6">After Emergency Repairs</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Once a professional has stopped the immediate leak, you're not done yet. Emergency repairs are temporary. You'll need proper permanent fixes.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Get a thorough inspection to identify all damage—sometimes water travels before it drips, so the leak location and the roof damage location aren't the same spot.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Address interior damage too. Wet insulation needs replacement. Stained drywall might hide mold. Document everything for insurance purposes.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              File your insurance claim promptly with all documentation. Most companies are reasonable about storm damage if you report it properly and act to mitigate further damage.
            </p>
          </div>
        </div>
      </section>

      {/* Our Emergency Service - Dark Blue Section */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FFC845] rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-dark-blue" />
              </div>
              <h2 className="text-3xl font-bold">24/7 Emergency Roof Repair in Boise</h2>
            </div>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              We offer emergency roof repair service throughout the Treasure Valley. When you call, you'll talk to a real person who can assess your situation and get help on the way.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              We prioritize based on severity—active leaks causing interior damage get immediate response. We'll stabilize the situation, prevent further damage, and schedule permanent repairs.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">24/7 emergency response</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Licensed & insured</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Insurance claim assistance</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Permanent repair follow-up</span>
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
              When your roof leaks, act fast to minimize damage. Contain water inside, document everything, and call for professional help. Don't attempt dangerous roof work yourself.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Emergency repairs stop the immediate problem, but you'll need permanent fixes too. Work with your insurance company and get thorough inspections to identify all damage.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              A roof leak is stressful, but it's manageable if you take the right steps. The key is quick action and professional help.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Roof Emergency Right Now?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Call us immediately. We'll assess your situation and get help on the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2085059352"
                className="inline-block bg-[#FFC845] hover:bg-yellow-400 text-dark-blue font-bold text-lg px-8 py-4 rounded-lg transition-colors"
              >
                Call (208) 505-9352 Now
              </a>
              <span className="text-blue-100 self-center">24/7 Emergency Service Available</span>
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
