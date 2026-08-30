'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionContainer, CTAButton, GlowCard, Badge } from '@/components/ui';
import { HUBS } from '@/utils/constants';
import { useRegionalHub } from '@/hooks';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import toast from 'react-hot-toast';

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

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    industry: '',
    numberOfBranches: '1',
    currentSystems: [] as string[],
    message: '',
    preferredContact: 'email' as const,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const selectedHub = useRegionalHub(formData.location);

  const handleChange = (e: any) => {
    const { name, value, checked } = e.target;

    if (name === 'currentSystems') {
      setFormData(prev => ({
        ...prev,
        currentSystems: checked
          ? [...prev.currentSystems, value]
          : prev.currentSystems.filter(s => s !== value),
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Thank you! We\'ll be in touch soon.');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        location: '',
        industry: '',
        numberOfBranches: '1',
        currentSystems: [],
        message: '',
        preferredContact: 'email',
      });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
              text="🗺️ Nationwide Support | 3 Strategic Hubs"
              variant="primary"
              size="md"
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="text-white">Let's Connect</span>
            <br />
            <span className="gradient-text">Your Nearest Hub is Waiting</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            Reach out to our regional teams. We're ready to discuss your business needs and show you how FS Softwares can transform your operations.
          </motion.p>
        </motion.div>
      </SectionContainer>

      {/* Contact Form & Hub Info */}
      <SectionContainer padding="lg" background="dark">
        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Form */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <GlowCard className="h-full" glowColor="green">
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Company */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-primary-green/10 border border-primary-green/30 rounded-lg px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full bg-primary-green/10 border border-primary-green/30 rounded-lg px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-primary-green/10 border border-primary-green/30 rounded-lg px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-primary-green/10 border border-primary-green/30 rounded-lg px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green"
                      placeholder="+63 9XX XXX XXXX"
                    />
                  </div>
                </div>

                {/* Location & Industry */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Location/City *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full bg-primary-green/10 border border-primary-green/30 rounded-lg px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green"
                      placeholder="e.g., Manila, Cebu, Davao"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Industry *
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      className="w-full bg-primary-green/10 border border-primary-green/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green"
                    >
                      <option value="">Select an industry</option>
                      <option value="telecommunications">Telecommunications</option>
                      <option value="construction">Construction</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="retail">Retail</option>
                      <option value="logistics">Logistics</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Number of Branches */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Number of Branches/Locations
                  </label>
                  <select
                    name="numberOfBranches"
                    value={formData.numberOfBranches}
                    onChange={handleChange}
                    className="w-full bg-primary-green/10 border border-primary-green/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green"
                  >
                    <option value="1">1 Location</option>
                    <option value="2-5">2-5 Locations</option>
                    <option value="6-10">6-10 Locations</option>
                    <option value="10+">10+ Locations</option>
                  </select>
                </div>

                {/* Current Systems */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-3">
                    Current Systems in Use
                  </label>
                  <div className="space-y-2">
                    {['Spreadsheets', 'Legacy Software', 'Cloud Software', 'Custom Development', 'Nothing Formal'].map(
                      (system) => (
                        <label key={system} className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            name="currentSystems"
                            value={system}
                            checked={formData.currentSystems.includes(system)}
                            onChange={handleChange}
                            className="w-4 h-4 accent-primary-green"
                          />
                          <span className="text-text-secondary">{system}</span>
                        </label>
                      )
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-primary-green/10 border border-primary-green/30 rounded-lg px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green"
                    placeholder="Tell us about your business needs..."
                  />
                </div>

                {/* Preferred Contact */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="space-y-2">
                    {['email', 'phone', 'both'].map((method) => (
                      <label key={method} className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={formData.preferredContact === method}
                          onChange={handleChange}
                          className="w-4 h-4 accent-primary-green"
                        />
                        <span className="text-text-secondary capitalize">
                          {method === 'both' ? 'Email & Phone' : method}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-green text-white font-bold py-3 rounded-lg hover:bg-primary-green-dark transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </GlowCard>
          </motion.div>

          {/* Hub Information */}
          <motion.div className="space-y-6" variants={containerVariants}>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">📍 Suggested Hub</h3>
              {selectedHub ? (
                <GlowCard glowColor="green" className="ring-2 ring-primary-green">
                  <p className="text-sm text-text-secondary mb-2">Based on your location:</p>
                  <h4 className="text-xl font-bold text-primary-green mb-3">
                    {HUBS[selectedHub].name}
                  </h4>
                  <p className="text-text-secondary text-sm">{HUBS[selectedHub].city}</p>
                </GlowCard>
              ) : (
                <GlowCard glowColor="silver">
                  <p className="text-sm text-text-secondary">Enter your location to see your nearest hub</p>
                </GlowCard>
              )}
            </div>

            {/* All Hubs */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Direct Contact</h3>
              <div className="space-y-4">
                {Object.values(HUBS).map((hub) => (
                  <GlowCard key={hub.id} glowColor="green" className="!p-4">
                    <p className="font-bold text-white text-sm mb-2">{hub.name}</p>
                    <p className="text-xs text-text-secondary mb-2">{hub.city}</p>
                    <div className="space-y-1 text-xs">
                      <a href={`tel:${hub.phone}`} className="text-primary-green hover:text-primary-green-light flex items-center gap-2">
                        <Phone size={12} /> {hub.phone}
                      </a>
                      <a href={`mailto:${hub.email}`} className="text-primary-green hover:text-primary-green-light flex items-center gap-2 truncate">
                        <Mail size={12} /> {hub.email}
                      </a>
                    </div>
                  </GlowCard>
                ))}
              </div>
            </div>

            {/* Support Info */}
            <GlowCard glowColor="silver" className="bg-silver/5">
              <p className="text-xs font-bold text-white mb-2">Need Immediate Help?</p>
              <p className="text-xs text-text-secondary mb-3">
                Call our toll-free support line
              </p>
              <p className="text-sm font-bold text-primary-green">1-800-FS-SOFT</p>
              <p className="text-xs text-text-secondary mt-2">Mon-Fri 8AM-6PM PHT</p>
            </GlowCard>
          </motion.div>
        </motion.div>
      </SectionContainer>
    </>
  );
}
