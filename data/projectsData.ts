export interface Project {
  id: number
  name: string
  location: string
  category: 'Residential' | 'Commercial' | 'Industrial' | 'Institutional' | 'Heritage' | 'Hospitality'
  imagePath: string
  gallery?: string[]
  description: string
  highlights: string[]
  year: number
  status: 'Completed' | 'Ongoing' | 'Planning'
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Ethiopia Commercial Complex',
    location: 'Ethiopia',
    category: 'Commercial',
    imagePath: '/images/projects/Project%20Photos/Ethiopia/Came_04.png',
    gallery: [
      '/images/projects/Project%20Photos/Ethiopia/Came_04.png',
      '/images/projects/Project%20Photos/Ethiopia/Came_05.png',
      '/images/projects/Project%20Photos/Ethiopia/Came_07.png',
    ],
    description: 'Multi-storey commercial complex with advanced structural design featuring innovative load distribution systems and seismic resistance.',
    highlights: ['Advanced Seismic Design', 'Commercial Complex', 'International Standards'],
    year: 2022,
    status: 'Completed',
  },
  {
    id: 2,
    name: 'Hubtown Residential Development',
    location: 'Mehsana',
    category: 'Residential',
    imagePath: '/images/projects/Project%20Photos/Hubtown/Mehsana/Left_Side.jpg',
    description: 'Large-scale residential township with mixed-use development. Engineered for optimal space utilization and residential comfort.',
    highlights: ['Residential', 'Structural Optimization', 'Mixed-Use Development'],
    year: 2020,
    status: 'Completed',
  },
  {
    id: 3,
    name: 'Hotel Golden Nest',
    location: 'Lonavala',
    category: 'Hospitality',
    imagePath: '/images/projects/Project%20Photos/Hotel%20Golden%20Nest/cam01.jpg',
    description: 'Luxury hospitality project with unique architectural requirements. Engineered for aesthetic appeal and structural integrity.',
    highlights: ['Hospitality', 'Complex Geometry', 'Premium Construction'],
    year: 2021,
    status: 'Completed',
  },
  {
    id: 4,
    name: 'Landmark Tower',
    location: 'Mumbai',
    category: 'Residential',
    imagePath: '/images/projects/Project%20Photos/Landmark/AERIAL_01.jpg',
    description: 'High-rise residential tower with cutting-edge structural systems. Advanced foundation design for urban location.',
    highlights: ['High-Rise', 'Urban Engineering', 'Premium Residences'],
    year: 2019,
    status: 'Completed',
  },
  {
    id: 5,
    name: 'GCC School Campus',
    location: 'Lonavala',
    category: 'Institutional',
    imagePath: '/images/projects/Project%20Photos/GCC%20School/005.jpg',
    description: 'Educational institutional building with multi-functional spaces. Designed for safety, durability, and functional efficiency.',
    highlights: ['Educational', 'Institutional', 'Multi-Functional Spaces'],
    year: 2018,
    status: 'Completed',
  },
  {
    id: 6,
    name: 'Ismail Building Retrofit',
    location: 'Mumbai',
    category: 'Heritage',
    imagePath: '/images/projects/Project%20Photos/Ismail%20Building/001A.JPG',
    description: 'Historic building restoration and structural upgrade. Preserved heritage while meeting modern safety standards.',
    highlights: ['Heritage Conservation', 'Structural Retrofit', 'Historic Preservation'],
    year: 2020,
    status: 'Completed',
  },
  {
    id: 7,
    name: 'Bakul Lonavala Project',
    location: 'Lonavala',
    category: 'Residential',
    imagePath: '/images/projects/Project%20Photos/Bakul%20Lonavala/CAM_10_02.jpg',
    description: 'Premium residential development in scenic hill location. Engineered for natural integration with landscape.',
    highlights: ['Residential', 'Hill Station', 'Scenic Design'],
    year: 2021,
    status: 'Completed',
  },
  {
    id: 8,
    name: 'Corona Project',
    location: 'Pan-India',
    category: 'Commercial',
    imagePath: '/images/projects/Project%20Photos/Corona/corona.jpg',
    description: 'Multi-location commercial project executed across various Indian cities with consistent quality and standards.',
    highlights: ['Commercial', 'Multi-Location', 'Pan-India Execution'],
    year: 2019,
    status: 'Completed',
  },
  {
    id: 9,
    name: 'MSN Lab Complex',
    location: 'Bangalore',
    category: 'Industrial',
    imagePath: '/images/projects/Project%20Photos/MSN%20Lab/kother1.jpg',
    description: 'Advanced laboratory and research facility with specialized structural requirements for scientific equipment.',
    highlights: ['Industrial', 'Laboratory', 'Specialized Systems'],
    year: 2022,
    status: 'Completed',
  },
]

export const categories = ['Residential', 'Commercial', 'Industrial', 'Institutional', 'Heritage', 'Hospitality']

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'All') {
    return projects
  }
  return projects.filter(project => project.category === category)
}

export function getProjectById(id: number): Project | undefined {
  return projects.find(project => project.id === id)
}
