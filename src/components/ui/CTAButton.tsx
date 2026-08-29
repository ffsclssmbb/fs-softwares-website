'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';

interface CTAButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export function CTAButton({
  text,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  icon,
  disabled,
}: CTAButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group';

  const variants = {
    primary: 'bg-primary-green text-white hover:bg-primary-green-dark shadow-glow-green hover:shadow-glow-green-lg',
    secondary: 'bg-transparent border border-primary-green text-primary-green hover:bg-primary-green/10',
    ghost: 'text-primary-green hover:bg-primary-green/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClass = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  const content = (
    <>
      {text}
      {!icon && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
      {icon}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClass}
        whileHover={!disabled ? { scale: 1.02 } : {}}
        whileTap={!disabled ? { scale: 0.98 } : {}}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
    >
      {content}
    </motion.button>
  );
}
