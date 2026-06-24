import React from 'react';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
  ...props
}) => {
  const baseStyle =
    'rounded-full font-medium transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-center inline-block cursor-pointer';
  
  const variants = {
    primary: 'bg-primary text-background hover:bg-primary/90 hover:scale-[1.02] px-6 py-2.5 text-sm',
    secondary: 'bg-surface-container border border-outline-variant text-primary hover:bg-surface-container-high px-6 py-2.5 text-sm',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-background px-6 py-2.5 text-sm',
    accent: 'bg-tertiary-container text-on-tertiary hover:opacity-90 px-6 py-2.5 text-sm',
    link: 'text-primary-fixed hover:text-white underline p-0 bg-transparent',
    lg: 'bg-primary text-background hover:bg-primary/90 hover:scale-105 px-10 py-4 text-base font-bold'
  };

  const selectedVariant = variants[variant] || variants.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${selectedVariant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
