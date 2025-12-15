import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Project Details | iBuildings',
  description: 'Detailed view of iBuildings projects',
}

// This is a dynamic route - needs to handle params
type Props = {
  params: Promise<{ slug: string }>
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  
  // For now, show basic page. You can fetch project data based on slug
  return (
    <main className="min-h-screen pt-24 pb-16">
"
      <div className="container mx-auto px-4">
"
        <div className="max-w-4xl mx-auto">
"
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Project: {slug}</h1>
"
          <div className="prose prose-lg">
"
            <p>Detailed project information will be displayed here.</p>
          </div>
        </div>
      </div>
    </main>
  )
}