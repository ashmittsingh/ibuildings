import * as React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Leadership Team | iBuildings',
  description: 'Meet the leadership team behind iBuildings.',
}

export default function LeadershipPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
"
      <div className="container mx-auto px-4">
"
        <div className="max-w-4xl mx-auto">
"
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Leadership Team</h1>
"
          <div className="prose prose-lg">
"
            <p className="text-lg text-gray-600 mb-6">
"
              Meet the experienced professionals leading iBuildings.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
"
              <div className="bg-white p-6 rounded-xl shadow-sm border">
"
                <h3 className="text-xl font-bold mb-2">Founder & CEO</h3>
"
                <p className="text-gray-600">25+ years in structural engineering</p>
"
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
"
                <h3 className="text-xl font-bold mb-2">Technical Director</h3>
"
                <p className="text-gray-600">Specialist in heritage conservation</p>
"
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
