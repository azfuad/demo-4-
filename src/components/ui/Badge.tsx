interface BadgeProps {
  children: string;
  variant?: 'primary' | 'warning' | 'error';
}

export function Badge({ children, variant = 'primary' }: BadgeProps) {
  const variants = {
    primary: "bg-primary text-white",
    warning: "bg-amber-400 text-black",
    error: "bg-red-600 text-white"
  };

  return (
    <span className={`px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider ${variants[variant]}`}>
      {children}
    </span>
  );
}
