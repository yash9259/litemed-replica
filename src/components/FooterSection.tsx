const FooterSection = () => {
  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-4">CURAPOD</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              by Litemed — A compact, wearable light therapy device designed to help relieve joint pain & muscle discomfort.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Home", "How Curapod Works", "Clinical Trials", "Reviews", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-foreground transition-colors">{l}</a>
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
              <li>support@litemed.co.in</li>
              <li>Hyderabad, India</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-10 pt-6 text-center text-sm text-muted-foreground">
          © 2024 Litemed. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
