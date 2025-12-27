import { categories } from '@/data/projectsData'
import { Filter } from 'lucide-react'

interface ProjectFilterProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function ProjectFilter({
  selectedCategory,
  onCategoryChange,
}: ProjectFilterProps) {
  const filterOptions = ['All', ...categories]

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <Filter className="w-6 h-6 text-[#1F86C8]" />
        <h2 className="text-2xl font-bold text-[#1A3E6F]">Filter Projects</h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {filterOptions.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-[#1F86C8] to-[#1A3E6F] text-white shadow-lg'
                : 'bg-[#F5F7FA] text-[#1A3E6F] border-2 border-[#BFC5CC] hover:border-[#1F86C8]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
