import { Activity } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-6 h-6 text-primary" />
              <h3 className="font-heading text-xl font-bold text-foreground">ALIGNEYE</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Aligneye Vision Private Limited — A wearable posture correction device that monitors and improves your posture throughout the day.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { label: "Home", href: "#home" },
                { label: "Features", href: "#features" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Reviews", href: "#reviews" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Policies</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Privacy Policy", "Terms of Service", "Shipping Policy", "Refund Policy"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-foreground transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>aligneye@gmail.com</li>
              <li>+91 99551 65091</li>
              <li>TBI Block-3, UIET, Panjab University, Chandigarh — 160014</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-10 pt-6 text-center text-sm text-muted-foreground">
          © 2026 Aligneye Vision Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
