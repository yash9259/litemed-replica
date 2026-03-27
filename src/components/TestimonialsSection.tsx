import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "Sashidhar",
    condition: "Back pain",
    quote: "Daily riding caused constant back and body pain, and I relied on painkillers. With regular use twice a day, CuraPod helped me manage my pain, sleep better, and stop taking pain medication.",
  },
  {
    name: "Agomoni",
    condition: "Fibromyalgia",
    quote: "Using Curapod for my condition of fibromyalgia as part of my routine helps reduce my pain by around 50–60% for several hours, often allowing me to get back to my day.",
  },
  {
    name: "Savitha",
    condition: "Shoulder Stiffness",
    quote: "With Curapod, I noticed a significant reduction in stiffness and pain within the first month, even with irregular use.",
  },
  {
    name: "Dr. Ramesh Chiluvery",
    condition: "Knee, Back and Neck Pain",
    quote: "Excellent results after just two sittings. Significant pain relief for me and my patients.",
  },
  {
    name: "Anifa Anam",
    condition: "Lower Back pain",
    quote: "Noticeable pain relief within 30 minutes. Easy to apply and highly effective.",
  },
  {
    name: "Dr. Rajesh",
    condition: "Knee pain",
    quote: "Mom saw results in 7 to 10 days. Around 80% pain relief with consistent usage of Curapod.",
  },
];

const TestimonialsSection = ({ title = "Real people. Real pain. Real relief." }: { title?: string }) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-12"
        >
          {title}
        </motion.h2>

        <div className="relative max-w-3xl mx-auto">
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-secondary hover:bg-secondary/80 p-2 rounded-full transition-colors hidden md:block">
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-secondary hover:bg-secondary/80 p-2 rounded-full transition-colors hidden md:block">
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="bg-card border border-border rounded-2xl p-8 text-center"
          >
            <div className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              {testimonials[current].condition}
            </div>
            <p className="text-foreground text-lg leading-relaxed italic mb-6">
              "{testimonials[current].quote}"
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="font-heading font-bold text-foreground">{testimonials[current].name}</span>
              <BadgeCheck className="w-4 h-4 text-accent" />
              <span className="text-muted-foreground text-sm">Verified Customer</span>
            </div>
          </motion.div>

          <div className="flex justify-center gap-2 mt-6 md:hidden">
            <button onClick={prev} className="bg-secondary p-2 rounded-full"><ChevronLeft className="w-4 h-4 text-foreground" /></button>
            <button onClick={next} className="bg-secondary p-2 rounded-full"><ChevronRight className="w-4 h-4 text-foreground" /></button>
          </div>

          <div className="flex justify-center gap-1.5 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-secondary"}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
