'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const staticReviews = [
  { author: 'Mike R.', relative_time: '2 weeks ago', rating: 5, text: 'Had a leak in our roof during a storm. Called them and they came out same day with a tarp, then fixed it properly the next morning. No water damage inside. Quick, professional, fair price.' },
  { author: 'Sarah T.', relative_time: '1 month ago', rating: 5, text: 'Wind storm tore off several shingles. They matched the existing ones perfectly and you can\'t even tell where the repair was done. Great work at a reasonable cost.' },
  { author: 'David L.', relative_time: '3 weeks ago', rating: 5, text: 'Found a leak in my garage ceiling. They tracked it down to damaged flashing around the chimney. Fixed it right and explained everything. Haven\'t had any issues since.' },
  { author: 'Jennifer M.', relative_time: '2 months ago', rating: 5, text: 'Hail damage repair after a bad storm. They worked directly with our insurance and handled everything. Roof looks great and is fully watertight again.' },
  { author: 'Chris B.', relative_time: '1 week ago', rating: 5, text: 'Honest roofers - rare these days. They could have pushed for a full replacement but showed me the roof had years left and just needed a few repairs. Saved me thousands.' },
  { author: 'Amanda K.', relative_time: '1 month ago', rating: 5, text: 'Emergency leak repair at 11pm on a Saturday. They answered the phone and had someone here within an hour. Stopped the leak and came back to do permanent repairs. Lifesavers!' },
  { author: 'Tom H.', relative_time: '3 weeks ago', rating: 5, text: 'Had them repair some damaged valley areas that were causing leaks. Thorough job, cleaned up completely, and the price was exactly what they quoted. Very happy with the service.' },
  { author: 'Lisa P.', relative_time: '2 weeks ago', rating: 5, text: 'Best roof repair company in Boise. They fixed leak issues our previous roofer couldn\'t find. Fast response, quality repairs, and they stand behind their work. Highly recommend!' },
]

export function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [expandedReviews, setExpandedReviews] = useState(false)
  const reviewsPerPage = 4
  const rating = 4.9
  const totalReviews = 150

  const nextSlide = () => setCurrentIndex((prev) => prev + reviewsPerPage >= staticReviews.length ? 0 : prev + reviewsPerPage)
  const prevSlide = () => setCurrentIndex((prev) => prev - reviewsPerPage < 0 ? Math.max(0, staticReviews.length - reviewsPerPage) : prev - reviewsPerPage)
  const visibleReviews = staticReviews.slice(currentIndex, currentIndex + reviewsPerPage)

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/30 to-slate-100/50 relative overflow-hidden">
      <div className="absolute inset-0" style={{backgroundImage: `radial-gradient(circle, #10477d 3px, transparent 3px)`, backgroundSize: '16px 16px', maskImage: `radial-gradient(ellipse 85% 65% at 0% 0%, black, transparent 60%), radial-gradient(ellipse 85% 65% at 100% 100%, black, transparent 60%)`, WebkitMaskImage: `radial-gradient(ellipse 85% 65% at 0% 0%, black, transparent 60%), radial-gradient(ellipse 85% 65% at 100% 100%, black, transparent 60%)`, maskComposite: 'add', WebkitMaskComposite: 'source-over', opacity: 0.2}} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark-blue mb-8 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>What Our Customers Say</h2>
          <div className="inline-block bg-white rounded-2xl px-8 py-6 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl font-bold"><span className="text-[#4285f4]">G</span><span className="text-[#ea4335]">o</span><span className="text-[#fbbc04]">o</span><span className="text-[#4285f4]">g</span><span className="text-[#34a853]">l</span><span className="text-[#ea4335]">e</span></span>
              <span className="text-2xl font-semibold text-gray-800">Reviews</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-3xl font-bold text-gray-900">{rating}</span>
              <div className="flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-[#fbbc04] text-[#fbbc04]" />)}</div>
              <span className="text-gray-600 ml-2">({totalReviews}+)</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleReviews.map((review, index) => (
              <Card key={`${review.author}-${index}`} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-light-blue to-dark-blue flex items-center justify-center text-white font-semibold text-lg">{review.author.charAt(0)}</div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-md"><span className="text-xs font-bold text-[#4285f4]">G</span></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1"><h3 className="font-semibold text-gray-900 truncate">{review.author}</h3><svg className="w-4 h-4 text-[#4285f4] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
                      <p className="text-sm text-gray-500">{review.relative_time}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#fbbc04] text-[#fbbc04]" />)}</div>
                  <div className="relative">
                    <p className={`text-gray-700 leading-relaxed ${!expandedReviews ? 'line-clamp-4' : ''}`}>{review.text}</p>
                    {!expandedReviews && review.text.length > 150 && <button onClick={() => setExpandedReviews(true)} className="text-[#4285f4] hover:text-dark-blue font-semibold text-sm mt-2 transition-colors">Read more</button>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {staticReviews.length > reviewsPerPage && (<>
            <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-slate-50 transition-colors disabled:opacity-50" disabled={currentIndex === 0}><ChevronLeft className="w-6 h-6 text-dark-blue" /></button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-slate-50 transition-colors disabled:opacity-50" disabled={currentIndex + reviewsPerPage >= staticReviews.length}><ChevronRight className="w-6 h-6 text-dark-blue" /></button>
          </>)}
        </div>
        {staticReviews.length > reviewsPerPage && <div className="flex justify-center gap-2 mt-8">{Array.from({ length: Math.ceil(staticReviews.length / reviewsPerPage) }).map((_, idx) => <button key={idx} onClick={() => setCurrentIndex(idx * reviewsPerPage)} className={`w-2 h-2 rounded-full transition-all ${Math.floor(currentIndex / reviewsPerPage) === idx ? 'bg-light-blue w-8' : 'bg-gray-300 hover:bg-gray-400'}`} />)}</div>}
        <div className="flex flex-row gap-4 justify-center mt-12">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow"><a href="tel:2085059352"><span className="md:hidden">Call Now</span><span className="hidden md:inline">(208) 505-9352</span></a></Button>
        </div>
      </div>
    </section>
  )
}
