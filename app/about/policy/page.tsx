import { FileText, CheckCircle, Shield, Target, Users, Zap } from 'lucide-react'

export const metadata = {
  title: 'Quality Policy | iBuildings',
  description: 'iBuildings quality policy and commitment to excellence in structural engineering.',
}

export default function PolicyPage() {
  const policyPoints = [
    'Compliance with Indian Standards (IS codes) and international best practices',
    'Adherence to applicable statutory and regulatory requirements',
    'Continuous improvement in processes and procedures',
    'Investment in latest technology and skilled manpower',
    'Prevention of pollution and environmental protection',
    'Regular training and development of personnel',
    'Client satisfaction through timely delivery and quality assurance',
    'Risk management and safety protocols',
  ]

  const principles = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety & Integrity',
      description: 'Structural safety and professional integrity are non-negotiable'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Quality Excellence',
      description: 'Maintaining highest standards in design, analysis, and documentation'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client Focus',
      description: 'Understanding and exceeding client requirements and expectations'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Continuous Innovation',
      description: 'Adopting modern tools and methodologies for better solutions'
    },
  ]

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500"></div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-sm mb-6 border border-white/20">
              <FileText className="w-4 h-4 mr-2" />
              QUALITY POLICY
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Our Quality <span className="text-blue-300">Policy</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Committed to delivering structural engineering services that meet client requirements, 
              statutory obligations, and international best practices.
            </p>
          </div>
        </div>
      </div>

      {/* Policy Statement */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12 border border-slate-200 mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Quality Policy Statement</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              iBuildings is committed to providing structural engineering and project management services 
              that consistently meet or exceed client requirements and expectations. We achieve this through:
            </p>
            <ul className="space-y-3">
              {policyPoints.map((point, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Principles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-slate-100 flex items-center justify-center mb-6 text-blue-600">
                    {principle.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation */}
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-10">Implementation & Review</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Target className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Measurable Objectives</h4>
                  <p className="text-slate-200">Setting clear quality objectives aligned with strategic goals</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Team Engagement</h4>
                  <p className="text-slate-200">Ensuring all team members understand and uphold quality standards</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Regular Audits</h4>
                  <p className="text-slate-200">Conducting regular audits and reviews of quality systems</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Zap className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Continuous Improvement</h4>
                  <p className="text-slate-200">Continuously improving processes based on feedback and metrics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
