/**
 * Location selector card (Nagpur / Nashik / Mumbai).
 */
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const cityImages = {
  Nagpur: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=600&q=80",
  Nashik: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80",
  Mumbai: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80",
};

const cityTaglines = {
  Nagpur: "The Orange City — Central India's Business Hub",
  Nashik: "The Wine Capital — Rising Startup Ecosystem",
  Mumbai: "The Financial Capital — India's Business Powerhouse",
};

export default function LocationCard({ city, isActive, onClick, index = 0 }) {
  return (
    <motion.button
      onClick={onClick}
      className={`group relative w-full overflow-hidden rounded-2xl text-left shadow-md transition-all focus:outline-none ${
        isActive
          ? "ring-4 ring-brand-500 ring-offset-2"
          : "ring-0 hover:ring-2 hover:ring-brand-300"
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.12 }}
      whileHover={{ y: -4 }}
    >
      {/* Background image */}
      <div className="relative h-56 overflow-hidden sm:h-64">
        <img
          src={cityImages[city]}
          alt={city}
          loading="lazy"
          className="h-full w-full object-cover brightness-75 transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Text content */}
        <div className="absolute bottom-0 left-0 p-5">
          <h3 className="flex items-center gap-2 text-2xl font-bold text-white">
            <MapPin size={20} /> {city}
          </h3>
          <p className="mt-1 text-sm text-white/80">{cityTaglines[city]}</p>
        </div>

        {/* Active indicator */}
        {isActive && (
          <motion.div
            className="absolute right-4 top-4 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Selected
          </motion.div>
        )}
      </div>
    </motion.button>
  );
}
