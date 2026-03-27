import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-2">Case Study</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Germany-Based Food Delivery App
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We engineered a complete food delivery ecosystem featuring real-time order tracking, vendor management dashboards, payment gateway integration, and a high-performance backend handling 100K+ daily orders across multiple German cities.
            </p>
            <ul className="space-y-3 text-muted-foreground text-sm mb-8">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> Real-time GPS tracking & ETA</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> Multi-vendor restaurant management</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> Stripe & local payment methods</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> 99.9% uptime SLA</li>
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Discuss Your Project <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background border border-border rounded-2xl p-8"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-border pb-4">
                <span className="text-muted-foreground text-sm">Platform</span>
                <span className="text-foreground font-semibold">iOS, Android, Web</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-4">
                <span className="text-muted-foreground text-sm">Tech Stack</span>
                <span className="text-foreground font-semibold">Flutter, Node.js, PostgreSQL</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-4">
                <span className="text-muted-foreground text-sm">Daily Orders</span>
                <span className="text-primary font-bold text-xl">100K+</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-4">
                <span className="text-muted-foreground text-sm">Delivery Time</span>
                <span className="text-foreground font-semibold">12 Weeks</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground text-sm">User Growth</span>
                <span className="text-accent font-bold text-xl">300%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CorporateGifting;
