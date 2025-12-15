import ServicesSection from "@/components/ServicesSection"
import { Metadata } from 'next'
import { 
  Target, 
  Shield, 
  Zap, 
  Building2, 
  TrendingUp, 
  Cpu, 
  Globe, 
  Calculator,
  FileCheck,
  Users,
  Award,
  ChevronRight,
  Star
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Engineering Services | iBuildings',
  description: 'Professional structural engineering services in dark blue and lilac theme.',
}

export default function ServicesPage() {
  // Dark Blue (#1e3a8a), Lilac (#a78bfa), Grey (#374151) theme
  const serviceCategories = [
    {
      title: "Structural Engineering",
      description: "Innovative design solutions for modern structures",
      icon: <Target className="w-8 h-8" />,
      color: "from-blue-900 to-indigo-800",
      gradient: "bg-gradient-to-br from-blue-900 to-indigo-800",
      count: 4,
      href: "/services/structural-engineering"
    },
    {
      title: "Project Management",
      description: "Comprehensive project oversight and delivery",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-indigo-900 to-purple-800",
      gradient: "bg-gradient-to-br from-indigo-900 to-purple-800",
      count: 3,
      href: "/services/project-management"
    },
    {
      title: "Heritage Conservation",
      description: "Preserving architectural legacy with care",
      icon: <Globe className="w-8 h-8" />,
      color: "from-violet-800 to-purple-700",
      gradient: "bg-gradient-to-br from-violet-800 to-purple-700",
      count: 2,
      href: "/services/heritage-conservation"
    },
    {
      title: "Structural Audit",
      description: "Safety assessment and retrofitting solutions",
      icon: <Shield className="w-8 h-8" />,
      color: "from-blue-800 to-cyan-700",
      gradient: "bg-gradient-to-br from-blue-800 to-cyan-700",
      count: 5,
      href: "/services/structural-audit"
    },
  ]

  const serviceHighlights = [
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Precision Engineering",
      description: "Mathematically calculated solutions",
      bg: "bg-blue-900/10",
      border: "border-blue-200/30"
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Quality Certified",
      description: "ISO 9001 certified processes",
      bg: "bg-indigo-900/10",
      border: "border-indigo-200/30"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "100+ certified professionals",
      bg: "bg-violet-900/10",
      border: "border-violet-200/30"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Award Winning",
      description: "Industry recognized excellence",
      bg: "bg-purple-900/10",
      border: "border-purple-200/30"
    },
  ]

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500"></div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-800/20 to-violet-800/20 text-blue-200 font-semibold text-sm mb-6 border border-blue-700/30">
              <Star className="w-4 h-4 mr-2 text-violet-300" />
              PREMIUM SERVICES
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-playfair tracking-tight text-white">
              Engineering <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Excellence</span> Redefined
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Advanced structural solutions with a sophisticated dark blue and lilac aesthetic. 
              Precision engineering meets modern design.
            </p>

            {/* Stats Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-blue-700/30">
                <div className="text-2xl font-bold text-blue-300">150+</div>
                <div className="text-xs text-gray-400 mt-1">Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-violet-700/30">
                <div className="text-2xl font-bold text-violet-300">100+</div>
                <div className="text-xs text-gray-400 mt-1">Engineers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-blue-700/30">
                <div className="text-2xl font-bold text-blue-300">25+</div>
                <div className="text-xs text-gray-400 mt-1">Years</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-violet-700/30">
                <div className="text-2xl font-bold text-violet-300">15+</div>
                <div className="text-xs text-gray-400 mt-1">Cities</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="container mx-auto px-4 py-16 -mt-10 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Categories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized engineering services across multiple disciplines
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {serviceCategories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="group bg-white rounded-2xl p-6 border border-gray-300 hover:border-blue-500/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-800">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                    {category.count} Services
                  </span>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-500 mr-2 group-hover:text-blue-600">Explore</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block w-20 h-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full mb-6"></div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why iBuildings?</h2>
            <p className="text-lg text-gray-600">
              Combining technical expertise with sophisticated design aesthetics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {serviceHighlights.map((highlight, index) => (
              <div 
                key={index} 
                className={`${highlight.bg} rounded-xl p-8 border ${highlight.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-900/20 to-violet-900/20 flex items-center justify-center mb-6 border border-blue-300/20">
                  <div className="text-blue-700">
                    {highlight.icon}
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">{highlight.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <ServicesSection />

      {/* Process Section - Dark Version */}
      <div className="bg-gradient-to-br from-gray-900 to-blue-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-lg text-gray-300">
              A systematic approach ensuring precision and excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Consultation", desc: "In-depth project analysis", color: "from-blue-600 to-blue-700" },
              { step: "02", title: "Design", desc: "Advanced engineering simulation", color: "from-indigo-600 to-indigo-700" },
              { step: "03", title: "Execution", desc: "Precision implementation", color: "from-violet-600 to-violet-700" },
              { step: "04", title: "Support", desc: "Ongoing optimization", color: "from-purple-600 to-purple-700" },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 text-center hover:border-blue-500/50 transition-colors">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${process.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <span className="text-white text-xl font-bold">{process.step}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{process.title}</h4>
                  <p className="text-gray-400 text-sm">{process.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900 rounded-3xl p-12 text-center shadow-2xl border border-blue-700/30">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 mb-8 mx-auto">
              <Target className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your Engineering Project
            </h2>
            <p className="text-xl text-blue-200 mb-8 leading-relaxed">
              Get a comprehensive project assessment from our expert engineering team. 
              Schedule a consultation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-violet-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Request Consultation
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all"
              >
                View Our Portfolio
              </Link>
            </div>
            
            <div className="flex items-center justify-center mt-8 text-blue-300">
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-current mr-1" />
                <Star className="w-4 h-4 fill-current mr-1" />
                <Star className="w-4 h-4 fill-current mr-1" />
                <Star className="w-4 h-4 fill-current mr-1" />
                <Star className="w-4 h-4 fill-current mr-2" />
                <span className="text-sm">Rated 4.9/5 by clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}