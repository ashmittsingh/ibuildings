import Image from 'next/image'
import { MapPin, Calendar } from 'lucide-react'
import { Project } from '@/data/projectsData'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <Image
          src={project.imagePath}
          alt={project.name}
          fill
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          quality={80}
          priority={false}
        />
        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-[#1F86C8] text-white px-3 py-1 rounded-full text-sm font-semibold">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#1A3E6F] mb-2 line-clamp-2">
          {project.name}
        </h3>

        {/* Location & Year */}
        <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-[#1F86C8]" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-[#1F86C8]" />
            <span>{project.year}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.highlights.slice(0, 2).map((highlight, index) => (
            <span
              key={index}
              className="text-xs bg-[#F5F7FA] text-[#1A3E6F] px-2 py-1 rounded font-medium"
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* Status Badge */}
        <div className="flex items-center justify-between pt-4 border-t border-[#BFC5CC]">
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full ${
              project.status === 'Completed'
                ? 'bg-green-100 text-green-700'
                : project.status === 'Ongoing'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-yellow-100 text-yellow-700'
            }`}
          >
            {project.status}
          </span>
          <button className="text-[#1F86C8] text-sm font-bold hover:text-[#1A3E6F] transition-colors">
            View Details →
          </button>
        </div>
      </div>
    </div>
  )
}
