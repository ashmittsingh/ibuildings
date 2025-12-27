'use client'

import Link from 'next/link'
import { ArrowRight, Building2, Hammer, CheckCircle, Shield, Zap, Landmark } from 'lucide-react'
import { services as servicesData } from '../../src/data/servicesData'

export default function ServicesPage() {
  const services = servicesData

  const coreValues = [
    { icon: Shield, title: 'Safety First', desc: 'Rigorous safety protocols and compliance' },
    { icon: Zap, title: 'Innovation', desc: 'Latest engineering practices and technology' },
    { icon: CheckCircle, title: 'Quality', desc: '98% client satisfaction rate' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500"></div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-sm mb-6 border border-white/20">
              <Zap className="w-4 h-4 mr-2" />
              OUR EXPERTISE
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Comprehensive <span className="text-blue-400">Engineering</span> Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              From structural design and audits to project management, we deliver excellence across all aspects of building engineering.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {services.map((service, index) => {
              const Icons = [Building2, Hammer, CheckCircle, Landmark]
              const Icon = Icons[index] || Building2
              return (
                <Link key={index} href={service.href}>
                  <div className="h-full bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer">
                    {/* Color Bar */}
                    <div className={`h-1 bg-gradient-to-r ${service.color}`}></div>
                    
                    <div className="p-8">
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{service.title}</h3>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-4`}>
                        {service.subtitle}
                      </p>
                      
                      {/* Description */}
                      <p className="text-gray-600 mb-6 line-clamp-3">{service.description}</p>
                      
                      {/* Highlights */}
                      <div className="space-y-2 mb-6">
                        {service.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                            <span className="text-sm text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* CTA */}
                      <div className="flex items-center gap-2 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 group-hover:translate-x-1 transition-transform">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-12 mb-20 border border-blue-100">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose Our Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {coreValues.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center mx-auto mb-4 text-blue-600">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.desc}</p>
                  </div>
                )
              })}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-blue-200">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">25+</p>
                <p className="text-sm text-gray-700">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">150+</p>
                <p className="text-sm text-gray-700">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">100+</p>
                <p className="text-sm text-gray-700">Expert Professionals</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">98%</p>
                <p className="text-sm text-gray-700">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Service Highlights */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Comprehensive Approach</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
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
              ].map((group, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{group.title}</h3>
                  <ul className="space-y-3">
                    {group.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-blue-100 mb-8">Contact our team today for a consultation</p>
            <Link
              href="/contact"
              className="inline-block px-12 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
