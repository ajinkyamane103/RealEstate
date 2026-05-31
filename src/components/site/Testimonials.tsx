import { SectionHeading } from "./SectionHeading";
import { Quote } from "lucide-react";

const items = [
  {
    q: "From the first site visit to handover, Your Name  felt less like a builder and more like a partner. The finishing is genuinely world-class.",
    n: "Aarav & Priya Mehta",
    r: "Owners · Aurelia 14B",
  },
  {
    q: "I've bought four homes in my life. This is the first time possession came two months ahead of schedule, with every committed spec delivered.",
    n: "Rohan Kapoor",
    r: "Owner · Lavande Villa 07",
  },
  {
    q: "The amenities feel like a five-star resort, but it's the structural quality you don't see that gives me real peace of mind.",
    n: "Dr. Anika Rao",
    r: "Owner · Maison Skyline PH-3",
  },
];

export function Testimonials() {
  return (
    <section className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          align="center"
          eyebrow="Owner Stories"
          title={<>Trusted by the families who <span className="italic font-serif font-normal text-primary">live here.</span></>}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.n} className="flex h-full flex-col rounded-2xl bg-card p-8 shadow-card hover-lift">
              <Quote className="text-primary/30" size={32} />
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground">
                "{t.q}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <div className="font-display text-sm font-semibold text-foreground">{t.n}</div>
                <div className="text-xs text-muted-foreground">{t.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
