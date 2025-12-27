import * as React from 'react'

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Construction Management',
      description: 'End-to-end project oversight ensuring quality, timeline, and budget adherence',
      icon: '???',
      features: ['Project Planning', 'Quality Control', 'Timeline Management', 'Cost Optimization']
    },
    {
      id: 2,
      title: 'Structural Engineering',
      description: 'Advanced structural design and analysis for safe, durable buildings',
      icon: '??',
      features: ['Seismic Design', 'Steel Structures', 'Concrete Design', 'Foundation Engineering']
    },
    {
      id: 3,
      title: 'Architectural Design',
      description: 'Innovative and sustainable architectural solutions',
      icon: '???',
      features: ['3D Modeling', 'Sustainable Design', 'Space Planning', 'Concept Development']
    },
    {
      id: 4,
      title: 'MEP Services',
      description: 'Mechanical, Electrical, and Plumbing system design and installation',
      icon: '?',
      features: ['HVAC Design', 'Electrical Systems', 'Plumbing Design', 'Fire Safety']
    },
    {
      id: 5,
      title: 'Interior Design',
      description: 'Functional and aesthetic interior spaces',
      icon: '??',
      features: ['Space Optimization', 'Material Selection', 'Lighting Design', 'Custom Furniture']
    },
    {
      id: 6,
      title: 'Project Consulting',
      description: 'Expert guidance for construction projects',
      icon: '??',
      features: ['Feasibility Studies', 'Vendor Management', 'Risk Assessment', 'Regulatory Compliance']
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction and engineering solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-200 group"
            >
              {/* Service Icon */}
              <div className="text-5xl mb-6">{service.icon}</div>

              {/* Service Title */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-600 transition-colors">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 mb-6">{service.description}</p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <button className="mt-8 w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center group/btn">
                Learn More
                <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">?</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
