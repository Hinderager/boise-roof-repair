'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const serviceCategories = [
  {
    name: 'Air Conditioning',
    href: '/services/air-conditioning',
    services: [
      { name: 'AC Repair', href: '/services/air-conditioning/ac-repair' },
      { name: 'AC Maintenance', href: '/services/air-conditioning/ac-maintenance' },
      { name: 'AC Installation', href: '/services/air-conditioning/ac-installation' },
      { name: 'Emergency AC Repair', href: '/services/air-conditioning/emergency-ac-repair' },
      { name: 'Thermostat Repair', href: '/services/air-conditioning/thermostat-repair' },
    ]
  },
  {
    name: 'Heating',
    href: '/services/heating',
    services: [
      { name: 'Heater Repair', href: '/services/heating/heater-repair' },
      { name: 'Heater Maintenance', href: '/services/heating/heater-maintenance' },
      { name: 'Heater Installation', href: '/services/heating/heater-installation' },
    ]
  },
  {
    name: 'Furnaces',
    href: '/services/furnaces',
    services: [
      { name: 'Furnace Repair', href: '/services/furnaces/furnace-repair' },
      { name: 'Furnace Maintenance', href: '/services/furnaces/furnace-maintenance' },
      { name: 'Furnace Installation', href: '/services/furnaces/furnace-installation' },
    ]
  },
  {
    name: 'Heat Pumps',
    href: '/services/heat-pumps',
    services: [
      { name: 'Heat Pump Repair', href: '/services/heat-pumps/heat-pump-repair' },
      { name: 'Heat Pump Maintenance', href: '/services/heat-pumps/heat-pump-maintenance' },
      { name: 'Heat Pump Installation', href: '/services/heat-pumps/heat-pump-installation' },
    ]
  },
  {
    name: 'Indoor Air Quality',
    href: '/services/indoor-air-quality',
    services: [
      { name: 'Air Purifiers', href: '/services/indoor-air-quality/air-purifiers' },
      { name: 'Duct Cleaning', href: '/services/indoor-air-quality/duct-cleaning' },
      { name: 'UV Light Installation', href: '/services/indoor-air-quality/uv-light-installation' },
    ]
  },
]

const serviceAreas = [
  { name: 'Boise', href: '/cities-served/boise' },
  { name: 'Meridian', href: '/cities-served/meridian' },
  { name: 'Nampa', href: '/cities-served/nampa' },
  { name: 'Caldwell', href: '/cities-served/caldwell' },
  { name: 'Eagle', href: '/cities-served/eagle' },
  { name: 'Garden City', href: '/cities-served/garden-city' },
  { name: 'Kuna', href: '/cities-served/kuna' },
  { name: 'Star', href: '/cities-served/star' },
  { name: 'Middleton', href: '/cities-served/middleton' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => { setIsScrolled(window.scrollY > 20); ticking = false })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = (dropdown: string) => {
    if (closeTimeout) { clearTimeout(closeTimeout); setCloseTimeout(null) }
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setActiveDropdown(null), 300)
    setCloseTimeout(timeout)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 lg:pt-3 lg:px-4">
      <div className="lg:container lg:mx-auto lg:max-w-screen-2xl">
        <div className="bg-[#10477d] lg:rounded-lg border-b-2 lg:border-2 border-[#1e3a5f] shadow-xl px-2 sm:px-4 md:px-6 lg:px-8 flex items-center h-14 lg:h-20">
          <Link href="/" className="flex items-center lg:flex-1 flex-1 justify-start">
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
              Boise <span className="text-[#FFC845]">HVAC</span> Pros
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {/* Services Mega Menu */}
            <div className="relative group" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
              <button className="flex items-center space-x-1 text-white hover:text-gray-200 transition-colors font-bold text-sm xl:text-base whitespace-nowrap">
                <span>Services</span><ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute left-0 top-full mt-2 w-[600px] bg-white shadow-lg rounded-lg p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {serviceCategories.map((category) => (
                      <div key={category.href}>
                        <Link href={category.href} className="font-bold text-dark-blue hover:text-[#0b7fb6] block mb-2">{category.name}</Link>
                        <ul className="space-y-1">
                          {category.services.map((service) => (
                            <li key={service.href}>
                              <Link href={service.href} className="text-sm text-gray-600 hover:text-[#0b7fb6] transition-colors">{service.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <Link href="/services" className="text-dark-blue font-semibold hover:text-[#0b7fb6]">View All Services →</Link>
                  </div>
                </div>
              )}
            </div>

            {/* Service Areas Dropdown */}
            <div className="relative group" onMouseEnter={() => handleMouseEnter('areas')} onMouseLeave={handleMouseLeave}>
              <button className="flex items-center space-x-1 text-white hover:text-gray-200 transition-colors font-bold text-sm xl:text-base whitespace-nowrap">
                <span>Service Areas</span><ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'areas' && (
                <div className="absolute left-0 top-full mt-2 w-[280px] bg-white shadow-lg rounded-lg p-4">
                  <ul className="grid grid-cols-2 gap-2">
                    {serviceAreas.map((area) => (
                      <li key={area.href}>
                        <Link href={area.href} className="text-sm text-gray-600 hover:text-[#0b7fb6] transition-colors">{area.name}</Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 pt-3 border-t">
                    <Link href="/cities-served" className="text-dark-blue font-semibold text-sm hover:text-[#0b7fb6]">All Service Areas →</Link>
                  </div>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div className="relative group" onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>
              <button className="flex items-center space-x-1 text-white hover:text-gray-200 transition-colors font-bold text-sm xl:text-base whitespace-nowrap">
                <span>About</span><ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'about' && (
                <div className="absolute left-0 top-full mt-2 w-[200px] bg-white shadow-lg rounded-lg p-4">
                  <ul className="space-y-2">
                    <li><Link href="/about-us" className="text-sm text-gray-600 hover:text-[#0b7fb6] transition-colors">About Us</Link></li>
                    <li><Link href="/about-us/testimonials" className="text-sm text-gray-600 hover:text-[#0b7fb6] transition-colors">Testimonials</Link></li>
                    <li><Link href="/about-us/licenses-insurance" className="text-sm text-gray-600 hover:text-[#0b7fb6] transition-colors">Licenses & Insurance</Link></li>
                    <li><Link href="/about-us/why-choose-us" className="text-sm text-gray-600 hover:text-[#0b7fb6] transition-colors">Why Choose Us</Link></li>
                    <li><Link href="/about-us/careers" className="text-sm text-gray-600 hover:text-[#0b7fb6] transition-colors">Careers</Link></li>
                  </ul>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative group" onMouseEnter={() => handleMouseEnter('resources')} onMouseLeave={handleMouseLeave}>
              <button className="flex items-center space-x-1 text-white hover:text-gray-200 transition-colors font-bold text-sm xl:text-base whitespace-nowrap">
                <span>Resources</span><ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'resources' && (
                <div className="absolute left-0 top-full mt-2 w-[200px] bg-white shadow-lg rounded-lg p-4">
                  <ul className="space-y-2">
                    <li><Link href="/resources/faq" className="text-sm text-gray-600 hover:text-[#0b7fb6] transition-colors">FAQ</Link></li>
                    <li><Link href="/resources/hvac-tips" className="text-sm text-gray-600 hover:text-[#0b7fb6] transition-colors">HVAC Tips</Link></li>
                    <li><Link href="/resources/repair-vs-replace" className="text-sm text-gray-600 hover:text-[#0b7fb6] transition-colors">Repair vs Replace</Link></li>
                    <li><Link href="/resources/financing" className="text-sm text-gray-600 hover:text-[#0b7fb6] transition-colors">Financing</Link></li>
                    <li><Link href="/blogs" className="text-sm text-gray-600 hover:text-[#0b7fb6] transition-colors">Blog</Link></li>
                  </ul>
                </div>
              )}
            </div>

            <Link href="/contact" className="text-white hover:text-gray-200 transition-colors font-bold text-sm xl:text-base whitespace-nowrap">Contact</Link>
          </nav>

          <div className="flex items-center flex-1 justify-center lg:justify-end">
            <a href="tel:2085059352" className="lg:hidden bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold px-4 py-1.5 rounded-lg text-sm">Call Now</a>
            <a href="tel:2085059352" className="hidden lg:flex items-center gap-1.5 text-white hover:text-gray-200 transition-colors font-bold text-lg xl:text-xl whitespace-nowrap">
              <Phone className="h-5 w-5 xl:h-6 xl:w-6" /><span>(208) 505-9352</span>
            </a>
          </div>

          <div className="flex items-center flex-1 justify-end lg:hidden">
            <button className="text-white hover:text-gray-200 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 bg-[#10477d] border-b-2 border-[#1e3a5f] max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col space-y-4 px-4">
              <Link href="/" className="text-white font-semibold hover:text-gray-200" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>

              <span className="text-white/60 text-sm font-medium pt-2">Services</span>
              {serviceCategories.map((category) => (
                <div key={category.href}>
                  <Link href={category.href} className="text-white font-medium hover:text-gray-200 pl-2" onClick={() => setIsMobileMenuOpen(false)}>{category.name}</Link>
                </div>
              ))}

              <span className="text-white/60 text-sm font-medium pt-2">Service Areas</span>
              <div className="grid grid-cols-2 gap-2 pl-2">
                {serviceAreas.map((area) => (
                  <Link key={area.href} href={area.href} className="text-white/90 hover:text-white text-sm" onClick={() => setIsMobileMenuOpen(false)}>{area.name}</Link>
                ))}
              </div>

              <span className="text-white/60 text-sm font-medium pt-2">About & Resources</span>
              <Link href="/about-us" className="text-white/90 hover:text-white pl-2" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
              <Link href="/resources/faq" className="text-white/90 hover:text-white pl-2" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
              <Link href="/blogs" className="text-white/90 hover:text-white pl-2" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
              <Link href="/contact" className="text-white/90 hover:text-white pl-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>

              <div className="flex flex-col space-y-2 pt-4">
                <Button asChild className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold w-full"><a href="tel:2085059352">Call (208) 505-9352</a></Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
