'use client';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export default function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-lg transition duration-300";
  const variantStyles = variant === 'primary'
    ? "bg-indigo-600 text-white hover:bg-indigo-700"
    : "border border-slate-600 text-white hover:bg-slate-600";

  return (
    <button className={`${baseStyles} ${variantStyles}`} onClick={onClick}>
      {children}
    </button>
  );
}
