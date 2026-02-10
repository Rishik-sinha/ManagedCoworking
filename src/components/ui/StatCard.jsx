/**
 * Animated statistic counter for trust / social-proof section.
 */
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";

export default function StatCard({ icon: Icon, value, suffix = "", label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  /* Animated counter */
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, count, value]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600/10 text-brand-500">
        <Icon size={28} />
      </div>
      <motion.span className="text-3xl font-extrabold text-slate-800 md:text-4xl">
        {rounded}
      </motion.span>
      <span className="text-sm text-slate-500">{label}</span>
    </div>
  );
}
