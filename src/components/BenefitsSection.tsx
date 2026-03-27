import { motion } from "framer-motion";
import { Zap, Shield, Activity, Target } from "lucide-react";

const benefits = [
  { icon: Zap, title: "Instant Relief", desc: "Targets the source, allowing you to feel the difference in 30 minutes." },
  { icon: Shield, title: "Clinically proven", desc: "Backed by research and used daily by 25,000+ users." },
  { icon: Activity, title: "Non-Invasive", desc: "Say goodbye to medications and invasive procedures." },
  { icon: Target, title: "Targets 30+ Conditions", desc: "Supporting your musculoskeletal journey with medical-grade tech." },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Experience a life without pain with <span className="text-primary">Curapod</span>
          </h2>
          <p className="text-muted-foreground">Invest in your well-being and feel your best every day</p>
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
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
