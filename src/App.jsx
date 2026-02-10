/**
 * App.jsx — Root component that composes all sections and manages
 * the active-city state shared between Locations and Listings.
 */
import { useState } from "react";

/* Section components */
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Locations from "./components/sections/Locations";
import Listings from "./components/sections/Listings";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Amenities from "./components/sections/Amenities";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

export default function App() {
  /* City selected via the Locations cards — drives the Listings filter */
  const [activeCity, setActiveCity] = useState("Nagpur");

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-body text-slate-800">
      <Navbar />
      <Hero />
      <Locations activeCity={activeCity} onCityChange={setActiveCity} />
      <Listings activeCity={activeCity} />
      <WhyChooseUs />
      <Amenities />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
