'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Office Location',
      details: ['Office No-103, 1st Floor', 'Sanghvi Parrssava Classic', 'Bhiwandi, Maharashtra 421302']
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+91 98191 56871', 'Available: Mon-Fri, 9AM-6PM']
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['contact@buildings.in', 'Response within 24 hours']
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: ['Monday to Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 2:00 PM', 'Sunday: Closed']
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F7FA]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1A3E6F] via-[#1F86C8] to-[#1A3E6F]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1F86C8] via-[#BFC5CC] to-[#1F86C8]"></div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-sm mb-6 border border-white/20">
              <Mail className="w-4 h-4 mr-2" />
              GET IN TOUCH
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Let's Talk About Your <span className="text-[#BFC5CC]">Project</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Have a structural engineering challenge? We're here to help. 
              Reach out to our team for a consultation.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#BFC5CC] hover:border-[#1F86C8] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F5F7FA] to-white flex items-center justify-center mb-6 text-[#1F86C8] border border-[#BFC5CC]">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1A3E6F] mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#1A3E6F] mb-8">Send us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 mb-2">Thank You!</h3>
                  <p className="text-green-700">We've received your message and will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[#1A3E6F] font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#BFC5CC] focus:outline-none focus:ring-2 focus:ring-[#1F86C8] transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#1A3E6F] font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[#BFC5CC] focus:outline-none focus:ring-2 focus:ring-[#1F86C8] transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[#1A3E6F] font-semibold mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[#BFC5CC] focus:outline-none focus:ring-2 focus:ring-[#1F86C8] transition-all"
                        placeholder="+91 98191 56871"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#1A3E6F] font-semibold mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#BFC5CC] focus:outline-none focus:ring-2 focus:ring-[#1F86C8] transition-all"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-[#1A3E6F] font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-[#BFC5CC] focus:outline-none focus:ring-2 focus:ring-[#1F86C8] transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] text-white font-bold rounded-xl hover:shadow-lg transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Quick Links & FAQ */}
            <div>
              <h2 className="text-3xl font-bold text-[#1A3E6F] mb-8">Frequently Asked</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#BFC5CC]">
                  <h4 className="text-lg font-bold text-[#1A3E6F] mb-2">What services do you offer?</h4>
                  <p className="text-gray-600">We provide structural engineering, project management, structural audits, and heritage conservation services.</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#BFC5CC]">
                  <h4 className="text-lg font-bold text-[#1A3E6F] mb-2">How long does a typical project take?</h4>
                  <p className="text-gray-600">Project timelines vary based on complexity and scope. We'll provide detailed estimates during consultation.</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#BFC5CC]">
                  <h4 className="text-lg font-bold text-[#1A3E6F] mb-2">Do you handle heritage projects?</h4>
                  <p className="text-gray-600">Yes, we specialize in heritage conservation and restoration of historic structures.</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#BFC5CC]">
                  <h4 className="text-lg font-bold text-[#1A3E6F] mb-2">What areas do you serve?</h4>
                  <p className="text-gray-600">We serve clients across India with offices in major cities and international experience.</p>
                </div>

                <Link
                  href="/projects"
                  className="inline-block w-full text-center px-8 py-4 bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] text-white font-bold rounded-xl hover:shadow-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  View Our Projects
                </Link>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-2xl overflow-hidden h-96 border border-[#BFC5CC]">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#1F86C8] mx-auto mb-4" />
                <p className="text-[#1A3E6F] font-semibold">Office Location</p>
                <p className="text-gray-500 text-sm mt-2">Bhiwandi, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
