"use client"

import { Award, Users, Clock, ShieldCheck, Building, Target } from 'lucide-react'

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Clock className="w-12 h-12" />,
      title: '25+ Years Experience',
      description: 'Decades of engineering excellence and proven track record',
      color: 'from-blue-600 to-cyan-500'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Certified Engineers',
      description: '100+ certified professionals with diverse expertise',
      color: 'from-cyan-600 to-blue-500'
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'ISO Certified',
      description: 'Internationally recognized quality management systems',
      color: 'from-blue-700 to-cyan-600'
    },
    {
      icon: <ShieldCheck className="w-12 h-12" />,
      title: 'Safety First',
      description: 'Zero compromise on structural safety and compliance',
      color: 'from-cyan-700 to-blue-600'
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: '500+ Projects',
      description: 'Successfully completed projects across India',
      color: 'from-blue-800 to-cyan-700'
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Precision Engineering',
      description: 'Advanced technology and meticulous planning',
      color: 'from-cyan-800 to-blue-700'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 mb-6">
            <span className="text-sm font-semibold text-blue-700">WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Buildings</span>
          </h2>
          <p className="text-xl text-gray-600">
            Combining decades of experience with cutting-edge technology for unparalleled structural solutions
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 overflow-hidden">
                {/* Icon Background */}
                <div className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${feature.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover Indicator */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              {/* Outer Glow */}
              <div className={`absolute -inset-2 bg-gradient-to-br ${feature.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '25+', label: 'Years Experience' },
              { number: '500+', label: 'Projects Completed' },
              { number: '100+', label: 'Certified Engineers' },
              { number: '50+', label: 'Cities Served' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}