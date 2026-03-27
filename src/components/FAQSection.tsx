import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "What is Curapod and how does it work?", a: "Curapod is a wearable light therapy device that uses red and near-infrared light to support your body's natural healing response. It works by improving local blood flow and cellular activity at the source of pain." },
  { q: "What is red & near-infrared light therapy?", a: "It's a science-backed, non-invasive therapy that delivers specific wavelengths of light into the body to support circulation, tissue comfort, and recovery at a cellular level." },
  { q: "What conditions can Curapod help with?", a: "Curapod is commonly used for joint and muscle discomfort including knee pain, back pain, neck pain, shoulder pain, arthritis, stiffness, sports soreness, and everyday strain." },
  { q: "Does Curapod work for arthritis or chronic pain?", a: "Curapod does not cure arthritis, but many users managing chronic pain report reduced stiffness, better mobility, and improved daily comfort with consistent use." },
  { q: "Is Curapod safe to use?", a: "Yes. Curapod is completely non-invasive, drug-free, and designed for regular daily use." },
  { q: "Are there any side effects?", a: "No. Curapod has no known side effects when used as directed. It does not involve medication, heat, electrical stimulation, or invasive procedures." },
  { q: "How often should I use Curapod?", a: "Usage depends on the pain type, but the recommended usage is 2–3 sessions per day for 10–14 days for the most effective results." },
  { q: "How long does one session take?", a: "Each Curapod session typically lasts around 30 minutes and can be done while resting, working, or relaxing." },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Got questions? We have answers!
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
