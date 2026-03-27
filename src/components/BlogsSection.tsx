import { motion } from "framer-motion";

const blogs = [
  { img: "https://litemed.co.in/cdn/shop/articles/Osteoarthritis_for_Omega-3.jpg?v=1750401141&width=1066", title: "Omega-3 for Osteoarthritis" },
  { img: "https://litemed.co.in/cdn/shop/articles/frozen_shoulder_stretches.jpg?v=1750238163&width=1066", title: "Frozen Shoulder Stretches" },
  { img: "https://litemed.co.in/cdn/shop/articles/shoulder-bursitis-treatment.jpg?v=1750238258&width=1066", title: "Shoulder Bursitis Relief" },
  { img: "https://litemed.co.in/cdn/shop/articles/what-is-choline.jpg?v=1750229701&width=1066", title: "What is Choline?" },
];

const BlogsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-2">Insights & Inspiration</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Explore our blogs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed and inspired with our curated selection of blog articles covering topics ranging from pain management techniques to lifestyle strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, i) => (
            <motion.a
              key={blog.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group block bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{blog.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="text-primary font-semibold hover:underline">Explore All →</a>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
