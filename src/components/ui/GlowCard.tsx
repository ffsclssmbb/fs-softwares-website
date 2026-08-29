'use client';

import { motion, MotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';

interface GlowCardProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'green' | 'silver';
  hover?: boolean;
}

export function GlowCard({
  children,
  className,
  glowColor = 'green',
  hover = true,
  ...props
}: GlowCardProps) {
  const glowClass = glowColor === 'green' ? 'glow-green' : 'glow-silver';
  const hoverClass = hover
    ? glowColor === 'green'
      ? 'hover:glow-green-lg hover:scale-105'
      : 'hover:glow-silver-lg hover:scale-105'
    : '';

  return (
    <motion.div
      className={cn(
        'tech-card rounded-2xl p-6 transition-all duration-300',
        glowClass,
        hoverClass,
        className
      )}
      whileHover={hover ? { y: -8 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
}
