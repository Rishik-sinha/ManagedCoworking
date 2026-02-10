/**
 * Search bar + filter controls for the coworking listings section.
 */
import { Search, SlidersHorizontal } from "lucide-react";

export default function FilterBar({
  search,
  onSearchChange,
  typeFilter,
  onTypeChange,
  budgetFilter,
  onBudgetChange,
  seatsFilter,
  onSeatsChange,
}) {
  const selectClasses =
    "rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 shadow-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200 transition";

  return (
    <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm md:flex-row md:items-center">
      {/* Search input */}
      <div className="relative flex-1">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by name, address, or amenity..."
          className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-700 shadow-sm placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200 transition"
        />
      </div>

      {/* Filter controls */}
      <div className="flex flex-wrap items-center gap-3">
        <SlidersHorizontal size={16} className="hidden text-slate-400 md:block" />

        {/* Desk type */}
        <select value={typeFilter} onChange={(e) => onTypeChange(e.target.value)} className={selectClasses}>
          <option value="all">All Types</option>
          <option value="open-desk">Open Desk</option>
          <option value="private-cabin">Private Cabin</option>
        </select>

        {/* Budget */}
        <select value={budgetFilter} onChange={(e) => onBudgetChange(e.target.value)} className={selectClasses}>
          <option value="all">Any Budget</option>
          <option value="0-5000">Under ₹5,000</option>
          <option value="5000-10000">₹5,000 – ₹10,000</option>
          <option value="10000-99999">Above ₹10,000</option>
        </select>

        {/* Seats */}
        <select value={seatsFilter} onChange={(e) => onSeatsChange(e.target.value)} className={selectClasses}>
          <option value="all">Any Capacity</option>
          <option value="1-50">Up to 50 seats</option>
          <option value="51-100">51 – 100 seats</option>
          <option value="101-9999">100+ seats</option>
        </select>
      </div>
    </div>
  );
}
