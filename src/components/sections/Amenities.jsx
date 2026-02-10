/**
 * Amenities & Services section — 12 amenity cards in a responsive grid.
 */
import SectionWrapper from "../ui/SectionWrapper";
import AmenityCard from "../ui/AmenityCard";
import amenitiesData from "../../data/amenities";

export default function Amenities() {
  return (
    <SectionWrapper id="amenities" className="bg-slate-50">
      {/* Heading */}
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600">
          Amenities & Services
        </p>
        <h2 className="text-3xl font-extrabold text-slate-800 sm:text-4xl">
          Everything You Need, Included
        </h2>
        <p className="mt-4 text-slate-500">
          Every CoWorkHub location comes loaded with premium amenities so you can
          focus exclusively on what matters — your work.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {amenitiesData.map((item, i) => (
          <AmenityCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
