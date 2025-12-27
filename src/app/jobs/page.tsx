"use client"

import { useState } from 'react'
import { 
  Briefcase, MapPin, Clock, 
  CheckCircle, Upload, Building2, Search, X
} from 'lucide-react'

interface Job {
  id: number
  title: string
  type: string
  location: string
  experience: string
  description: string
  responsibilities: string[]
  requirements: string[]
  postedDate: string
  deadline: string
}

const jobs: Job[] = [
  {
    id: 1,
    title: 'Structural Engineer',
    type: 'Full-time',
    location: 'Mumbai, Maharashtra',
    experience: '3-5 years',
    description: 'We are looking for a skilled Structural Engineer to design and analyze various structural projects.',
    responsibilities: [
      'Structural design and analysis using software like STAAD Pro, ETABS',
      'Preparation of structural drawings and calculations',
      'Site inspections and quality control',
      'Client coordination and project management'
    ],
    requirements: [
      'B.E./B.Tech in Civil Engineering',
      'Knowledge of IS codes, NBC, and international standards',
      'Experience in RCC and steel structure design',
      'Proficiency in AutoCAD and structural analysis software'
    ],
    postedDate: '2024-12-20',
    deadline: '2025-01-20'
  },
  {
    id: 2,
    title: 'Draughtsman',
    type: 'Full-time',
    location: 'Bhiwandi, Maharashtra',
    experience: '2-4 years',
    description: 'Experienced Draughtsman needed for preparation of detailed structural drawings.',
    responsibilities: [
      'Prepare detailed structural drawings',
      'Coordinate with engineers for design changes',
      'Maintain drawing records and revisions',
      'Assist in quantity take-off'
    ],
    requirements: [
      'Diploma in Civil Engineering or ITI Draughtsman',
      'Proficiency in AutoCAD 2D & 3D',
      'Knowledge of structural detailing',
      'Good understanding of engineering drawings'
    ],
    postedDate: '2024-12-22',
    deadline: '2025-01-22'
  },
  {
    id: 3,
    title: 'Project Manager',
    type: 'Full-time',
    location: 'Delhi/NCR',
    experience: '8-12 years',
    description: 'Senior Project Manager for large-scale construction projects.',
    responsibilities: [
      'Project planning and scheduling',
      'Budget control and cost management',
      'Client and contractor coordination',
      'Quality assurance and safety management'
    ],
    requirements: [
      'B.E./B.Tech Civil with PMP certification',
      'Experience in managing large-scale projects',
      'Strong leadership and communication skills'
    ],
    postedDate: '2024-12-18',
    deadline: '2025-01-18'
  }
]

export default function JobsPage() {
  const [selectedJob, setSelectedJob] = useState<Job>(jobs[0])
  const [showApplication, setShowApplication] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [locationFilter, setLocationFilter] = useState('all')
  
  const filteredJobs: Job[] = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation = locationFilter === 'all' || job.location.includes(locationFilter)
    return matchesSearch && matchesLocation
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <Briefcase className="w-4 h-4 mr-2" />
              <span className="text-sm">CAREERS AT IBUILDINGS</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Build Your Career With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Engineering Excellence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join our team of expert engineers and contribute to India's infrastructure development.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs by title or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Locations</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi/NCR</option>
              <option value="Bhiwandi">Bhiwandi</option>
            </select>
            
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all">
              <Search className="w-5 h-5 inline mr-2" />
              Search Jobs
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Job Listings */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Positions ({filteredJobs.length})</h2>
              
              {filteredJobs.length === 0 ? (
                <div className="text-center py-12">
                  <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-700 mb-2">No jobs found</h3>
                  <p className="text-gray-600">Try different search criteria</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredJobs.map((job: Job) => (
                    <div
                      key={job.id}
                      className={`p-6 rounded-xl border transition-all cursor-pointer hover:shadow-lg ${
                        selectedJob.id === job.id 
                          ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-300' 
                          : 'bg-white border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => setSelectedJob(job)}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
                              <Briefcase className="w-3 h-3 mr-1" />
                              {job.type}
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm">
                              <MapPin className="w-3 h-3 mr-1" />
                              {job.location}
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                              <Clock className="w-3 h-3 mr-1" />
                              {job.experience}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setSelectedJob(job)
                              setShowApplication(true)
                            }}
                            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all text-sm"
                          >
                            Apply Now
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div className="text-sm text-gray-500">
                        Posted: {job.postedDate} • Deadline: {job.deadline}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Job Details Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Job Details</h3>
              
              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">{selectedJob.title}</h4>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-3 text-blue-500" />
                    <span><strong>Location:</strong> {selectedJob.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-3 text-green-500" />
                    <span><strong>Experience:</strong> {selectedJob.experience}</span>
                  </div>
                  {/* Salary withheld from public listing - contact HR for compensation details */}
                  <div className="flex items-center text-gray-600">
                    <Briefcase className="w-4 h-4 mr-3 text-cyan-500" />
                    <span><strong>Job Type:</strong> {selectedJob.type}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-bold text-gray-900 mb-3">Responsibilities:</h5>
                  <ul className="space-y-2">
                    {selectedJob.responsibilities.map((resp: string, idx: number) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h5 className="font-bold text-gray-900 mb-3">Requirements:</h5>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req: string, idx: number) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <h5 className="font-bold text-gray-900 mb-2">Application Deadline</h5>
                  <p className="text-gray-700">{selectedJob.deadline}</p>
                  <p className="text-sm text-gray-500 mt-1">Apply before the deadline</p>
                </div>
              </div>

              <button
                onClick={() => setShowApplication(true)}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all mb-4"
              >
                Apply Now
              </button>
              
              <button className="w-full py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all">
                Save for Later
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {showApplication && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Apply for {selectedJob.title}</h3>
              <button
                onClick={() => setShowApplication(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close application modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Resume *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Drop your resume here or click to browse</p>
                </div>
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl">
                Submit Application
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}