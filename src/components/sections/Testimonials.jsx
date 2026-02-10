/**
 * Testimonials section — social proof with client quotes.
 */
import SectionWrapper from "../ui/SectionWrapper";
import TestimonialCard from "../ui/TestimonialCard";
import testimonialsData from "../../data/testimonials";

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      {/* Heading */}
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600">
          Testimonials
        </p>
        <h2 className="text-3xl font-extrabold text-slate-800 sm:text-4xl">
          Loved by Professionals
        </h2>
        <p className="mt-4 text-slate-500">
          Don't just take our word for it — hear what our members across Nagpur,
          Nashik, and Mumbai have to say.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonialsData.map((item, i) => (
          <TestimonialCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
