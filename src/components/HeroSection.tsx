import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const techTypes = [
  "Food Delivery Apps",
  "E-Commerce Platforms",
  "SaaS Products",
  "Mobile Applications",
  "Real-Time Tracking Systems",
  "Payment Integrations",
];

const HeroSection = () => {
  const [currentTech, setCurrentTech] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techTypes.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="container mx-auto px-6 py-24 md:py-36 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">Engineering Complete Business Solutions</p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            We Build Scalable<br />
            <span className="text-primary inline-block min-w-[280px]">
              {techTypes[currentTech]}
              <span className="animate-blink">|</span>
            </span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
            From real-time order tracking and vendor management to high-performance backend architecture and seamless user experience — we ensure your platform is reliable, fast, and ready to scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a href="#contact" className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity text-lg">
              Let's Connect
            </a>
            <a href="#services" className="border border-border text-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-secondary transition-colors text-lg">
              Our Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
