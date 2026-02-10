/**
 * Generic section wrapper with Framer Motion fade-in-up on scroll.
 */
import { motion } from "framer-motion";

export default function SectionWrapper({
  id,
  children,
  className = "",
  dark = false,
}) {
  return (
    <motion.section
      id={id}
      className={`py-20 md:py-28 ${dark ? "bg-slate-900 text-white" : "bg-white"} ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </motion.section>
  );
}
