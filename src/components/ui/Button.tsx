import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick 
}: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-pill font-bold transition-all flex items-center justify-center gap-2 active:translate-y-[2px]";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-container",
    secondary: "bg-secondary text-white hover:opacity-90",
    outline: "border-2 border-primary text-primary hover:bg-primary/5"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
