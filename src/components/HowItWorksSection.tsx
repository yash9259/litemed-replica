import { motion } from "framer-motion";

const steps = [
  {
    num: 1,
    title: "Get Started",
    desc: "Make sure to fully charge the device and familiarise yourself with its controls and instructions by consulting the user manual.",
    img: "https://litemed.co.in/cdn/shop/files/curapod-device.jpg?v=1721041457&width=1146",
  },
  {
    num: 2,
    title: "Identify the pain site",
    desc: "Locate the exact area where you're feeling pain or discomfort. This is where the magic will happen.",
    img: "https://litemed.co.in/cdn/shop/files/identify-the-pain-site.jpg?v=1721041422&width=1146",
  },
  {
    num: 3,
    title: "Position the device",
    desc: "Secure the device using the provided accessories, ensuring that it is in direct contact with your skin.",
    img: "https://litemed.co.in/cdn/shop/files/position-the-device.jpg?v=1721041388&width=1146",
  },
  {
    num: 4,
    title: "Ready, Set, Go!",
    desc: "Begin with the therapy duration recommended in the user manual. Sit back and relax while Curapod works its wonders.",
    img: "https://litemed.co.in/cdn/shop/files/hand-pain-relief.jpg?v=1721041348&width=1146",
  },
];

const HowItWorksSection = () => {
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
            Imagine saying goodbye to your pain in <span className="text-primary">30-minutes?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Curapod doesn't just provide temporary relief — it offers lasting results by promoting healing from within.
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
              <div className="relative rounded-2xl overflow-hidden mb-6 border border-border">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold text-lg">
                  {step.num}
                </div>
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
