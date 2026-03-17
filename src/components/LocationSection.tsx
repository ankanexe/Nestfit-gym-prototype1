import { MapPin, Clock, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const LocationSection = () => {
  return (
    <section id="location" className="py-32 px-6 bg-gradient-steel">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          <p className="font-condensed text-sm tracking-[0.3em] text-accent uppercase mb-4">Find Us</p>
          <h2 className="font-display text-4xl md:text-6xl text-gradient">Our Location</h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal direction="left">
            <div className="h-[450px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.5!2d88.48!3d22.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzEyLjAiTiA4OMKwMjgnNDguMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(20%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Raw Fitness location on Google Maps"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="flex flex-col justify-center h-full space-y-8">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">Address</h3>
                  <p className="font-body text-muted-foreground">
                    Raw Fitness, Saroj Park, Taki Rd,<br />
                    Barasat, Kolkata, West Bengal 700124
                  </p>
                  <p className="font-body text-sm text-muted-foreground/70 mt-2">
                    Located in: Taki Road Balak Brinda Sporting Club
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">Hours</h3>
                  <p className="font-body text-muted-foreground">Open — Closes 10 PM</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">Phone</h3>
                  <a href="tel:06290282721" className="font-body text-accent hover:underline">
                    062902 82721
                  </a>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Raw+Fitness+Barasat+Kolkata"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 border border-foreground/20 text-foreground px-8 py-3 font-condensed text-sm uppercase tracking-widest hover:bg-foreground/5 transition-all text-center"
              >
                Get Directions
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
