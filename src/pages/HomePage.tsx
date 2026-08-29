'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Map } from 'lucide-react';
import { CTAButton, Badge, SectionContainer } from '@/components/ui';
import { GlowCard } from '@/components/ui/GlowCard';
import { HUBS, PRODUCT_CATEGORIES, FEATURE_HIGHLIGHTS } from '@/utils/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

function HeroSection() {
  return (
    <SectionContainer padding="lg" background="gradient" className="pt-32">
      {/* Grid Background Effect */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-2xl h-96 bg-glow-green blur-3xl opacity-10" />

      <div className="relative">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div className="flex justify-center mb-6" variants={itemVariants}>
            <Badge
              text="📍 Nationwide Coverage: NCR • Cebu • Davao"
              variant="primary"
              size="md"
            />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="text-white">Stop Running Your Business</span>
            <br />
            <span className="gradient-text">from Spreadsheets</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed"
            variants={itemVariants}
          >
            FS Softwares builds business management systems that give Philippine companies clear visibility, real control, and operational ownership. From NCR to Cebu to Davao—we're where you are.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-10"
            variants={containerVariants}
          >
            {[
              'Nationwide Coverage',
              'E2E Tested',
              'Pattern B Architecture',
              'Pre-Transfer Knowledge',
            ].map((badge) => (
              <motion.div key={badge} variants={itemVariants}>
                <Badge text={badge} variant="secondary" size="sm" />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <CTAButton
                text="Book Free Assessment"
                href="/contact?type=assessment"
                variant="primary"
                size="lg"
                className="whitespace-nowrap"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CTAButton
                text="Explore Solutions"
                href="/products"
                variant="secondary"
                size="lg"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}

function ProblemStatementSection() {
  return (
    <SectionContainer padding="lg" background="dark">
      <motion.div
        className="grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left: Stats & Problems */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-white">The Philippine Business Reality</span>
          </h2>

          <div className="space-y-6">
            {[
              { stat: '73%', label: 'of SMEs still use spreadsheets for critical operations' },
              { stat: '0%', label: 'real-time visibility into multi-branch operations' },
              { stat: '∞', label: 'manual errors & data silos across locations' },
              { stat: '❌', label: 'No system for scaling across multiple hubs' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex gap-4"
                variants={itemVariants}
              >
                <div className="text-primary-green text-2xl font-bold min-w-fit">
                  {item.stat}
                </div>
                <p className="text-text-secondary text-lg pt-1">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Solution Framework */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold mb-8 text-white">The FS Softwares Solution</h3>

          <div className="space-y-4">
            {[
              {
                icon: '🔍',
                title: 'Find the Bottleneck',
                description: 'Discovery & Assessment across your operations',
              },
              {
                icon: '⚙️',
                title: 'Fix the Workflow',
                description: 'Pattern-B Built Systems (Tauri + Flutter + API)',
              },
              {
                icon: '📊',
                title: 'See the Numbers',
                description: 'Live Dashboards & Business Intelligence',
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                className="tech-card rounded-xl p-6 border-l-4 border-primary-green"
                variants={itemVariants}
                whileHover={{ x: 8 }}
              >
                <div className="text-4xl mb-3">{step.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-text-secondary">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}

function NationwidePresenceSection() {
  return (
    <SectionContainer padding="lg" background="gradient">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">🏢 Three Strategic Hubs,</span>
            <br />
            <span className="gradient-text">One Nationwide Commitment</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We're where you are. With local presence in Luzon, Visayas, and Mindanao, delivering enterprise-grade systems with regional expertise.
          </p>
        </motion.div>

        {/* Hub Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {Object.values(HUBS).map((hub, idx) => (
            <motion.div key={hub.id} variants={itemVariants}>
              <GlowCard className="h-full flex flex-col" glowColor="green">
                <div className="flex items-center gap-3 mb-4">
                  <Map className="text-primary-green" size={28} />
                  <div>
                    <h3 className="font-bold text-white text-lg">{hub.name}</h3>
                    <p className="text-sm text-text-secondary">{hub.region}</p>
                  </div>
                </div>

                <div className="flex-grow">
                  <p className="text-text-secondary text-sm mb-6">
                    <span className="font-semibold text-white">📍 {hub.city}</span>
                  </p>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm text-text-secondary">
                      <span className="font-semibold text-white">Coverage:</span> {hub.coverage.join(', ')}
                    </p>
                  </div>
                </div>

                <div className="border-t border-primary-green/20 pt-4 space-y-2">
                  <a
                    href={`tel:${hub.phone}`}
                    className="text-primary-green text-sm hover:text-primary-green-light transition-colors"
                  >
                    📞 {hub.phone}
                  </a>
                  <a
                    href={`mailto:${hub.email}`}
                    className="text-primary-green text-sm hover:text-primary-green-light transition-colors block truncate"
                  >
                    ✉️ {hub.email}
                  </a>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}

function ProductCategoriesSection() {
  return (
    <SectionContainer padding="lg" background="dark">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">20+ Business Solutions</span>
            <br />
            <span className="gradient-text">Across 6 Categories</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From infrastructure to specialized services, we have solutions for every industry and business size.
          </p>
        </motion.div>

        {/* Category Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {PRODUCT_CATEGORIES.map((category) => (
            <motion.div key={category.id} variants={itemVariants}>
              <GlowCard
                className="group cursor-pointer h-full"
                glowColor="green"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{category.icon === 'construction' ? '🏗️' : category.icon === 'building' ? '🏢' : category.icon === 'heart' ? '❤️' : category.icon === 'truck' ? '🚚' : category.icon === 'briefcase' ? '💼' : '✨'}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-green transition-colors">
                      {category.name}
                    </h3>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {category.description}
                </p>
                <div className="mt-6 flex items-center text-primary-green font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                  Explore Solutions
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}

function FeaturesSection() {
  return (
    <SectionContainer padding="lg" background="gradient">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-glow-green blur-3xl opacity-5" />

      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Why Choose</span>
            <br />
            <span className="gradient-text">FS Softwares?</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {FEATURE_HIGHLIGHTS.map((feature, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-primary-green/10 border border-primary-green/30">
                    <span className="text-2xl">
                      {feature.icon === 'zap' ? '⚡' :
                        feature.icon === 'check-circle' ? '✅' :
                        feature.icon === 'lightbulb' ? '💡' :
                        '🗺️'}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-text-secondary">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}

function CTASection() {
  return (
    <SectionContainer padding="lg" background="dark">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <motion.div
        className="relative text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          variants={itemVariants}
        >
          <span className="text-white">Ready to Upgrade Your</span>
          <br />
          <span className="gradient-text">Business Systems?</span>
        </motion.h2>

        <motion.p
          className="text-lg text-text-secondary max-w-2xl mx-auto mb-10"
          variants={itemVariants}
        >
          Get a free 30-minute consultation with our regional experts. No obligation. Nationwide support from 3 hubs.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <CTAButton
              text="Schedule Consultation"
              href="/contact"
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
  );
}

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemStatementSection />
      <NationwidePresenceSection />
      <ProductCategoriesSection />
      <FeaturesSection />
      <CTASection />
    </>
  );
}
