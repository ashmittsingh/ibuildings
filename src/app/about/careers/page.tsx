import * as React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers at iBuildings | Join Our Team',
  description: 'Explore career opportunities at iBuildings. Join our team of engineering professionals.',
}

export default function CareersPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
"
      <div className="container mx-auto px-4">
"
        <div className="max-w-4xl mx-auto">
"
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Careers at iBuildings</h1>
"
          <div className="prose prose-lg">
"
            <p className="text-lg text-gray-600 mb-6">
"
              Join our team of dedicated engineers and professionals shaping India's structural landscape.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl mb-8">
"
              <h2 className="text-2xl font-bold mb-4">Current Openings</h2>
"
              <p>We're currently hiring for multiple positions. Check back soon for detailed job listings.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
