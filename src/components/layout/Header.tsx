'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
  { label: 'Industries', href: '/industries' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'glass shadow-lg'
          : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-green to-primary-green-dark rounded-lg group-hover:shadow-glow-green transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl">FS</span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-white text-sm md:text-base">FS Softwares</span>
              <span className="text-xs text-text-secondary">TophComm Systems</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-primary-green transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-green group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-semibold text-text-primary border border-primary-green rounded-lg hover:bg-primary-green/10 transition-all duration-300"
            >
              Contact
            </Link>
            <Link
              href="/contact?type=assessment"
              className="px-4 py-2 text-sm font-semibold text-white bg-primary-green rounded-lg hover:bg-primary-green-dark hover:shadow-glow-green transition-all duration-300"
            >
              Free Assessment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text-secondary hover:text-primary-green transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className="lg:hidden bg-card-bg/80 backdrop-blur-md border-t border-silver/10 mt-2 rounded-b-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm font-medium text-text-secondary hover:text-primary-green hover:bg-primary-green/5 rounded-lg transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-silver/10 mt-4 pt-4 space-y-2">
                  <Link
                    href="/contact"
                    className="block px-4 py-2 text-sm font-semibold text-text-primary border border-primary-green rounded-lg hover:bg-primary-green/10 transition-all duration-300 text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link
                    href="/contact?type=assessment"
                    className="block px-4 py-2 text-sm font-semibold text-white bg-primary-green rounded-lg hover:bg-primary-green-dark transition-all duration-300 text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Free Assessment
                  </Link>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
