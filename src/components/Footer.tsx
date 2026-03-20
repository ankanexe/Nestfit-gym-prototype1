import { Instagram, MessageCircle, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl tracking-widest text-foreground mb-2">
              NESTFIT<span className="text-accent">.</span>
            </h3>
            <p className="font-display text-sm text-muted-foreground mb-4">নেস্টফিট জিম</p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Barasat's premium fitness destination. Train Hard. Build Strength at NestFit Gym.
            </p>
          </div>

          <div>
            <h4 className="font-condensed text-xs tracking-[0.2em] text-accent uppercase mb-4">Quick Links</h4>
            <div className="space-y-3">
              {["About", "Experience", "Trainers", "Plans", "Gallery", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase() === "about" ? "brand-story" : link.toLowerCase() === "contact" ? "location" : link.toLowerCase()}`}
                  className="block font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-condensed text-xs tracking-[0.2em] text-accent uppercase mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <p className="font-body text-sm text-muted-foreground">
                  Saptarshi Sangha Club, Palpakuria Rd, Barasat,<br />Kolkata, WB 700125
                </p>
              </div>

              <div className="flex gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <a href="tel:09903904170" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  09903904170
                </a>
              </div>

              <div className="flex gap-3">
                <Clock className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div className="font-body text-sm text-muted-foreground">
                  <div>
                    <span className="inline-block w-[95px]">Mon–Sat:</span>
                    6:00 AM – 12:00 PM
                  </div>
                  <div>
                    <span className="inline-block w-[95px]"></span>
                    4:00 PM – 10:30 PM
                  </div>
                  <div className="mt-2">
                    <span className="inline-block w-[95px]">Sunday:</span>
                    6:00 AM – 12:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ FINAL SOCIAL SECTION */}
          <div>
            <h4 className="font-condensed text-xs tracking-[0.2em] text-accent uppercase mb-4">
              Follow Us
            </h4>

            <div className="flex gap-4">
              <a
                href="https://instagram.com/jyotirmoy.gain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/919903904170"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* ✅ UPDATED BOTTOM ROW (ONLY ADDITION) */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* LEFT SIDE - YOUR SIGNATURE */}
          <p className="text-sm text-muted-foreground tracking-wide">
            Designed & Developed by{" "}
            <a
              href="https://id-preview--ee0268a0-3b2b-47b1-bf17-b8f234d45be0.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground hover:text-accent transition-colors"
            >
              DoodLs.
            </a>
          </p>

          {/* CENTER/RIGHT - ORIGINAL COPYRIGHT */}
          <p className="font-body text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} NestFit Gym. All rights reserved. Barasat, Kolkata.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
