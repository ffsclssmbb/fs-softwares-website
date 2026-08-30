'use client';

import { motion } from 'framer-motion';
import { SectionContainer, CTAButton, GlowCard, Badge } from '@/components/ui';
import { HUBS } from '@/utils/constants';
import { Users, Zap, Globe, Award } from 'lucide-react';

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

export function AboutPage() {
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
              text="Born in Mindanao | Built for the Philippines"
              variant="primary"
              size="md"
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="text-white">About</span>
            <br />
            <span className="gradient-text">FS Softwares & TophComm Systems</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            We're a Philippine-based software company building enterprise-grade business management systems with nationwide reach and local presence.
          </motion.p>
        </motion.div>
      </SectionContainer>

      {/* Company Story */}
      <SectionContainer padding="lg" background="dark">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left: Story */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">Our Story</span>
            </h2>

            <div className="space-y-6 text-text-secondary">
              <p className="text-lg leading-relaxed">
                <span className="font-semibold text-white">TophComm Systems</span> is the development powerhouse behind <span className="font-semibold text-primary-green">FS Softwares</span>. Founded in Mindanao and now serving the entire Philippines, we're on a mission to democratize enterprise-grade business systems for Philippine SMEs and enterprises.
              </p>

              <p className="text-lg leading-relaxed">
                We started with a simple observation: 73% of Philippine SMEs still run critical operations from spreadsheets. No real-time visibility. No data integration. No operational control across multiple locations.
              </p>

              <p className="text-lg leading-relaxed">
                So we built FS Softwares—not just software installations, but a pathway to operational ownership. Every system comes with pre-transfer knowledge transfer, ensuring your people own the solution, not just IT.
              </p>
            </div>
          </motion.div>

          {/* Right: Mission & Vision */}
          <motion.div variants={containerVariants}>
            {[
              {
                icon: '🎯',
                title: 'Our Mission',
                description: 'Democratize enterprise-grade business systems for Philippine SMEs and enterprises',
              },
              {
                icon: '🔮',
                title: 'Our Vision',
                description: 'Every Philippine business, from Batanes to Jolo, running on systems that work',
              },
              {
                icon: '⚡',
                title: 'Our Approach',
                description: 'Find the bottleneck. Fix the workflow. See the numbers. Build ownership.',
              },
            ].map((item, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <GlowCard className="mb-6" glowColor="green">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-text-secondary">{item.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* Three Hub Strategy */}
      <SectionContainer padding="lg" background="gradient">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">🗺️ Three Strategic Hubs,</span>
              <br />
              <span className="gradient-text">One Nationwide Commitment</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              We believe in local presence with global standards. Our three-hub strategy ensures nationwide coverage with regional expertise.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {Object.values(HUBS).map((hub) => (
              <motion.div key={hub.id} variants={itemVariants}>
                <GlowCard className="h-full" glowColor="green">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl">
                      {hub.id === 'ncr' ? '🏢' : hub.id === 'cebu' ? '🏝️' : '🌴'}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">{hub.name}</h3>
                      <p className="text-sm text-text-secondary">{hub.region}</p>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <p className="text-text-secondary text-sm mb-4">
                      <span className="font-semibold text-white block mb-2">📍 {hub.city}</span>
                    </p>
                    <div className="bg-primary-green/10 rounded-lg p-3 border border-primary-green/20 mb-4">
                      <p className="text-xs text-primary-green-light font-semibold">
                        <span className="text-primary-green">Coverage:</span> {hub.coverage.join(', ')}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-primary-green/20 pt-4 space-y-1 text-sm">
                    <p className="text-primary-green font-semibold">📞 {hub.phone}</p>
                    <p className="text-primary-green">✉️ {hub.email}</p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* Leadership */}
      <SectionContainer padding="lg" background="dark">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Leadership
            </h2>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlowCard className="text-center" glowColor="green">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary-green/20 border-2 border-primary-green">
                  <span className="text-5xl">👨‍💼</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Fritz Suarez</h3>
              <p className="text-primary-green font-semibold mb-4">
                Program Creator & Owner | Founder
              </p>
              <div className="bg-primary-green/10 rounded-lg p-4 border border-primary-green/20 mb-6">
                <p className="text-sm text-text-secondary mb-3 font-semibold">Credentials:</p>
                <div className="space-y-1 text-sm text-text-secondary">
                  <p>✓ Certified Property Manager (CPM®)</p>
                  <p>✓ Certified Logistics & Supply Chain Professional (CLMP®, CLSSMBB®, CLSCM®)</p>
                  <p>✓ Certified Information Systems Security Professional (CISSP®)</p>
                  <p>✓ Project Management Professional (PMP®)</p>
                  <p>✓ Lean Six Sigma Master Black Belt</p>
                </div>
              </div>
              <p className="text-text-secondary text-sm">
                <span className="font-semibold text-white">Based in:</span> Davao City, Mindanao
              </p>
              <p className="text-text-secondary text-sm">
                <span className="font-semibold text-white">Overseeing:</span> Nationwide operations across 3 hubs
              </p>
            </GlowCard>
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* Technical Architecture */}
      <SectionContainer padding="lg" background="gradient">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Technical Architecture
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {[
              {
                title: 'Pattern B Architecture',
                description: 'Tauri + Flutter + API',
                features: ['Cloud-native', 'Cross-platform', 'Scalable', 'Modern tech stack'],
              },
              {
                title: 'E2E Tested',
                description: 'Production-ready across 4 deployment profiles',
                features: ['Comprehensive testing', 'Cloud & On-premise', 'Hybrid options', 'SaaS ready'],
              },
              {
                title: 'Manual Credited',
                description: 'Full documentation included',
                features: ['Complete guides', 'System documentation', 'API specs', 'Training materials'],
              },
              {
                title: 'Dual-Control & Audit-Logging',
                description: 'Level-1 cloud systems governance',
                features: ['FS Command Console', 'FS AuditWatch', 'Security oversight', 'Compliance ready'],
              },
            ].map((item, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <GlowCard className="h-full" glowColor="green">
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-primary-green font-semibold text-sm mb-4">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.features.map((feature) => (
                      <li key={feature} className="text-sm text-text-secondary flex items-start gap-2">
                        <span className="text-primary-green-light mt-1">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* Values */}
      <SectionContainer padding="lg" background="dark">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Core Values
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {[
              {
                icon: '👥',
                title: 'Operational Ownership',
                description: 'Your people own the system, not just IT departments',
              },
              {
                icon: '🔍',
                title: 'Transparency',
                description: 'No black boxes. Clear pricing, documented processes, honest communication.',
              },
              {
                icon: '🇵🇭',
                title: 'Philippine Pride',
                description: 'Built here, for here. From Mindanao to the nation with local expertise.',
              },
              {
                icon: '📈',
                title: 'Sustainable Growth',
                description: 'We price complexity, not just software. ROI-focused solutions.',
              },
              {
                icon: '🤝',
                title: 'Local Presence',
                description: 'Three hubs, one commitment: being where you are when you need us.',
              },
              {
                icon: '⚙️',
                title: 'Technical Excellence',
                description: 'Modern architecture, E2E tested, production-ready systems.',
              },
            ].map((value, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <GlowCard className="h-full text-center" glowColor="green">
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-text-secondary text-sm">{value.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer padding="lg" background="gradient">
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
            <span className="text-white">Join Philippine Businesses</span>
            <br />
            <span className="gradient-text">Running on FS Softwares</span>
          </motion.h2>

          <motion.p
            className="text-lg text-text-secondary max-w-2xl mx-auto mb-8"
            variants={itemVariants}
          >
            From Luzon to Mindanao, businesses are transforming their operations with our solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <CTAButton
                text="Get Free Assessment"
                href="/contact?type=assessment"
                variant="primary"
                size="lg"
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
      </SectionContainer>
    </>
  );
}
