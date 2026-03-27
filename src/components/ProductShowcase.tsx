import { motion } from "framer-motion";

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold mb-4"
        >
          Crafted for unmatched mobility
        </motion.h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          A smarter medical-grade technology personalized for your healthcare experience.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://litemed.co.in/cdn/shop/files/curapod-device-bundle.png?v=1721041213&width=2200"
            alt="Curapod Device Bundle"
            className="w-full max-w-4xl mx-auto rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
