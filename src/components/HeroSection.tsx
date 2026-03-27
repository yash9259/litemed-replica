import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const benefits = [
  "Slouching",
  "Back Pain",
  "Poor Posture Habits",
  "Neck Strain",
  "Spinal Misalignment",
  "Tech Neck",
];

const HeroSection = () => {
  const [currentBenefit, setCurrentBenefit] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBenefit((prev) => (prev + 1) % benefits.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">Wearable Posture Technology</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Say Goodbye to{" "}
              <span className="text-primary inline-block min-w-[200px]">
                {benefits[currentBenefit]}
                <span className="animate-blink">|</span>
              </span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
              Aligneye Correct is a wearable posture correction device that continuously monitors your posture using embedded motion sensors, delivering gentle vibration alerts to encourage corrective action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity text-center">
                Pre-Order Now
              </a>
              <a href="#how-it-works" className="border border-border text-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-secondary transition-colors text-center">
                See How It Works
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
              <img
                src="/placeholder.svg"
                alt="Aligneye Correct posture correction device"
                className="relative w-80 h-80 md:w-96 md:h-96 object-contain animate-float"
              />
              <p className="text-center text-muted-foreground text-xs mt-4 italic">Product image — final design may vary</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
