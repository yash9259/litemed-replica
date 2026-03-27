import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const painTypes = [
  "Arthritis",
  "Lower back pain",
  "Fibromyalgia",
  "Plantar Fasciitis",
  "Post-operative pain",
  "Cervical Spondylitis",
];

const HeroSection = () => {
  const [currentPain, setCurrentPain] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPain((prev) => (prev + 1) % painTypes.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Hero banner image */}
      <div className="relative">
        <img
          src="https://litemed.co.in/cdn/shop/files/Flash_Sale_Web.jpg?v=1773397453&width=2000"
          alt="Curapod Flash Sale"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Pain relief text section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold leading-tight"
        >
          Begin your pain relief journey & say goodbye to{" "}
          <span className="text-primary inline-block min-w-[200px]">
            {painTypes[currentPain]}
            <span className="animate-blink">|</span>
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto"
        >
          Experience lasting relief from several kinds of pain with Curapod, your versatile go-to relief solution.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
