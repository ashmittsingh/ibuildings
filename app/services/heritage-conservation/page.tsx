'use client'

import { CheckCircle, Phone, Mail, AlertCircle, Wrench, Shield, Clock, Users, FileText, Zap } from 'lucide-react'
import Link from 'next/link'

export default function HeritageConservationPage() {
  const conservationServices = [
    { title: 'Historical Documentation', icon: FileText, desc: 'Detailed survey and documentation of heritage structures' },
    { title: 'Structural Assessment', icon: AlertCircle, desc: 'Understanding original design and condition evaluation' },
    { title: 'Restoration Planning', icon: Wrench, desc: 'Sensitive restoration strategies preserving original character' },
    { title: 'Modern Safety Compliance', icon: Shield, desc: 'Meeting contemporary safety standards without compromising heritage' },
  ]

  const heritageAreas = [
    'Historical Buildings',
    'Monuments & Temples',
    'Fort Structures',
    'Colonial Architecture',
    'Religious Structures',
    'Palaces & Estates'
  ]

  const principles = [
    { title: 'Authenticity', desc: 'Preserve original materials and methods' },
    { title: 'Reversibility', desc: 'Restoration work must be reversible' },
    { title: 'Minimal Intervention', desc: 'Only necessary changes made' },
    { title: 'Documentation', desc: 'Detailed records of all work' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Heritage Conservation</h1>
            <p className="text-xl text-blue-50 mb-8">
              Preserving India's architectural heritage through expert restoration and sensitive retrofitting. We combine traditional craftsmanship with modern engineering excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-8 py-4 bg-blue-700 hover:bg-blue-800 rounded-lg font-bold transition-all inline-block">
                Request Consultation
              </Link>
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-lg font-bold transition-all">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Conservation Services */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-blue-900 mb-12">Our Conservation Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {conservationServices.map((service, i) => {
            const Icon = service.icon
            return (
              <div key={i} className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <Icon className="w-8 h-8 text-blue-700 mb-4" />
                <h3 className="text-lg font-bold text-blue-900 mb-2">{service.title}</h3>
                <p className="text-blue-800 text-sm">{service.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Heritage Areas */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-12 mb-20 border border-blue-200">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Heritage Categories We Specialize In</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {heritageAreas.map((area, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm border border-blue-100">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-blue-900 font-semibold">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Conservation Principles */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Conservation Principles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{principle.title}</h3>
                <p className="text-gray-700">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Heritage Conservation Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Survey & Assessment', desc: 'Complete structural and historical evaluation', icon: <FileText className="w-10 h-10 text-blue-600" /> },
              { title: 'Planning', desc: 'Develop conservation strategy and timeline', icon: <Wrench className="w-10 h-10 text-blue-600" /> },
              { title: 'Execution', desc: 'Skilled restoration with appropriate materials', icon: <Shield className="w-10 h-10 text-blue-600" /> },
              { title: 'Documentation', desc: 'Record all work and create maintenance manual', icon: <FileText className="w-10 h-10 text-blue-600" /> },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="mb-4 flex items-center justify-center">{step.icon}</div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{step.title}</h3>
                <p className="text-blue-800 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl p-12 border border-gray-200 mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Why Choose iBuildings for Heritage Work?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Expert Team', desc: 'Specialized heritage conservation engineers with 25+ years experience' },
              { title: 'Sensitive Approach', desc: 'Balance between preservation and modern safety requirements' },
              { title: 'Proven Track Record', desc: 'Successful restoration of historic structures across India' },
              { title: 'Quality Materials', desc: 'Use of appropriate traditional and modern materials' },
              { title: 'Compliance Ready', desc: 'All work meets heritage authority and modern building codes' },
              { title: 'Full Documentation', desc: 'Complete records and maintenance guidelines provided' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-blue-900 mb-1">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-700 to-cyan-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Preserve Your Heritage Today</h2>
          <p className="text-xl text-blue-50 mb-8">Let our experts help restore and protect your architectural treasures</p>
          <Link
            href="/contact"
            className="inline-block px-12 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all transform hover:scale-105"
          >
            Request Heritage Assessment
          </Link>
        </div>
      </div>
    </div>
  )
}
