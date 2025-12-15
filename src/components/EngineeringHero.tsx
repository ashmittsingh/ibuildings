"use client"

import { Target, Shield, Zap, Cpu, Globe, TrendingUp } from 'lucide-react'

const EngineeringHero = () => {
  const principles = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Precision',
      description: 'Exact calculations and meticulous attention to detail'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety',
      description: 'Uncompromising safety standards and protocols'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Cutting-edge technology and modern methodologies'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Efficiency',
      description: 'Optimized designs for cost and time savings'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Sustainability',
      description: 'Eco-friendly and sustainable construction practices'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Commitment to quality and client satisfaction'
    }
  ]

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '600px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 mb-6">
              <span className="text-sm font-semibold text-blue-300">ENGINEERING EXCELLENCE</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
              Where <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Precision</span> Meets <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Innovation</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10">
              We combine decades of structural engineering expertise with cutting-edge technology to deliver safe, efficient, and enduring structures that stand the test of time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-2xl">
                Explore Our Projects
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                Download Brochure
              </button>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="group">
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-300/30 transition-all duration-500 hover:translate-y-[-5px]">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <div className="text-white">
                      {principle.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{principle.title}</h3>
                  <p className="text-gray-400 text-sm">{principle.description}</p>
                  
                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EngineeringHero