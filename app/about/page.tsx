"use client"
import { useState } from 'react'
import { 
  Target, 
  FileText, 
  Zap, 
  Users, 
  Eye, 
  Award,
  CheckCircle,
  Shield,
  Heart,
  Briefcase,
  TrendingUp,
  Globe
} from 'lucide-react'

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('mission')

  const stats = [
    { icon: <Award className="w-6 h-6" />, value: '25+', label: 'Years Experience' },
    { icon: <Users className="w-6 h-6" />, value: '100+', label: 'Expert Team' },
    { icon: <Briefcase className="w-6 h-6" />, value: '150+', label: 'Projects Completed' },
    { icon: <Globe className="w-6 h-6" />, value: '98%', label: 'Client Satisfaction' }
  ]

  const tabs = [
    { id: 'mission', label: 'Mission', icon: <Target className="w-4 h-4" /> },
    { id: 'vision', label: 'Vision', icon: <Eye className="w-4 h-4" /> },
    { id: 'policy', label: 'Quality Policy', icon: <FileText className="w-4 h-4" /> },
    { id: 'procedure', label: 'Procedures', icon: <Zap className="w-4 h-4" /> },
    { id: 'teams', label: 'Our Teams', icon: <Users className="w-4 h-4" /> }
  ]

  const missionContent = {
    title: 'Our Mission',
    subtitle: 'Delivering Engineering Excellence',
    description: 'To deliver safe, efficient, and enduring structural solutions through innovative engineering, advanced technology, and unwavering commitment to quality.',
    highlights: [
      'Deliver structural solutions that exceed safety and quality standards',
      'Innovate continuously to provide cutting-edge engineering solutions',
      'Maintain highest professional ethics in all engagements',
      'Invest in our team\'s technical development and expertise',
      'Embrace sustainable development in every project',
      'Foster collaborative relationships with clients and stakeholders'
    ]
  }

  const visionContent = {
    title: 'Our Vision',
    subtitle: 'Building India\'s Structural Future',
    description: 'To be recognized as India\'s most trusted structural engineering consultancy, setting benchmarks in innovation, quality, and sustainable development.',
    highlights: [
      'Leadership in structural engineering innovation',
      'Recognized for technical excellence and reliability',
      'Preferred partner for complex engineering challenges',
      'Pioneer in sustainable construction practices',
      'Developer of next-generation engineering talent',
      'Contributor to India\'s infrastructure development'
    ]
  }

  const policyContent = {
    title: 'Quality Policy',
    subtitle: 'Commitment to Excellence',
    description: 'iBuildings is committed to providing structural engineering services that consistently meet or exceed client requirements and expectations.',
    highlights: [
      'Compliance with Indian Standards (IS codes) and international best practices',
      'Adherence to applicable statutory and regulatory requirements',
      'Continuous improvement in processes and procedures',
      'Investment in latest technology and skilled manpower',
      'Prevention of pollution and environmental protection',
      'Regular training and development of personnel',
      'Client satisfaction through timely delivery and quality assurance',
      'Risk management and safety protocols'
    ]
  }

  const procedureSteps = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Project Initiation',
      items: ['Client briefing', 'Scope definition', 'Resource allocation', 'Timeline establishment']
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: '3D Modeling & Analysis',
      items: ['3D structural modeling', 'Finite element analysis', 'Code compliance checks', 'Optimization']
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Design Review',
      items: ['Peer review', 'Senior engineer verification', 'Client approval', 'Design finalization']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Quality Assurance',
      items: ['Design verification', 'Code compliance', 'Risk management', 'Documentation']
    }
  ]

  const teamsData = [
    {
      name: 'Structural Engineering',
      icon: <Target className="w-8 h-8" />,
      description: 'Specialized in designing safe, efficient, and innovative structures',
      count: '40+'
    },
    {
      name: 'Project Management',
      icon: <Briefcase className="w-8 h-8" />,
      description: 'Expert project managers ensuring timely and successful delivery',
      count: '25+'
    },
    {
      name: 'Heritage Conservation',
      icon: <Award className="w-8 h-8" />,
      description: 'Specialists in restoration and preservation of historic structures',
      count: '20+'
    },
    {
      name: 'Support & Administration',
      icon: <Users className="w-8 h-8" />,
      description: 'Professional team providing operational excellence',
      count: '15+'
    }
  ]

  const renderContent = () => {
    switch(activeTab) {
      case 'mission':
        return (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-2xl p-6 md:p-10 border border-[#BFC5CC]">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A3E6F] mb-4">{missionContent.title}</h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                {missionContent.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {missionContent.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#1F86C8] flex-shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-[#BFC5CC]">
                <Award className="w-10 h-10 text-[#1F86C8] mb-4" />
                <h4 className="text-lg font-bold text-[#1A3E6F] mb-2">Client Trust</h4>
                <p className="text-sm text-gray-600">Building lasting relationships through quality and reliability</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-[#BFC5CC]">
                <TrendingUp className="w-10 h-10 text-[#1F86C8] mb-4" />
                <h4 className="text-lg font-bold text-[#1A3E6F] mb-2">Team Excellence</h4>
                <p className="text-sm text-gray-600">Attracting and retaining top engineering talent</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-[#BFC5CC]">
                <Heart className="w-10 h-10 text-[#1F86C8] mb-4" />
                <h4 className="text-lg font-bold text-[#1A3E6F] mb-2">Positive Impact</h4>
                <p className="text-sm text-gray-600">Contributing to society and environment</p>
              </div>
            </div>
          </div>
        )
      
      case 'vision':
        return (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-2xl p-6 md:p-10 border border-[#BFC5CC]">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A3E6F] mb-4">{visionContent.title}</h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                {visionContent.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {visionContent.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#1F86C8] flex-shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#1A3E6F] to-[#1F86C8] rounded-2xl p-6 md:p-10 text-white">
              <h4 className="text-xl md:text-2xl font-bold mb-6">Our Strategic Goals</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold mb-2 text-lg">Innovation Leadership</h5>
                  <p className="text-[#BFC5CC] text-sm md:text-base">Pioneering new engineering methodologies and technologies</p>
                </div>
                <div>
                  <h5 className="font-bold mb-2 text-lg">Market Excellence</h5>
                  <p className="text-[#BFC5CC] text-sm md:text-base">Setting industry standards for quality and service</p>
                </div>
                <div>
                  <h5 className="font-bold mb-2 text-lg">Sustainable Growth</h5>
                  <p className="text-[#BFC5CC] text-sm md:text-base">Expanding capabilities while maintaining environmental responsibility</p>
                </div>
                <div>
                  <h5 className="font-bold mb-2 text-lg">Talent Development</h5>
                  <p className="text-[#BFC5CC] text-sm md:text-base">Building the next generation of engineering leaders</p>
                </div>
              </div>
            </div>
          </div>
        )

      case 'policy':
        return (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-2xl p-6 md:p-10 border border-[#BFC5CC]">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A3E6F] mb-4">{policyContent.title}</h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                {policyContent.description}
              </p>
              <div className="space-y-3">
                {policyContent.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#1F86C8] flex-shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-[#BFC5CC]">
                <Shield className="w-10 h-10 text-[#1F86C8] mb-4" />
                <h4 className="text-lg font-bold text-[#1A3E6F] mb-2">Safety & Integrity</h4>
                <p className="text-sm text-gray-600">Structural safety and professional integrity are non-negotiable</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-[#BFC5CC]">
                <Target className="w-10 h-10 text-[#1F86C8] mb-4" />
                <h4 className="text-lg font-bold text-[#1A3E6F] mb-2">Quality Excellence</h4>
                <p className="text-sm text-gray-600">Maintaining highest standards in design and documentation</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-[#BFC5CC]">
                <Users className="w-10 h-10 text-[#1F86C8] mb-4" />
                <h4 className="text-lg font-bold text-[#1A3E6F] mb-2">Client Focus</h4>
                <p className="text-sm text-gray-600">Exceeding client requirements and expectations</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-[#BFC5CC]">
                <Zap className="w-10 h-10 text-[#1F86C8] mb-4" />
                <h4 className="text-lg font-bold text-[#1A3E6F] mb-2">Continuous Innovation</h4>
                <p className="text-sm text-gray-600">Adopting modern tools for better solutions</p>
              </div>
            </div>
          </div>
        )

      case 'procedure':
        return (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-2xl p-6 md:p-10 border border-[#BFC5CC]">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A3E6F] mb-4">Engineering Procedures</h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Systematic procedures designed to ensure quality, safety, and innovation in every structural engineering project.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {procedureSteps.map((step, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border border-[#BFC5CC] hover:border-[#1F86C8] transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F5F7FA] to-white flex items-center justify-center mb-4 text-[#1F86C8] border border-[#BFC5CC]">
                    {step.icon}
                  </div>
                  <h4 className="text-lg font-bold text-[#1A3E6F] mb-4">{step.title}</h4>
                  <ul className="space-y-2">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#1F86C8] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-[#1A3E6F] to-[#1F86C8] rounded-2xl p-6 md:p-10 text-white">
              <h4 className="text-xl md:text-2xl font-bold mb-6">Quality Assurance & Control</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#BFC5CC] flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold mb-1">Design Verification</h5>
                    <p className="text-[#BFC5CC] text-sm">Multiple levels of review to ensure technical accuracy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-[#BFC5CC] flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold mb-1">Code Compliance</h5>
                    <p className="text-[#BFC5CC] text-sm">Strict adherence to IS codes and international standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'teams':
        return (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-2xl p-6 md:p-10 border border-[#BFC5CC]">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A3E6F] mb-4">Our Expert Teams</h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Over 100 skilled professionals dedicated to delivering structural engineering excellence with diverse expertise and collaborative spirit.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamsData.map((team, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border border-[#BFC5CC] hover:border-[#1F86C8] transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F5F7FA] to-white flex items-center justify-center text-[#1F86C8] border border-[#BFC5CC]">
                      {team.icon}
                    </div>
                    <span className="text-2xl font-bold text-[#1F86C8]">{team.count}</span>
                  </div>
                  <h4 className="text-lg font-bold text-[#1A3E6F] mb-2">{team.name}</h4>
                  <p className="text-sm text-gray-600">{team.description}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-[#1A3E6F] to-[#1F86C8] rounded-2xl p-6 md:p-10 text-white">
              <h4 className="text-xl md:text-2xl font-bold mb-6">Team Values</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {['Technical Excellence', 'Integrity', 'Collaboration', 'Innovation', 'Client Focus', 'Sustainability'].map((value, idx) => (
                  <div key={idx} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
                    <p className="font-bold text-sm md:text-base">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F7FA]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1A3E6F] via-[#1F86C8] to-[#1A3E6F]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1F86C8] via-[#BFC5CC] to-[#1A3E6F]"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-sm mb-6 border border-white/20">
              <Users className="w-4 h-4 mr-2" />
              ABOUT US
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Engineering Excellence <span className="text-[#BFC5CC]">Since 1999</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed px-4">
              iBuildings is a leading structural engineering consultancy committed to delivering 
              safe, innovative, and sustainable structural solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-12 md:-mt-16 relative z-20 mb-12 md:mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg border border-[#BFC5CC] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#F5F7FA] to-white flex items-center justify-center mb-3 md:mb-4 text-[#1F86C8] border border-[#BFC5CC]">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-4xl font-bold text-[#1A3E6F] mb-1 md:mb-2">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-600 font-semibold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs and Content */}
      <div className="container mx-auto px-4 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="mb-8 md:mb-12 overflow-x-auto scrollbar-hide">
            <div className="flex space-x-2 md:space-x-4 min-w-max md:min-w-0 md:justify-center pb-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 md:px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap text-sm md:text-base ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-[#F5F7FA] border border-[#BFC5CC]'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="min-h-[400px]">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="bg-gradient-to-br from-[#F5F7FA] to-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3E6F] mb-6 md:mb-8 text-center">Our Story</h2>
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-[#BFC5CC]">
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 1999, iBuildings has grown from a small structural engineering firm into one of 
                  India's most respected consultancies. Our journey has been marked by a commitment to technical 
                  excellence, innovation, and client satisfaction.
                </p>
                <p>
                  Today, we serve clients across diverse sectors including residential, commercial, industrial, 
                  and heritage projects. Our team of over 100 professionals brings together decades of combined 
                  experience and cutting-edge technical capabilities.
                </p>
                <p>
                  We believe that exceptional engineering is the result of exceptional people working together 
                  with purpose and passion. This philosophy drives everything we do, from the projects we undertake 
                  to the relationships we build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}