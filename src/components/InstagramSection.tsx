import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const InstagramSection = () => {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Interested in Aligneye Correct? Have questions about bulk orders or partnerships? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Mail, title: "Email", value: "aligneye@gmail.com", href: "mailto:aligneye@gmail.com" },
            { icon: Phone, title: "Phone", value: "+91 99551 65091", href: "tel:+919955165091" },
            { icon: MapPin, title: "Address", value: "TBI Block-3, UIET, Panjab University, Chandigarh — 160014", href: "#" },
          ].map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-background border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-colors block"
            >
              <div className="bg-primary/10 p-3 rounded-xl w-fit mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
