import { motion } from "framer-motion";
import { Smartphone, Server, CreditCard, Palette } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "End-to-End Mobile & Web Development",
    desc: "We build cross-platform mobile apps and responsive web applications tailored to your business needs — from ideation to deployment.",
  },
  {
    icon: Server,
    title: "Scalable Backend & Database Architecture",
    desc: "Robust, cloud-native backend systems designed to handle millions of users with high availability, security, and performance.",
  },
  {
    icon: CreditCard,
    title: "Payment Gateway & Real-Time Tracking",
    desc: "Seamless integration of payment systems, live order tracking, push notifications, and real-time data sync for flawless user experiences.",
  },
  {
    icon: Palette,
    title: "Clean UI/UX with High Performance",
    desc: "Pixel-perfect interfaces with intuitive navigation, optimized load times, and delightful micro-interactions that keep users engaged.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-2">What We Do</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">We don't just build apps — we engineer complete business solutions that scale.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-background border border-border rounded-2xl p-8 hover:border-primary/40 transition-colors"
            >
              <div className="bg-primary/10 p-4 rounded-xl w-fit mb-5">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
