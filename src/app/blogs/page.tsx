import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Roof Repair Blog | Tips & Guides | Boise Roof Repair Pros',
  description: 'Expert tips, guides, and insights about roof repair in Boise and the Treasure Valley. Learn from the pros at Top Shelf Roofing.',
  alternates: {
    canonical: 'https://boise-roof-repair.com/blogs',
  },
}

const blogPosts = [
  {
    slug: 'signs-you-need-roof-repair',
    title: '8 Signs You Need Roof Repair (Before It\'s Too Late)',
    excerpt: 'Your roof usually warns you before it fails. Here\'s what to watch for.',
    image: '/hero-roof.jpg',
  },
  {
    slug: 'roof-repair-vs-replacement',
    title: 'Roof Repair vs Replacement: Which Do You Actually Need?',
    excerpt: 'Sometimes a repair makes sense. Sometimes you\'re just throwing money away. Here\'s how to decide.',
    image: '/hero-roof.jpg',
  },
  {
    slug: 'common-roof-problems-boise',
    title: 'Common Roof Problems in Boise (And How to Fix Them)',
    excerpt: 'Idaho weather puts your roof through the wringer. Here are the issues we see most often.',
    image: '/hero-roof.jpg',
  },
  {
    slug: 'roof-repair-cost-guide',
    title: 'Roof Repair Costs in Boise: What to Expect',
    excerpt: 'Wondering what roof repairs cost? Here\'s the straightforward explanation.',
    image: '/hero-roof.jpg',
  },
  {
    slug: 'emergency-roof-repair-tips',
    title: 'Emergency Roof Repair: What to Do When Your Roof Leaks',
    excerpt: 'Discovered a leak? Here\'s how to minimize damage while waiting for help.',
    image: '/hero-roof.jpg',
  },
]

export default function BlogsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Tips, guides, and insights about roof repair in the Treasure Valley. Real advice from real roofing professionals.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/blogs/${post.slug}`}>
                  <div className="relative h-48 bg-dark-blue">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/20 text-6xl font-bold">ROOF</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gunmetal mb-2 hover:text-dark-blue transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-dark-blue font-semibold">
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your roof repair project.
          </p>
          <a
            href="tel:2085059352"
            className="inline-block bg-[#FFC845] hover:bg-yellow-400 text-dark-blue font-bold text-lg px-8 py-4 rounded-lg transition-colors"
          >
            Call (208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
