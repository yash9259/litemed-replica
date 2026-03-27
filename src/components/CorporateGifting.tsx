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
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-2">Corporate Wellness</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Empower Your Team with Better Posture
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Offer Aligneye Correct as a corporate wellness benefit. Help your employees reduce back pain, improve focus, and boost productivity with intelligent posture monitoring throughout the workday.
            </p>
            <ul className="space-y-3 text-muted-foreground text-sm mb-8">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> Bulk ordering with custom branding</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> Team posture analytics dashboard</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> Dedicated account support</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> Wellness programme integration</li>
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Enquire for Teams <ArrowRight className="w-4 h-4" />
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
                <span className="text-muted-foreground text-sm">Device Type</span>
                <span className="text-foreground font-semibold">Wearable Sensor</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-4">
                <span className="text-muted-foreground text-sm">Sensors</span>
                <span className="text-foreground font-semibold">Motion & Orientation</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-4">
                <span className="text-muted-foreground text-sm">Feedback</span>
                <span className="text-primary font-bold">Haptic Vibration</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-4">
                <span className="text-muted-foreground text-sm">App</span>
                <span className="text-foreground font-semibold">iOS & Android</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground text-sm">AI Features</span>
                <span className="text-accent font-bold">Personalised Plans</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CorporateGifting;
