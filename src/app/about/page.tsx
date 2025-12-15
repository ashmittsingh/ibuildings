import * as React from 'react'
import { Building2, Users, Award, Target, Shield, Globe, Star, History, Trophy, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  const stats = [
    { icon: <Building2 className="w-6 h-6" />, value: "150+", label: "Projects Completed", color: "text-blue-300" },
    { icon: <Users className="w-6 h-6" />, value: "100+", label: "Expert Team Members", color: "text-violet-300" },
    { icon: <Award className="w-6 h-6" />, value: "25+", label: "Years of Experience", color: "text-indigo-300" },
    { icon: <Globe className="w-6 h-6" />, value: "15+", label: "Cities Served", color: "text-purple-300" },
  ]

  const values = [
    { 
      icon: <Shield className="w-8 h-8" />, 
      title: "Integrity", 
      desc: "Uncompromising ethics in all engagements",
      gradient: "from-blue-800 to-indigo-700"
    },
    { 
      icon: <Target className="w-8 h-8" />, 
      title: "Excellence", 
      desc: "World-class engineering standards",
      gradient: "from-indigo-800 to-purple-700"
    },
    { 
      icon: <Award className="w-8 h-8" />, 
      title: "Innovation", 
      desc: "Cutting-edge solutions for modern challenges",
      gradient: "from-violet-800 to-purple-600"
    },
    { 
      icon: <Globe className="w-8 h-8" />, 
      title: "Sustainability", 
      desc: "Eco-friendly and future-ready designs",
      gradient: "from-blue-700 to-cyan-600"
    },
  ]

  const milestones = [
    { year: "1998", title: "Founded", desc: "Started as a small engineering consultancy" },
    { year: "2005", title: "Expansion", desc: "Opened second office in Mumbai" },
    { year: "2012", title: "Heritage Division", desc: "Established heritage conservation wing" },
    { year: "2020", title: "Digital Transformation", desc: "Adopted BIM and advanced simulation" },
  ]

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500"></div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-800/20 to-violet-800/20 text-blue-200 font-semibold text-sm mb-6 border border-blue-700/30">
              <History className="w-4 h-4 mr-2 text-violet-300" />
              EST. 1998
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-playfair tracking-tight text-white">
              Building <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">Legacy</span> Through Excellence
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
              India's premier structural engineering firm, combining 25+ years of expertise with innovative solutions in a sophisticated dark theme.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-colors group hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-900/30 to-violet-900/30 text-blue-300 group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                  </div>
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Story Section */}
      <div className="container mx-auto px-4 py-20 -mt-10 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Our Story */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-200">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900 to-indigo-800 flex items-center justify-center mr-4">
                <History className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in 1998, iBuildings began as a small structural engineering consultancy with a vision to revolutionize construction practices in India. What started with just three engineers has now grown into a multidisciplinary firm of over 100 certified professionals.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our journey spans across landmark projects in residential, commercial, industrial, and heritage sectors. From restoring centuries-old monuments to designing cutting-edge skyscrapers, we've built a reputation for precision, innovation, and reliability.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we're proud to be one of India's most trusted structural engineering partners, recognized for our technical expertise, ethical practices, and commitment to sustainable development.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Milestones</h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-violet-100 flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-blue-900">{milestone.year}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{milestone.title}</h4>
                      <p className="text-gray-600 text-sm">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-10 text-white shadow-2xl border border-blue-700/30">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center mb-8">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg text-blue-200 leading-relaxed mb-8">
                To deliver precision engineering solutions that ensure structural integrity, preserve cultural heritage, and contribute to sustainable development through innovation and excellence.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mt-8 border border-white/10">
                <h4 className="text-xl font-bold mb-4">Our Vision</h4>
                <p className="text-blue-200">
                  To be India's most trusted engineering partner, setting global standards in structural safety, heritage conservation, and sustainable construction.
                </p>
              </div>
            </div>

            {/* Leadership Highlight */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 text-white border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center mr-4">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Industry Recognition</h4>
                  <p className="text-gray-400 text-sm">Award-winning excellence</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-current text-yellow-400 mr-2" />
                  <span className="text-sm">Best Structural Engineering Firm 2022</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-current text-yellow-400 mr-2" />
                  <span className="text-sm">Heritage Conservation Award 2021</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-current text-yellow-400 mr-2" />
                  <span className="text-sm">ISO 9001:2015 Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block w-20 h-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full mb-6"></div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that define our culture and guide our engineering excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-400 group hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors">{value.title}</h4>
                <p className="text-gray-700 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Presence */}
      <div className="bg-gradient-to-br from-gray-900 to-blue-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-800/20 to-violet-800/20 text-blue-200 font-semibold text-sm mb-6 border border-blue-700/30">
              <MapPin className="w-4 h-4 mr-2 text-violet-300" />
              GLOBAL REACH
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-6">Serving Across India</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              With offices in major cities and projects spanning the country, we bring engineering excellence wherever it's needed.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { city: "Mumbai", projects: "45+", color: "from-blue-600 to-blue-700" },
                { city: "Delhi", projects: "38+", color: "from-indigo-600 to-indigo-700" },
                { city: "Bangalore", projects: "32+", color: "from-violet-600 to-violet-700" },
                { city: "Chennai", projects: "28+", color: "from-purple-600 to-purple-700" },
              ].map((location, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-blue-400/50 transition-colors">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${location.color} flex items-center justify-center mx-auto mb-4`}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">{location.city}</h4>
                  <p className="text-gray-400 text-sm">{location.projects} Projects</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900 rounded-3xl p-12 text-center shadow-2xl border border-blue-700/30">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 mb-8 mx-auto">
              <Users className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Build With Confidence
            </h2>
            <p className="text-xl text-blue-200 mb-8 leading-relaxed">
              Partner with India's most trusted structural engineering firm. 
              Let's create something extraordinary together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-violet-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </a>
              <a 
                href="/projects" 
                className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all"
              >
                View Our Work
              </a>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-blue-300">Client Satisfaction</div>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24h</div>
                <div className="text-sm text-blue-300">Response Time</div>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-blue-300">On-Time Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}