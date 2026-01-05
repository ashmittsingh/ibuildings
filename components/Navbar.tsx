"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import {
  Phone,
  Menu,
  X,
  Home,
  Briefcase,
  Users,
  ChevronDown,
  Building2,
  Target,
  Shield,
  Zap,
  Globe,
  FileText,
  CheckCircle,
} from "lucide-react"
import Link from "next/link";

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
    items: { name: string; href: string; icon: React.ReactNode; description?: string }[]
  }[]
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const pathname = usePathname()
  const megaMenuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setIsMegaMenuOpen(false)
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const navigation: NavItem[] = [
    {
      name: "Projects",
      href: "/projects",
      icon: <Building2 className="w-4 h-4" />,
    },
    {
      name: "Services",
      href: "/services",
      icon: <Briefcase className="w-4 h-4" />,
    },
    { 
      name: "Jobs", 
      href: "/jobs", 
      icon: <CheckCircle className="w-4 h-4" />, 
      badge: "Hiring"
    },
    {
      name: "About",
      href: "/about",
      icon: <Users className="w-4 h-4" />,
    },
  ]

  return (
    <header className="relative">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-md shadow-md"
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* LEFT: Logo */}
            <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="/images/logo/logo.jpg" 
                alt="iBuildings Logo" 
                className="h-12 object-contain"
                suppressHydrationWarning
              />
            </Link>
          </div>

            {/* CENTER: Navigation Links (Desktop) */}
            <div className="hidden lg:flex items-center justify-center flex-1 px-8">
              <div className="flex items-center space-x-1">
                <Link
                  href="/"
                  className={`px-4 py-2 rounded-lg font-medium text-sm inline-flex items-center gap-2 transition-all duration-200 ${
                    pathname === "/" 
                      ? "text-blue-700 bg-blue-50" 
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </Link>
                
                {navigation.map((item) => (
                  <div key={item.name} className="relative">
                    <Link
                      href={item.href}
                      className={`px-4 py-2 rounded-lg font-medium text-sm inline-flex items-center gap-2 transition-all duration-200 ${
                        pathname === item.href || pathname.startsWith(item.href + "/") 
                          ? "text-blue-700 bg-blue-50" 
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                      onMouseEnter={() => {
                        if (item.megaMenu) {
                          setIsMegaMenuOpen(true)
                          setActiveDropdown(item.name)
                        } else if (item.children) {
                          setActiveDropdown(item.name)
                        }
                      }}
                      onMouseLeave={() => {
                        if (!isMegaMenuOpen && !item.children) setActiveDropdown(null)
                      }}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      {(item.children || item.megaMenu) && <ChevronDown className="w-3 h-3" />}
                      {item.badge && (
                        <span className="ml-1 px-2 py-0.5 text-xs font-semibold rounded-full bg-emerald-500 text-white animate-pulse">
                          {item.badge}
                        </span>
                      )}
                    </Link>

                    {/* Regular Dropdown */}
                    {item.children && activeDropdown === item.name && !item.megaMenu && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name} 
                            href={child.href} 
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Contact Button (Desktop) */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="px-4 py-4 space-y-2">
              <Link
                href="/"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                  pathname === "/" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>
              
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-colors ${
                      pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)) ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={(e) => {
                      if (item.children || item.megaMenu) {
                        e.preventDefault()
                        setActiveDropdown(activeDropdown === item.name ? null : item.name)
                      } else {
                        setIsOpen(false)
                      }
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-emerald-500 text-white">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    {(item.children || item.megaMenu) && (
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`} 
                      />
                    )}
                  </Link>

                  {/* Mobile Dropdown Content */}
                  {activeDropdown === item.name && item.children && (
                    <div className="ml-6 mt-2 space-y-1 border-l-2 border-blue-200 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.name} 
                          href={child.href} 
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" 
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Mobile Mega Menu Content */}
                  {activeDropdown === item.name && item.megaMenu && item.sections && (
                    <div className="ml-6 mt-2 space-y-4 border-l-2 border-blue-200 pl-4">
                      {item.sections.map((section, si) => (
                        <div key={si}>
                          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 px-4">
                            {section.title}
                          </h4>
                          <div className="space-y-1">
                            {section.items.map((sitem) => (
                              <Link 
                                key={sitem.name} 
                                href={sitem.href} 
                                className="flex items-start gap-3 px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" 
                                onClick={() => setIsOpen(false)}
                              >
                                <div className="mt-0.5">{sitem.icon}</div>
                                <div>
                                  <div className="font-medium">{sitem.name}</div>
                                  {sitem.description && (
                                    <div className="text-xs text-gray-500 mt-0.5">{sitem.description}</div>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Contact Button */}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-5 h-5" />
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Mega Menu */}
        {isMegaMenuOpen && activeDropdown && (
          <div
            ref={megaMenuRef}
            className="hidden lg:block absolute top-full left-0 right-0 mt-0 bg-white shadow-2xl border-t border-gray-100"
            onMouseLeave={() => {
              setIsMegaMenuOpen(false)
              setActiveDropdown(null)
            }}
          >
            <div className="max-w-7xl mx-auto px-8 py-8">
              <div className="grid grid-cols-2 gap-8">
                {navigation.find((nav) => nav.name === activeDropdown && nav.megaMenu)?.sections?.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                      {section.title}
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {section.items.map((item) => (
                        <Link 
                          key={item.name} 
                          href={item.href} 
                          className="group flex items-start gap-3 p-4 rounded-xl hover:bg-blue-50 border border-transparent hover:border-blue-200 transition-all duration-200" 
                          onClick={() => setIsMegaMenuOpen(false)}
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <div className="text-blue-600">{item.icon}</div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-sm text-gray-900 group-hover:text-blue-700 transition-colors">
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-500 mt-1 line-clamp-1">
                              {item.description || "Learn more"}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                {/* CTA Section */}
                {(activeDropdown === "Services" || activeDropdown === "Projects") && (
                  <div className="col-span-2 mt-6 pt-6 border-t border-gray-200">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Need Expert Consultation?</h4>
                        <p className="text-sm text-gray-600 mb-4">Schedule a meeting with our engineering team</p>
                        <Link 
                          href="/contact" 
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all" 
                          onClick={() => setIsMegaMenuOpen(false)}
                        >
                          <Phone className="w-4 h-4" /> 
                          Contact Us
                        </Link>
                      </div>

                      <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Join Our Team!</h4>
                        <p className="text-sm text-gray-600 mb-4">Exciting career opportunities for engineers</p>
                        <Link 
                          href="/jobs" 
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all" 
                          onClick={() => setIsMegaMenuOpen(false)}
                        >
                          <CheckCircle className="w-4 h-4" /> 
                          View Positions
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
      <div className="h-20" />
    </header>
  )
}

export default Navbar