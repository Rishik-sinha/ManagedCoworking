/**
 * Locations section — three city cards acting as selectors.
 */
import SectionWrapper from "../ui/SectionWrapper";
import LocationCard from "../ui/LocationCard";

const cities = ["Nagpur", "Nashik", "Mumbai"];

export default function Locations({ activeCity, onCityChange }) {
  return (
    <SectionWrapper id="locations">
      {/* Heading */}
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600">
          Our Locations
        </p>
        <h2 className="text-3xl font-extrabold text-slate-800 sm:text-4xl">
          Choose Your City
        </h2>
        <p className="mt-4 text-slate-500">
          We operate premium managed workspaces in three of Maharashtra's most
          dynamic cities. Select a city to explore available spaces.
        </p>
      </div>

      {/* City cards grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cities.map((city, i) => (
          <LocationCard
            key={city}
            city={city}
            isActive={activeCity === city}
            onClick={() => onCityChange(city)}
            index={i}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
