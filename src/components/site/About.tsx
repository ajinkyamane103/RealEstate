import p1 from "@/assets/project-1.jpg";
import { SectionHeading } from "./SectionHeading";
import { Award, Building2, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative gradient-soft py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div className="relative">
          <img
            src={p1}
            alt="Inside a Your Name  residence"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-elegant"
          />
          <div className="absolute -bottom-8 -right-4 hidden w-64 rounded-2xl bg-card p-6 shadow-elegant md:block">
            <div className="font-display text-4xl font-semibold text-primary">A+</div>
            <div className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">CRISIL Rated Builder</div>
            <p className="mt-3 text-sm text-muted-foreground">
              Highest grade for quality, financial strength &amp; on-time delivery.
            </p>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="The Builder"
            title={<>Three decades of <span className="italic font-serif font-normal text-primary">building trust</span>, brick by brick.</>}
            description="Founded in 1998, Your Name  is a second-generation real estate developer renowned for honest engineering, design integrity and a relentless commitment to on-time possession."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { icon: Building2, n: "48", l: "Projects Delivered" },
              { icon: Users, n: "12.4k", l: "Families Served" },
              { icon: Award, n: "17", l: "Industry Awards" },
            ].map(({ icon: Icon, n, l }) => (
              <div key={l} className="rounded-xl bg-card p-5 shadow-soft">
                <Icon size={20} className="text-primary" />
                <div className="mt-3 font-display text-2xl font-semibold text-foreground">{n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>

          <a href="#contact" className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            Read our story →
          </a>
        </div>
      </div>
    </section>
  );
}
