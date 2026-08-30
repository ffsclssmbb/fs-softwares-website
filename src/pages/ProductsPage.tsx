'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionContainer, CTAButton, GlowCard, Badge } from '@/components/ui';
import { ChevronDown } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const products = {
  infrastructure: [
    {
      name: 'FS SiteAcquire',
      description: 'Site Acquisition & Rollout Software',
      useCase: 'Telecom tower rollout, real estate development',
      pricing: '₱150K - ₱600K implementation',
      features: [
        'Multi-site acquisition tracking',
        'Rollout timeline management',
        'Stakeholder coordination',
        'Real-time deployment updates',
      ],
    },
    {
      name: 'FS TowerAsset',
      description: 'Tower Asset Management',
      useCase: 'Infrastructure tracking, maintenance scheduling',
      pricing: '₱150K - ₱500K implementation',
      features: [
        'Asset inventory management',
        'Maintenance scheduling',
        'Performance tracking',
        'Compliance reporting',
      ],
    },
    {
      name: 'FS ConstructPM',
      description: 'Construction Project Management',
      useCase: 'Multi-site construction oversight',
      pricing: '₱200K - ₱650K implementation',
      features: [
        'Project timeline tracking',
        'Resource allocation',
        'Budget management',
        'Site coordination',
      ],
    },
    {
      name: 'FS BIM Suite',
      description: 'Building Information Modeling',
      useCase: '3D modeling, clash detection, visualization',
      pricing: '₱250K - ₱750K implementation',
      features: [
        '3D modeling & visualization',
        'Clash detection',
        'Collaboration tools',
        'Document management',
      ],
    },
    {
      name: 'FS QuantitySurvey',
      description: 'Quantity Surveying Software',
      useCase: 'Cost estimation, BOQ, material takeoff',
      pricing: '₱120K - ₱350K implementation',
      features: [
        'Material estimation',
        'Cost analysis',
        'Budget comparison',
        'Supplier management',
      ],
    },
  ],
  property: [
    {
      name: 'FS PropertyPMS',
      description: 'Property Management Systems',
      useCase: 'Residential/commercial property operations',
      pricing: '₱99K - ₱270K implementation | ₱9,500 - ₱24K/month',
      features: [
        'Tenant management',
        'Lease tracking',
        'Payment processing',
        'Maintenance requests',
      ],
    },
    {
      name: 'FS Reserve',
      description: 'Table/Reservation Management',
      useCase: 'Restaurants, events, booking systems',
      pricing: '₱65K - ₱150K implementation',
      features: [
        'Reservation scheduling',
        'Guest management',
        'Event coordination',
        'Capacity management',
      ],
    },
    {
      name: 'FS HotelPMS',
      description: 'Hotel Property Management',
      useCase: 'Full-service hotel operations',
      pricing: '₱200K - ₱650K | ₱15K - ₱55K/month',
      features: [
        'Room management',
        'Guest services',
        'Billing & invoicing',
        'Staff scheduling',
      ],
    },
  ],
  healthcare: [
    {
      name: 'FS EHR',
      description: 'Electronic Health Records',
      useCase: 'Clinics, hospitals, patient records',
      pricing: '₱250K - ₱750K implementation',
      features: [
        'Patient records management',
        'Medical history tracking',
        'Prescription management',
        'Lab integration',
      ],
    },
    {
      name: 'FS PracticeSuite',
      description: 'Practice Management & Telehealth',
      useCase: 'Medical practices, remote consultations',
      pricing: '₱150K - ₱500K implementation',
      features: [
        'Appointment scheduling',
        'Telehealth capabilities',
        'Patient billing',
        'Medical records',
      ],
    },
    {
      name: 'FS LIMS',
      description: 'Laboratory Information Management',
      useCase: 'Diagnostic labs, test tracking',
      pricing: '₱200K - ₱600K implementation',
      features: [
        'Test tracking',
        'Result management',
        'Quality control',
        'Report generation',
      ],
    },
    {
      name: 'FS InstitutionCare',
      description: 'Hospital & Institutional Administration',
      useCase: 'Large medical facilities',
      pricing: 'Enterprise custom',
      features: [
        'Multi-department management',
        'Resource allocation',
        'Compliance tracking',
        'Advanced analytics',
      ],
    },
    {
      name: 'FS CareOps',
      description: 'Clinics, Home Health & Wellness',
      useCase: 'Home care, wellness centers',
      pricing: '₱120K - ₱350K implementation',
      features: [
        'Patient scheduling',
        'Care coordination',
        'Home visit tracking',
        'Caregiver management',
      ],
    },
    {
      name: 'FS VetCare',
      description: 'Pet Care & Veterinary Services',
      useCase: 'Animal hospitals, vet clinics',
      pricing: '₱99K - ₱250K implementation',
      features: [
        'Pet records',
        'Medical tracking',
        'Appointment scheduling',
        'Inventory management',
      ],
    },
  ],
  logistics: [
    {
      name: 'FS FieldOps',
      description: 'Site & Field Resources Management',
      useCase: 'Field service, mobile workforce',
      pricing: '₱150K - ₱500K implementation',
      features: [
        'Field team tracking',
        'Job assignment',
        'Mobile app integration',
        'Real-time updates',
      ],
    },
    {
      name: 'FS FleetHaul',
      description: 'Trucking & Logistics',
      useCase: 'Fleet management, delivery operations',
      pricing: '₱60K - ₱250K | ₱5K - ₱20K/month',
      features: [
        'Vehicle tracking',
        'Route optimization',
        'Fuel management',
        'Driver management',
      ],
    },
  ],
};

function ProductCard({ product, categoryKey }: any) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div variants={itemVariants}>
      <GlowCard
        className="group cursor-pointer"
        glowColor="green"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white group-hover:text-primary-green transition-colors">
              {product.name}
            </h3>
            <p className="text-text-secondary text-sm mt-1">{product.description}</p>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="ml-4 flex-shrink-0"
          >
            <ChevronDown size={20} className="text-primary-green" />
          </motion.div>
        </div>

        <div className="mb-4 p-3 bg-primary-green/10 rounded-lg border border-primary-green/20">
          <p className="text-sm text-text-secondary">
            <span className="font-semibold text-white">Use Case:</span> {product.useCase}
          </p>
        </div>

        <div className="mb-4 p-3 bg-primary-green-dark/10 rounded-lg border border-primary-green-dark/20">
          <p className="text-sm font-semibold text-primary-green-light">
            💰 {product.pricing}
          </p>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-primary-green/20 pt-4"
            >
              <h4 className="text-sm font-semibold text-primary-green mb-3">Key Features:</h4>
              <ul className="space-y-2 mb-4">
                {product.features.map((feature: string) => (
                  <li
                    key={feature}
                    className="text-sm text-text-secondary flex items-start gap-2"
                  >
                    <span className="text-primary-green-light mt-1">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <CTAButton
                text="Learn More"
                href={`/contact?product=${product.name}`}
                variant="primary"
                size="sm"
                className="w-full"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </GlowCard>
    </motion.div>
  );
}

export function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof products>('infrastructure');

  const categoryLabels = {
    infrastructure: '🏗️ Infrastructure & Construction (5 Products)',
    property: '🏢 Property & Hospitality (3 Products)',
    healthcare: '🏥 Healthcare & Wellness (6 Products)',
    logistics: '🚚 Logistics & Field Operations',
  };

  return (
    <>
      {/* Hero */}
      <SectionContainer padding="lg" background="gradient" className="pt-32">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-2xl h-96 bg-glow-green blur-3xl opacity-10" />

        <motion.div
          className="relative text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex justify-center mb-6" variants={itemVariants}>
            <Badge
              text="20+ Solutions | 6 Categories | Nationwide Deployment"
              variant="primary"
              size="md"
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="text-white">20+ Business Solutions</span>
            <br />
            <span className="gradient-text">For Every Industry</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            Pattern B architecture (Tauri + Flutter + API), E2E tested, and deployable across our three hubs with local support.
          </motion.p>
        </motion.div>
      </SectionContainer>

      {/* Products by Category */}
      <SectionContainer padding="lg" background="dark">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
            {(Object.keys(products) as Array<keyof typeof products>).map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary-green text-white shadow-glow-green'
                    : 'bg-primary-green/10 text-primary-green hover:bg-primary-green/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {categoryLabels[category]}
              </motion.button>
            ))}
          </div>

          {/* Products Grid */}
          <motion.div
            key={activeCategory}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {products[activeCategory].map((product) => (
              <ProductCard key={product.name} product={product} categoryKey={activeCategory} />
            ))}
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* Platform & Control Systems */}
      <SectionContainer padding="lg" background="gradient">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Platform & Control Systems
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Cloud-based systems with dual-control & audit-logging for enterprise governance
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {[
              {
                name: 'FS Command Console',
                description: 'License & Activation, Fleet Monitoring, Remote Diagnostics',
              },
              {
                name: 'FS UpdateHub',
                description: 'Centralized Update & Patch Distribution',
              },
              {
                name: 'FS AuditWatch',
                description: 'Security & Audit Oversight with dual-control logging',
              },
              {
                name: 'FS PortfolioBI',
                description: 'Client & Contract Billing + Master Business Intelligence',
              },
            ].map((system) => (
              <motion.div key={system.name} variants={itemVariants}>
                <GlowCard className="h-full" glowColor="silver">
                  <h3 className="text-lg font-bold text-white mb-2">{system.name}</h3>
                  <p className="text-text-secondary text-sm">{system.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer padding="lg" background="dark">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="text-white">Ready to Transform</span>
            <br />
            <span className="gradient-text">Your Operations?</span>
          </motion.h2>

          <motion.p
            className="text-lg text-text-secondary max-w-2xl mx-auto mb-8"
            variants={itemVariants}
          >
            Get a free assessment and personalized product recommendations from our regional experts.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <CTAButton
                text="Free Assessment"
                href="/contact?type=assessment"
                variant="primary"
                size="lg"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CTAButton
                text="View Pricing"
                href="/pricing"
                variant="secondary"
                size="lg"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </SectionContainer>
    </>
  );
}
