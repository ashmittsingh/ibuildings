'use client'

import { Building2, Target, CheckCircle, Download, ArrowRight, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export default function StructuralEngineeringPage() {
  const serviceDetails = [
    { title: 'Site Evaluation', desc: 'Evaluating site type, construction technique, and local construction culture' },
    { title: 'Geotechnical Guidance', desc: 'Advising on soil investigation and appropriate foundation systems' },
    { title: 'Client Intent Understanding', desc: 'Aligning design with functionality and building requirements' },
    { title: 'Risk & Durability Assessment', desc: 'Evaluating natural calamities, environmental conditions, and design parameters' },
    { title: 'Design Documentation', desc: 'Preparing design basis reports and quality control documents' },
    { title: 'Construction Drawings', desc: 'Issuing Bill of Quantities, tender drawings, and good-for-construction documents' },
    { title: 'On-Site Inspection', desc: 'Checking compliance during construction and issuing as-built drawings' },
    { title: 'Stability Certification', desc: 'Providing final stability certificates upon project completion' },
  ]

  const materials = [
    { icon: '🏗️', name: 'RCC', desc: 'Reinforced Concrete Construction' },
    { icon: '⚙️', name: 'Steel', desc: 'Steel Structure Design' },
    { icon: '🔧', name: 'Hybrid', desc: 'Mixed Material Solutions' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1A3E6F] via-[#1F86C8] to-[#1A3E6F] text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Structural & Civil Design Consultancy</h1>
            <p className="text-xl text-gray-100 mb-8">
              Our inhouse structural engineering capabilities include comprehensive Civil and Structural design consultancy services
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-8 py-4 bg-[#1F86C8] hover:bg-[#1A3E6F] rounded-lg font-bold transition-all">
                Request Consultation
              </Link>
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-lg font-bold transition-all">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Process */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-[#1A3E6F] mb-12">Our Design Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceDetails.map((item, i) => (
            <div key={i} className="bg-[#F5F7FA] p-6 rounded-lg border border-[#BFC5CC] hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1F86C8] to-[#1A3E6F] rounded-full flex items-center justify-center text-white font-bold">
                  {i + 1}
                </div>
              </div>
              <h3 className="font-bold text-[#1A3E6F] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Materials Expertise */}
      <div className="bg-[#F5F7FA] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1A3E6F] mb-12 text-center">Materials & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {materials.map((mat, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border-2 border-[#BFC5CC] text-center hover:border-[#1F86C8] transition-all">
                <div className="text-5xl mb-4">{mat.icon}</div>
                <h3 className="text-xl font-bold text-[#1A3E6F] mb-2">{mat.name}</h3>
                <p className="text-gray-600">{mat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-8">Why Choose Our Structural Design Services?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#BFC5CC]">
                  <CheckCircle className="h-6 w-6 text-[#1A3E6F]" />
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-2">20+ Years Experience</h3>
                <p className="text-gray-100">Proven expertise in diverse structural projects across India</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#BFC5CC]">
                  <CheckCircle className="h-6 w-6 text-[#1A3E6F]" />
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-2">Multi-Code Expertise</h3>
                <p className="text-gray-100">IS, NBC, ACI, ASCE, Eurocodes, and British Standards compliant</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#BFC5CC]">
                  <CheckCircle className="h-6 w-6 text-[#1A3E6F]" />
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-2">Quality Assured</h3>
                <p className="text-gray-100">Comprehensive quality control and compliance procedures</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#BFC5CC]">
                  <CheckCircle className="h-6 w-6 text-[#1A3E6F]" />
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-2">Client-Centric Approach</h3>
                <p className="text-gray-100">Aligned design solutions meeting your specific requirements</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#F5F7FA] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1A3E6F] mb-8">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get in touch with our team of experienced structural engineers to discuss your design requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919819533113" className="px-8 py-4 bg-[#1F86C8] text-white rounded-lg font-bold hover:bg-[#1A3E6F] transition-all flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Call Us Now
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