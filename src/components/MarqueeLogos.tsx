const trustedLogos = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
];

const featuredLogos = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
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
              alt="Technology logo"
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
