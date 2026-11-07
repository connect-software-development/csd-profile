import { HeroSection } from '@/features/hero/components/HeroSection'
import { AboutUsSection } from '@/features/about/components/AboutUsSection'
import { ServicesGrid } from '@/features/services/components/ServicesGrid'
import { CaseStudiesSection } from '@/features/case-studies/components/CaseStudiesSection'
import { ArchitectureSection } from '@/features/architecture/components/ArchitectureSection'
import { ProjectEstimatorSection } from '@/features/estimator/components/ProjectEstimatorSection'

export function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutUsSection />
      <ServicesGrid />
      <CaseStudiesSection />
      <ArchitectureSection />
      <ProjectEstimatorSection />
    </div>
  )
}
