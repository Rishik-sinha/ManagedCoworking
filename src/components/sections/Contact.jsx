/**
 * Contact / CTA section with a contact form and call-to-action.
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import Button from "../ui/Button";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionWrapper id="contact" dark>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left — copy */}
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-400">
            Get in Touch
          </p>
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to Find Your{" "}
            <span className="text-brand-400">Perfect Workspace?</span>
          </h2>
          <p className="mt-4 max-w-lg text-slate-400 leading-relaxed">
            Whether you're a solo freelancer or a growing team, we'll help you
            find the right plan and space. Reach out and our team will get back to
            you within 24 hours.
          </p>

          {/* Contact details */}
          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3 text-slate-300">
              <Phone size={18} className="text-brand-400" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <Mail size={18} className="text-brand-400" />
              hello@coworkhub.in
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <MapPin size={18} className="text-brand-400" />
              Nagpur · Nashik · Mumbai
            </li>
          </ul>
        </div>

        {/* Right — form */}
        <motion.div
          className="rounded-2xl bg-white/5 p-8 backdrop-blur ring-1 ring-white/10"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                <Send size={28} />
              </div>
              <h3 className="text-xl font-bold text-white">Thank You!</h3>
              <p className="text-slate-400">
                We've received your enquiry. Our team will reach out within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-300">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Amit Khanna"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/30 transition"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="amit@company.com"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/30 transition"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-300">
                  Preferred City
                </label>
                <select
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/30 transition"
                >
                  <option value="" className="text-slate-800">Select a city</option>
                  <option value="Nagpur" className="text-slate-800">Nagpur</option>
                  <option value="Nashik" className="text-slate-800">Nashik</option>
                  <option value="Mumbai" className="text-slate-800">Mumbai</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your team size, preferred desk type, and any questions..."
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/30 transition"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Enquiry <Send size={16} />
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
