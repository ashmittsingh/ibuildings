"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Phone, Menu, X, Home, Briefcase, Users, 
  ChevronDown, Building2, Target, Shield, 
  Zap, Cpu, Globe, TrendingUp, FileText,
  CheckCircle // Added for Jobs
} from 'lucide-react'
import Image from 'next/image'

interface NavItem {
  name: string
  href: string
  icon: React.ReactNode
  badge?: string
  cta?: boolean
  megaMenu?: boolean
  children?: { name: string; href: string }[]
  sections?: {
    title: string
    items: { 
      name: string; 
      href: string; 
      icon: React.ReactNode;
      description?: string 
    }[]
  }[]
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const pathname = usePathname()
  const megaMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false)
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navigation: NavItem[] = [
    { 
      name: 'About', 
      href: '/about',
      icon: <Users className="w-4 h-4" />,
      children: [
        { name: 'Vision', href: '/about/vision' },
        { name: 'Mission', href: '/about/mission' },
        { name: 'Policy', href: '/about/policy' },
        { name: 'Procedure', href: '/about/procedure' },
        { name: 'Teams', href: '/about/teams' },
      ]
    },
    { 
      name: 'Projects', 
      href: '/projects',
      icon: <Building2 className="w-4 h-4" />,
      megaMenu: true,
      sections: [
        {
          title: 'Sector & Industry',
          items: [
            { 
              name: 'All Projects', 
              href: '/projects', 
              icon: <Building2 className="w-4 h-4" />,
              description: 'Complete portfolio showcase'
            },
            { 
              name: 'Residential Real Estates', 
              href: '/projects/residential', 
              icon: <Home className="w-4 h-4" />,
              description: 'Apartments, villas, townships'
            },
            { 
              name: 'Commercial & Mixed Use', 
              href: '/projects/commercial', 
              icon: <Briefcase className="w-4 h-4" />,
              description: 'Office towers, malls, complexes'
            },
            { 
              name: 'Industrial', 
              href: '/projects/industrial', 
              icon: <Zap className="w-4 h-4" />,
              description: 'Factories, warehouses, plants'
            },
            { 
              name: 'Education', 
              href: '/projects/education', 
              icon: <FileText className="w-4 h-4" />,
              description: 'Schools, colleges, universities'
            },
            { 
              name: 'Hospitality', 
              href: '/projects/hospitality', 
              icon: <Globe className="w-4 h-4" />,
              description: 'Hotels, resorts, convention centers'
            },
            { 
              name: 'Heritage', 
              href: '/projects/heritage', 
              icon: <Shield className="w-4 h-4" />,
              description: 'Historical buildings, monuments'
            },
          ]
        }
      ]
    },
    { 
      name: 'Services', 
      href: '/services',
      icon: <Briefcase className="w-4 h-4" />,
      megaMenu: true,
      sections: [
        {
          title: 'Core Services',
          items: [
            { 
              name: 'Structural & Civil Engineering', 
              href: '/services/structural-engineering', 
              icon: <Target className="w-4 h-4" />,
              description: 'Complete structural design solutions'
            },
            { 
              name: 'Project Management Consultancy', 
              href: '/services/project-management', 
              icon: <TrendingUp className="w-4 h-4" />,
              description: 'End-to-end project delivery'
            },
            { 
              name: 'Structural Audit, Repair & Retrofitting', 
              href: '/services/structural-audit', 
              icon: <Shield className="w-4 h-4" />,
              description: 'Building assessment and rehabilitation'
            },
          ]
        }
      ]
    },
    { 
      name: 'Jobs', 
      href: '/jobs',
      icon: <CheckCircle className="w-4 h-4" />, // Changed icon
      badge: 'Hiring',
      cta: true // Marked as CTA for special styling
    },
    { 
      name: 'Contact', 
      href: '/contact',
      icon: <Phone className="w-4 h-4" />
    },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-2xl shadow-gray-900/10 py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
              <div className="relative w-20 h-16 flex items-center justify-center overflow-visible">
                <Image
                  src="/images/logo/logo.jpg"
                  alt="iBuildings Logo"
                  width={80}
                  height={64}
                  className="object-contain group-hover:scale-110 transition-transform duration-300 max-w-full h-auto"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link
                href="/"
                className={`px-5 py-3 rounded-lg font-medium transition-all duration-300 ${
                  pathname === '/' 
                    ? 'text-[#1F86C8] bg-[#F5F7FA]' 
                    : 'text-gray-700 hover:text-[#1F86C8] hover:bg-[#F5F7FA]'
                }`}
              >
                <Home className="w-4 h-4 inline mr-2" />
                Home
              </Link>
              
              {navigation.map((item) => (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.megaMenu) {
                      setIsMegaMenuOpen(true)
                      setActiveDropdown(item.name)
                    } else if (item.children) {
                      setActiveDropdown(item.name)
                    }
                  }}
                  onMouseLeave={() => {
                    if (!isMegaMenuOpen) {
                      setActiveDropdown(null)
                    }
                  }}
                >
                  <Link
                    href={item.href}
                    className={`px-5 py-3 rounded-lg font-medium transition-all duration-300 flex items-center ${
                      pathname.startsWith(item.href) 
                        ? item.name === 'Jobs' 
                          ? 'bg-[#F5F7FA] text-[#1F86C8] border border-[#BFC5CC]'
                          : 'text-[#1F86C8] bg-[#F5F7FA]' 
                        : item.name === 'Jobs'
                          ? 'bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] text-white hover:from-[#1A3E6F] hover:to-[#1F86C8] shadow-lg hover:shadow-xl'
                          : 'text-gray-700 hover:text-[#1F86C8] hover:bg-[#F5F7FA]'
                    } ${item.name === 'Jobs' ? 'px-6 font-semibold' : ''}`}
                  >
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                    {(item.children || item.megaMenu) && (
                      <ChevronDown className="w-4 h-4 ml-1" />
                    )}
                    {item.badge && (
                      <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                        item.name === 'Jobs'
                          ? 'bg-white text-[#1F86C8] font-bold animate-pulse'
                          : 'bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] text-white'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </Link>

                  {/* Regular Dropdown */}
                  {item.children && activeDropdown === item.name && !item.megaMenu && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-[#BFC5CC] py-2 animate-fadeIn">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="flex items-center px-4 py-3 text-gray-700 hover:bg-[#F5F7FA] hover:text-[#1F86C8] transition-colors"
                        >
                          <span>{child.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 rounded-xl bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-gray-100 shadow-lg"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden mt-4 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 animate-slideDown">
              <Link
                href="/"
                className={`flex items-center px-4 py-3 rounded-lg mb-2 ${
                  pathname === '/' ? 'bg-[#F5F7FA] text-[#1F86C8]' : 'hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Home className="w-4 h-4 mr-3" />
                Home
              </Link>
              
              {navigation.map((item) => (
                <div key={item.name} className="mb-2">
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg ${
                      pathname.startsWith(item.href) 
                        ? item.name === 'Jobs'
                          ? 'bg-[#F5F7FA] text-[#1F86C8]'
                          : 'bg-[#F5F7FA] text-[#1F86C8]'
                        : item.name === 'Jobs'
                          ? 'bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] text-white'
                          : 'hover:bg-gray-50'
                    }`}
                    onClick={() => !item.children && !item.megaMenu && setIsOpen(false)}
                  >
                    <div className="flex items-center">
                      {item.icon}
                      <span className="ml-3">{item.name}</span>
                      {item.badge && (
                        <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                          item.name === 'Jobs'
                            ? 'bg-white text-[#1F86C8] font-bold'
                            : 'bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] text-white'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                    {(item.children || item.megaMenu) && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  
                  {item.children && (
                    <div className="ml-6 mt-2 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                  
                  {item.megaMenu && (
                    <div className="ml-6 mt-2 space-y-4">
                      {item.sections?.map((section, idx) => (
                        <div key={idx}>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">{section.title}</h4>
                          <div className="space-y-1">
                            {section.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.icon}
                                <span className="ml-3">{subItem.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Mega Menu */}
      {isMegaMenuOpen && (
        <div 
          ref={megaMenuRef}
          className="fixed top-24 left-0 right-0 z-40 bg-white/98 backdrop-blur-xl shadow-2xl border-t border-gray-200 animate-slideDown"
          onMouseLeave={() => {
            setIsMegaMenuOpen(false)
            setActiveDropdown(null)
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {navigation.find(nav => nav.megaMenu)?.sections?.map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-3"></div>
                    {section.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="group flex items-center p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 border border-gray-100 hover:border-blue-200 transition-all duration-300"
                        onClick={() => setIsMegaMenuOpen(false)}
                      >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                          <div className="text-blue-600">
                            {item.icon}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 group-hover:text-blue-700">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            {item.description || 'Learn more about our services'}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Jobs Call to Action Section */}
              <div className="lg:col-span-2 mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Consultation CTA */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
                    <div className="flex flex-col">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">
                        Need Expert Engineering Consultation?
                      </h4>
                      <p className="text-gray-600 mb-4">
                        Schedule a meeting with our Principal Engineer
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-lg w-fit"
                        onClick={() => setIsMegaMenuOpen(false)}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Book Consultation
                      </Link>
                    </div>
                  </div>

                  {/* Jobs CTA */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-emerald-200">
                    <div className="flex flex-col">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">
                        Join Our Team!
                      </h4>
                      <p className="text-gray-600 mb-4">
                        Exciting career opportunities for engineers & architects
                      </p>
                      <Link
                        href="/jobs"
                        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-lg w-fit"
                        onClick={() => setIsMegaMenuOpen(false)}
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        View Open Positions
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for Animations */}
      <style jsx> {`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.4s ease-out;
        }
      `}</style>
    </>
  )
}


export default Navbar