const trustedLogos = [
  "https://litemed.co.in/cdn/shop/files/1.png?v=1767039492&width=710",
  "https://litemed.co.in/cdn/shop/files/2.png?v=1767039493&width=710",
  "https://litemed.co.in/cdn/shop/files/6.png?v=1767039493&width=710",
  "https://litemed.co.in/cdn/shop/files/3.png?v=1767039493&width=710",
  "https://litemed.co.in/cdn/shop/files/4.png?v=1767039492&width=710",
  "https://litemed.co.in/cdn/shop/files/5.png?v=1767039493&width=710",
  "https://litemed.co.in/cdn/shop/files/8.png?v=1767039493&width=710",
  "https://litemed.co.in/cdn/shop/files/9.png?v=1767039494&width=710",
];

const featuredLogos = [
  "https://litemed.co.in/cdn/shop/files/10.png?v=1767040150&width=710",
  "https://litemed.co.in/cdn/shop/files/indian_express.png?v=1767384614&width=710",
  "https://litemed.co.in/cdn/shop/files/11.png?v=1767040149&width=710",
  "https://litemed.co.in/cdn/shop/files/12.png?v=1767040149&width=710",
  "https://litemed.co.in/cdn/shop/files/13.png?v=1767040150&width=710",
  "https://litemed.co.in/cdn/shop/files/14.png?v=1767040150&width=710",
  "https://litemed.co.in/cdn/shop/files/15.png?v=1767040150&width=710",
  "https://litemed.co.in/cdn/shop/files/16.png?v=1767040148&width=710",
  "https://litemed.co.in/cdn/shop/files/17.png?v=1767040150&width=710",
];

const MarqueeLogos = ({
  title,
  logos,
  speed = "normal",
}: {
  title: string;
  logos?: string[];
  speed?: "normal" | "slow";
}) => {
  const images = logos || trustedLogos;
  const doubled = [...images, ...images];

  return (
    <section className="py-12 bg-card overflow-hidden border-y border-border">
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-8">{title}</h2>
      <div className="relative">
        <div className={`flex items-center gap-12 ${speed === "slow" ? "animate-marquee-slow" : "animate-marquee"}`} style={{ width: "max-content" }}>
          {doubled.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Partner logo"
              className="h-10 md:h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { trustedLogos, featuredLogos };
export default MarqueeLogos;
