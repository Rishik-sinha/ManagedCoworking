/**
 * Navbar — sticky top navigation with glass effect.
 * Includes mobile hamburger menu.
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Building2 } from "lucide-react";
import Button from "../ui/Button";

const links = [
  { label: "Locations", href: "#locations" },
  { label: "Spaces", href: "#listings" },
  { label: "Why Us", href: "#why-us" },
  { label: "Amenities", href: "#amenities" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="glass fixed top-0 z-50 w-full border-b border-slate-200/60 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-xl font-extrabold text-brand-700">
          <Building2 size={28} className="text-brand-600" />
          CoWorkHub
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-600"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button size="sm" href="#contact">
            Get Started
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="border-t border-slate-200/60 bg-white px-4 pb-6 pt-2 md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-base font-medium text-slate-700 hover:text-brand-600"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <Button size="sm" href="#contact" className="w-full" onClick={() => setMobileOpen(false)}>
                  Get Started
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
