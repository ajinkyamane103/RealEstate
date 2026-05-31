import { SectionHeading } from "./SectionHeading";
import { ShieldCheck, Clock, Sparkles, Hammer, Leaf, BadgeCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, t: "RERA Compliant", d: "Every project registered, transparent and fully traceable." },
  { icon: Clock, t: "On-time Possession", d: "27 years. 48 projects. 100% on-schedule delivery record." },
  { icon: Hammer, t: "Engineered to Last", d: "Seismic-zone V structural design with German-grade fittings." },
  { icon: Sparkles, t: "Signature Interiors", d: "Imported marble, Italian sanitaryware and bespoke joinery." },
  { icon: Leaf, t: "IGBC Gold Certified", d: "Solar, rainwater harvesting and zero-discharge sewage systems." },
  { icon: BadgeCheck, t: "Lifetime Service", d: "Dedicated facility team and 10-year structural warranty." },
];

export function WhyChooseUs() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          align="center"
          eyebrow="Why Your Name "
          title={<>Six promises. <span className="italic font-serif font-normal text-primary">Zero compromises.</span></>}
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="group relative bg-card p-8 transition-smooth hover:bg-secondary/40">
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-soft transition-smooth group-hover:scale-110">
                <Icon size={20} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
