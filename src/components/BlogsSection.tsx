import { motion } from "framer-motion";

const blogs = [
  { title: "Why Posture Matters More Than You Think", desc: "The hidden impact of poor posture on your health, energy, and productivity." },
  { title: "The Science Behind Vibration Therapy", desc: "How gentle haptic feedback can retrain your muscle memory for better alignment." },
  { title: "Tech Neck: The Modern Epidemic", desc: "Understanding and combating the posture problems caused by screen time." },
  { title: "AI in Wearable Health Devices", desc: "How artificial intelligence is personalising health interventions like never before." },
];

const BlogsSection = () => {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-2">Insights</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Posture & Wellness Blog</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed with our articles on posture science, wearable technology, and daily wellness strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
            >
              <div className="bg-primary/5 h-40 flex items-center justify-center">
                <span className="text-primary/30 font-heading text-6xl font-bold">{i + 1}</span>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-foreground text-sm mb-2 group-hover:text-primary transition-colors">{blog.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{blog.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <span className="text-muted-foreground text-sm italic">More articles coming soon</span>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
