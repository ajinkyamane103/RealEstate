import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { Bed, Bath, Square, Check } from "lucide-react";

const plans = [
  { name: "3 BHK Sky Residence", carpet: "1,840 sq.ft.", beds: 3, baths: 3, price: "₹ 4.8 Cr", feats: ["Private deck", "Powder room", "Servant quarter"] },
  { name: "4 BHK Sky Residence", carpet: "2,460 sq.ft.", beds: 4, baths: 4, price: "₹ 6.4 Cr", feats: ["Family lounge", "Walk-in closet", "Home theatre nook"] },
  { name: "Penthouse Edition", carpet: "4,120 sq.ft.", beds: 5, baths: 5, price: "₹ 12.9 Cr", feats: ["Private plunge pool", "Sky deck", "Private elevator lobby"] },
];

export function FloorPlans() {
  const [i, setI] = useState(0);
  const p = plans[i];

  return (
    <section id="plans" className="gradient-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Floor Plans & Pricing"
          title={<>Choose your <span className="italic font-serif font-normal text-primary">configuration.</span></>}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-3">
            {plans.map((pl, idx) => (
              <button
                key={pl.name}
                onClick={() => setI(idx)}
                className={`w-full rounded-2xl border p-6 text-left transition-smooth ${
                  i === idx ? "border-primary bg-card shadow-elegant" : "border-border bg-card/60 hover:border-primary/40"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-display text-lg font-semibold text-foreground">{pl.name}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{pl.carpet} carpet area</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">From</div>
                    <div className="font-display text-lg font-semibold text-primary">{pl.price}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="rounded-2xl bg-card p-8 shadow-elegant md:p-10">
            <div className="text-xs uppercase tracking-[0.28em] text-primary">Selected Plan</div>
            <h3 className="mt-3 font-display text-3xl font-semibold text-foreground">{p.name}</h3>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { Icon: Bed, label: "Bedrooms", v: p.beds },
                { Icon: Bath, label: "Bathrooms", v: p.baths },
                { Icon: Square, label: "Carpet", v: p.carpet },
              ].map(({ Icon, label, v }) => (
                <div key={label} className="rounded-xl bg-secondary/60 p-4">
                  <Icon size={18} className="text-primary" />
                  <div className="mt-3 font-display text-base font-semibold text-foreground">{v}</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>

            <ul className="mt-8 space-y-3">
              {p.feats.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Check size={12} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-10 inline-flex w-full items-center justify-center rounded-full gradient-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-smooth hover:opacity-90 hover:shadow-elegant"
            >
              Request Detailed Floor Plan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
