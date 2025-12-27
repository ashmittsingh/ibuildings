'use client'

import { CheckCircle, ClipboardList, BarChart3, Zap, Users, FileText, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export default function ProjectManagementPage() {
  const phases = [
    {
      title: 'Pre-Construction',
      icon: FileText,
      items: [
        'Project planning and scheduling',
        'Budget preparation and cost control',
        'Resource allocation',
        'Risk assessment and mitigation',
        'Permits and regulatory compliance'
      ]
    },
    {
      title: 'Construction Phase',
      icon: Users,
      items: [
        'On-site project management',
        'Daily progress monitoring',
        'Quality control inspections',
        'Safety management',
        'Vendor coordination'
      ]
    },
    {
      title: 'Post-Construction',
      icon: CheckCircle,
      items: [
        'Project closure',
        'Final inspections',
        'Documentation handover',
        'Punch list management',
        'Warranty period support'
      ]
    }
  ]

  const benefits = [
    { title: 'Cost Control', desc: 'Minimize project overruns with strict budget management', icon: BarChart3 },
    { title: 'Timeline Management', desc: 'Ensure on-time project delivery', icon: ClipboardList },
    { title: 'Quality Assurance', desc: 'Maintain highest quality standards throughout', icon: Zap },
    { title: 'Risk Mitigation', desc: 'Proactive identification and resolution of issues', icon: CheckCircle }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1A3E6F] via-[#1F86C8] to-[#1A3E6F] text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Project & Construction Management</h1>
            <p className="text-xl text-gray-100 mb-8">
              End-to-end project delivery with expert management from planning to completion
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-8 py-4 bg-[#1F86C8] hover:bg-[#1A3E6F] rounded-lg font-bold transition-all">
                Get Quote
              </Link>
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-lg font-bold transition-all">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-[#1A3E6F] mb-12">Our Project Management Approach</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, i) => {
            const Icon = phase.icon
            return (
              <div key={i} className="bg-[#F5F7FA] rounded-lg overflow-hidden border border-[#BFC5CC] hover:shadow-lg transition-all">
                <div className="bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] p-6 text-white flex items-center gap-4">
                  <Icon className="w-8 h-8" />
                  <h3 className="text-xl font-bold">{phase.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#1F86C8] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Key Benefits */}
      <div className="bg-gradient-to-r from-[#1F86C8]/10 to-[#1A3E6F]/10 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1A3E6F] mb-12 text-center">Why Choose Our Project Management</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <div key={i} className="bg-white p-6 rounded-lg border-2 border-[#BFC5CC] text-center">
                  <Icon className="w-12 h-12 text-[#1F86C8] mx-auto mb-4" />
                  <h3 className="font-bold text-[#1A3E6F] mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Services Details */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-[#1A3E6F] mb-12">Comprehensive Services</h2>
        <div className="space-y-8">
          {[
            {
              title: 'Project Planning & Scheduling',
              desc: 'Detailed project schedules using CPM (Critical Path Method), resource planning, and milestone tracking. We create realistic timelines and identify critical activities.'
            },
            {
              title: 'Budget Management & Control',
              desc: 'Comprehensive cost estimation, budget tracking, variance analysis, and cost control measures. Minimize overruns with proactive financial management.'
            },
            {
              title: 'Quality Assurance',
              desc: 'Regular inspections, material testing, compliance checks, and performance verification. Maintain quality standards throughout the project lifecycle.'
            },
            {
              title: 'Safety Management',
              desc: 'Safety planning, hazard identification, worker training, accident prevention, and safety audits. Ensure zero-accident projects.'
            },
            {
              title: 'Contract Administration',
              desc: 'Contract management, claim handling, change order processing, and dispute resolution. Protect your interests throughout the project.'
            },
            {
              title: 'Stakeholder Communication',
              desc: 'Regular progress reports, site meetings, client updates, and transparent communication. Keep all parties informed and aligned.'
            }
          ].map((service, i) => (
            <div key={i} className="border-l-4 border-[#1F86C8] pl-6">
              <h3 className="text-2xl font-bold text-[#1A3E6F] mb-2">{service.title}</h3>
              <p className="text-gray-600 text-lg">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Project Types */}
      <div className="bg-[#F5F7FA] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1A3E6F] mb-12 text-center">Project Types We Manage</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Residential Projects',
              'Commercial Buildings',
              'Industrial Facilities',
              'Institutional Buildings',
              'Heritage Structures',
              'Infrastructure Projects',
              'Renovation Projects',
              'Retrofitting Works',
              'Infrastructure Development'
            ].map((type, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border-2 border-[#BFC5CC] flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#1F86C8] flex-shrink-0" />
                <span className="font-semibold text-[#1A3E6F]">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-gray-100">Projects Delivered</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-gray-100">On-Time Delivery</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2000+</div>
              <p className="text-gray-100">Lac Sq.Ft. Managed</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₹100+</div>
              <p className="text-gray-100">Cr Budget Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1A3E6F] mb-8">Ready to Partner with Us?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our experienced team manage your next project with professionalism, efficiency, and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919819533113" className="px-8 py-4 bg-[#1F86C8] text-white rounded-lg font-bold hover:bg-[#1A3E6F] transition-all flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Call Us
            </a>
            <a href="mailto:shahnawaz@ibuildings.in" className="px-8 py-4 border-2 border-[#1F86C8] text-[#1A3E6F] rounded-lg font-bold hover:bg-[#F5F7FA] transition-all flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" /> Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}