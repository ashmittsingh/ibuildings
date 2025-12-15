"use client"

import { useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight, Building2, CheckCircle } from 'lucide-react'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO, Skyline Developers',
      company: 'Skyline Constructions',
      content: 'Buildings.in delivered exceptional structural engineering solutions for our commercial complex. Their attention to detail and innovative approach saved us both time and resources.',
      rating: 5,
      image: '/images/testimonials/client1.jpg'
    },
    {
      name: 'Priya Sharma',
      role: 'Heritage Conservation Officer',
      company: 'Government of Maharashtra',
      content: 'Their expertise in heritage conservation is unparalleled. They successfully restored a 200-year-old structure while maintaining its historical integrity.',
      rating: 5,
      image: '/images/testimonials/client2.jpg'
    },
    {
      name: 'Amit Patel',
      role: 'Project Director',
      company: 'InfraCorp India',
      content: 'The structural audit conducted by Buildings.in identified critical safety issues we had missed. Their thorough report and remediation plan were exceptional.',
      rating: 5,
      image: '/images/testimonials/client3.jpg'
    },
    {
      name: 'Sneha Reddy',
      role: 'Architect',
      company: 'Design Studio International',
      content: 'Working with Buildings.in was a seamless experience. Their engineering solutions complemented our architectural vision perfectly.',
      rating: 5,
      image: '/images/testimonials/client4.jpg'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 mb-6">
            <span className="text-sm font-semibold text-blue-700">CLIENT TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by industry leaders and government organizations across India
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-100">
            {/* Quote Icon */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <Quote className="w-8 h-8 text-white" />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 -left-6 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-all border border-blue-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-all border border-blue-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>

            {/* Testimonial Content */}
            <div className="transition-all duration-500">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                {/* Client Image (Placeholder) */}
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-xl">
                  <Building2 className="w-12 h-12 text-white" />
                </div>

                {/* Testimonial Text */}
                <div className="flex-1">
                  {/* Rating */}
                  <div className="flex mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-2xl md:text-3xl text-gray-800 mb-8 leading-relaxed italic">
                    "{testimonials[currentTestimonial].content}"
                  </p>

                  {/* Client Info */}
                  <div className="border-t border-blue-100 pt-6">
                    <div className="text-xl font-bold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-blue-600 font-medium">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="text-gray-600 flex items-center mt-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 w-8' 
                      : 'bg-blue-200 hover:bg-blue-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { label: 'Government Approved', count: '50+' },
              { label: 'Private Clients', count: '200+' },
              { label: 'Heritage Projects', count: '30+' },
              { label: 'Repeat Clients', count: '85%' }
            ].map((badge, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center border border-blue-100">
                <div className="text-3xl font-bold text-blue-700 mb-2">{badge.count}</div>
                <div className="text-gray-700 font-medium">{badge.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}