import { motion } from "framer-motion";

const images = [
  "https://litemed.co.in/cdn/shop/files/curapod-your-wellness-partner.jpg?v=1721036534&width=1080",
  "https://litemed.co.in/cdn/shop/files/pain-distributing-your-focus.jpg?v=1721036427&width=1080",
  "https://litemed.co.in/cdn/shop/files/curapod-its-okay-to-be-a-human.jpg?v=1721036354&width=1080",
  "https://litemed.co.in/cdn/shop/files/osteoarthritis-with-curapod.webp?v=1721036126&width=1080",
  "https://litemed.co.in/cdn/shop/files/from-muscle-stiffness.webp?v=1721036049&width=1080",
  "https://litemed.co.in/cdn/shop/files/pain-of-arthritis-and-sprains.webp?v=1721035933&width=1440",
];

const InstagramSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Make Instagram's Favourite Pod Your Own!
          </h2>
          <p className="text-muted-foreground mb-6">
            Join the Curapod family on our socials and know more about our go-to pain management device.
          </p>
          <a
            href="https://www.instagram.com/curapod"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Explore Now
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden border border-border group cursor-pointer"
            >
              <img
                src={img}
                alt="Curapod Instagram"
                className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
