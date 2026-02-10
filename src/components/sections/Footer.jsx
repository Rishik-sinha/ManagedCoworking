/**
 * Footer with brand, quick links, and copyright.
 */
import { Building2, Github, Twitter, Linkedin, Instagram } from "lucide-react";

const quickLinks = [
  { label: "Locations", href: "#locations" },
  { label: "Spaces", href: "#listings" },
  { label: "Amenities", href: "#amenities" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const cities = [
  { label: "Nagpur Spaces", href: "#listings" },
  { label: "Nashik Spaces", href: "#listings" },
  { label: "Mumbai Spaces", href: "#listings" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 text-xl font-extrabold text-brand-700">
              <Building2 size={24} /> CoWorkHub
            </a>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              Premium managed coworking spaces across Maharashtra.
              Flexible, affordable, and community-driven workspaces for
              modern professionals.
            </p>
            <div className="mt-5 flex gap-3">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-200/60 text-slate-500 transition-colors hover:bg-brand-600 hover:text-white"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-800">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-slate-500 transition-colors hover:text-brand-600">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-800">
              Cities
            </h4>
            <ul className="space-y-2.5">
              {cities.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-slate-500 transition-colors hover:text-brand-600">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-800">
              Stay Updated
            </h4>
            <p className="mb-3 text-sm text-slate-500">
              Get the latest on new spaces, offers, and community events.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex overflow-hidden rounded-lg border border-slate-200 focus-within:ring-2 focus-within:ring-brand-300"
            >
              <input
                type="email"
                placeholder="you@email.com"
                className="flex-1 bg-white px-3 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-brand-600 px-4 text-sm font-medium text-white transition-colors hover:bg-brand-700"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-2 border-t border-slate-200 pt-8 text-center text-xs text-slate-400 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} CoWorkHub. All rights reserved.</p>
          <p>
            Designed with care for professionals in Nagpur, Nashik &amp; Mumbai.
          </p>
        </div>
      </div>
    </footer>
  );
}
