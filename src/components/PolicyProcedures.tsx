"use client"

import { CheckCircle, FileText, Shield, Target, Users, Zap } from 'lucide-react'

export default function PolicyProcedures() {
  const policyPoints = [
    'Ensure life safety, serviceability, durability, and resilience',
    'Operate a Quality Management System aligned with ISO 9001 principles',
    'Integrate safety-in-design and risk mitigation in accordance with ISO 45001 principles',
    'Comply with applicable codes including IS, NBC, ACI, ASCE, Eurocodes, and British Standards',
    'Promote constructible and sustainable engineering solutions',
    'Maintain ethical and transparent professional conduct',
    'Commit to continual improvement'
  ]

  const procedures = [
    {
      title: 'First-Principle Analysis',
      description: 'Fundamental engineering analysis based on mechanics and material science',
      icon: <Zap className="w-6 h-6" />,
      steps: ['Load assessment', 'Structural analysis', 'Design verification']
    },
    {
      title: 'Software-Based Verification',
      description: 'Digital validation using advanced engineering software',
      icon: <FileText className="w-6 h-6" />,
      steps: ['3D modeling', 'Finite element analysis', 'Code compliance checks']
    },
    {
      title: 'Design Checking & Approval',
      description: 'Multi-level review process for quality assurance',
      icon: <CheckCircle className="w-6 h-6" />,
      steps: ['Peer review', 'Senior verification', 'Client approval']
    },
    {
      title: 'Risk & Safety Management',
      description: 'Proactive identification and mitigation of risks',
      icon: <Shield className="w-6 h-6" />,
      steps: ['Risk assessment', 'Safety planning', 'Mitigation strategies']
    },
    {
      title: 'Digital Documentation',
      description: 'Controlled and coordinated project documentation',
      icon: <FileText className="w-6 h-6" />,
      steps: ['BIM coordination', 'Document control', 'Version management']
    },
    {
      title: 'Project Management',
      description: 'Coordinated project delivery and control',
      icon: <Target className="w-6 h-6" />,
      steps: ['Schedule management', 'Budget control', 'Stakeholder coordination']
    },
    {
      title: 'Competence Development',
      description: 'Continuous learning and technical governance',
      icon: <Users className="w-6 h-6" />,
      steps: ['Training programs', 'Technical workshops', 'Senior mentorship']
    }
  ]

  return (
    <section className="py-24 bg-white">"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">"
        <div className="max-w-6xl mx-auto">"
          {/* Policy Statement */}
          <div className="mb-20">"
            <div className="text-center mb-12">"
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">"
                Policy Statement
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
                We are committed to providing structural engineering and project management services 
                that meet client requirements, statutory obligations, and international best practices.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">"
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">"
                {policyPoints.map((point, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">"
                      <CheckCircle className="w-4 h-4 text-blue-600" />"
                    </div>
                    <p className="text-gray-700">{point}</p>"
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Procedure Statement */}
          <div>
            <div className="text-center mb-12">"
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">"
                Procedure Statement
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
                Engineering services are delivered through defined procedures ensuring quality, 
                safety, and efficiency in every project.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">"
              {procedures.map((procedure, index) => (
                <div 
                  key={index}
                  className="group relative"
                >
                  <div className="relative bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">"
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">"
                      <div className="text-white">"
                        {procedure.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{procedure.title}</h3>"
                    <p className="text-gray-600 mb-4">{procedure.description}</p>"

                    {/* Steps */}
                    <div className="space-y-2">"
                      {procedure.steps.map((step, i) => (
                        <div key={i} className="flex items-center text-gray-700">"
                          <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>"
                          <span className="text-sm">{step}</span>"
                        </div>
                      ))}
                    </div>

                    {/* Number */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">"
                      {index + 1}
                    </div>
                  </div>

                  {/* Connection Line (for visual flow) */}
                  {index < procedures.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-cyan-300 transform translate-x-full -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Continuous Governance */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">"
              <div className="text-center">"
                <h3 className="text-2xl font-bold mb-4">Continuous Technical Governance</h3>"
                <p className="text-blue-100 max-w-3xl mx-auto">"
                  All engineering deliverables undergo senior-level technical review and approval 
                  to ensure compliance with our quality standards and client requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


