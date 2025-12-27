'use client'

import { CheckCircle, Phone, Mail, AlertCircle, Wrench, Shield } from 'lucide-react'
import Link from 'next/link'

export default function StructuralAuditPage() {
  const auditServices = [
    { title: 'Structural Assessment', icon: AlertCircle, desc: 'Understanding existing framing system and load patterns' },
    { title: 'Strength Evaluation', icon: Shield, desc: 'Chemical analysis, NDT, and destructive tests as required' },
    { title: 'Durability Analysis', icon: Wrench, desc: 'Evaluating durability requirements and building performance' },
    { title: 'Retrofit Solutions', icon: CheckCircle, desc: 'Repair methodology and retrofitting strategies' },
  ]

  const certifications = [
    'MCGM (Mumbai Municipal Corporation)',
    'TMC (Thane Municipal Corporation)',
    'KDMC (Kalyan Dombivali Municipal Corporation)',
    'MBMC (Mira Bhayander Municipal Corporation)',
    'VVMC (Vasai Virar Municipal Corporation)',
    'BNCMC (Bhiwandi Nizampur Municipal Corporation)',
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1A3E6F] via-[#1F86C8] to-[#1A3E6F] text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Structural Audit, Repair & Retrofitting</h1>
            <p className="text-xl text-gray-100 mb-8">
              Expert assessment, rehabilitation, and strengthening of existing buildings
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-8 py-4 bg-[#1F86C8] hover:bg-[#1A3E6F] rounded-lg font-bold transition-all">
                Request Audit
              </Link>
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-lg font-bold transition-all">
                Download Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Audit Process */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-[#1A3E6F] mb-12">Audit Process & Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {auditServices.map((service, i) => {
            const Icon = service.icon
            return (
              <div key={i} className="bg-[#F5F7FA] p-6 rounded-lg border border-[#BFC5CC] hover:shadow-lg transition-all">
                <Icon className="w-12 h-12 text-[#1F86C8] mb-4" />
                <h3 className="font-bold text-[#1A3E6F] mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Our Services List */}
      <div className="bg-[#F5F7FA] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1A3E6F] mb-12 text-center">Comprehensive Audit Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Structural Evaluation',
                items: [
                  'Existing framing system analysis',
                  'Load path identification',
                  'In-situ material testing',
                  'NDT (Non-Destructive Testing)',
                  'Chemical analysis of materials',
                ]
              },
              {
                title: 'Assessment & Analysis',
                items: [
                  'Durability evaluation',
                  'Performance requirements',
                  'FEA modeling & analysis',
                  'Gravity & lateral load assessment',
                  'Safety factor calculations',
                ]
              },
              {
                title: 'Documentation & Planning',
                items: [
                  'Detailed audit reports',
                  'Repair methodology',
                  'Cost estimation',
                  'BOQ preparation',
                  'Specification drafting',
                ]
              },
              {
                title: 'Execution & Certification',
                items: [
                  'Contractor evaluation',
                  'On-site supervision',
                  'Quality assurance checks',
                  'Bill certification',
                  'Stability certification',
                ]
              },
            ].map((section, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border-2 border-[#BFC5CC]">
                <h3 className="text-xl font-bold text-[#1F86C8] mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#1F86C8] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-[#1A3E6F] mb-12 text-center">Registered & Empaneled With</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <div key={i} className="bg-gradient-to-br from-[#1F86C8]/10 to-[#1A3E6F]/10 p-8 rounded-lg border-2 border-[#BFC5CC] text-center">
              <Shield className="w-12 h-12 text-[#1F86C8] mx-auto mb-4" />
              <p className="font-bold text-[#1A3E6F]">{cert}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Expertise */}
      <div className="bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">150+</div>
              <p className="text-gray-100">Structures Audited</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">20+</div>
              <p className="text-gray-100">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-gray-100">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#F5F7FA] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1A3E6F] mb-8">Schedule Your Structural Audit Today</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ensure the safety and longevity of your building with our comprehensive structural audit services.
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