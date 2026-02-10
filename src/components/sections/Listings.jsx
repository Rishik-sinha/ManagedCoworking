/**
 * Dynamic space listings section with search/filter bar.
 */
import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import FilterBar from "../ui/FilterBar";
import SpaceCard from "../ui/SpaceCard";
import allSpaces from "../../data/spaces";

export default function Listings({ activeCity }) {
  /* Filter states */
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [budgetFilter, setBudgetFilter] = useState("all");
  const [seatsFilter, setSeatsFilter] = useState("all");

  /* Derived filtered list */
  const filtered = useMemo(() => {
    let list = allSpaces.filter((s) => s.city === activeCity);

    /* text search */
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.address.toLowerCase().includes(q) ||
          s.amenities.some((a) => a.toLowerCase().includes(q))
      );
    }

    /* type */
    if (typeFilter !== "all") {
      list = list.filter((s) => s.type === typeFilter);
    }

    /* budget */
    if (budgetFilter !== "all") {
      const [min, max] = budgetFilter.split("-").map(Number);
      list = list.filter((s) => s.pricePerSeat >= min && s.pricePerSeat <= max);
    }

    /* seats */
    if (seatsFilter !== "all") {
      const [min, max] = seatsFilter.split("-").map(Number);
      list = list.filter((s) => s.seats >= min && s.seats <= max);
    }

    return list;
  }, [activeCity, search, typeFilter, budgetFilter, seatsFilter]);

  return (
    <SectionWrapper id="listings" className="bg-slate-50">
      {/* Heading */}
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600">
          Workspaces
        </p>
        <h2 className="text-3xl font-extrabold text-slate-800 sm:text-4xl">
          Spaces in {activeCity}
        </h2>
        <p className="mt-4 text-slate-500">
          Browse, filter, and find the coworking space that fits your workflow and budget.
        </p>
      </div>

      {/* Filters */}
      <FilterBar
        search={search}
        onSearchChange={setSearch}
        typeFilter={typeFilter}
        onTypeChange={setTypeFilter}
        budgetFilter={budgetFilter}
        onBudgetChange={setBudgetFilter}
        seatsFilter={seatsFilter}
        onSeatsChange={setSeatsFilter}
      />

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCity + typeFilter + budgetFilter + seatsFilter + search}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {filtered.length > 0 ? (
            filtered.map((space, i) => (
              <SpaceCard key={space.id} space={space} index={i} />
            ))
          ) : (
            <div className="col-span-full py-16 text-center">
              <p className="text-lg font-medium text-slate-400">
                No spaces match your filters. Try adjusting your criteria.
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
