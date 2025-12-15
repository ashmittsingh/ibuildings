import * as React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project Management | iBuildings',
  description: 'Construction project management services',
}

export default function ProjectManagementPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
"
      <div className="container mx-auto px-4">
"
        <div className="max-w-4xl mx-auto">
"
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Project Management</h1>
"
          <div className="prose prose-lg">
"
            <p>End-to-end project management for construction projects.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
