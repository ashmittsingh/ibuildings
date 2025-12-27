import { Users, Award, Target, Briefcase } from 'lucide-react'

export const metadata = {
  title: 'Our Teams | iBuildings',
  description: 'Meet the expert teams at iBuildings structural engineering consultancy.',
}

export default function TeamsPage() {
  const teams = [
    {
      name: 'Structural Engineering',
      icon: <Target className="w-8 h-8" />,
      description: 'Specialized in designing safe, efficient, and innovative structures',
      members: [
        'Senior Structural Engineers',
        'Design Engineers',
        'CAD Specialists',
        'BIM Coordinators'
      ]
    },
    {
      name: 'Project Management',
      icon: <Briefcase className="w-8 h-8" />,
      description: 'Expert project managers ensuring timely and successful delivery',
      members: [
        'Senior Project Managers',
        'Site Supervisors',
        'Quality Controllers',
        'Cost Consultants'
      ]
    },
    {
      name: 'Heritage Conservation',
      icon: <Award className="w-8 h-8" />,
      description: 'Specialists in restoration and preservation of historic structures',
      members: [
        'Heritage Engineers',
        'Restoration Experts',
        'Conservation Technicians',
        'Documentation Specialists'
      ]
    },
    {
      name: 'Administration & Support',
      icon: <Users className="w-8 h-8" />,
      description: 'Professional team providing operational and administrative excellence',
      members: [
        'HR Specialists',
        'Finance & Accounts',
        'Office Management',
        'Client Relationship Managers'
      ]
    },
  ]

  const values = [
    {
      title: 'Technical Excellence',
      description: 'Deep expertise in structural engineering and latest technologies'
    },
    {
      title: 'Integrity',
      description: 'Ethical practices and honest communication with all stakeholders'
    },
    {
      title: 'Collaboration',
      description: 'Teamwork and cooperation across all departments and projects'
    },
    {
      title: 'Innovation',
      description: 'Continuous learning and adoption of innovative solutions'
    },
    {
      title: 'Client Focus',
      description: 'Understanding and exceeding client expectations'
    },
    {
      title: 'Sustainability',
      description: 'Commitment to environmentally responsible practices'
    },
  ]

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900 to-teal-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500"></div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-sm mb-6 border border-white/20">
              <Users className="w-4 h-4 mr-2" />
              OUR TEAMS
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Meet Our <span className="text-emerald-300">Expert Teams</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Over 100 skilled professionals dedicated to delivering structural engineering excellence. 
              Our teams bring diverse expertise and collaborative spirit to every project.
            </p>
          </div>
        </div>
      </div>

      {/* Teams Overview */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Our Departments</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Each team is composed of highly qualified professionals with specialized expertise 
            and a shared commitment to excellence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {teams.map((team, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-emerald-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center mb-6 text-emerald-600">
                  {team.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{team.name}</h3>
                <p className="text-gray-600 mb-6">{team.description}</p>
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm font-semibold text-gray-700 mb-4">Key Roles:</p>
                  <ul className="space-y-2">
                    {team.members.map((member, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{member}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Team Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            {[
              { value: '100+', label: 'Expert Professionals' },
              { value: '25+', label: 'Years Experience' },
              { value: '150+', label: 'Projects Delivered' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 text-center border border-emerald-200"
              >
                <div className="text-4xl font-bold text-emerald-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Team Values */}
          <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-900 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-12 text-center">What Drives Our Teams</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                  <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-emerald-100">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Culture Statement */}
          <div className="mt-20 bg-white rounded-3xl p-12 shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Team Culture</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                At iBuildings, we believe that exceptional engineering is the result of exceptional people 
                working together with purpose and passion. Our teams are built on foundations of mutual respect, 
                continuous learning, and shared commitment to client success.
              </p>
              <p>
                We invest in our people through regular training, mentorship programs, and career development 
                opportunities. This commitment to professional excellence enables us to deliver world-class 
                engineering solutions that transform projects into lasting legacies.
              </p>
              <p>
                Join our team and be part of a dynamic, growing organization where your expertise contributes 
                to building India's structural future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
