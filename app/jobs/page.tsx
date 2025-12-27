'use client'

import { MapPin, Briefcase, GraduationCap, Mail, Phone, Send } from 'lucide-react'
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
      salary: '₹5-8 Lac/Annum',
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
      salary: '₹3-5 Lac/Annum',
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
      salary: '₹7-12 Lac/Annum',
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
      salary: '₹3-5 Lac/Annum',
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
      salary: '₹3-5 Lac/Annum',
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
      salary: '₹4-7 Lac/Annum',
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In production, send to email service
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
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1A3E6F] via-[#1F86C8] to-[#1A3E6F] text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-100">
              Be part of a dynamic team delivering excellence in structural engineering and construction management
            </p>
          </div>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-[#1A3E6F] mb-12">Open Positions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-[#F5F7FA] border-2 border-[#BFC5CC] rounded-lg p-8 hover:shadow-lg transition-all cursor-pointer"
              onClick={() => handleSelectJob(job)}
            >
              <h3 className="text-2xl font-bold text-[#1A3E6F] mb-4">{job.title}</h3>
              <div className="space-y-3 mb-6 text-gray-700">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#1F86C8]" />
                  <span>{job.experience}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#1F86C8]" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#1F86C8]" />
                  <span>{job.type}</span>
                </div>
              </div>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] text-white rounded-lg font-bold hover:shadow-md transition-all">
                View & Apply
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <div className="sticky top-0 bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] text-white p-6 flex justify-between items-center">
              <h2 className="text-3xl font-bold">{selectedJob.title}</h2>
              <button
                onClick={() => setSelectedJob(null)}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-all text-2xl"
              >
                ✕
              </button>
            </div>

            <div className="p-8">
              {/* Job Details */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-bold text-[#1A3E6F] mb-2">Experience Required</h3>
                  <p className="text-gray-700 mb-6">{selectedJob.experience}</p>

                  <h3 className="font-bold text-[#1A3E6F] mb-2">Location</h3>
                  <p className="text-gray-700 mb-6">{selectedJob.location}</p>

                  <h3 className="font-bold text-[#1A3E6F] mb-2">Salary</h3>
                  <p className="text-gray-700">{selectedJob.salary}</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#1A3E6F] mb-2">Department</h3>
                  <p className="text-gray-700 mb-6">{selectedJob.department}</p>

                  <h3 className="font-bold text-[#1A3E6F] mb-2">Employment Type</h3>
                  <p className="text-gray-700 mb-6">{selectedJob.type}</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8 pb-8 border-b border-[#BFC5CC]">
                <h3 className="text-2xl font-bold text-[#1A3E6F] mb-4">About the Role</h3>
                <p className="text-gray-700 text-lg mb-6">{selectedJob.description}</p>
              </div>

              {/* Responsibilities */}
              <div className="mb-8 pb-8 border-b border-[#BFC5CC]">
                <h3 className="text-2xl font-bold text-[#1A3E6F] mb-4">Key Responsibilities</h3>
                <ul className="space-y-3">
                  {selectedJob.responsibilities.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#1F86C8] font-bold">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="mb-8 pb-8 border-b border-[#BFC5CC]">
                <h3 className="text-2xl font-bold text-[#1A3E6F] mb-4">Requirements</h3>
                <ul className="space-y-3">
                  {selectedJob.requirements.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#1F86C8] font-bold">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Application Form */}
              <div className="bg-[#F5F7FA] p-8 rounded-lg border-2 border-[#BFC5CC]">
                <h3 className="text-2xl font-bold text-[#1A3E6F] mb-6">Apply Now</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      className="border-2 border-[#BFC5CC] rounded-lg px-4 py-3 focus:outline-none focus:border-[#1F86C8]"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      className="border-2 border-[#BFC5CC] rounded-lg px-4 py-3 focus:outline-none focus:border-[#1F86C8]"
                    />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    required
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full border-2 border-[#BFC5CC] rounded-lg px-4 py-3 focus:outline-none focus:border-[#1F86C8]"
                  />
                  <div>
                    <label className="block text-sm font-bold text-[#1A3E6F] mb-2">Upload Resume/CV *</label>
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={handleFileChange}
                      className="w-full border-2 border-[#BFC5CC] rounded-lg px-4 py-3 focus:outline-none focus:border-[#1F86C8]"
                    />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Tell us why you're a great fit for this role..."
                    rows={4}
                    value={formData.message}
                    onChange={handleFormChange}
                    className="w-full border-2 border-[#BFC5CC] rounded-lg px-4 py-3 focus:outline-none focus:border-[#1F86C8]"
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] text-white rounded-lg font-bold hover:shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" /> Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Info */}
      <div className="bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Have Questions?</h2>
          <p className="text-xl mb-8">Contact our HR department</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919819533113" className="flex items-center justify-center gap-2 px-8 py-3 bg-white/20 rounded-lg hover:bg-white/30 transition-all">
              <Phone className="w-5 h-5" /> +91 9819533113
            </a>
            <a href="mailto:careers@ibuildings.in" className="flex items-center justify-center gap-2 px-8 py-3 bg-white/20 rounded-lg hover:bg-white/30 transition-all">
              <Mail className="w-5 h-5" /> careers@ibuildings.in
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
