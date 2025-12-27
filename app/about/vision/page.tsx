import { Eye, Target, Zap, Shield, Globe, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Our Vision | iBuildings',
  description: 'iBuildings vision for becoming India\'s most trusted structural engineering partner.',
}

export default function VisionPage() {
  const visionPillars = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Standards',
      description: 'Setting international benchmarks in structural engineering excellence'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Adopting cutting-edge technologies and methodologies'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety First',
      description: 'Ensuring structural integrity and durability in every project'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Sustainability',
      description: 'Creating environmentally responsible and future-ready structures'
    },
  ]

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500"></div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-sm mb-6 border border-white/20">
              <Eye className="w-4 h-4 mr-2" />
              OUR VISION
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Building India's <span className="text-blue-300">Engineering Future</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              To be India's most trusted and innovative structural engineering partner, 
              setting global standards in construction excellence and sustainable development.
            </p>
          </div>
        </div>
      </div>

      {/* Vision Statement */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-12 border border-blue-200 mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision Statement</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              iBuildings envisions becoming India's most recognized and trusted structural engineering consultancy, 
              distinguished by our unwavering commitment to quality, innovation, and sustainability. We aspire to 
              set the benchmark for excellence in structural design and project management across all sectors.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Through continuous innovation, technical expertise, and ethical practices, we aim to transform 
              the built environment, creating structures that stand as testament to engineering excellence and 
              endure for generations to come.
            </p>
          </div>

          {/* Vision Pillars */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Pillars of Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visionPillars.map((pillar, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mb-6 text-blue-600">
                    {pillar.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Goals */}
          <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-10">Strategic Goals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Target className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Technical Excellence</h4>
                  <p className="text-blue-100">Maintain highest standards in design, analysis, and execution</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Zap className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Innovation Leadership</h4>
                  <p className="text-blue-100">Pioneer new technologies and methodologies in engineering</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Globe className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Global Reach</h4>
                  <p className="text-blue-100">Expand our expertise to international markets</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Sustainable Growth</h4>
                  <p className="text-blue-100">Build environmentally responsible solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
