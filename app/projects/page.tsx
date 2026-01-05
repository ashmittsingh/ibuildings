'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Building2, Trophy, Target, Award, Star, Filter, MapPin, Clock } from 'lucide-react'
import { projects, getProjectsByCategory } from '@/data/projectsData'
import ProjectCard from '@/components/projects/ProjectCard'

const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Institutional', 'Heritage', 'Hospitality']

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  const projectStats = [
    { icon: <Building2 className="w-6 h-6" />, value: "150+", label: "Projects Completed" },
    { icon: <Trophy className="w-6 h-6" />, value: "₹500Cr+", label: "Project Value" },
    { icon: <Award className="w-6 h-6" />, value: "25+", label: "Years Experience" },
    { icon: <Star className="w-6 h-6" />, value: "98%", label: "Client Satisfaction" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F7FA]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1A3E6F] via-[#1F86C8] to-[#1A3E6F]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1F86C8] via-[#BFC5CC] to-[#1A3E6F]"></div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-sm mb-6 border border-white/20">
              <Trophy className="w-4 h-4 mr-2" />
              PORTFOLIO SHOWCASE
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white">
              Engineering <span className="text-[#BFC5CC]">Masterpieces</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Showcasing 25+ years of structural engineering excellence across diverse sectors, 
              from heritage conservation to modern skyscrapers.
            </p>
            
            {/* Stats Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12">
              {projectStats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:border-[#BFC5CC] transition-colors hover:-translate-y-1">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 rounded-xl bg-white/10 text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-300 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 py-12 -mt-10 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-[#BFC5CC]">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Filter className="w-6 h-6 text-[#1F86C8]" />
                <h2 className="text-2xl font-bold text-[#1A3E6F]">Filter by Category</h2>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] text-white shadow-lg'
                      : 'bg-[#F5F7FA] text-[#1A3E6F] border-2 border-[#BFC5CC] hover:border-[#1F86C8]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="mt-6 text-sm text-gray-600">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <Building2 className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <p className="text-lg text-gray-600">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Project Timeline Section */}
      <div className="bg-gradient-to-br from-[#1A3E6F] to-[#1F86C8] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Project Timeline</h2>
            <p className="text-lg text-gray-200">
              Our journey through landmark projects over the years
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { year: "1998-2005", title: "Early Years", projects: 24, desc: "Foundational residential projects" },
              { year: "2006-2012", title: "Expansion", projects: 48, desc: "Commercial and industrial growth" },
              { year: "2013-2019", title: "Innovation", projects: 56, desc: "High-rise and heritage projects" },
              { year: "2020-Present", title: "Excellence", projects: 28, desc: "Award-winning modern designs" },
            ].map((era, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:border-[#BFC5CC] transition-colors">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1F86C8] to-[#BFC5CC] flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-white text-xl font-bold">{era.year.split('-')[0]}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{era.title}</h4>
                  <div className="text-2xl font-bold text-[#BFC5CC] mb-2">{era.projects}</div>
                  <p className="text-gray-300 text-sm">{era.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-8 h-0.5 bg-gradient-to-r from-[#1F86C8] via-[#BFC5CC] to-[#1A3E6F] transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-[#1A3E6F] via-[#1F86C8] to-[#1A3E6F] rounded-3xl p-12 text-center shadow-2xl border border-[#BFC5CC]/30">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#1F86C8] to-[#BFC5CC] mb-8 mx-auto">
              <Target className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Vision, Our Engineering
            </h2>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Whether it's a heritage restoration or a modern skyscraper, 
              our team is ready to bring structural excellence to your project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-white text-[#1A3E6F] font-bold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                Request Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                Download Portfolio
              </button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1F86C8]/20 to-[#BFC5CC]/20 flex items-center justify-center mr-4">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white">48-Hour Response</div>
                    <div className="text-sm text-gray-200">Initial project review</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1F86C8]/20 to-[#BFC5CC]/20 flex items-center justify-center mr-4">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Free Assessment</div>
                    <div className="text-sm text-gray-200">Project feasibility study</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1F86C8]/20 to-[#BFC5CC]/20 flex items-center justify-center mr-4">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Expert Team</div>
                    <div className="text-sm text-gray-200">Senior engineers assigned</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
