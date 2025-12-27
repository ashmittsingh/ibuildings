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

  // Slide rotation
  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((p) => (p + 1) % slides.length),
      8000
    )
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

  return (
    <section className="relative h-screen max-h-[820px] overflow-hidden bg-gray-900">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 pt-32">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20">
          <Icon className="w-4 h-4 text-blue-300" />
          <span className="text-sm text-white">{slide.tagline}</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          {slide.title}{" "}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            {slide.highlight}
          </span>
        </h1>

        <p className="text-lg text-gray-200 max-w-2xl mb-8">
          {slide.description}
        </p>

        <div className="flex gap-4 mb-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold"
          >
            {slide.cta}
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white"
          >
            Talk to Our Team
            <ChevronDown className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300"
          style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
        />
      </div>
    </section>
  )
}
