"use client"

import Link from 'next/link'
import { useState } from 'react'
import { 
  Building2, Mail, Phone, MapPin, Settings, Target
} from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  
  const engineeringLinks = [
    { name: 'Structural Engineering', href: '/engineering/structural-engineering' },
    { name: 'Project Management', href: '/engineering/project-management' },
    { name: 'Vision & Mission', href: '/engineering/vision-mission' },
  ]
  
  const serviceLinks = [
    { name: 'Structural Audit', href: '/services/structural-audit' },
    { name: 'Heritage Conservation', href: '/services/heritage-conservation' },
    { name: 'Construction Supervision', href: '/services/construction-supervision' },
  ]
  
  const companyLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About Us', href: '/about' },
    { name: 'Insights', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden">
                <Image
                  src="/images/logo/logo.jpg"
                  alt="iBuildings Logo"
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">iBuildings</h3>
                <p className="text-blue-300 text-sm">Precision Engineering</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Delivering safe, efficient, and enduring structures through sound engineering 
              judgment and responsible practice.
            </p>
          </div>

          {/* Engineering Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white flex items-center">
              <Settings className="w-5 h-5 mr-2 text-blue-400" />
              Engineering
            </h4>
            <ul className="space-y-3">
              {engineeringLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <Target className="w-3 h-3 text-blue-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-400">
                  Office No-103, 1st Floor, Sanghvi Parrssava Classic<br />
                  opp. Roshan TVS Showroom, Bhadwad Gaon<br />
                  Sonale Village, Bhiwandi, Maharashtra 421302
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-400 flex-shrink-0" size={20} />
                <a href="tel:09819156871" className="text-gray-400 hover:text-blue-400 transition-colors">
                  +91 98191 56871
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400 flex-shrink-0" size={20} />
                <a href="mailto:contact@buildings.in" className="text-gray-400 hover:text-blue-400 transition-colors">
                  contact@buildings.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} iBuildings.in. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-300 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-300 text-sm">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-500 hover:text-gray-300 text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer