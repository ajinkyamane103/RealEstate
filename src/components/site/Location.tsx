import { SectionHeading } from "./SectionHeading";
import { Plane, GraduationCap, Hospital, ShoppingBag, Train, Trees } from "lucide-react";

const points = [
  { Icon: Plane, t: "Intl. Airport", d: "18 min · 14 km" },
  { Icon: Train, t: "Metro Station", d: "6 min walk · Line 3" },
  { Icon: GraduationCap, t: "Top Schools", d: "DPS, Oakridge within 4 km" },
  { Icon: Hospital, t: "Multispeciality", d: "Fortis & Apollo · 8 min" },
  { Icon: ShoppingBag, t: "Premium Retail", d: "DLF Emporio · 12 min" },
  { Icon: Trees, t: "City Park", d: "Adjacent 80-acre forest" },
];

export function Location() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Location Advantages"
              title={<>An address that <span className="italic font-serif font-normal text-primary">does the work</span> for you.</>}
              description="Maison Lavande residences sit at the intersection of connectivity, calm and culture — minutes from the airport, schools and the city's finest."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {points.map(({ Icon, t, d }) => (
              <div key={t} className="rounded-xl border border-border bg-card p-5 transition-smooth hover:border-primary/50 hover:shadow-soft">
                <Icon size={18} className="text-primary" />
                <div className="mt-3 font-display text-base font-semibold text-foreground">{t}</div>
                <div className="text-xs text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-border shadow-card">
          <iframe
            title="Project location map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=77.05%2C28.45%2C77.15%2C28.55&amp;layer=mapnik"
            className="aspect-[16/7] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
