import { Target, Users, CheckCircle, Award, Zap, Heart } from 'lucide-react'

export const metadata = {
  title: 'Our Mission | iBuildings',
  description: 'iBuildings mission to deliver safe, efficient, and enduring structures through innovative engineering.',
}

export default function MissionPage() {
  const commitments = [
    'Deliver structural solutions that exceed safety and quality standards',
    'Innovate continuously to provide cutting-edge engineering solutions',
    'Maintain highest professional ethics in all engagements',
    'Invest in our team\'s technical development and expertise',
    'Embrace sustainable development in every project',
    'Foster collaborative relationships with clients and stakeholders',
  ]

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500"></div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-sm mb-6 border border-white/20">
              <Target className="w-4 h-4 mr-2" />
              OUR MISSION
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Delivering Engineering <span className="text-purple-300">Excellence</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              To deliver safe, efficient, and enduring structural solutions through innovative engineering, 
              advanced technology, and unwavering commitment to quality.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12 border border-purple-200 mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission Statement</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              iBuildings' mission is to provide comprehensive structural engineering and project management services 
              that create safe, efficient, and enduring structures. We are committed to leveraging innovation, 
              technical expertise, and responsible practices to deliver solutions that exceed client expectations 
              and contribute positively to the built environment.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every project is an opportunity to demonstrate our commitment to excellence, integrity, and 
              sustainable development. We work collaboratively with our clients, partners, and communities 
              to build structures that stand the test of time.
            </p>
          </div>

          {/* Our Commitments */}
          <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 rounded-3xl p-12 text-white mb-16">
            <h2 className="text-3xl font-bold mb-10">Our Commitments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commitments.map((commitment, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-purple-300 flex-shrink-0 mt-1" />
                  <p className="text-purple-100 text-lg">{commitment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Our Mission Matters */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Our Mission Matters</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Award className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Client Trust</h4>
                    <p className="text-gray-600">Our mission-driven approach builds lasting relationships with clients who value quality and reliability</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Zap className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Team Excellence</h4>
                    <p className="text-gray-600">Our commitment to continuous improvement attracts and retains top engineering talent</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Heart className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Positive Impact</h4>
                    <p className="text-gray-600">Our focus on sustainable development ensures we contribute positively to society and environment</p>
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
