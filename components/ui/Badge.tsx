'use client';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'outline' | 'filled';
  size?: 'sm' | 'md' | 'lg';
}

export default function Badge({ children, variant = 'filled', size = 'md' }: BadgeProps) {
  const baseStyles = "rounded-full px-3 py-1 text-sm font-semibold";
  const variantStyles = variant === 'outline' 
    ? "border border-slate-600 text-slate-300" 
    : "bg-indigo-600 text-white";

  const sizeStyles = size === 'sm' 
    ? "text-xs" 
    : size === 'lg' 
    ? "text-lg" 
    : "text-sm";

  return (
    <span className={`${baseStyles} ${variantStyles} ${sizeStyles}`}>
      {children}
    </span>
  );
}
