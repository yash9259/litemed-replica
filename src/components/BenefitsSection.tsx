import { motion } from "framer-motion";
import { BarChart3, Sparkles, Battery, ShieldCheck } from "lucide-react";

const benefits = [
  { icon: BarChart3, title: "Long-Term Progress Tracking", desc: "Detailed posture analysis with historical data so you can see your improvement journey over weeks and months." },
  { icon: Sparkles, title: "AI-Based Personalised Plans", desc: "Smart exercise and correction recommendations tailored to your unique posture patterns and daily habits." },
  { icon: Battery, title: "All-Day Comfort", desc: "Lightweight, discreet design that sits comfortably under clothing — designed for continuous daily wear." },
  { icon: ShieldCheck, title: "Non-Invasive & Safe", desc: "No medication, no surgery — just intelligent sensor technology and gentle vibration therapy working with your body." },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Why <span className="text-primary">Aligneye Correct</span>?
          </h2>
          <p className="text-muted-foreground">Invest in your posture health — feel your best every day</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6 flex items-start gap-4 hover:border-primary/30 transition-colors"
            >
              <div className="bg-primary/10 p-3 rounded-xl shrink-0">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Pre-Order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
