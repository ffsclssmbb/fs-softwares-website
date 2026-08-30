'use client';

import { motion } from 'framer-motion';
import { SectionContainer, CTAButton, GlowCard, Badge } from '@/components/ui';
import { Check } from 'lucide-react';

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

const pricingTiers = [
  {
    name: 'Starter Tier',
    level: 'SMEs',
    description: 'Small to mid-size enterprises',
    products: [
      { name: 'FS POS', impl: '₱35,000', monthly: '₱2,500' },
      { name: 'FS Inventory', impl: '₱35,000', monthly: '₱2,500' },
      { name: 'FS Reserve', impl: '₱65,000', monthly: '₱5,500' },
    ],
    highlight: false,
  },
  {
    name: 'Growth Tier',
    level: 'Multi-branch',
    description: 'Growing businesses with multiple locations',
    products: [
      { name: 'FS POS', impl: '₱65,000', monthly: '₱5,500' },
      { name: 'FS CRM', impl: '₱90,000', monthly: '₱7,500' },
      { name: 'FS FleetHaul', impl: '₱120,000', monthly: '₱10,000' },
    ],
    highlight: true,
  },
  {
    name: 'Enterprise Tier',
    level: 'Large Organizations',
    description: 'Regional and multi-entity operations',
    products: [
      { name: 'Custom Applications', impl: '₱650K - ₱1.5M+', monthly: 'Variable' },
      { name: 'Multi-Branch Bundle', impl: '₱650K+', monthly: '₱55K+' },
      { name: 'Enterprise Platform', impl: '₱1.2M+', monthly: '₱85K+' },
    ],
    highlight: false,
  },
];

const bundles = [
  {
    id: 'starter-business',
    name: 'Starter Business',
    includes: ['POS', 'Inventory', 'Accounting'],
    implementation: '₱99K',
    monthly: '₱9,500',
    bestFit: 'Retail, café, small chain',
    discount: '10%',
  },
  {
    id: 'growth-business',
    name: 'Growth Business',
    includes: ['POS', 'Inventory', 'Accounting', 'HR'],
    implementation: '₱155K',
    monthly: '₱14,500',
    bestFit: 'Growing SME / 2-5 branches',
    discount: '15%',
  },
  {
    id: 'customer-growth',
    name: 'Customer Growth',
    includes: ['CRM', 'POS', 'Accounting'],
    implementation: '₱155K',
    monthly: '₱13,500',
    bestFit: 'Retail, service, distribution',
    discount: '12%',
  },
  {
    id: 'operations-360',
    name: 'Operations 360',
    includes: ['Accounting', 'HR', 'Fleet', 'CRM'],
    implementation: '₱270K',
    monthly: '₱24K',
    bestFit: 'Fleet/logistics/field ops',
    discount: '15%',
  },
  {
    id: 'multi-branch',
    name: 'Multi-Branch Enterprise',
    includes: ['3-6 modules', '5 branches'],
    implementation: '₱650K+',
    monthly: '₱55K+',
    bestFit: 'Established regional company',
    discount: '15%',
  },
  {
    id: 'enterprise-platform',
    name: 'Enterprise Platform',
    includes: ['6+ modules', 'Integrations', 'Branches'],
    implementation: '₱1.2M+',
    monthly: '₱85K+',
    bestFit: 'Large/multi-entity org',
    discount: 'Custom',
  },
];

const supportTiers = [
  {
    tier: 'Essential',
    monthlyMin: '₱8K',
    monthlyMax: '₱12K',
    coverage: [
      'Business-hours support',
      'System monitoring',
      'Daily backups',
      'Email support',
    ],
    responseTime: 'Next business day',
    bestFor: 'Single-system SME',
  },
  {
    tier: 'Priority',
    monthlyMin: '₱18K',
    monthlyMax: '₱30K',
    coverage: [
      'Same-day response',
      'Escalation path',
      'Proactive monitoring',
      'Phone + Email support',
    ],
    responseTime: 'Same business day',
    bestFor: 'Multi-system/Revenue-critical',
    highlight: true,
  },
  {
    tier: 'Enterprise',
    monthlyMin: '₱35K',
    monthlyMax: '₱75K+',
    coverage: [
      'On-call escalation',
      'Reporting & governance',
      'Quarterly reviews',
      '24/7 access',
    ],
    responseTime: 'Immediate/On-call',
    bestFor: 'Multi-branch/Mission-critical',
  },
];

export function PricingPage() {
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
              text="Transparent, Flexible, Scalable Pricing"
              variant="primary"
              size="md"
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="text-white">Pricing Built For</span>
            <br />
            <span className="gradient-text">Your Growth Stage</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            From startups to enterprises, we have flexible pricing models with 50/30/20 payment terms and nationwide implementation support.
          </motion.p>
        </motion.div>
      </SectionContainer>

      {/* Pricing Tiers */}
      <SectionContainer padding="lg" background="dark">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Product-Based Pricing
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Choose the tier that matches your business scale and growth ambitions.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {pricingTiers.map((tier) => (
              <motion.div key={tier.name} variants={itemVariants}>
                <GlowCard
                  className={`h-full flex flex-col ${
                    tier.highlight ? 'ring-2 ring-primary-green shadow-glow-green-lg' : ''
                  }`}
                  glowColor="green"
                >
                  {tier.highlight && (
                    <div className="mb-4 inline-block">
                      <Badge text="Most Popular" variant="primary" size="sm" />
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-white mb-1">{tier.name}</h3>
                  <p className="text-primary-green font-semibold mb-2">{tier.level}</p>
                  <p className="text-text-secondary text-sm mb-6">{tier.description}</p>

                  <div className="space-y-3 flex-grow mb-6">
                    {tier.products.map((product) => (
                      <div key={product.name} className="border-t border-primary-green/20 pt-3">
                        <h4 className="font-semibold text-white mb-1">{product.name}</h4>
                        <div className="text-sm space-y-1">
                          <p className="text-primary-green-light">
                            Implementation: <span className="font-bold">{product.impl}</span>
                          </p>
                          {product.monthly && (
                            <p className="text-primary-green-light">
                              Monthly: <span className="font-bold">{product.monthly}</span>
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <CTAButton
                    text="Get Quote"
                    href="/contact?tier=pricing"
                    variant="primary"
                    size="md"
                    className="w-full"
                  />
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* Bundles */}
      <SectionContainer padding="lg" background="gradient">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Popular Bundles
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Save 10-15% when bundling multiple products. Perfect for specific use cases.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {bundles.map((bundle) => (
              <motion.div key={bundle.id} variants={itemVariants}>
                <GlowCard className="h-full flex flex-col" glowColor="green">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{bundle.name}</h3>
                      <p className="text-text-secondary text-sm mt-1">{bundle.bestFit}</p>
                    </div>
                    <Badge text={bundle.discount} variant="primary" size="sm" />
                  </div>

                  <div className="flex-grow mb-6">
                    <h4 className="text-sm font-semibold text-primary-green mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {bundle.includes.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-text-secondary flex items-center gap-2"
                        >
                          <Check size={14} className="text-primary-green-light" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-primary-green/10 rounded-lg p-4 mb-6 border border-primary-green/20">
                    <p className="text-sm text-text-secondary mb-1">Implementation</p>
                    <p className="text-2xl font-bold text-primary-green-light">
                      {bundle.implementation}
                    </p>
                    <p className="text-sm text-text-secondary mt-2">
                      {bundle.monthly}/month
                    </p>
                  </div>

                  <CTAButton
                    text="Get Bundle Quote"
                    href={`/contact?bundle=${bundle.id}`}
                    variant="primary"
                    size="sm"
                    className="w-full"
                  />
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* Support Tiers */}
      <SectionContainer padding="lg" background="dark">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Managed IT & Support Services
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Choose the support tier that matches your operational needs.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {supportTiers.map((tier) => (
              <motion.div key={tier.tier} variants={itemVariants}>
                <GlowCard
                  className={`h-full flex flex-col ${
                    tier.highlight ? 'ring-2 ring-primary-green shadow-glow-green-lg' : ''
                  }`}
                  glowColor="green"
                >
                  {tier.highlight && (
                    <div className="mb-4 inline-block">
                      <Badge text="Recommended" variant="primary" size="sm" />
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-white mb-2">{tier.tier}</h3>
                  <p className="text-primary-green font-semibold mb-4">
                    {tier.monthlyMin} - {tier.monthlyMax}/month
                  </p>
                  <p className="text-text-secondary text-sm mb-6">{tier.bestFor}</p>

                  <div className="flex-grow mb-6">
                    <h4 className="text-sm font-semibold text-primary-green mb-3">Coverage:</h4>
                    <ul className="space-y-2">
                      {tier.coverage.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-text-secondary flex items-start gap-2"
                        >
                          <Check size={14} className="text-primary-green-light mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-primary-green/10 rounded-lg p-3 mb-6 border border-primary-green/20">
                    <p className="text-xs font-semibold text-primary-green-light">
                      ⏱️ Response Time: {tier.responseTime}
                    </p>
                  </div>

                  <CTAButton
                    text="Select Plan"
                    href="/contact?support=true"
                    variant={tier.highlight ? 'primary' : 'secondary'}
                    size="sm"
                    className="w-full"
                  />
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* Payment Terms */}
      <SectionContainer padding="lg" background="gradient">
        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-8" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Flexible Payment Terms
            </h2>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-6" variants={containerVariants}>
            {[
              { percent: '50%', phase: 'Mobilization', color: 'from-primary-green' },
              { percent: '30%', phase: 'UAT / Ready-for-Go-Live', color: 'from-primary-green-dark' },
              { percent: '20%', phase: 'Production Acceptance', color: 'from-primary-green-light' },
            ].map((term, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <GlowCard className="text-center" glowColor="green">
                  <div className={`text-4xl font-bold bg-gradient-to-r ${term.color} to-primary-green-light bg-clip-text text-transparent mb-2`}>
                    {term.percent}
                  </div>
                  <p className="text-text-secondary">{term.phase}</p>
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
            <span className="text-white">Need a Custom Quote?</span>
            <br />
            <span className="gradient-text">Let's Discuss Your Needs</span>
          </motion.h2>

          <motion.p
            className="text-lg text-text-secondary max-w-2xl mx-auto mb-8"
            variants={itemVariants}
          >
            Every business is unique. We provide customized pricing based on your specific requirements, scale, and deployment preferences.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <CTAButton
                text="Request Custom Quote"
                href="/contact?type=pricing"
                variant="primary"
                size="lg"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CTAButton
                text="Schedule Demo"
                href="/contact?type=demo"
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
