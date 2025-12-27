import Image from 'next/image'
import { Metadata } from 'next'
import { Building2, Trophy, Target, Award, Star, Filter, MapPin, Clock, MapPinIcon, Users, Zap, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Projects | iBuildings',
  description: 'Explore our engineering portfolio - residential, commercial, industrial, and heritage projects across India and internationally.',
}

export default function ProjectsPage() {
  const projectStats = [
    { icon: <Building2 className="w-6 h-6" />, value: "150+", label: "Projects Completed", color: "text-blue-300" },
    { icon: <Trophy className="w-6 h-6" />, value: "₹500Cr+", label: "Project Value", color: "text-violet-300" },
    { icon: <Award className="w-6 h-6" />, value: "25+", label: "Years Experience", color: "text-indigo-300" },
    { icon: <Star className="w-6 h-6" />, value: "98%", label: "Client Satisfaction", color: "text-purple-300" },
  ]

  const featuredProjects = [
    {
      id: 1,
      name: "Ethiopia Commercial Complex",
      location: "Ethiopia",
      category: "Commercial",
      image: "/images/projects/Project Photos/Ethiopia/Came_04.png",
      description: "Multi-storey commercial complex with advanced structural design featuring innovative load distribution systems and seismic resistance.",
      highlights: ["Advanced Seismic Design", "Commercial Complex", "International Standards"],
      year: 2022,
      status: "Completed",
    },
    {
      id: 2,
      name: "Hubtown Residential Development",
      location: "Mehsana",
      category: "Residential",
      image: "/images/projects/Project Photos/Hubtown/Mehsana/main.jpg",
      description: "Large-scale residential township with mixed-use development. Engineered for optimal space utilization and residential comfort.",
      highlights: ["Residential", "Structural Optimization", "Mixed-Use Development"],
      year: 2020,
      status: "Completed",
    },
    {
      id: 3,
      name: "Hotel Golden Nest",
      location: "Lonavala",
      category: "Commercial",
      image: "/images/projects/Project Photos/Hotel Golden Nest/main.jpg",
      description: "Luxury hospitality project with unique architectural requirements. Engineered for aesthetic appeal and structural integrity.",
      highlights: ["Hospitality", "Complex Geometry", "Premium Construction"],
      year: 2021,
      status: "Completed",
    },
    {
      id: 4,
      name: "Landmark Tower",
      location: "Mumbai",
      category: "Residential",
      image: "/images/projects/Project Photos/Landmark/main.jpg",
      description: "High-rise residential tower with cutting-edge structural systems. Advanced foundation design for urban location.",
      highlights: ["High-Rise", "Urban Engineering", "Premium Residences"],
      year: 2019,
      status: "Completed",
    },
    {
      id: 5,
      name: "GCC School Campus",
      location: "Lonavala",
      category: "Institutional",
      image: "/images/projects/Project Photos/GCC School/main.jpg",
      description: "Educational institutional building with multi-functional spaces. Designed for safety, durability, and functional efficiency.",
      highlights: ["Educational", "Institutional", "Multi-Functional Spaces"],
      year: 2018,
      status: "Completed",
    },
    {
      id: 6,
      name: "Ismail Building Retrofit",
      location: "Mumbai",
      category: "Heritage",
      image: "/images/projects/Project Photos/Ismail Building/main.jpg",
      description: "Historic building restoration and structural upgrade. Preserved heritage while meeting modern safety standards.",
      highlights: ["Heritage Conservation", "Structural Retrofit", "Historic Preservation"],
      year: 2020,
      status: "Completed",
    },
    {
      id: 7,
      name: "Bakul Lonavala Project",
      location: "Lonavala",
      category: "Residential",
      image: "/images/projects/Project Photos/Bakul Lonavala/main.jpg",
      description: "Premium residential development in scenic hill location. Engineered for natural integration with landscape.",
      highlights: ["Residential", "Hill Station", "Scenic Design"],
      year: 2021,
      status: "Completed",
    },
    {
      id: 8,
      name: "Corona Project",
      location: "Pan-India",
      category: "Commercial",
      image: "/images/projects/Project Photos/Corona/main.jpg",
      description: "Multi-location commercial project executed across various Indian cities with consistent quality and standards.",
      highlights: ["Commercial", "Multi-Location", "Pan-India Execution"],
      year: 2019,
      status: "Completed",
    },
    {
      id: 9,
      name: "MSN Lab Complex",
      location: "Bangalore",
      category: "Industrial",
      image: "/images/projects/Project Photos/MSN Lab/main.jpg",
      description: "Advanced laboratory and research facility with specialized structural requirements for scientific equipment.",
      highlights: ["Industrial", "Laboratory", "Specialized Systems"],
      year: 2022,
      status: "Completed",
    },
  ]

  const projectCategories = [
    { name: "All Projects", active: true, color: "from-blue-600 to-violet-600" },
    { name: "Residential", color: "from-blue-700 to-blue-900" },
    { name: "Commercial", color: "from-indigo-700 to-indigo-900" },
    { name: "Industrial", color: "from-violet-700 to-violet-900" },
    { name: "Heritage", color: "from-purple-700 to-purple-900" },
  ]

  const projectLocations = [
    { location: "Lonavala", count: 5, color: "border-blue-500/30" },
    { location: "Mumbai", count: 4, color: "border-indigo-500/30" },
    { location: "Bangalore", count: 3, color: "border-violet-500/30" },
    { location: "Ethiopia", count: 2, color: "border-purple-500/30" },
    { location: "Pan-India", count: 2, color: "border-cyan-500/30" },
  ]

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500"></div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-800/20 to-violet-800/20 text-blue-200 font-semibold text-sm mb-6 border border-blue-700/30">
              <Trophy className="w-4 h-4 mr-2 text-violet-300" />
              PORTFOLIO SHOWCASE
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-playfair tracking-tight text-white">
              Engineering <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">Masterpieces</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Showcasing 25+ years of structural engineering excellence across diverse sectors, 
              from heritage conservation to modern skyscrapers.
            </p>
            
            {/* Stats Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12">
              {projectStats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-700/50 hover:border-blue-500/50 transition-colors hover:-translate-y-1">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-900/30 to-violet-900/30 text-blue-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Filter Section */}
      <div className="container mx-auto px-4 py-12 -mt-10 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center">
                  <Filter className="w-6 h-6 text-blue-700 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Project Categories</h2>
                </div>
                <p className="text-gray-600 text-sm mt-2">Filter by project type</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">Latest projects first</span>
                </div>
              </div>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-4">
              {projectCategories.map((category, index) => (
                <button
                  key={index}
                  className={`group flex items-center px-6 py-3 rounded-full border transition-all ${category.active 
                    ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg` 
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                  }`}
                >
                  <span className="font-semibold">{category.name}</span>
                  <span className={`ml-3 text-xs px-2 py-1 rounded-full ${category.active 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-100 text-gray-700'
                  }`}>
                    {(category as any).count || ''}
                  </span>
                  {category.active && (
                    <Target className="w-4 h-4 ml-2 opacity-80" />
                  )}
                </button>
              ))}
            </div>

            {/* Locations Grid */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-violet-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Projects by Location</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {projectLocations.map((loc, index) => (
                  <div key={index} className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 text-center border ${loc.color} hover:shadow-md transition-all`}>
                    <div className="text-lg font-bold text-gray-900 mb-1">{loc.location}</div>
                    <div className="text-sm text-gray-600">{loc.count} Projects</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600">Showcasing our recent structural engineering achievements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="group h-full flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                  <div className="text-center pt-24 text-white z-20 relative">
                    <Building2 className="w-16 h-16 mx-auto opacity-50" />
                    <p className="mt-4 text-sm font-semibold">Professional Project Photography</p>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Category Badge */}
                  <div className="inline-flex mb-4 w-fit">
                    <span className={`px-3 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r ${
                      project.category === 'Commercial' ? 'from-blue-600 to-blue-700' :
                      project.category === 'Residential' ? 'from-indigo-600 to-indigo-700' :
                      project.category === 'Industrial' ? 'from-violet-600 to-violet-700' :
                      'from-purple-600 to-purple-700'
                    }`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Project Name */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {project.name}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPinIcon className="w-4 h-4 mr-2 text-violet-600" />
                    <span className="text-sm">{project.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6 space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 mr-2"></div>
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer Info */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div>
                      <p className="text-xs text-gray-500">Completed</p>
                      <p className="text-sm font-bold text-gray-900">{project.year}</p>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-bold rounded-lg hover:from-blue-700 hover:to-violet-700 transition-all">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Timeline Section */}
      <div className="bg-gradient-to-br from-gray-900 to-blue-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Project Timeline</h2>
            <p className="text-lg text-gray-300">
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
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 text-center hover:border-blue-500/50 transition-colors">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${
                    index === 0 ? 'from-blue-600 to-blue-700' :
                    index === 1 ? 'from-indigo-600 to-indigo-700' :
                    index === 2 ? 'from-violet-600 to-violet-700' :
                    'from-purple-600 to-purple-700'
                  } flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <span className="text-white text-xl font-bold">{era.year.split('-')[0]}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{era.title}</h4>
                  <div className="text-2xl font-bold text-blue-300 mb-2">{era.projects}</div>
                  <p className="text-gray-400 text-sm">{era.desc}</p>
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
              Your Vision, Our Engineering
            </h2>
            <p className="text-xl text-blue-200 mb-8 leading-relaxed">
              Whether it's a heritage restoration or a modern skyscraper, 
              our team is ready to bring structural excellence to your project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-violet-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                Request Consultation
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all">
                Download Portfolio
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center mr-4">
                    <Clock className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <div className="font-bold text-white">48-Hour Response</div>
                    <div className="text-sm text-blue-300">Initial project review</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center mr-4">
                    <Award className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Free Assessment</div>
                    <div className="text-sm text-blue-300">Project feasibility study</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center mr-4">
                    <Star className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Expert Team</div>
                    <div className="text-sm text-blue-300">Senior engineers assigned</div>
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