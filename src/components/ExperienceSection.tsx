import { Dumbbell, Users, Target, Flame, HeartPulse, Trophy } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import trainerCoachImg from "@/assets/trainer-coaching.jpg";

const features = [
  { icon: Users, title: "Professional Trainers", desc: "Certified experts guiding every rep" },
  { icon: Dumbbell, title: "Premium Equipment", desc: "Well-maintained, professional-grade gear" },
  { icon: Target, title: "Personalized Plans", desc: "Custom workouts for your goals" },
  { icon: Flame, title: "Fat Loss Programs", desc: "Science-backed transformation protocols" },
  { icon: HeartPulse, title: "Muscle Building", desc: "Structured hypertrophy training" },
  { icon: Trophy, title: "Transformation Coaching", desc: "Complete body recomposition guidance" },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-gradient-steel">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          <p className="font-condensed text-sm tracking-[0.3em] text-accent uppercase mb-4">The Experience</p>
          <h2 className="font-display text-4xl md:text-6xl text-gradient mb-4">Train Like Never Before</h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Every detail at Raw Fitness is designed to fuel your performance and push your limits.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="overflow-hidden">
              <img
                src={trainerCoachImg}
                alt="Personal training session at Raw Fitness"
                className="w-full h-[600px] object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.1} direction="right">
                <div className="group p-6 bg-card border border-border hover:border-accent/30 transition-all duration-500 cursor-default">
                  <f.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-lg text-foreground mb-2">{f.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
