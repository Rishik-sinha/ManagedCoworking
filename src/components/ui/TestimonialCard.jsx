/**
 * Individual testimonial card with avatar, quote, and star rating.
 */
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function TestimonialCard({ item, index = 0 }) {
  return (
    <motion.div
      className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Quote size={28} className="text-brand-200" />

      <p className="flex-1 text-slate-600 italic leading-relaxed">"{item.quote}"</p>

      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < item.rating ? "text-amber-400" : "text-slate-200"}
            fill={i < item.rating ? "currentColor" : "none"}
          />
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
        <img
          src={item.avatar}
          alt={item.name}
          className="h-10 w-10 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <p className="text-sm font-semibold text-slate-800">{item.name}</p>
          <p className="text-xs text-slate-500">
            {item.role} · {item.city}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
