import Link from "next/link";
import { analytics } from "@/lib/analytics";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  trackLabel?: string;
  external?: boolean;
  type?: "button" | "submit";
  id?: string;
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  trackLabel,
  external = false,
  type = "button",
  id,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap";

  const variants = {
    primary:
      "bg-gold-400 text-charcoal-900 hover:bg-gold-600 hover:text-white shadow-md hover:shadow-lg active:scale-[0.98]",
    secondary:
      "bg-charcoal-900 text-cream-50 hover:bg-charcoal-700 shadow-md hover:shadow-lg active:scale-[0.98]",
    outline:
      "border-2 border-gold-400 text-charcoal-900 hover:bg-gold-400 hover:text-charcoal-900 active:scale-[0.98]",
    ghost:
      "text-charcoal-800 hover:text-gold-600 hover:bg-cream-200 active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const handleClick = () => {
    if (trackLabel) {
      analytics.ctaClick(trackLabel);
    }
    onClick?.();
  };

  if (href) {
    if (external) {
      return (
        <a
          id={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          onClick={handleClick}
        >
          {children}
        </a>
      );
    }

    return (
      <Link id={id} href={href} className={classes} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <button id={id} type={type} className={classes} onClick={handleClick}>
      {children}
    </button>
  );
}
