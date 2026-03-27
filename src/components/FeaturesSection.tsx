import { motion } from "framer-motion";

const features = [
  {
    title: "Adaptive pain management",
    desc: "Curapod introduces the world's first adaptive pain management system, delivering personalised relief tailored to your unique needs.",
    img: "https://litemed.co.in/cdn/shop/files/adaptive-pain-management.jpg?v=1720787181&width=1800",
  },
  {
    title: "Deeper penetration",
    desc: "The biological band penetrates deep into the tissues, up to 70mm, targeting the most stubborn, deep-seated pains for effective relief.",
    img: "https://litemed.co.in/cdn/shop/files/deeper-penentration.jpg?v=1719497682&width=1800",
  },
  {
    title: "Precision dosage",
    desc: "Curapod targets a wide area of pain and provides the optimal relief dosage, enhancing your comfort and well-being.",
    img: "https://litemed.co.in/cdn/shop/files/precision-doseage.jpg?v=1719497756&width=1800",
  },
  {
    title: "Rapid results in 30 minutes",
    desc: "Experience noticeable pain relief from the very first session in as little as 30 minutes.",
    img: "https://litemed.co.in/cdn/shop/files/curapod-rapid-results.jpg?v=1721041490&width=1800",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden border border-border"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
