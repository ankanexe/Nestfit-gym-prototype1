import { MapPin, Clock } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Side */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Visit Our Gym
            </h2>

            <p className="text-muted-foreground mb-8">
              Come experience NestFit Gym — Barasat’s premium fitness space with world-class equipment and expert trainers.
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <p className="text-muted-foreground">
                  Saptarshi Sangha Club, Palpakuria Rd,<br />
                  Barasat, Kolkata, West Bengal 700125
                </p>
              </div>

              {/* Timings (FIXED) */}
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-accent mt-1" />

                <div className="text-muted-foreground">
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

          {/* Right Side (Map or Image Placeholder) */}
          <div className="w-full h-[400px] bg-muted rounded-2xl flex items-center justify-center">
            <p className="text-muted-foreground">Map goes here</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
