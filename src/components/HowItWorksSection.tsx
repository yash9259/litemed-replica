import { motion } from "framer-motion";

const steps = [
  {
    num: 1,
    title: "Attach to Upper Back",
    desc: "Place the Aligneye Correct device at the centre of your upper back, aligned with your spine. The adhesive mount keeps it secure all day.",
  },
  {
    num: 2,
    title: "Sensors Detect Posture",
    desc: "Embedded motion sensors continuously track the orientation and movement of your upper back, detecting slouching or misalignment in real time.",
  },
  {
    num: 3,
    title: "Get Gentle Alerts",
    desc: "When poor posture is detected for a prolonged period, the device delivers gentle vibration alerts to remind you to sit or stand upright.",
  },
  {
    num: 4,
    title: "Track & Improve",
    desc: "Data syncs to the companion app where you can view daily insights, posture analytics, and AI-powered exercise recommendations to improve over time.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Better Posture in <span className="text-primary">4 Simple Steps</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Aligneye Correct works silently in the background — you just wear it and let the technology do the rest.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative bg-card rounded-2xl p-8 mb-6 border border-border hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold text-2xl mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
