'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LogIn, AlertCircle } from 'lucide-react'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Simulate API call - in production, use proper authentication
    setTimeout(() => {
      // Demo credentials
      if (email === 'admin@ibuildings.in' && password === 'admin123') {
        // Store auth token in localStorage
        localStorage.setItem('adminAuth', JSON.stringify({
          email: email,
          token: 'demo-token-' + Date.now(),
          loginTime: new Date().toISOString()
        }))
        router.push('/admin/dashboard')
      } else {
        setError('Invalid email or password. Use admin@ibuildings.in / admin123')
        setIsLoading(false)
      }
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A3E6F] via-[#1F86C8] to-[#1A3E6F] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <LogIn className="w-10 h-10 text-[#1F86C8]" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Admin Portal</h1>
          <p className="text-gray-100">Integrated Building Services</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-[#1A3E6F] mb-6">Login to Dashboard</h2>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded flex gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-[#1A3E6F] mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@ibuildings.in"
                className="w-full border-2 border-[#BFC5CC] rounded-lg px-4 py-3 focus:outline-none focus:border-[#1F86C8] transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#1A3E6F] mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full border-2 border-[#BFC5CC] rounded-lg px-4 py-3 focus:outline-none focus:border-[#1F86C8] transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] text-white rounded-lg font-bold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Logging in...
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  Login to Dashboard
                </>
              )}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-8 p-4 bg-[#F5F7FA] border-2 border-[#BFC5CC] rounded-lg">
            <p className="text-sm font-bold text-[#1A3E6F] mb-2">Demo Credentials:</p>
            <p className="text-xs text-gray-700 mb-1">Email: <span className="font-mono font-semibold">admin@ibuildings.in</span></p>
            <p className="text-xs text-gray-700">Password: <span className="font-mono font-semibold">admin123</span></p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-100 text-sm">
            © 2024 Integrated Building Services. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}