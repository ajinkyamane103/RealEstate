import pool from "@/assets/amenity-pool.jpg";
import gym from "@/assets/amenity-gym.jpg";
import garden from "@/assets/amenity-garden.jpg";
import club from "@/assets/amenity-clubhouse.jpg";
import { SectionHeading } from "./SectionHeading";

const items = [
  { img: pool, t: "Infinity Pool", d: "Sky-edge pool with sunset views" },
  { img: club, t: "Grand Clubhouse", d: "30,000 sq.ft. of curated leisure" },
  { img: gym, t: "Wellness Studio", d: "Technogym-equipped fitness center" },
  { img: garden, t: "Rooftop Gardens", d: "Half-acre of landscaped greens" },
];

export function Amenities() {
  return (
    <section id="amenities" className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Amenities"
          title={<>A private resort, <span className="italic font-serif font-normal text-primary">right at home.</span></>}
          description="Forty-plus curated amenities designed by hospitality consultants from the world's leading five-star brands."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((a) => (
            <div key={a.t} className="group relative overflow-hidden rounded-2xl shadow-card hover-lift">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={a.img}
                  alt={a.t}
                  loading="lazy"
                  className="h-full w-full object-cover transition-smooth duration-[1200ms] group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-xl font-semibold text-primary-foreground">{a.t}</h3>
                <p className="mt-1 text-sm text-primary-foreground/85">{a.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
