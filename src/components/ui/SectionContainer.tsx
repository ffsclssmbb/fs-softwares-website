'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'dark' | 'gradient' | 'transparent';
  padding?: 'sm' | 'md' | 'lg';
}

export function SectionContainer({
  children,
  className = '',
  id,
  background = 'dark',
  padding = 'lg',
}: SectionContainerProps) {
  const backgrounds = {
    dark: 'bg-dark-bg',
    gradient: 'bg-gradient-to-b from-dark-bg to-navy-dark',
    transparent: 'bg-transparent',
  };

  const paddings = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24 lg:py-32',
  };

  return (
    <section
      className={`${backgrounds[background]} ${paddings[padding]} ${className}`}
      id={id}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
