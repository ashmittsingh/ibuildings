import { 
  Calendar, Target, Users, BarChart, Shield, Zap,
  CheckCircle, FileText, Globe, Building2
} from 'lucide-react'

export const metadata = {
  title: 'Project Management | Integrated Delivery | Buildings',
  description: 'Coordinated project management integrating design, construction, risk management, and quality control.',
}

export default function ProjectManagementPage() {
  const phases = [
    {
      title: 'Initiation',
      description: 'Project definition and feasibility studies',
      icon: <Target className="w-8 h-8" />,
      deliverables: ['Project charter', 'Feasibility report', 'Stakeholder analysis']
    },
    {
      title: 'Planning',
      description: 'Detailed planning and resource allocation',
      icon: <Calendar className="w-8 h-8" />,
      deliverables: ['Project plan', 'Schedule', 'Budget', 'Risk register']
    },
    {
      title: 'Execution',
      description: 'Coordination and implementation',
      icon: <Zap className="w-8 h-8" />,
      deliverables: ['Progress reports', 'Quality checks', 'Stakeholder meetings']
    },
    {
      title: 'Monitoring',
      description: 'Performance tracking and control',
      icon: <BarChart className="w-8 h-8" />,
      deliverables: ['KPIs tracking', 'Variance analysis', 'Corrective actions']
    },
    {
      title: 'Closure',
      description: 'Project completion and handover',
      icon: <CheckCircle className="w-8 h-8" />,
      deliverables: ['Final reports', 'Lessons learned', 'Client sign-off']
    }
  ]

  const benefits = [
    { label: 'Cost Savings', value: '15-25%' },
    { label: 'Time Reduction', value: '20-30%' },
    { label: 'Risk Mitigation', value: 'Enhanced' },
    { label: 'Quality Improvement', value: 'ISO 9001' },
    { label: 'Stakeholder Satisfaction', value: '95%+' },
    { label: 'Safety Performance', value: 'Zero incidents' }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-blue-900 via-gray-900 to-blue-950 text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              Project Management
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Integrated design, constructability, risk management, and project controls 
              into a unified delivery approach.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Phases */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Project Management Phases
            </h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 transform md:-translate-x-1/2"></div>
              
              {phases.map((phase, index) => (
                <div 
                  key={index}
                  className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 transform md:-translate-x-1/2 -translate-y-1/2"></div>
                  
                  <div className={`${index % 2 === 0 ? 'ml-16 md:ml-0 md:mr-auto md:w-5/12' : 'ml-16 md:ml-auto md:w-5/12'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mr-4">
                          <div className="text-white">
                            {phase.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                          <p className="text-gray-600">{phase.description}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">Key Deliverables:</h4>
                        {phase.deliverables.map((deliverable, i) => (
                          <div key={i} className="flex items-center text-gray-700">
                            <FileText className="w-4 h-4 text-blue-500 mr-3" />
                            <span>{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Project Management Benefits
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">{benefit.value}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg">
              Discuss your project management needs with our experts
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
