import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "Early Tester",
    condition: "Office Worker — Chandigarh",
    quote: "After wearing Aligneye Correct for just two weeks, I noticed a dramatic improvement in my sitting posture. The gentle vibrations are a perfect reminder without being intrusive.",
  },
  {
    name: "Beta User",
    condition: "Software Engineer — Delhi",
    quote: "As someone who spends 10+ hours at a desk, this device has been a game changer. The app insights help me understand my posture patterns throughout the day.",
  },
  {
    name: "Pilot Programme",
    condition: "Physiotherapist — Mumbai",
    quote: "I recommend posture correction to all my patients. Aligneye Correct provides the continuous monitoring that traditional methods cannot — it's the future of posture health.",
  },
];

const TestimonialsSection = ({ title = "Early Feedback & Reviews" }: { title?: string }) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-4"
        >
          {title}
        </motion.h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto text-sm">
          Customer reviews and certifications will be updated as the product launches. Here's early feedback from our pilot programme.
        </p>

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
              <span className="text-muted-foreground text-sm">Pilot Programme</span>
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
