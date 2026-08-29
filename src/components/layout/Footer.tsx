'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { HUBS } from '@/utils/constants';

const footerLinks = {
  product: [
    { label: 'Products', href: '/products' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Industries', href: '/industries' },
    { label: 'Process', href: '/process' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/resources' },
    { label: 'Case Studies', href: '/resources?tab=case-studies' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Security', href: '/security' },
    { label: 'SLA', href: '/sla' },
  ],
  support: [
    { label: 'Documentation', href: '/docs' },
    { label: 'Support Portal', href: 'https://support.fssoftwares.ph' },
    { label: 'Status Page', href: 'https://status.fssoftwares.ph' },
    { label: 'Contact Support', href: '/contact?type=support' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/fssoftwares', label: 'Facebook' },
  { icon: Linkedin, href: 'https://linkedin.com/company/fssoftwares', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/fssoftwares', label: 'Twitter' },
];

export function Footer() {
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative border-t border-silver/10 bg-gradient-to-b from-dark-bg to-navy-dark">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-40 bg-glow-green blur-3xl opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Column */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-green to-primary-green-dark rounded-lg group-hover:shadow-glow-green transition-all" />
              <div>
                <div className="font-bold text-white">FS Softwares</div>
                <div className="text-xs text-text-secondary">TophComm Systems</div>
              </div>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Stop running your business from spreadsheets. We build business management systems that give Philippine companies clear visibility, real control, and operational ownership.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-primary-green/10 text-primary-green hover:bg-primary-green hover:text-white transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-primary-green transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-primary-green transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-primary-green transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Three Hubs Section */}
        <motion.div
          className="bg-gradient-to-r from-primary-green/5 to-primary-green/10 border border-primary-green/20 rounded-2xl p-8 mb-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="font-semibold text-white mb-6 text-center">📍 Nationwide Support - Three Strategic Hubs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(HUBS).map((hub) => (
              <div key={hub.id} className="text-center">
                <h4 className="font-semibold text-primary-green mb-2">{hub.name}</h4>
                <p className="text-text-secondary text-sm mb-1">{hub.region}</p>
                <p className="text-text-secondary text-sm mb-3">{hub.city}</p>
                <div className="space-y-1 text-sm">
                  <a
                    href={`tel:${hub.phone}`}
                    className="text-text-secondary hover:text-primary-green transition-colors block"
                  >
                    {hub.phone}
                  </a>
                  <a
                    href={`mailto:${hub.email}`}
                    className="text-text-secondary hover:text-primary-green transition-colors block"
                  >
                    {hub.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          className="border-t border-silver/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-text-secondary text-sm text-center md:text-left">
            © {new Date().getFullYear()} FS Softwares by TophComm Systems. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-text-secondary text-sm hover:text-primary-green transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-text-secondary text-sm hover:text-primary-green transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="text-text-secondary text-sm hover:text-primary-green transition-colors">
              Security
            </Link>
          </div>
          <p className="text-text-secondary text-sm">
            Built with 💚 for Philippine businesses | Nationwide Coverage
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
