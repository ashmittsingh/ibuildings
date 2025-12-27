"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
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
  TrendingUp,
  FileText,
  CheckCircle,
} from "lucide-react"

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
      name: "About",
      href: "/about",
      icon: <Users className="w-4 h-4" />,
      children: [
        { name: "Vision", href: "/about/vision" },
        { name: "Mission", href: "/about/mission" },
        { name: "Policy", href: "/about/policy" },
        { name: "Procedure", href: "/about/procedure" },
        { name: "Teams", href: "/about/teams" },
      ],
    },
    {
      name: "Projects",
      href: "/projects",
      icon: <Building2 className="w-4 h-4" />,
      megaMenu: true,
      sections: [
        {
          title: "Sector & Industry",
          items: [
            { name: "All Projects", href: "/projects", icon: <Building2 className="w-4 h-4" />, description: "Complete portfolio showcase" },
            { name: "Residential", href: "/projects/residential", icon: <Home className="w-4 h-4" />, description: "Apartments, villas, townships" },
            { name: "Commercial", href: "/projects/commercial", icon: <Briefcase className="w-4 h-4" />, description: "Office towers, malls" },
            { name: "Industrial", href: "/projects/industrial", icon: <Zap className="w-4 h-4" />, description: "Factories, warehouses" },
            { name: "Education", href: "/projects/education", icon: <FileText className="w-4 h-4" />, description: "Schools, colleges" },
            { name: "Hospitality", href: "/projects/hospitality", icon: <Globe className="w-4 h-4" />, description: "Hotels, resorts" },
            { name: "Heritage", href: "/projects/heritage", icon: <Shield className="w-4 h-4" />, description: "Historical buildings" },
          ],
        },
      ],
    },
    {
      name: "Services",
      href: "/services",
      icon: <Briefcase className="w-4 h-4" />,
      megaMenu: true,
      sections: [
        {
          title: "Core Services",
          items: [
            { name: "Structural & Civil Engineering", href: "/services/structural-engineering", icon: <Target className="w-4 h-4" />, description: "Structural design" },
            { name: "Project Management", href: "/services/project-management", icon: <TrendingUp className="w-4 h-4" />, description: "Project delivery" },
            { name: "Structural Audit", href: "/services/structural-audit", icon: <Shield className="w-4 h-4" />, description: "Assessment & retrofit" },
            { name: "Heritage Conservation", href: "/services/heritage-conservation", icon: <Building2 className="w-4 h-4" />, description: "Preservation" },
          ],
        },
      ],
    },
    { name: "Jobs", href: "/jobs", icon: <CheckCircle className="w-4 h-4" />, badge: "Hiring", cta: true },
    { name: "Contact", href: "/contact", icon: <Phone className="w-4 h-4" /> },
  ]

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow" : "bg-transparent"
        }`}
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Brand Name */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-16 h-16">
                <Image src="/images/logo/logo.jpg" alt="iBuildings Logo" fill className="object-contain" sizes="64px" />
              </div>
            </Link>

            {/* Desktop */}
            <div className="hidden lg:flex items-center space-x-2">
              <Link
                href="/"
                className={`px-4 py-2 rounded-md font-medium inline-flex items-center gap-2 ${
                  pathname === "/" ? "text-blue-700 bg-blue-50" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-md font-medium inline-flex items-center gap-2 ${
                      pathname === item.href || pathname.startsWith(item.href + "/") ? "text-blue-700 bg-blue-50" : "text-gray-700 hover:text-blue-600"
                    } ${item.name === "Jobs" ? "px-6 font-semibold" : ""}`}
                    onMouseEnter={() => {
                      if (item.megaMenu) {
                        setIsMegaMenuOpen(true)
                        setActiveDropdown(item.name)
                      } else if (item.children) {
                        setActiveDropdown(item.name)
                      }
                    }}
                    onMouseLeave={() => {
                      if (!isMegaMenuOpen) setActiveDropdown(null)
                    }}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {(item.children || item.megaMenu) && <ChevronDown className="w-4 h-4 ml-1" />}
                    {item.badge && (
                      <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${item.name === "Jobs" ? "bg-emerald-600 text-white" : "bg-blue-600 text-white"}`}>{item.badge}</span>
                    )}
                  </Link>

                  {/* Desktop regular dropdown */}
                  {item.children && activeDropdown === item.name && !item.megaMenu && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-100 py-2">
                      {item.children.map((child) => (
                        <Link key={child.name} href={child.href} className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile actions */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 py-4">
              <div className="mb-4">
                <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                  <div className="relative w-12 h-12">
                    <Image src="/images/logo/logo.jpg" alt="iBuildings Logo" fill className="object-contain" sizes="48px" />
                  </div>
                </Link>
              </div>

              <div className="space-y-2">
                <Link
                  href="/"
                  className={`flex items-center px-4 py-3 rounded-md ${
                    pathname === "/" ? "bg-blue-50 text-blue-600" : "hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Home className="w-4 h-4 mr-3" />
                  <span className="font-medium">Home</span>
                </Link>
                
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between px-4 py-3 rounded-md ${
                        pathname.startsWith(item.href) ? "bg-blue-50 text-blue-600" : "hover:bg-gray-50"
                      }`}
                      onClick={() => {
                        if (!item.children && !item.megaMenu) setIsOpen(false)
                      }}
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span className="font-medium">{item.name}</span>
                      </div>
                      {(item.children || item.megaMenu) && <ChevronDown className="w-4 h-4" />}
                    </Link>

                    {/* Mobile nested children */}
                    {item.children && (
                      <div className="ml-6 mt-2 space-y-1">
                        {item.children.map((child) => (
                          <Link key={child.name} href={child.href} className="block px-4 py-2 text-gray-600 hover:bg-gray-50" onClick={() => setIsOpen(false)}>
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Mobile mega menu sections */}
                    {item.megaMenu && (
                      <div className="ml-6 mt-2 space-y-4">
                        {item.sections?.map((section, si) => (
                          <div key={si}>
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">{section.title}</h4>
                            <div className="space-y-1">
                              {section.items.map((sitem) => (
                                <Link key={sitem.name} href={sitem.href} className="block px-4 py-2 text-gray-600 hover:bg-gray-50" onClick={() => setIsOpen(false)}>
                                  <div className="flex items-center gap-3">{sitem.icon}<span>{sitem.name}</span></div>
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
            </div>
          </div>
        )}

        {/* Mega menu (desktop) */}
        {isMegaMenuOpen && activeDropdown && (
          <div
            ref={megaMenuRef}
            className="fixed top-20 left-0 right-0 z-40 bg-white/98 backdrop-blur-xl shadow-2xl border-t border-gray-200 animate-slideDown"
            onMouseLeave={() => {
              setIsMegaMenuOpen(false)
              setActiveDropdown(null)
            }}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {navigation.find((nav) => nav.name === activeDropdown && nav.megaMenu)?.sections?.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-3" />
                      {section.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.items.map((item) => (
                        <Link key={item.name} href={item.href} className="group flex items-center p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 border border-gray-100 hover:border-blue-200 transition-all duration-300" onClick={() => setIsMegaMenuOpen(false)}>
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                            <div className="text-blue-600">{item.icon}</div>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 group-hover:text-blue-700">{item.name}</div>
                            <div className="text-sm text-gray-500 mt-1">{item.description || "Learn more"}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                {(activeDropdown === "Services" || activeDropdown === "Projects") && (
                  <div className="lg:col-span-2 mt-8 pt-8 border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">Need Expert Consultation?</h4>
                        <p className="text-gray-600 mb-4">Schedule a meeting with our structural engineering team</p>
                        <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl" onClick={() => setIsMegaMenuOpen(false)}>
                          <Phone className="w-4 h-4 mr-2" /> Contact Us
                        </Link>
                      </div>

                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-emerald-200">
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">Join Our Team!</h4>
                        <p className="text-gray-600 mb-4">Exciting career opportunities for engineers</p>
                        <Link href="/jobs" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl" onClick={() => setIsMegaMenuOpen(false)}>
                          <CheckCircle className="w-4 h-4 mr-2" /> View Positions
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slideDown { animation: slideDown 0.35s ease-out; }
        `}</style>
      </nav>
    </header>
  )
}

export default Navbar