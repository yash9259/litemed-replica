import { motion } from "framer-motion";
import { Monitor, Smartphone, Server as ServerIcon } from "lucide-react";

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
          Built for Every Platform
        </motion.h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          We deliver seamless experiences across web, mobile, and backend — all from a single team.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Monitor, title: "Web Applications", desc: "React, Next.js, Vue — responsive, fast, and SEO-optimized." },
            { icon: Smartphone, title: "Mobile Apps", desc: "Flutter & React Native for iOS and Android with native performance." },
            { icon: ServerIcon, title: "Backend & APIs", desc: "Node.js, Python, Go — scalable microservices and REST/GraphQL APIs." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-background border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors"
            >
              <div className="bg-primary/10 p-4 rounded-xl w-fit mx-auto mb-5">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
