import { Star, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    text: "Equipment is well maintained and the atmosphere is great for workouts. The trainers push you to your limits in the best way possible.",
    name: "Soham M.",
    rating: 5,
  },
  {
    text: "Friendly trainers, good machines, and a positive workout environment. Best gym in Barasat without a doubt.",
    name: "Aniket R.",
    rating: 5,
  },
  {
    text: "Best gym with good ambience and a very friendly owner. Transformed my body in 6 months with their guidance.",
    name: "Riya D.",
    rating: 5,
  },
  {
    text: "Professional setup, clean environment, and trainers who actually care about your progress. Highly recommended!",
    name: "Debajit S.",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-32 px-6 bg-gradient-steel">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          <p className="font-condensed text-sm tracking-[0.3em] text-accent uppercase mb-4">Testimonials</p>
          <h2 className="font-display text-4xl md:text-6xl text-gradient mb-4">Stories of Transformation</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1} direction="up">
              <div className="bg-card border border-border p-8 hover:border-accent/20 transition-all duration-500 h-full">
                <Quote className="w-8 h-8 text-accent/30 mb-4" />
                <p className="font-body text-foreground/90 leading-relaxed mb-6 text-lg italic">
                  "{t.text}"
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-condensed text-sm tracking-wider text-muted-foreground uppercase">{t.name}</p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className={`w-3.5 h-3.5 ${j < t.rating ? "text-accent fill-accent" : "text-muted-foreground"}`} />
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
