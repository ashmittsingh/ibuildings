"use client"

import { CheckCircle, Cpu, FileCheck, Shield, Users, Zap } from 'lucide-react'

export default function EngineeringServices() {
  const structuralServices = [
    {
      title: 'First-Principle Design',
      description: 'Engineering solutions based on fundamental mechanics and material science principles',
      icon: <Cpu className="w-6 h-6" />,
      features: ['Fundamental mechanics analysis', 'Material behavior studies', 'Load path optimization']
    },
    {
      title: 'Code-Compliant Design',
      description: 'Adherence to IS, NBC, ACI, ASCE, Eurocodes, and British Standards',
      icon: <FileCheck className="w-6 h-6" />,
      features: ['Multi-code compliance', 'International standards', 'Local statutory requirements']
    },
    {
      title: 'Safe & Buildable',
      description: 'Life safety focused designs with practical construction considerations',
      icon: <Shield className="w-6 h-6" />,
      features: ['Safety-in-design approach', 'Constructability reviews', 'Risk mitigation']
    },
    {
      title: 'Responsible Engineering',
      description: 'Sustainable and durable solutions with long-term performance',
      icon: <Users className="w-6 h-6" />,
      features: ['Sustainable practices', 'Durability analysis', 'Lifecycle considerations']
    }
  ]

  const projectManagementServices = [
    'Integrated design & constructability',
    'Risk management & project controls',
    'Digital engineering & automation',
    'Client & consultant coordination',
    'Quality management systems',
    'Timeline & budget management'
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">"
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">"
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">"
            Engineering Services
          </h2>
          <p className="text-xl text-gray-600">"
            Combining technical excellence with practical project delivery
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">"
          {/* Structural Engineering */}
          <div>
            <div className="flex items-center mb-8">"
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mr-4">"
                <Zap className="w-6 h-6 text-white" />"
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Structural Engineering</h3>"
                <p className="text-gray-600">With Practical Precision</p>"
              </div>
            </div>

            <div className="space-y-6">"
              {structuralServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">"
                      <div className="text-blue-600">"
                        {service.icon}
                      </div>
                    </div>
                    <div className="flex-1">"
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h4>"
                      <p className="text-gray-600 mb-4">{service.description}</p>"
                      <div className="space-y-2">"
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-gray-700">"
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />"
                            <span className="text-sm">{feature}</span>"
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Management */}
          <div>
            <div className="flex items-center mb-8">"
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mr-4">"
                <Users className="w-6 h-6 text-white" />"
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Project Management</h3>"
                <p className="text-gray-600">Unified Delivery Approach</p>"
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">"
              <h4 className="text-xl font-bold text-gray-900 mb-6">Integrated Services</h4>"
              
              <div className="space-y-4">"
                {projectManagementServices.map((service, index) => (
                  <div 
                    key={index}
                    className="flex items-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4">"
                      <CheckCircle className="w-4 h-4 text-white" />"
                    </div>
                    <span className="font-medium text-gray-800">{service}</span>"
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-blue-200">"
                <h5 className="text-lg font-bold text-gray-900 mb-4">Key Benefits</h5>"
                <div className="grid grid-cols-2 gap-4">"
                  {[
                    { label: 'Cost Savings', value: '15-25%' },
                    { label: 'Time Reduction', value: '20-30%' },
                    { label: 'Risk Mitigation', value: 'Improved' },
                    { label: 'Quality', value: 'ISO 9001' }
                  ].map((benefit, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 text-center">"
                      <div className="text-2xl font-bold text-blue-600">{benefit.value}</div>"
                      <div className="text-sm text-gray-600">{benefit.label}</div>"
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



