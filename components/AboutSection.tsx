"use client"

import { Target, Eye, Award, Users, Building, TrendingUp } from 'lucide-react'

export default function AboutSection() {
  const highlights = [
    {
      icon: <Target className="w-10 h-10" />,
      title: 'Our Mission',
      description: 'Delivering safe, efficient structural solutions through innovation and quality',
      color: 'from-blue-600 to-cyan-500'
    },
    {
      icon: <Eye className="w-10 h-10" />,
      title: 'Our Vision',
      description: 'To be India\'s most trusted structural engineering consultancy',
      color: 'from-cyan-600 to-blue-500'
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Quality First',
      description: 'ISO certified with adherence to international standards',
      color: 'from-blue-700 to-cyan-600'
    }
  ]

  const stats = [
    { icon: <Building className="w-5 h-5" />, value: '25+', label: 'Years Experience' },
    { icon: <Users className="w-5 h-5" />, value: '100+', label: 'Expert Team' },
    { icon: <Award className="w-5 h-5" />, value: '500+', label: 'Projects' },
    { icon: <TrendingUp className="w-5 h-5" />, value: '98%', label: 'Satisfaction' }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 mb-6">
            <span className="text-sm font-semibold text-blue-700">ABOUT US</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Engineering Excellence <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Since 1999</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            iBuildings is a leading structural engineering consultancy committed to delivering safe, innovative, and sustainable structural solutions across India
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                {/* Icon Background */}
                <div className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${item.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Hover Indicator */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              {/* Outer Glow */}
              <div className={`absolute -inset-2 bg-gradient-to-br ${item.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 md:p-10 shadow-lg border border-blue-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h3>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Founded in 1999, iBuildings has grown from a small structural engineering firm into one of 
                India's most respected consultancies. Our journey has been marked by a commitment to technical 
                excellence, innovation, and client satisfaction.
              </p>
              <p>
                We believe that exceptional engineering is the result of exceptional people working together 
                with purpose and passion. This philosophy drives everything we do, from the projects we undertake 
                to the relationships we build.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl p-8 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-purple-100 font-medium text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}