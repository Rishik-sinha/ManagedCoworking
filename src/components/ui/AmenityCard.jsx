/**
 * Single amenity card with icon, title, and description.
 */
import { motion } from "framer-motion";

export default function AmenityCard({ item, index = 0 }) {
  const Icon = item.icon;

  return (
    <motion.div
      className="group flex flex-col items-start gap-3 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-brand-200 hover:shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
        <Icon size={24} />
      </div>
      <h4 className="text-base font-semibold text-slate-800">{item.title}</h4>
      <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
    </motion.div>
  );
}
