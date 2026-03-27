import { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";

const navLinks = ["Home", "How Curapod Works", "Blogs", "Contact", "Reviews", "Clinical Trials"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-2">
          <span className="font-heading text-2xl font-bold tracking-wider text-foreground">CURAPOD</span>
          <span className="text-muted-foreground text-xs hidden sm:block">by Litemed</span>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                link === "Home" ? "text-foreground bg-secondary/60 px-3 py-1.5 rounded-md" : "text-muted-foreground"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden lg:block bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            Order Now
          </button>
          <User className="w-5 h-5 text-muted-foreground hidden lg:block cursor-pointer hover:text-foreground transition-colors" />
          <div className="relative cursor-pointer">
            <ShoppingCart className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
          </div>
          <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a key={link} href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              {link}
            </a>
          ))}
          <button className="w-full bg-primary text-primary-foreground py-2.5 rounded-full text-sm font-semibold mt-2">
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
