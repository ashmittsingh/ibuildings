'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { LogOut, BarChart3, Calculator, FileText, Users, Settings, Home } from 'lucide-react'

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuth, setIsAuth] = useState(false)
  const [adminEmail, setAdminEmail] = useState('')
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    // Check if user is authenticated
    const auth = localStorage.getItem('adminAuth')
    if (!auth) {
      router.push('/admin/login')
    } else {
      const authData = JSON.parse(auth)
      setAdminEmail(authData.email)
      setIsAuth(true)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    router.push('/admin/login')
  }

  if (!isAuth) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  const stats = [
    { label: 'Total Projects', value: '50+', icon: BarChart3, color: '#1F86C8' },
    { label: 'Calculations Done', value: '150+', icon: Calculator, color: '#1A3E6F' },
    { label: 'Team Members', value: '20+', icon: Users, color: '#1F86C8' },
    { label: 'Pending Approvals', value: '5', icon: FileText, color: '#1A3E6F' },
  ]

  const recentCalculations = [
    { id: 1, type: 'Composite Beam', project: 'Hubtown Residential', date: '2024-01-15', status: 'Approved' },
    { id: 2, type: 'Column Design', project: 'Hotel Golden Nest', date: '2024-01-14', status: 'Pending Review' },
    { id: 3, type: 'Slab Analysis', project: 'Ethiopia Complex', date: '2024-01-13', status: 'Approved' },
    { id: 4, type: 'Foundation Design', project: 'Landmark Tower', date: '2024-01-12', status: 'Revision Required' },
    { id: 5, type: 'Composite Beam', project: 'GCC School', date: '2024-01-11', status: 'Approved' },
  ]

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] text-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Home className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">IBS Admin Portal</h1>
              <p className="text-sm text-gray-100">{adminEmail}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-all"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div key={i} className="bg-white rounded-lg shadow p-6 border-l-4" style={{ borderColor: stat.color }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                    <p className="text-3xl font-bold text-[#1A3E6F] mt-2">{stat.value}</p>
                  </div>
                  <div className="p-3 rounded-full" style={{ backgroundColor: stat.color + '20' }}>
                    <Icon className="w-6 h-6" style={{ color: stat.color }} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Tab Headers */}
          <div className="flex border-b border-[#BFC5CC]">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'calculations', label: 'Calculations', icon: Calculator },
              { id: 'settings', label: 'Settings', icon: Settings },
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-medium transition-all border-b-2 -mb-px ${
                    activeTab === tab.id
                      ? 'border-[#1F86C8] text-[#1F86C8]'
                      : 'border-transparent text-gray-600 hover:text-[#1A3E6F]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-2xl font-bold text-[#1A3E6F] mb-6">Recent Calculations & Activities</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#F5F7FA] border-b-2 border-[#BFC5CC]">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-bold text-[#1A3E6F]">Calculation Type</th>
                        <th className="px-6 py-3 text-left text-sm font-bold text-[#1A3E6F]">Project</th>
                        <th className="px-6 py-3 text-left text-sm font-bold text-[#1A3E6F]">Date</th>
                        <th className="px-6 py-3 text-left text-sm font-bold text-[#1A3E6F]">Status</th>
                        <th className="px-6 py-3 text-left text-sm font-bold text-[#1A3E6F]">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentCalculations.map((calc, i) => (
                        <tr key={i} className="border-b border-[#BFC5CC] hover:bg-[#F5F7FA] transition-colors">
                          <td className="px-6 py-4 text-gray-700">{calc.type}</td>
                          <td className="px-6 py-4 text-gray-700">{calc.project}</td>
                          <td className="px-6 py-4 text-gray-600 text-sm">{calc.date}</td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-bold ${
                                calc.status === 'Approved'
                                  ? 'bg-green-100 text-green-700'
                                  : calc.status === 'Pending Review'
                                  ? 'bg-yellow-100 text-yellow-700'
                                  : 'bg-red-100 text-red-700'
                              }`}
                            >
                              {calc.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <button className="text-[#1F86C8] hover:text-[#1A3E6F] font-bold text-sm">
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'calculations' && (
              <div>
                <h2 className="text-2xl font-bold text-[#1A3E6F] mb-6">Manage Calculations</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: 'Composite Beam Calculator', desc: 'Design and analyze composite beams', icon: Calculator },
                    { title: 'Column Design', desc: 'RC and Steel column design', icon: Calculator },
                    { title: 'Slab Analysis', desc: 'One-way and two-way slab design', icon: Calculator },
                  ].map((calc, i) => (
                    <div key={i} className="bg-[#F5F7FA] border-2 border-[#BFC5CC] rounded-lg p-6 hover:shadow-lg transition-all">
                      <Calculator className="w-12 h-12 text-[#1F86C8] mb-4" />
                      <h3 className="font-bold text-[#1A3E6F] mb-2">{calc.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{calc.desc}</p>
                      <button className="w-full px-4 py-2 bg-[#1F86C8] text-white rounded-lg font-bold hover:bg-[#1A3E6F] transition-all">
                        Manage
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <h2 className="text-2xl font-bold text-[#1A3E6F] mb-6">Settings</h2>
                <div className="space-y-6 max-w-2xl">
                  <div className="border-b border-[#BFC5CC] pb-6">
                    <h3 className="font-bold text-[#1A3E6F] mb-4">Account Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          value={adminEmail}
                          disabled
                          className="w-full px-4 py-2 border-2 border-[#BFC5CC] rounded-lg bg-gray-100 text-gray-700"
                        />
                      </div>
                      <button className="px-6 py-2 bg-[#1F86C8] text-white rounded-lg font-bold hover:bg-[#1A3E6F] transition-all">
                        Change Password
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-[#1A3E6F] mb-4">Security Settings</h3>
                    <div className="space-y-4">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-5 h-5 text-[#1F86C8]" />
                        <span className="text-gray-700">Enable two-factor authentication</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-5 h-5 text-[#1F86C8]" />
                        <span className="text-gray-700">Email notifications for calculations</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}