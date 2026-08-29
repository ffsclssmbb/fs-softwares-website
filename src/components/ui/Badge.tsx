'use client';

import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface BadgeProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  text,
  variant = 'primary',
  size = 'md',
  className,
  icon,
}: BadgeProps) {
  const variants = {
    primary: 'bg-primary-green/20 text-primary-green border border-primary-green/50',
    secondary: 'bg-silver/10 text-silver border border-silver/30',
    accent: 'bg-primary-green-dark/20 text-primary-green-light border border-primary-green-dark/50',
  };

  const sizes = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2',
  };

  return (
    <motion.div
      className={cn(
        'inline-flex items-center gap-1 rounded-full font-semibold backdrop-blur-sm',
        variants[variant],
        sizes[size],
        className
      )}
      whileHover={{ scale: 1.05 }}
    >
      {icon}
      {text}
    </motion.div>
  );
}
