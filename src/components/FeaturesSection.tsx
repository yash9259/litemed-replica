import { motion } from "framer-motion";
import { Radar, Vibrate, Smartphone, Brain } from "lucide-react";

const features = [
  {
    icon: Radar,
    title: "Real-Time Posture Tracking",
    desc: "Embedded motion sensors continuously monitor the orientation and movement of your upper back, detecting posture patterns like upright alignment or slouching.",
  },
  {
    icon: Vibrate,
    title: "Intelligent Vibration Alerts",
    desc: "When poor posture is detected for a prolonged period, Aligneye Correct delivers gentle haptic vibration feedback to encourage corrective action.",
  },
  {
    icon: Smartphone,
    title: "Companion App Analytics",
    desc: "Data syncs with the Aligneye mobile app providing daily insights, posture analytics, progress tracking, and detailed posture behaviour history.",
  },
  {
    icon: Brain,
    title: "AI-Powered Recommendations",
    desc: "A personalised therapy recommendation system powered by AI delivers custom exercise and correction plans based on your unique posture patterns.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-2">Key Features</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Smart Posture Technology</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Worn at the centre of the upper back, aligned with your spine — Aligneye Correct works silently to improve your posture throughout the day.</p>
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
