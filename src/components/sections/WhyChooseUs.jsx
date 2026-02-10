/**
 * "Why Choose Us" section with feature cards and animated stats.
 */
import { motion } from "framer-motion";
import {
  TrendingUp,
  Clock,
  Handshake,
  LayoutGrid,
  Users,
  Building2,
  MapPin,
  ThumbsUp,
} from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import StatCard from "../ui/StatCard";

const features = [
  {
    icon: LayoutGrid,
    title: "Flexible Plans",
    desc: "Day passes, monthly memberships, and custom enterprise agreements — scale up or down with zero lock-in.",
  },
  {
    icon: Clock,
    title: "24/7 Access",
    desc: "Work on your schedule. All locations offer round-the-clock access with biometric security for members.",
  },
  {
    icon: Handshake,
    title: "Community & Networking",
    desc: "Regular workshops, demo days, and social mixers connect you with founders, investors, and collaborators.",
  },
  {
    icon: TrendingUp,
    title: "Grow Without Overhead",
    desc: "No deposits, no long leases, no maintenance headaches. Just plug in and start working from day one.",
  },
];

const stats = [
  { icon: MapPin, value: 3, suffix: "", label: "Cities" },
  { icon: Building2, value: 13, suffix: "+", label: "Workspaces" },
  { icon: Users, value: 2400, suffix: "+", label: "Active Members" },
  { icon: ThumbsUp, value: 98, suffix: "%", label: "Satisfaction Rate" },
];

export default function WhyChooseUs() {
  return (
    <SectionWrapper id="why-us">
      {/* Heading */}
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600">
          Why CoWorkHub
        </p>
        <h2 className="text-3xl font-extrabold text-slate-800 sm:text-4xl">
          Built for Modern Teams
        </h2>
        <p className="mt-4 text-slate-500">
          We handle the space so you can focus on the work. From solo freelancers
          to 100-person teams, CoWorkHub is designed to help you do your best.
        </p>
      </div>

      {/* Features grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              className="flex gap-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon size={28} />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-slate-800">{f.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{f.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Stats bar */}
      <div className="mt-16 grid grid-cols-2 gap-8 rounded-2xl bg-slate-50 p-8 sm:grid-cols-4">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>
    </SectionWrapper>
  );
}
