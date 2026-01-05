"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ChevronDown,
  Award,
  Shield,
  Target,
  Building2,
  CheckCircle,
  Zap,
  Globe,
  Users,
  Clock,
  Star,
} from "lucide-react"

const TOTAL_STEPS = 8

const slides = [
  {
    image: "/images/hero/hero1.jpg",
    title: "Structural Integrity",
    highlight: "Engineered for Generations",
    description:
      "First-principle structural solutions designed to withstand time, seismic forces, and extreme environments.",
    cta: "Explore Our Process",
    tagline: "Since 1998 | 150+ Projects",
    icon: Shield,
    stats: [
      { value: "0%", label: "Structural Failure" },
      { value: "100%", label: "Code Compliance" },
    ],
    checkpoints: [
      { text: "Seismic-resistant design", icon: Zap },
      { text: "Climate-adaptive planning", icon: Globe },
      { text: "Heritage conservation", icon: Building2 },
    ],
  },
  {
    image: "/images/hero/hero2.jpg",
    title: "Precision-Driven",
    highlight: "Mission-Critical Engineering",
    description:
      "Landmark structures delivered with uncompromising standards and absolute execution accuracy.",
    cta: "Explore Case Studies",
    tagline: "ISO 9001:2015 Certified",
    icon: Target,
    stats: [
      { value: "98%", label: "Client Satisfaction" },
      { value: "25+", label: "Years Experience" },
    ],
    checkpoints: [
      { text: "High-rise structures", icon: Building2 },
      { text: "Industrial facilities", icon: Zap },
      { text: "Smart infrastructure", icon: Globe },
    ],
  },
  {
    image: "/images/hero/hero3.jpg",
    title: "Innovation Meets",
    highlight: "Technical Excellence",
    description:
      "Advanced engineering solutions for commercial, residential, and conservation projects.",
    cta: "Schedule Consultation",
    tagline: "Award-Winning Firm",
    icon: Award,
    stats: [
      { value: "₹500Cr+", label: "Project Value" },
      { value: "50+", label: "Cities Served" },
    ],
    checkpoints: [
      { text: "Green building systems", icon: Globe },
      { text: "BIM-enabled workflows", icon: Zap },
      { text: "Advanced analysis models", icon: Target },
    ],
  },
  {
    image: "/images/hero/hero4.jpg",
    title: "Sustainable",
    highlight: "Future-Ready Design",
    description:
      "Engineering solutions that balance performance, longevity, and environmental responsibility.",
    cta: "View Sustainability",
    tagline: "LEED & Green Certified",
    icon: Globe,
    stats: [
      { value: "40%", label: "Energy Savings" },
      { value: "75%", label: "Water Reuse" },
    ],
    checkpoints: [
      { text: "Renewable integration", icon: Zap },
      { text: "Low-carbon materials", icon: Globe },
      { text: "Lifecycle efficiency", icon: Building2 },
    ],
  },
  {
    image: "/images/hero/hero5.jpg",
    title: "Collaborative",
    highlight: "Client-Centric Delivery",
    description:
      "A partnership-driven approach that transforms vision into enduring structures.",
    cta: "Meet Our Team",
    tagline: "500+ Trusted Clients",
    icon: Users,
    stats: [
      { value: "24/7", label: "Project Support" },
      { value: "48h", label: "Response Time" },
    ],
    checkpoints: [
      { text: "Transparent communication", icon: Users },
      { text: "On-time milestones", icon: Clock },
      { text: "Dedicated leadership", icon: CheckCircle },
    ],
  },
  {
    image: "/images/hero/hero6.jpg",
    title: "Quality",
    highlight: "Without Compromise",
    description:
      "Every project undergoes rigorous multi-stage checks to ensure safety and excellence.",
    cta: "Quality Assurance",
    tagline: "Zero-Compromise Policy",
    icon: Star,
    stats: [
      { value: "99.9%", label: "Safety Record" },
      { value: "5-Star", label: "Industry Rating" },
    ],
    checkpoints: [
      { text: "Independent audits", icon: Shield },
      { text: "Continuous monitoring", icon: Target },
      { text: "Strict QA protocols", icon: CheckCircle },
    ],
  },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [step, setStep] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Slide rotation with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrent((p) => (p + 1) % slides.length)
        setIsAnimating(false)
      }, 300)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  // Animation progress
  useEffect(() => {
    setStep(0)
    const timer = setInterval(() => {
      setStep((p) => (p < TOTAL_STEPS ? p + 1 : p))
    }, 250)
    return () => clearInterval(timer)
  }, [current])

  const slide = slides[current]
  const Icon = slide.icon

  const handleDotClick = (index: number) => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setIsAnimating(false)
    }, 300)
  }

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden bg-gray-900">
      {/* Background Image with Transition */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            quality={90}
          />
        </div>
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-700 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-white font-medium">
                {slide.tagline}
              </span>
            </div>

            {/* Title */}
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6 transition-all duration-700 delay-100 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {slide.title}{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300">
                {slide.highlight}
              </span>
            </h1>

            {/* Description */}
            <p
              className={`text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mb-6 sm:mb-8 leading-relaxed transition-all duration-700 delay-200 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {slide.description}
            </p>

            {/* Stats */}
            <div
              className={`flex flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8 transition-all duration-700 delay-300 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {slide.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div className="text-xl sm:text-2xl font-bold text-blue-400">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Checkpoints */}
            <div
              className={`flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 transition-all duration-700 delay-400 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {slide.checkpoints.map((checkpoint, idx) => {
                const CheckIcon = checkpoint.icon
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
                  >
                    <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-200">
                      {checkpoint.text}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-700 delay-500 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40"
              >
                <span className="text-sm sm:text-base">{slide.cta}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-sm sm:text-base">Talk to Our Team</span>
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`transition-all duration-300 rounded-full ${
              current === idx
                ? "w-8 sm:w-10 h-2 bg-gradient-to-r from-blue-500 to-cyan-400"
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-white/10 z-20">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 transition-all duration-300 ease-linear"
          style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:block">
        <div className="flex flex-col items-center gap-2 text-white/60 animate-bounce">
          <span className="text-xs font-medium">Scroll Down</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  )
}