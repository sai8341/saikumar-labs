"use client";

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
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap";

  const variants = {
    primary:
      "bg-accent-primary text-accent-secondary hover:bg-opacity-90 shadow-md active:scale-[0.98]",
    secondary:
      "bg-bg-border text-text-primary hover:bg-opacity-80 active:scale-[0.98]",
    outline:
      "border border-bg-border text-text-primary hover:bg-bg-card active:scale-[0.98]",
    ghost:
      "text-text-secondary hover:text-text-primary hover:bg-bg-border active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm gap-1.5",
    md: "px-7 py-3.5 text-base gap-2",
    lg: "px-9 py-4 text-lg gap-2.5",
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
