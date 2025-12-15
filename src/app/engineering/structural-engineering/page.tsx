import { 
  Calculator, Cpu, FileCheck, Shield, Zap, Target, 
  Building2, CheckCircle, Users, Globe
} from 'lucide-react'

export const metadata = {
  title: 'Structural Engineering | First-Principle Design | Buildings',
  description: 'Code-compliant structural engineering with practical precision, safety focus, and buildable solutions.',
}

export default function StructuralEngineeringPage() {
  const services = [
    {
      title: 'First-Principle Design',
      description: 'Engineering based on fundamental mechanics and material behavior',
      icon: <Calculator className="w-8 h-8" />,
      features: [
        'Load path optimization',
        'Material science application',
        'Structural system selection'
      ]
    },
    {
      title: 'Code Compliance',
      description: 'Adherence to IS, NBC, ACI, ASCE, Eurocodes, British Standards',
      icon: <FileCheck className="w-8 h-8" />,
      features: [
        'Multi-code analysis',
        'Local statutory compliance',
        'International standards'
      ]
    },
    {
      title: 'Safety Focus',
      description: 'Life safety as paramount consideration in all designs',
      icon: <Shield className="w-8 h-8" />,
      features: [
        'Seismic design',
        'Wind engineering',
        'Progressive collapse prevention'
      ]
    },
    {
      title: 'Buildable Solutions',
      description: 'Practical designs considering construction methodologies',
      icon: <Building2 className="w-8 h-8" />,
      features: [
        'Constructability reviews',
        'Material optimization',
        'Construction sequencing'
      ]
    }
  ]

  const methodologies = [
    'Fundamental mechanics analysis',
    'Advanced software verification (ETABS, STAAD, SAFE)',
    'Finite element analysis',
    'Dynamic analysis for seismic and wind',
    'Foundation and geotechnical engineering',
    'Structural health monitoring',
    'Retrofitting and strengthening'
  ]

  return (
    <main className="min-h-screen bg-white">"
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-blue-900 via-gray-900 to-blue-950 text-white py-24">"
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">"
          <div className="max-w-4xl mx-auto text-center">"
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">"
              Structural Engineering
            </h1>
            <p className="text-xl text-gray-300 mb-8">"
              With Practical Precision: First-Principle Design | Code-Compliant | Safe | Buildable | Responsible
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">"
        <div className="max-w-6xl mx-auto">"
          {/* Services */}
          <div className="mb-20">"
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">"
              Our Engineering Approach
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">"
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-shadow"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                    <div className="text-white">"
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>"
                  <p className="text-gray-600 mb-6">{service.description}</p>"
                  
                  <div className="space-y-3">"
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center">"
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />"
                        <span className="text-gray-700">{feature}</span>"
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Methodologies */}
          <div className="mb-20">"
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">"
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">"
                Engineering Methodologies
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">"
                {methodologies.map((method, index) => (
                  <div 
                    key={index}
                    className="flex items-center bg-white rounded-lg p-4 shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4">"
                      <Target className="w-4 h-4 text-blue-600" />"
                    </div>
                    <span className="font-medium text-gray-800">{method}</span>"
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">"
            <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg">"
              Contact us for your structural engineering requirements
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}




