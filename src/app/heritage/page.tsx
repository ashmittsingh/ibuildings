import * as React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Heritage Conservation | iBuildings',
  description: 'Preserving India\'s architectural heritage through expert conservation.',
}

export default function HeritagePage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
"
      <div className="container mx-auto px-4">
"
        <div className="max-w-4xl mx-auto">
"
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Heritage Conservation</h1>
"
          <div className="prose prose-lg">
"
            <p className="text-lg text-gray-600 mb-6">
"
              Specializing in the preservation and restoration of India's rich architectural heritage.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
