import EngineeringHero from '@/components/EngineeringHero'
import EngineeringServices from '@/components/EngineeringServices'
import VisionMission from '@/components/VisionMission'
import PolicyProcedures from '@/components/PolicyProcedures'

export const metadata = {
  title: 'Structural Engineering & Project Management | Buildings',
  description: 'Delivering safe, efficient, and enduring structures through sound engineering judgment and responsible project management.',
}

export default function EngineeringPage() {
  return (
    <main>
      <EngineeringHero />
      <EngineeringServices />
      <VisionMission />
      <PolicyProcedures />
    </main>
  )
}


