"use client"

import { useState } from 'react'
import Link from 'next/link'
import { 
  Calendar, Clock, User, ArrowRight, 
  FileText, Tag, Search, Filter
} from 'lucide-react'

export default function InsightsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  
  const blogPosts = [
    {
      id: 1,
      title: 'Advancements in Structural Engineering',
      excerpt: 'Explore the latest technologies and methodologies transforming structural engineering in modern construction.',
      category: 'Engineering',
      readTime: '5 min',
      date: 'Dec 15, 2025',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Heritage Conservation Techniques',
      excerpt: "Discover traditional and modern techniques for preserving India's architectural heritage.",
      category: 'Heritage',
      readTime: '7 min',
      date: 'Dec 10, 2025',
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 3,
      title: 'Structural Safety Audits',
      excerpt: 'Comprehensive guide to conducting structural safety audits for residential and commercial buildings.',
      category: 'Safety',
      readTime: '6 min',
      date: 'Dec 5, 2025',
      color: 'from-emerald-500 to-green-500'
    },
    {
      id: 4,
      title: 'Sustainable Construction',
      excerpt: 'Implementing eco-friendly practices in modern construction projects.',
      category: 'Sustainability',
      readTime: '8 min',
      date: 'Nov 28, 2025',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 5,
      title: 'Project Management Best Practices',
      excerpt: 'Essential strategies for effective construction project management.',
      category: 'Management',
      readTime: '4 min',
      date: 'Nov 20, 2025',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 6,
      title: 'Earthquake Resistant Structures',
      excerpt: 'Designing buildings to withstand seismic activities in earthquake-prone zones.',
      category: 'Safety',
      readTime: '9 min',
      date: 'Nov 15, 2025',
      color: 'from-red-500 to-orange-500'
    }
  ]

  const categories = ['All', 'Engineering', 'Heritage', 'Safety', 'Sustainability', 'Management']

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 via-blue-800 to-cyan-800 py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '600px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <FileText className="w-5 h-5 text-white mr-2" />
              <span className="text-sm font-semibold text-white">INSIGHTS & BLOG</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Insights & <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Blog</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8">
              Stay updated with the latest in structural engineering and heritage conservation
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-300/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                category === 'All' 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-blue-100 hover:border-blue-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 overflow-hidden"
            >
              {/* Category Badge */}
              <div className="p-6">
                <div className={`inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r ${post.color} text-white text-sm font-semibold mb-4`}>
                  <Tag className="w-3 h-3 mr-2" />
                  {post.category}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {post.readTime} read
                    </div>
                  </div>
                </div>

                {/* Read More */}
                <div className="flex items-center justify-between pt-4 border-t border-blue-100">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center mr-3">
                      <User className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Buildings Team</span>
                  </div>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="flex items-center text-blue-600 font-semibold group-hover:text-cyan-600 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="mt-16 text-center">
          <div className="inline-block max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
            <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">More Articles Coming Soon!</h3>
            <p className="text-gray-600 mb-6">
              We're continuously adding new insights and case studies. Check back regularly for updates on the latest in structural engineering and heritage conservation.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold">
              Subscribe to stay updated
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
