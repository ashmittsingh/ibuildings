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
    imagePath: '/images/projects/pro1.png',
    gallery: [
      '/images/projects/pro1.png',
      '/images/projects/pro2.png',
      '/images/projects/pro3.png',
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
    imagePath: '/images/projects/pro1.png',
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
    imagePath: '/images/projects/pro2.png',
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
    imagePath: '/images/projects/pro3.png',
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
    imagePath: '/images/projects/pro2.png',
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
    imagePath: '/images/projects/pro3.png',
    description: 'Historic building restoration and structural upgrade. Preserved heritage while meeting modern safety standards.',
    highlights: ['Heritage Conservation', 'Structural Upgrade', 'Historic Preservation'],
    year: 2020,
    status: 'Completed',
  },
  {
    id: 7,
    name: 'Bakul Lonavala Residential',
    location: 'Lonavala',
    category: 'Residential',
    imagePath: '/images/projects/pro4.png',
    description: 'Premium residential complex with innovative architectural design. Features sustainable building practices and modern amenities.',
    highlights: ['Residential', 'Sustainable Design', 'Modern Architecture'],
    year: 2021,
    status: 'Completed',
  },
  {
    id: 8,
    name: 'Corona Industrial Facility',
    location: 'Industrial Zone',
    category: 'Industrial',
    imagePath: '/images/projects/pro4.png',
    description: 'State-of-the-art industrial facility with specialized structural requirements. Engineered for heavy machinery and production efficiency.',
    highlights: ['Industrial', 'Heavy Machinery', 'Production Facility'],
    year: 2019,
    status: 'Completed',
  },
  {
    id: 9,
    name: 'MSN Lab Complex',
    location: 'Research Zone',
    category: 'Commercial',
    imagePath: '/images/projects/pro1.png',
    description: 'Advanced research laboratory complex with specialized HVAC and structural systems. Designed for precision and controlled environments.',
    highlights: ['Research Lab', 'Advanced Systems', 'Precision Engineering'],
    year: 2021,
    status: 'Completed',
  },
]

export const categories = [
  'Residential',
  'Commercial',
  'Industrial',
  'Institutional',
  'Heritage',
  'Hospitality',
] as const

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'All') return projects
  return projects.filter(project => project.category === category)
}

export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id)
}
