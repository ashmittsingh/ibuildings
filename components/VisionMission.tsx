"use client"

import { useState } from 'react'
import { Target, Eye, Users, Award, CheckCircle, TrendingUp } from 'lucide-react'

// Define proper TypeScript types
interface VisionMissionData {
  [key: string]: {
    icon: React.ReactNode
    title: string
    description: string
    color: string
  }
}

interface CoreValue {
  icon: React.ReactNode
  title: string
  description: string
}

export default function VisionMission() {
  const [activeTab, setActiveTab] = useState('vision')

  const visionData: VisionMissionData = {
    vision: {
      icon: <Eye className="w-12 h-12" />,
      title: 'Our Vision',
      description: 'To be India\'s most trusted and innovative structural engineering partner, setting global standards in construction excellence and sustainable development.',
      color: 'from-blue-600 to-cyan-500'
    },
    mission: {
      icon: <Target className="w-12 h-12" />,
      title: 'Our Mission',
      description: 'Delivering safe, efficient, and enduring structural solutions through innovative engineering, advanced technology, and unwavering commitment to quality.',
      color: 'from-cyan-600 to-blue-500'
    }
  }

  const coreValues: CoreValue[] = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Integrity',
      description: 'Honest, ethical practices in all engagements'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Uncompromising quality in every project'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Safety',
      description: 'Zero compromise on structural safety'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Embracing cutting-edge technology'
    }
  ]

  // Safe access with type checking
  const currentVisionData = visionData[activeTab]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
      <div className="absolute top-20 -right-20 w-80 h-80 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 mb-6">
            <span className="text-sm font-semibold text-blue-700">VISION & MISSION</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Building the <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Future</span>
          </h2>
          <p className="text-xl text-gray-600">
            Guided by strong principles and a commitment to engineering excellence
          </p>
        </div>

        {/* Vision/Mission Tabs */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-2 border border-blue-100">
              {(['vision', 'mission'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Active Content */}
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-12 border border-blue-100">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Icon */}
              <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${currentVisionData.color} flex items-center justify-center shadow-2xl`}>
                <div className="text-white">
                  {currentVisionData.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {currentVisionData.title}
                </h3>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  {currentVisionData.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Core Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm text-center">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}