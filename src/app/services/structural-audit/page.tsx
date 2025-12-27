import { Shield, CheckCircle, AlertTriangle, Building, FileCheck } from 'lucide-react'
import CTASection from '@/components/CTASection'

export default function StructuralAuditPage() {
  const services = [
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: 'Structural Assessment',
      description: 'Understanding existing framing system and load patterns'
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Strength Evaluation',
      description: 'Chemical analysis, NDT, and destructive tests as required'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Performance Analysis',
      description: 'Durability requirements and expected building performance'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Retrofit Solutions',
      description: 'Repair methodology and retrofitting strategies'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Documentation',
      description: 'Reports, BOQ, specifications, and methodology'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Supervision',
      description: 'Contractor supervision and bill certification'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-cyan-900 to-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Structural Audit, Repair & Retrofitting
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Empaneled structural engineers for comprehensive building assessment, rehabilitation, and seismic retrofitting services
          </p>
          
          {/* Municipal Empanelment Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            {['MCGM', 'TMC', 'KDMC', 'MBMC', 'VVMC', 'BNCMC'].map((municipality) => (
              <span key={municipality} className="px-4 py-2 bg-white/20 rounded-full text-sm">
                {municipality} Empaneled
              </span>
            ))}
          </div>

          <div className="bg-white/10 p-6 rounded-xl max-w-3xl">
            <h3 className="text-2xl font-bold mb-4">SEO Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Structural Audit',
                'Structural Auditor', 
                'Repair Consultancy',
                'ND Testing',
                'Empaneled Engineer',
                'Registered Structural Engineer',
                'Heritage Conservation',
                'Seismic Retrofitting',
                'Structural Strengthening'
              ].map((keyword) => (
                <span key={keyword} className="px-3 py-1 bg-cyan-700/50 rounded-full text-sm">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Service Process</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-cyan-600">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="mt-4 text-cyan-600 font-bold">
                  Step {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Examples */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Mumbai Projects Portfolio</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Heritage Building Audit', location: 'South Mumbai', year: '2022' },
              { name: 'Seismic Retrofitting', location: 'Andheri', year: '2021' },
              { name: 'Structural Strengthening', location: 'Bandra', year: '2023' },
              { name: 'NDT Assessment', location: 'Thane', year: '2022' },
              { name: 'Repair Consultancy', location: 'Navi Mumbai', year: '2021' },
              { name: 'Stability Certificate', location: 'Mumbai Central', year: '2023' }
            ].map((project, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold mb-2">{project.name}</h4>
                <div className="text-gray-600 mb-2">📍 {project.location}</div>
                <div className="text-gray-500 text-sm">Completed: {project.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}