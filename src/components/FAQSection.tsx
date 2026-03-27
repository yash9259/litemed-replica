import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "What is Aligneye Correct?", a: "Aligneye Correct is a wearable posture correction device worn at the centre of the upper back, aligned with the spine. It continuously monitors posture using embedded motion sensors and delivers gentle vibration alerts when poor posture is detected." },
  { q: "How does it detect poor posture?", a: "Embedded motion sensors track the orientation and movement of your upper back in real time. Built-in algorithms analyse posture behaviour patterns such as upright alignment or slouching, and trigger corrective vibration alerts when slouching persists." },
  { q: "Is there a companion app?", a: "Yes. Collected data syncs with the Aligneye companion mobile app (iOS & Android) which provides daily posture insights, analytics, progress tracking, and AI-powered personalised exercise recommendations." },
  { q: "How long should I wear it each day?", a: "Aligneye Correct is designed for all-day comfort. We recommend wearing it during your normal daily activities — especially during desk work, commuting, or any prolonged sitting periods." },
  { q: "Is the device comfortable to wear?", a: "Yes. The device is lightweight and compact, designed to sit discreetly under clothing. The adhesive mount keeps it secure without causing discomfort during movement." },
  { q: "What makes the AI recommendations unique?", a: "The AI-driven personalised therapy recommendation system analyses your unique posture patterns over time and generates custom exercise and correction plans tailored specifically to your needs." },
  { q: "When will Aligneye Correct be available?", a: "We are currently in the pre-order phase. Join the waitlist to be among the first to receive the device when it launches. Pricing and shipping details will be announced soon." },
  { q: "Who is behind Aligneye Correct?", a: "Aligneye Correct is developed by Aligneye Vision Private Limited, based at TBI Block-3, UIET, Panjab University, Chandigarh." },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 overflow-hidden">
              <AccordionTrigger className="font-heading font-semibold text-foreground text-left py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
