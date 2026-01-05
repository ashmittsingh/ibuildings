'use client'

import { MapPin, Briefcase, GraduationCap, Mail, Phone, Send, Users, Award, TrendingUp, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function JobsPage() {
  const [selectedJob, setSelectedJob] = useState<any | null>(null)
  const [formData, setFormData] = useState<{
    name: string
    email: string
    phone: string
    position: string
    resume: File | null
    message: string
  }>({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null,
    message: ''
  })

  const jobs = [
    {
      id: 1,
      title: 'Structural Engineer',
      department: 'Design & Engineering',
      location: 'Bhiwandi, Maharashtra',
      experience: '3-7 years',
      type: 'Full-time',
      description: 'We are looking for experienced Structural Engineers to design and analyze structures using advanced software and methodologies.',
      responsibilities: [
        'Design and analysis of building structures',
        'Preparation of structural drawings and specifications',
        'FEA modeling and analysis using STAAD Pro / Etabs',
        'Site inspections and quality monitoring',
        'Coordination with architects and contractors',
        'Documentation and report preparation'
      ],
      requirements: [
        'B.Tech/BE in Civil Engineering (Structural)',
        '3-7 years of experience in structural design',
        'Proficiency in STAAD Pro, ETABS, SAP2000',
        'Knowledge of IS codes and design practices',
        'Strong communication skills',
        'Attention to detail'
      ]
    },
    {
      id: 2,
      title: 'Draughtsman',
      department: 'Design',
      location: 'Bhiwandi, Maharashtra',
      experience: '2-5 years',
      type: 'Full-time',
      description: 'Seeking skilled Draughtsmen to create detailed technical drawings for structural and architectural designs.',
      responsibilities: [
        'Preparation of structural and architectural drawings',
        'CAD modeling and drafting',
        'Detailing of reinforcement and construction elements',
        'Coordination with design team',
        'Revisions and modifications as required',
        'Maintenance of drawing standards'
      ],
      requirements: [
        'Diploma in Civil Engineering or equivalent',
        '2-5 years of experience in CAD drafting',
        'Proficiency in AutoCAD, Revit, or similar tools',
        'Knowledge of drawing standards and codes',
        'Attention to detail',
        'Time management skills'
      ]
    },
    {
      id: 3,
      title: 'Project Manager',
      department: 'Project Management',
      location: 'Bhiwandi, Maharashtra',
      experience: '5-10 years',
      type: 'Full-time',
      description: 'Seeking experienced Project Managers to oversee construction and engineering projects from planning to completion.',
      responsibilities: [
        'Project planning and scheduling',
        'Budget management and cost control',
        'Team coordination and supervision',
        'Progress monitoring and reporting',
        'Quality assurance',
        'Stakeholder communication',
        'Risk management'
      ],
      requirements: [
        'B.Tech/BE in Civil Engineering',
        '5-10 years of project management experience',
        'Knowledge of MS Project, Primavera',
        'Strong leadership and communication skills',
        'Experience with construction management',
        'Problem-solving abilities'
      ]
    },
    {
      id: 4,
      title: 'Billing Engineer',
      department: 'Finance & Administration',
      location: 'Bhiwandi, Maharashtra',
      experience: '2-5 years',
      type: 'Full-time',
      description: 'We need a detail-oriented Billing Engineer to manage project billing, invoicing, and financial documentation.',
      responsibilities: [
        'Preparation of project bills and invoices',
        'Contract administration',
        'Claims and variation management',
        'Financial documentation',
        'Payment tracking',
        'Compliance and audit support',
        'Record maintenance'
      ],
      requirements: [
        'B.Tech/BE in Civil Engineering or Diploma',
        '2-5 years of billing and contracts experience',
        'Knowledge of contract management',
        'Proficiency in Excel and accounting software',
        'Attention to detail',
        'Strong organizational skills'
      ]
    },
    {
      id: 5,
      title: 'Site Engineer',
      department: 'Site Execution',
      location: 'Bhiwandi, Maharashtra',
      experience: '2-5 years',
      type: 'Full-time',
      description: 'Seeking Site Engineers to supervise on-site construction activities, ensure quality, and manage site operations.',
      responsibilities: [
        'Daily site supervision and inspections',
        'Quality control and testing',
        'Safety management',
        'Worker coordination',
        'Material management',
        'Progress documentation',
        'Issue resolution'
      ],
      requirements: [
        'B.Tech/BE/Diploma in Civil Engineering',
        '2-5 years of site supervision experience',
        'Knowledge of construction practices',
        'Safety management awareness',
        'Technical competency',
        'Excellent communication skills'
      ]
    },
    {
      id: 6,
      title: 'Planning Engineer',
      department: 'Project Planning',
      location: 'Bhiwandi, Maharashtra',
      experience: '3-7 years',
      type: 'Full-time',
      description: 'We are looking for Planning Engineers to develop detailed project schedules and optimize project execution.',
      responsibilities: [
        'Project schedule development',
        'Critical path analysis',
        'Resource planning and allocation',
        'Milestone tracking',
        'Schedule updates and revisions',
        'Progress analysis',
        'Reporting and presentations'
      ],
      requirements: [
        'B.Tech/BE in Civil Engineering',
        '3-7 years of project planning experience',
        'Proficiency in MS Project, Primavera',
        'Knowledge of CPM methodology',
        'Analytical skills',
        'Software proficiency'
      ]
    }
  ]

  const stats = [
    { icon: <Award className="w-6 h-6" />, value: '6+', label: 'Open Positions' },
    { icon: <Users className="w-6 h-6" />, value: '100+', label: 'Team Members' },
    { icon: <TrendingUp className="w-6 h-6" />, value: '25+', label: 'Years Excellence' },
    { icon: <Briefcase className="w-6 h-6" />, value: '150+', label: 'Projects Delivered' }
  ]

  const handleSelectJob = (job: any) => {
    setSelectedJob(job)
    setFormData({ ...formData, position: job.title })
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, resume: e.target.files?.[0] as File | null })
  }

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.resume) {
      alert('Please fill all required fields')
      return
    }
    alert(`Application submitted for ${formData.position}. We will contact you soon!`)
    setSelectedJob(null)
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      resume: null,
      message: ''
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F7FA]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1A3E6F] via-[#1F86C8] to-[#1A3E6F]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1F86C8] via-[#BFC5CC] to-[#1A3E6F]"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-sm mb-6 border border-white/20">
              <Briefcase className="w-4 h-4 mr-2" />
              CAREERS
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Join Our <span className="text-[#BFC5CC]">Expert Team</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed px-4">
              Be part of a dynamic team delivering excellence in structural engineering and construction management
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-12 md:-mt-16 relative z-20 mb-12 md:mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#F5F7FA] to-white flex items-center justify-center mb-3 md:mb-4 text-[#1F86C8]">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-4xl font-bold text-[#1A3E6F] mb-1 md:mb-2">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-600 font-semibold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="container mx-auto px-4 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3E6F] mb-4">Open Positions</h2>
            <p className="text-base md:text-lg text-gray-600">Explore exciting career opportunities with iBuildings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-pointer"
                onClick={() => handleSelectJob(job)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-[#1A3E6F]">{job.title}</h3>
                  <div className="px-3 py-1 bg-gradient-to-r from-[#F5F7FA] to-white text-[#1F86C8] text-xs font-semibold rounded-full whitespace-nowrap ml-2 border border-[#BFC5CC]">
                    {job.type}
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4">{job.department}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm md:text-base text-gray-700">
                    <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-[#1F86C8] flex-shrink-0" />
                    <span>{job.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm md:text-base text-gray-700">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#1F86C8] flex-shrink-0" />
                    <span>{job.location}</span>
                  </div>
                </div>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] text-white rounded-lg md:rounded-xl font-bold hover:shadow-lg transition-all duration-300 text-sm md:text-base">
                  View Details & Apply
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl my-8">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] text-white p-6 md:p-8 flex justify-between items-start z-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedJob.title}</h2>
                <p className="text-[#BFC5CC] text-sm md:text-base">{selectedJob.department}</p>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-all text-2xl flex-shrink-0 ml-4"
              >
                ✕
              </button>
            </div>

            <div className="p-6 md:p-8">
              {/* Job Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-xl p-4 border border-[#BFC5CC]">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-[#1F86C8]" />
                    <h3 className="font-bold text-[#1A3E6F] text-sm">Experience</h3>
                  </div>
                  <p className="text-gray-700 text-sm">{selectedJob.experience}</p>
                </div>

                <div className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-xl p-4 border border-[#BFC5CC]">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-[#1F86C8]" />
                    <h3 className="font-bold text-[#1A3E6F] text-sm">Location</h3>
                  </div>
                  <p className="text-gray-700 text-sm">{selectedJob.location}</p>
                </div>
              </div>

              {/* About Role */}
              <div className="mb-8 pb-8 border-b border-[#BFC5CC]">
                <h3 className="text-xl md:text-2xl font-bold text-[#1A3E6F] mb-4">About the Role</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">{selectedJob.description}</p>
              </div>

              {/* Responsibilities */}
              <div className="mb-8 pb-8 border-b border-[#BFC5CC]">
                <h3 className="text-xl md:text-2xl font-bold text-[#1A3E6F] mb-4">Key Responsibilities</h3>
                <div className="space-y-3">
                  {selectedJob.responsibilities.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#1F86C8] flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#1A3E6F] mb-4">Requirements</h3>
                <div className="space-y-3">
                  {selectedJob.requirements.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#1F86C8] flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Form */}
              <div className="bg-gradient-to-br from-[#F5F7FA] to-white p-6 md:p-8 rounded-2xl border-2 border-[#BFC5CC]">
                <h3 className="text-xl md:text-2xl font-bold text-[#1A3E6F] mb-6">Apply Now</h3>
                <div className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      className="border-2 border-gray-300 rounded-lg md:rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 bg-white text-sm md:text-base transition-all"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      className="border-2 border-[#BFC5CC] rounded-lg md:rounded-xl px-4 py-3 focus:outline-none focus:border-[#1F86C8] bg-white text-sm md:text-base transition-all"
                    />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    required
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full border-2 border-[#BFC5CC] rounded-lg md:rounded-xl px-4 py-3 focus:outline-none focus:border-[#1F86C8] bg-white text-sm md:text-base transition-all"
                  />
                  <div>
                    <label className="block text-sm font-bold text-[#1A3E6F] mb-2">Upload Resume/CV *</label>
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={handleFileChange}
                      className="w-full border-2 border-[#BFC5CC] rounded-lg md:rounded-xl px-4 py-3 focus:outline-none focus:border-[#1F86C8] bg-white text-sm md:text-base file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#F5F7FA] file:text-[#1F86C8] hover:file:bg-[#BFC5CC] transition-all"
                    />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Tell us why you're a great fit for this role..."
                    rows={4}
                    value={formData.message}
                    onChange={handleFormChange}
                    className="w-full border-2 border-[#BFC5CC] rounded-lg md:rounded-xl px-4 py-3 focus:outline-none focus:border-[#1F86C8] bg-white text-sm md:text-base transition-all resize-none"
                  />
                  <button
                    onClick={handleSubmit}
                    className="w-full px-6 py-4 bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] text-white rounded-lg md:rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    <Send className="w-5 h-5" /> Submit Application
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <div className="bg-gradient-to-br from-[#1A3E6F] via-[#1F86C8] to-[#1A3E6F] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Have Questions?</h2>
            <p className="text-base md:text-xl text-[#BFC5CC] mb-6 md:mb-8">Contact our HR department</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919819533113" 
                className="flex items-center justify-center gap-2 px-6 md:px-8 py-3 bg-white/10 rounded-lg md:rounded-xl hover:bg-white/20 transition-all duration-300 text-white font-semibold border border-white/20 backdrop-blur-sm text-sm md:text-base"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" /> +91 9819533113
              </a>
              <a 
                href="mailto:careers@ibuildings.in" 
                className="flex items-center justify-center gap-2 px-6 md:px-8 py-3 bg-white/10 rounded-lg md:rounded-xl hover:bg-white/20 transition-all duration-300 text-white font-semibold border border-white/20 backdrop-blur-sm text-sm md:text-base"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5" /> careers@ibuildings.in
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}