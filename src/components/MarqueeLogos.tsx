const trustedLogos: string[] = [];
const featuredLogos: string[] = [];

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
  if (images.length === 0) return null;
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
              className="h-10 md:h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { trustedLogos, featuredLogos };
export default MarqueeLogos;
