"use client"

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Building, MapPin, Calendar } from 'lucide-react'

const ProjectsShowcase = () => {
  const [activeFilter, setActiveFilter] = React.useState('all')

  const projects = [
    {
      id: 1,
      title: 'Commercial Complex',
      category: 'commercial',
      location: 'Mumbai, India',
      year: '2023',
      image: '/images/projects/pro1.png',
      description: '45-story commercial tower with sustainable design',
    },
    {
      id: 2,
      title: 'Residential Tower',
      category: 'residential',
      location: 'Delhi, India',
      year: '2022',
      image: '/images/projects/pro2.png',
      description: 'Luxury residential complex with modern amenities',
    },
    {
      id: 3,
      title: 'Hospital Building',
      category: 'healthcare',
      location: 'Bangalore, India',
      year: '2023',
      image: '/images/projects/pro3.png',
      description: 'State-of-the-art healthcare facility',
    },
    {
      id: 4,
      title: 'Educational Campus',
      category: 'education',
      location: 'Chennai, India',
      year: '2021',
      image: '/images/projects/pro4.png',
      description: 'Sustainable campus design for university',
    },
    {
      id: 5,
      title: 'Industrial Plant',
      category: 'industrial',
      location: 'Ahmedabad, India',
      year: '2022',
      image: '/images/projects/pro1.png',
      description: 'Manufacturing facility with optimized layout',
    },
    {
      id: 6,
      title: 'Mixed-Use Development',
      category: 'commercial',
      location: 'Pune, India',
      year: '2023',
      image: '/images/projects/pro2.png',
      description: 'Integrated residential and commercial spaces',
    },
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'commercial', label: 'Commercial' },
    { key: 'residential', label: 'Residential' },
    { key: 'healthcare', label: 'Healthcare' },
    { key: 'education', label: 'Education' },
    { key: 'industrial', label: 'Industrial' },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of innovative construction and engineering projects across India
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-2xl overflow-hidden group hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-cyan-900/20 to-blue-900/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="px-3 py-1 bg-cyan-900/30 text-cyan-300 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-400 mb-6">{project.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Completed: {project.year}</span>
                  </div>
                </div>

                <button className="mt-6 w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-800 transition-all flex items-center justify-center">
                  View Details
                  <ExternalLink className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-3 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all"
          >
            View All Projects
            <ExternalLink className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsShowcase