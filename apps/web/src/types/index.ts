export interface ServiceItem {
  id: string
  number: string
  title: string
  category: string
  description: string
  deliverables: string[]
  technologies: string[]
}

export interface CaseStudy {
  id: string
  clientIndustry: string
  title: string
  description: string
  primaryMetric: {
    value: string
    label: string
  }
  secondaryMetric: {
    value: string
    label: string
  }
  architectureHighlights: string[]
  tags: string[]
}

export interface TechStackCategory {
  category: string
  items: {
    name: string
    purpose: string
    maturity: 'Production Standard' | 'Scale Optimized' | 'Bleeding Edge'
  }[]
}

export interface EstimationConfig {
  tier: 'mvp_scale' | 'mid_enterprise' | 'high_scale'
  cloudProvider: 'aws' | 'gcp' | 'azure' | 'hybrid'
  complianceReqs: string[]
  timelineWeeks: number
  estimatedRange: string
}
