'use client'

import { ArrowRight, Building2, Hammer, CheckCircle, Shield, Zap, Landmark } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link';
export default function ServicesPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const services = [
    {
      title: 'Structural Design',
      subtitle: 'Innovative Engineering Solutions',
      description: 'Comprehensive structural design services for residential, commercial, and industrial projects using advanced 3D modeling and analysis.',
      color: 'from-[#1F86C8] to-[#1A3E6F]',
      highlights: ['3D BIM Modeling', 'IS Code Compliance', 'Cost Optimization'],
      href: '/services/structural-design'
    },
    {
      title: 'Structural Audit',
      subtitle: 'Building Safety Assessment',
      description: 'Thorough structural health assessment and safety evaluation for existing buildings with detailed reporting and recommendations.',
      color: 'from-[#1A3E6F] to-[#BFC5CC]',
      highlights: ['NDT Testing', 'Safety Certification', 'Repair Solutions'],
      href: '/services/structural-audit'
    },
    {
      title: 'Project Management',
      subtitle: 'End-to-End Execution',
      description: 'Complete project management services ensuring timely delivery, quality control, and budget optimization from planning to completion.',
      color: 'from-[#BFC5CC] to-[#1F86C8]',
      highlights: ['Timeline Management', 'Quality Control', 'Cost Tracking'],
      href: '/services/project-management'
    },
    {
      title: 'Heritage Conservation',
      subtitle: 'Preserving Legacy Structures',
      description: 'Specialized restoration and conservation services for heritage buildings, combining traditional craftsmanship with modern engineering.',
      color: 'from-[#1F86C8] to-[#1A3E6F]',
      highlights: ['Heritage Expertise', 'Traditional Methods', 'Modern Solutions'],
      href: '/services/heritage-conservation'
    }
  ]

  const coreValues = [
    { icon: Shield, title: 'Safety First', desc: 'Rigorous safety protocols and compliance' },
    { icon: Zap, title: 'Innovation', desc: 'Latest engineering practices and technology' },
    { icon: CheckCircle, title: 'Quality', desc: '98% client satisfaction rate' },
  ]

  const stats = [
    { value: '25+', label: 'Years Experience' },
    { value: '150+', label: 'Projects Completed' },
    { value: '100+', label: 'Expert Professionals' },
    { value: '98%', label: 'Client Satisfaction' }
  ]

  const approachGroups = [
    {
      title: 'Design Expertise',
      items: ['Concrete Structures', 'Steel Frames', 'Composite Systems', 'Heritage Restoration']
    },
    {
      title: 'Quality Standards',
      items: ['MCGM Approved', 'ISO Certified', 'NDT Testing', 'Compliance Assured']
    },
    {
      title: 'Project Support',
      items: ['Site Supervision', 'Progress Monitoring', 'Document Management', 'Warranty Support']
    },
    {
      title: 'Technical Excellence',
      items: ['3D Modeling', 'Advanced Analysis', 'Risk Assessment', 'Innovation Focus']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F7FA]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1A3E6F] via-[#1F86C8] to-[#1A3E6F]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1F86C8] via-[#BFC5CC] to-[#1A3E6F]"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-sm mb-6 border border-white/20">
              <Zap className="w-4 h-4 mr-2" />
              OUR EXPERTISE
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Comprehensive <span className="text-[#BFC5CC]">Engineering</span> Solutions
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed px-4">
              From structural design and audits to project management, we deliver excellence across all aspects of building engineering.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-20">
            {services.map((service, index) => {
              const Icons = [Building2, Hammer, CheckCircle, Landmark]
              const Icon = Icons[index] || Building2
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="h-full bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                >
                  {/* Color Bar */}
                  <div className={`h-1 bg-gradient-to-r ${service.color}`}></div>
                  
                  <div className="p-6 md:p-8">
                    {/* Icon */}
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{service.title}</h3>
                    <p className={`text-xs md:text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-3 md:mb-4`}>
                      {service.subtitle}
                    </p>
                    
                    {/* Description */}
                    <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 line-clamp-3">{service.description}</p>
                    
                    {/* Highlights */}
                    <div className="space-y-2 mb-4 md:mb-6">
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                          <span className="text-xs md:text-sm text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    <Link href={service.href} className="flex items-center gap-2 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 group-hover:translate-x-1 transition-transform">
                    Learn More
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-xl md:rounded-2xl p-6 md:p-12 mb-12 md:mb-20 border border-[#BFC5CC]">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3E6F] mb-8 md:mb-12 text-center">Why Choose Our Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              {coreValues.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white shadow-lg flex items-center justify-center mx-auto mb-4 text-[#1F86C8]">
                      <Icon className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-[#1A3E6F] mb-2">{value.title}</h3>
                    <p className="text-sm md:text-base text-gray-600">{value.desc}</p>
                  </div>
                )
              })}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-[#BFC5CC]">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-[#1F86C8] mb-2">{stat.value}</p>
                  <p className="text-xs md:text-sm text-gray-700">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service Highlights */}
          <div className="mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3E6F] mb-8 md:mb-12 text-center">Our Comprehensive Approach</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {approachGroups.map((group, index) => (
                <div key={index} className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-[#BFC5CC] shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-bold text-[#1A3E6F] mb-4">{group.title}</h3>
                  <ul className="space-y-3">
                    {group.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#1F86C8] flex-shrink-0" />
                        <span className="text-sm md:text-base text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] rounded-xl md:rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-base md:text-xl text-[#BFC5CC] mb-6 md:mb-8">Contact our team today for a consultation</p>
            <button className="inline-block px-8 md:px-12 py-3 md:py-4 bg-white text-[#1F86C8] font-bold rounded-lg md:rounded-xl hover:bg-[#F5F7FA] transition-all transform hover:scale-105 shadow-lg text-sm md:text-base">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}