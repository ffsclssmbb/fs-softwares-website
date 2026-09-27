'use client';

import { motion } from 'framer-motion';
import { PROCESS_STEPS, HUBS } from '@/utils/constants';
import { SectionContainer, CTAButton, GlowCard, Badge } from '@/components/ui';

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

export function ProcessPage() {
  const phaseColors = {
    discovery: 'border-l-primary-green',
    design: 'border-l-silver',
    delivery: 'border-l-primary-green-dark',
  };

  const phaseLabels = {
    discovery: 'Phase 1: Discovery (Steps 1-3)',
    design: 'Phase 2: Solution Design (Steps 4-6)',
    delivery: 'Phase 3: Delivery (Steps 7-9)',
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
              text="9-Step Sales-to-Go-Live Journey"
              variant="primary"
              size="md"
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="text-white">The FS Softwares</span>
            <br />
            <span className="gradient-text">Sales-to-Go-Live Journey</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            From discovery to delivery, we guide you through every step with pre-transfer knowledge transfer as our key differentiator.
          </motion.p>
        </motion.div>
      </SectionContainer>

      {/* Process Steps */}
      <SectionContainer padding="lg" background="dark">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Group by phase */}
          {(['discovery', 'design', 'delivery'] as const).map((phase) => (
            <motion.div key={phase} className="mb-16" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-8">
                {phaseLabels[phase]}
              </h2>

              <div className="space-y-6">
                {PROCESS_STEPS.filter((step) => step.phase === phase).map(
                  (step) => (
                    <motion.div
                      key={step.number}
                      variants={itemVariants}
                    >
                      <GlowCard
                        className={`border-l-4 ${phaseColors[phase]}`}
                        glowColor="green"
                      >
                        <div className="grid md:grid-cols-12 gap-6">
                          {/* Step Number */}
                          <div className="md:col-span-1 flex items-start">
                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-green/20 border border-primary-green/50">
                              <span className="text-xl font-bold text-primary-green">
                                {step.number}
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="md:col-span-11">
                            <h3 className="text-xl font-bold text-white mb-2">
                              {step.title}
                            </h3>
                            <p className="text-text-secondary mb-4">
                              {step.description}
                            </p>

                            {/* Details */}
                            <div className="grid md:grid-cols-2 gap-6 mb-4">
                              <div>
                                <h4 className="text-sm font-semibold text-primary-green mb-2">
                                  What We Do
                                </h4>
                                <ul className="space-y-1">
                                  {step.details.map((detail) => (
                                    <li
                                      key={detail}
                                      className="text-sm text-text-secondary flex items-start gap-2"
                                    >
                                      <span className="text-primary-green mt-1">▸</span>
                                      {detail}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold text-primary-green-light mb-2">
                                  You Get
                                </h4>
                                <ul className="space-y-1">
                                  {step.outcomes.map((outcome) => (
                                    <li
                                      key={outcome}
                                      className="text-sm text-text-secondary flex items-start gap-2"
                                    >
                                      <span className="text-primary-green-light mt-1">✓</span>
                                      {outcome}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Highlight for step 7 */}
                            {step.number === 7 && (
                              <div className="mt-4 p-4 bg-primary-green/10 border border-primary-green/30 rounded-lg">
                                <p className="text-sm text-primary-green-light font-semibold">
                                  ⭐ KEY DIFFERENTIATOR: Pre-Transfer Knowledge Transfer is the hinge between software delivery and operational ownership. Your people own the system, not just IT.
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </GlowCard>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionContainer>

      {/* Regional Deployment */}
      <SectionContainer padding="lg" background="gradient">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">🌏 Nationwide Deployment</span>
              <br />
              <span className="gradient-text">Coordinated from 3 Strategic Hubs</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {Object.entries({
              ncr: {
                hub: 'NCR (Luzon)',
                coordination: 'Luzon deployments coordinated from NCR hub',
                coverage: 'National Capital Region & Northern Philippines',
              },
              cebu: {
                hub: 'Cebu (Visayas)',
                coordination: 'Visayas deployments coordinated from Cebu hub',
                coverage: 'Visayas & Central Philippines',
              },
              davao: {
                hub: 'Davao (Mindanao)',
                coordination: 'Mindanao deployments coordinated from Davao hub',
                coverage: 'Mindanao & Southern Philippines',
              },
            }).map(([key, region]) => (
              <motion.div key={key} variants={itemVariants}>
                <GlowCard glowColor="green" className="h-full">
                  <h3 className="text-xl font-bold text-primary-green mb-3">
                    {region.hub}
                  </h3>
                  <p className="text-sm text-text-secondary mb-4">
                    {region.coordination}
                  </p>
                  <div className="p-3 bg-primary-green/10 rounded-lg border border-primary-green/20">
                    <p className="text-xs font-semibold text-primary-green-light">
                      Coverage: {region.coverage}
                    </p>
                  </div>
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
            <span className="text-white">Ready to Start Your</span>
            <br />
            <span className="gradient-text">FS Softwares Journey?</span>
          </motion.h2>

          <motion.p
            className="text-lg text-text-secondary max-w-2xl mx-auto mb-8"
            variants={itemVariants}
          >
            Schedule a free consultation with our team to discuss your business needs and the right solution for you.
          </motion.p>

          <motion.div variants={itemVariants}>
            <CTAButton
              text="Start Your Journey"
              href="/contact?type=discovery"
              variant="primary"
              size="lg"
            />
          </motion.div>
        </motion.div>
      </SectionContainer>
    </>
  );
}
