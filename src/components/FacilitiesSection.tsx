import ScrollReveal from "./ScrollReveal";

const facilities = [
  {
    img: "/images/FACILITYFREEWEIGHTZONE.jpeg",
    title: "Free Weights Zone",
    desc: "Dumbbells, barbells, and plates for serious lifters",
  },
  {
    img: "/images/FACILTIES2.jpeg",
    title: "Cardio Arena",
    desc: "Treadmills, cycles, and rowing machines",
  },
  {
    img: "/images/FACILITYCHEST.jpeg",
    title: "Functional Training",
    desc: "Battle ropes, kettlebells, and bodyweight circuits",
  },
  {
    img: "/images/FACILITYSTRENGTH.jpeg",
    title: "Strength Station",
    desc: "Bench press, squat racks, and cable machines",
  },
];

const FacilitiesSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          <p className="font-condensed text-sm tracking-[0.3em] text-accent uppercase mb-4">
            Facilities
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-gradient">
            Where Iron Meets Purpose
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {facilities.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.1} direction="up">
              <div className="group relative overflow-hidden h-[400px] cursor-pointer">
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-display text-2xl text-foreground mb-2">
                    {f.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {f.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
