"use client";

import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'white';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-block px-6 py-3 rounded-md font-medium transition-colors';
  
  const variantClasses = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-indigo-900',
    white: 'bg-white text-indigo-900 hover:bg-gray-100',
  };
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
