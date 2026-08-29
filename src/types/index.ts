// Product Types
export interface Product {
  id: string;
  name: string;
  shortName: string;
  category: ProductCategory;
  description: string;
  longDescription: string;
  useCase: string;
  pricingMin: number;
  pricingMax: number;
  monthlyMin?: number;
  monthlyMax?: number;
  features: string[];
  image: string;
  icon: string;
  deploymentProfiles: DeploymentProfile[];
  regionalAvailability: RegionalHub[];
  documentation: string;
  demoUrl?: string;
}

export type ProductCategory = 
  | 'infrastructure'
  | 'property'
  | 'healthcare'
  | 'logistics'
  | 'operations'
  | 'specialized'
  | 'platform';

// Regional Hub Types
export type RegionalHub = 'ncr' | 'cebu' | 'davao';

export interface Hub {
  id: RegionalHub;
  name: string;
  region: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  timezone: string;
  manager: string;
  coverage: string[];
  icon?: string;
}

// Deployment Types
export type DeploymentProfile = 'cloud-native' | 'on-premise' | 'hybrid' | 'saas';

export interface Deployment {
  profile: DeploymentProfile;
  description: string;
  dataCenter: string;
  backupLocation: string;
}

// Pricing Types
export interface PricingTier {
  id: string;
  name: string;
  level: 'starter' | 'growth' | 'enterprise';
  implementationCost: number;
  monthlyCost?: number;
  description: string;
  features: string[];
  bestFor: string;
  bundle?: boolean;
}

export interface Bundle {
  id: string;
  name: string;
  products: string[];
  implementationCost: number;
  monthlyCost: number;
  discount: number;
  bestFit: string;
  description: string;
}

// Industry Types
export type Industry = 
  | 'telecommunications'
  | 'construction'
  | 'healthcare'
  | 'hospitality'
  | 'retail'
  | 'logistics'
  | 'professional-services'
  | 'education'
  | 'manufacturing'
  | 'security'
  | 'beauty-wellness'
  | 'specialized';

export interface IndustryProfile {
  id: Industry;
  name: string;
  description: string;
  painPoints: string[];
  solutions: string[];
  regionalExamples: { hub: RegionalHub; example: string }[];
  icon: string;
  color: string;
}

// Process Types
export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  phase: 'discovery' | 'design' | 'delivery';
  icon: string;
  details: string[];
  outcomes: string[];
}

// Lead Types
export interface Lead {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  location: string;
  preferredHub: RegionalHub;
  industry: Industry;
  numberOfBranches: number;
  currentSystems: string[];
  message: string;
  preferredContact: 'email' | 'phone' | 'both';
  createdAt: Date;
  status: 'new' | 'contacted' | 'qualified' | 'converted';
}

// Case Study Types
export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: Industry;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string }[];
  productUsed: string[];
  region: RegionalHub[];
  image: string;
  testimonial: {
    quote: string;
    author: string;
    title: string;
  };
}

// Support Tier Types
export type SupportTier = 'essential' | 'priority' | 'enterprise';

export interface Support {
  tier: SupportTier;
  monthlyFee: { min: number; max: number };
  coverage: string[];
  responseTime: string;
  bestFor: string;
  addOns: { name: string; cost: { min: number; max: number } }[];
}

// Navigation Types
export interface NavLink {
  label: string;
  href: string;
  subLinks?: NavLink[];
  icon?: string;
}

// SEO Types
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  ogUrl: string;
  canonical: string;
}

// Form Types
export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  location: string;
  preferredHub: RegionalHub;
  industry: Industry;
  numberOfBranches: number;
  currentSystems: string[];
  message: string;
  preferredContact: 'email' | 'phone' | 'both';
}

export interface AssessmentFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  numberOfLocations: number;
  yearsInBusiness: number;
  primaryChallenges: string[];
  preferredHub: RegionalHub;
}
