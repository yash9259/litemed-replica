import { motion } from "framer-motion";

const ProductShowcase = () => {
  const products = [
    {
      title: "Aligneye Core Sensor",
      desc: "Compact wearable posture sensor for real-time tracking and smart vibration alerts.",
      image: "/productimg/image1.png",
    },
    {
      title: "Aligneye Mobile Companion",
      desc: "Your daily posture coach with insights, streaks, and personalized correction routines.",
      image: "/productimg/image2.png",
    },
    {
      title: "Aligneye Pro Analytics",
      desc: "Advanced dashboard for deep posture analytics and long-term progress monitoring.",
      image: "/productimg/image3.png",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold mb-4"
        >
          The Aligneye Ecosystem
        </motion.h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          A seamless experience from wearable device to companion app — your complete posture wellness system.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {products.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-background border border-border rounded-2xl p-5 md:p-6 hover:border-primary/30 transition-colors text-left"
            >
              <div className="rounded-xl overflow-hidden mb-5 bg-muted/40 border border-border">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
