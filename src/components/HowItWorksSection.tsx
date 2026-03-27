import { motion } from "framer-motion";

const steps = [
  {
    num: 1,
    title: "Share Your Vision",
    desc: "Tell us about your project goals, target audience, and technical requirements. We listen first to understand deeply.",
  },
  {
    num: 2,
    title: "Strategic Planning",
    desc: "Our team creates a detailed roadmap with architecture design, tech stack selection, and milestone-based timelines.",
  },
  {
    num: 3,
    title: "Agile Development",
    desc: "We build iteratively with sprint cycles, regular demos, and continuous feedback loops to ensure alignment.",
  },
  {
    num: 4,
    title: "Launch & Scale",
    desc: "We deploy, monitor, and optimize your product — then help you scale as your user base grows.",
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
            From Idea to Launch in <span className="text-primary">4 Steps</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our proven process ensures your project is delivered on time, on budget, and beyond expectations.
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
