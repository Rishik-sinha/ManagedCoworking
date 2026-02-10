/**
 * Coworking space card used in the listings grid.
 * Shows image, key stats, amenities preview, and a CTA.
 */
import { motion } from "framer-motion";
import { MapPin, Users, DoorOpen, Star, IndianRupee } from "lucide-react";

export default function SpaceCard({ space, index = 0 }) {
  return (
    <motion.div
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={space.image}
          alt={space.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 shadow backdrop-blur">
          {space.type === "open-desk" ? "Open Desk" : "Private Cabin"}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* Title & rating */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-slate-800">{space.name}</h3>
          <span className="flex items-center gap-1 text-sm font-medium text-amber-500">
            <Star size={14} fill="currentColor" /> {space.rating}
          </span>
        </div>

        {/* Address */}
        <p className="flex items-center gap-1 text-sm text-slate-500">
          <MapPin size={14} className="shrink-0" /> {space.address}
        </p>

        {/* Description */}
        <p className="line-clamp-2 text-sm text-slate-600">{space.description}</p>

        {/* Stats row */}
        <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-slate-100 pt-3 text-sm text-slate-600">
          <span className="flex items-center gap-1">
            <Users size={14} /> {space.seats} seats
          </span>
          <span className="flex items-center gap-1">
            <DoorOpen size={14} /> {space.meetingRooms} rooms
          </span>
          <span className="ml-auto flex items-center gap-0.5 font-semibold text-brand-600">
            <IndianRupee size={14} />
            {space.pricePerSeat.toLocaleString("en-IN")}
            <span className="font-normal text-slate-400">/seat</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
