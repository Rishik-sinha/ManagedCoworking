/**
 * Reusable Button component with Framer Motion hover/tap effects.
 * Supports "primary" and "outline" variants.
 */
import { motion } from "framer-motion";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2";

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const variants = {
  primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/25",
  outline: "border-2 border-brand-600 text-brand-600 hover:bg-brand-50",
  white: "bg-white text-brand-700 hover:bg-brand-50 shadow-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  ...props
}) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  /* Render as anchor when href is provided */
  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
