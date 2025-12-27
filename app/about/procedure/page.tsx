import { Zap, ClipboardCheck, Users, Shield, CheckCircle, FileText } from 'lucide-react'

export const metadata = {
  title: 'Our Procedures | iBuildings',
  description: 'iBuildings engineering procedures for quality assurance and project delivery.',
}

export default function ProcedurePage() {
  const procedures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Project Initiation',
      steps: ['Client briefing', 'Scope definition', 'Resource allocation', 'Timeline establishment']
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: '3D Modeling & Analysis',
      steps: ['3D structural modeling', 'Finite element analysis', 'Code compliance checks', 'Optimization']
    },
    {
      icon: <CheckCircle className="w-6 h-4" />,
      title: 'Design Review',
      steps: ['Peer review', 'Senior engineer verification', 'Client approval', 'Design finalization']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Risk Management',
      steps: ['Risk identification', 'Safety planning', 'Mitigation strategies', 'Contingency plans']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Coordination',
      steps: ['BIM coordination', 'Interdisciplinary review', 'Stakeholder communication', 'Issue resolution']
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: 'Documentation',
      steps: ['Design calculations', 'Technical drawings', 'Specifications', 'Quality reports']
    },
  ]

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-cyan-900 to-blue-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500"></div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-sm mb-6 border border-white/20">
              <Zap className="w-4 h-4 mr-2" />
              OUR PROCEDURES
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Engineering <span className="text-cyan-300">Excellence</span> Through Process
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Systematic procedures designed to ensure quality, safety, and innovation 
              in every structural engineering project.
            </p>
          </div>
        </div>
      </div>

      {/* Our Procedures */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Key Engineering Procedures</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Our structured approach ensures that every project meets the highest standards 
            of engineering excellence, safety, and client satisfaction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {procedures.map((proc, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-cyan-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center mb-6 text-cyan-600">
                  {proc.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{proc.title}</h3>
                <ul className="space-y-2">
                  {proc.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quality Assurance */}
          <div className="bg-gradient-to-r from-cyan-900 via-blue-900 to-cyan-900 rounded-3xl p-12 text-white mb-16">
            <h2 className="text-3xl font-bold mb-10">Quality Assurance & Control</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Design Verification</h4>
                  <p className="text-cyan-100">Multiple levels of review to ensure technical accuracy</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Code Compliance</h4>
                  <p className="text-cyan-100">Strict adherence to IS codes and international standards</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Team Coordination</h4>
                  <p className="text-cyan-100">Integrated approach across all disciplines</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Zap className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Continuous Improvement</h4>
                  <p className="text-cyan-100">Regular review and enhancement of processes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Safety & Risk Management */}
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Safety & Risk Management</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Shield className="w-8 h-8 text-cyan-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Risk Identification</h4>
                  <p className="text-gray-600">Proactive identification of potential structural and project risks</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-cyan-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Safety Planning</h4>
                  <p className="text-gray-600">Comprehensive safety protocols for construction and operation</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Zap className="w-8 h-8 text-cyan-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Mitigation Strategies</h4>
                  <p className="text-gray-600">Detailed plans to minimize identified risks and ensure project success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
