import * as React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Certifications & Accreditations | iBuildings',
  description: 'Our professional certifications, accreditations, and quality standards.',
}

export default function CertificationsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
"
      <div className="container mx-auto px-4">
"
        <div className="max-w-4xl mx-auto">
"
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Certifications & Accreditations</h1>
"
          <div className="prose prose-lg">
"
            <p className="text-lg text-gray-600 mb-6">
"
              iBuildings maintains the highest standards of quality and professional accreditation.
            </p>
            <div className="space-y-6">
"
              <div className="bg-white p-6 rounded-xl shadow-sm border">
"
                <h3 className="text-xl font-bold mb-2">ISO 9001:2015 Certified</h3>
"
                <p>Quality Management System Certification</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
"
                <h3 className="text-xl font-bold mb-2">Professional Engineering Licenses</h3>
"
                <p>All senior engineers hold valid professional engineering licenses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
