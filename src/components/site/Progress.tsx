import construction from "@/assets/construction.jpg";
import { SectionHeading } from "./SectionHeading";

const updates = [
  { project: "Aurelia · Tower B", phase: "Finishing & MEP", pct: 92 },
  { project: "Lavande Villas", phase: "Landscape & Handover", pct: 98 },
  { project: "Maison Skyline", phase: "Structural Casting · L24", pct: 64 },
];

export function ProgressSection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className="relative order-2 lg:order-1">
          <img src={construction} alt="Active construction site" loading="lazy" className="aspect-[5/4] w-full rounded-2xl object-cover shadow-elegant" />
          <div className="absolute -bottom-6 -left-4 hidden rounded-xl bg-card p-5 shadow-elegant md:block">
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Last updated</div>
            <div className="mt-1 font-display text-lg font-semibold text-foreground">31 May 2026</div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Construction Updates"
            title={<>Transparency, <span className="italic font-serif font-normal text-primary">monthly.</span></>}
            description="Real-time updates from every active site. Drone footage, RERA-compliant milestones and quality audit reports delivered to every booked owner."
          />

          <div className="mt-10 space-y-6">
            {updates.map((u) => (
              <div key={u.project}>
                <div className="flex items-baseline justify-between text-sm">
                  <div>
                    <div className="font-display font-semibold text-foreground">{u.project}</div>
                    <div className="text-xs text-muted-foreground">{u.phase}</div>
                  </div>
                  <div className="font-display text-lg font-semibold text-primary">{u.pct}%</div>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full gradient-primary transition-smooth" style={{ width: `${u.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
