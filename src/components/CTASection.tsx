import Link from 'next/link'
import * as React from 'react'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-gray-900 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Contact us for a free consultation today.
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-white text-blue-900 px-10 py-4 rounded-lg text-lg font-bold hover:bg-gray-100"
        >
          Get Free Consultation
        </Link>
      </div>
    </section>
  )
}


