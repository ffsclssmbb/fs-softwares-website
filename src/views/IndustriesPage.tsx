'use client';

import { motion } from 'framer-motion';
import { INDUSTRIES } from '@/utils/constants';
import { SectionContainer, CTAButton, GlowCard, Badge } from '@/components/ui';
import { MapPin, TrendingUp } from 'lucide-react';

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

export function IndustriesPage() {
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
              text="12 Industry Verticals"
              variant="primary"
              size="md"
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="text-white">Solutions Built For</span>
            <br />
            <span className="gradient-text">Every Philippine Industry</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            From telecommunications to specialized services, we serve 12 key industry verticals with tailored solutions and regional expertise.
          </motion.p>
        </motion.div>
      </SectionContainer>

      {/* Industries Grid */}
      <SectionContainer padding="lg" background="dark">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {INDUSTRIES.map((industry) => (
            <motion.div key={industry.id} variants={itemVariants}>
              <GlowCard className="group h-full flex flex-col" glowColor="green">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary-green transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-text-secondary mt-1">{industry.description}</p>
                  </div>
                </div>

                {/* Pain Points */}
                <div className="mb-6 flex-grow">
                  <h4 className="text-sm font-semibold text-primary-green mb-3">Key Challenges</h4>
                  <ul className="space-y-2">
                    {industry.painPoints.map((point) => (
                      <li
                        key={point}
                        className="text-sm text-text-secondary flex items-start gap-2"
                      >
                        <span className="text-primary-green mt-1">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommended Solutions */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary-green mb-3">Recommended Solutions</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.solutions.map((solution) => (
                      <span
                        key={solution}
                        className="px-2 py-1 text-xs rounded-full bg-primary-green/20 text-primary-green-light border border-primary-green/30"
                      >
                        {solution}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Regional Examples */}
                <div className="border-t border-primary-green/20 pt-4">
                  <h4 className="text-sm font-semibold text-primary-green mb-3 flex items-center gap-2">
                    <MapPin size={16} /> Regional Deployments
                  </h4>
                  <div className="space-y-2">
                    {industry.regionalExamples.map((example) => (
                      <p
                        key={`${example.hub}-${example.example}`}
                        className="text-xs text-text-secondary"
                      >
                        <span className="font-semibold text-white">📍 {example.hub.toUpperCase()}:</span> {example.example}
                      </p>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </SectionContainer>

      {/* Stats Section */}
      <SectionContainer padding="lg" background="gradient">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { stat: '12+', label: 'Industry Verticals Served' },
            { stat: '100+', label: 'Deployments Nationwide' },
            { stat: '3', label: 'Regional Hubs' },
          ].map((item, idx) => (
            <motion.div key={idx} className="text-center" variants={itemVariants}>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {item.stat}
              </div>
              <p className="text-text-secondary">{item.label}</p>
            </motion.div>
          ))}
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
            <span className="text-white">Find the Right Solution</span>
            <br />
            <span className="gradient-text">for Your Industry</span>
          </motion.h2>

          <motion.p
            className="text-lg text-text-secondary max-w-2xl mx-auto mb-8"
            variants={itemVariants}
          >
            Let's discuss how FS Softwares can transform your business operations.
          </motion.p>

          <motion.div variants={itemVariants}>
            <CTAButton
              text="Schedule Industry Consultation"
              href="/contact?type=industry"
              variant="primary"
              size="lg"
            />
          </motion.div>
        </motion.div>
      </SectionContainer>
    </>
  );
}
