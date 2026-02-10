/**
 * Hero section — full-screen background with headline, subtitle, and CTAs.
 */
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-900">
      {/* Background image layer */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
          alt="Modern coworking space"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/85 to-slate-900/60" />
      </div>

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-accent-500/15 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Now in Nagpur · Nashik · Mumbai
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Your Workspace,{" "}
            <span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
              Reimagined
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 md:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Premium managed coworking spaces across Maharashtra. Flexible desks,
            private cabins, meeting rooms — everything your team needs to thrive.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <Button size="lg" href="#listings">
              Explore Spaces <ArrowRight size={18} />
            </Button>
            <Button variant="outline" size="lg" href="#locations" className="border-white/30 text-white hover:bg-white/10">
              <Play size={18} /> View Locations
            </Button>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            className="mt-14 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            {[
              { num: "3", label: "Cities" },
              { num: "13+", label: "Spaces" },
              { num: "1500+", label: "Seats" },
              { num: "98%", label: "Happy Members" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-bold text-white">{s.num}</p>
                <p className="text-xs text-slate-400">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
