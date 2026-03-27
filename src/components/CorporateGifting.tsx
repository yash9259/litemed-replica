import { motion } from "framer-motion";

const CorporateGifting = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-2">Corporate Gifting</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Thoughtful Gift for Every Desk
            </h2>
            <a
              href="#"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Read More
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://litemed.co.in/cdn/shop/files/corporate-gifting.png?v=1721041830&width=2000"
              alt="Corporate Gifting"
              className="w-full rounded-2xl border border-border"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CorporateGifting;
