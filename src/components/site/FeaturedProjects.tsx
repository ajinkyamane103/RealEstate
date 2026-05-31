import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import { ArrowUpRight, MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    img: p1,
    name: "The Aurelia Residences",
    location: "Bandra West, Mumbai",
    type: "3 & 4 BHK Sky Apartments",
    price: "₹ 4.8 Cr onwards",
    status: "Now Selling",
  },
  {
    img: p2,
    name: "Lavande Villas",
    location: "Whitefield, Bengaluru",
    type: "4 & 5 BHK Private Villas",
    price: "₹ 7.2 Cr onwards",
    status: "Limited Edition",
  },
  {
    img: p3,
    name: "Maison Skyline",
    location: "Golf Course Road, Gurugram",
    type: "Penthouses & Sky Suites",
    price: "₹ 9.6 Cr onwards",
    status: "New Launch",
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Featured Projects"
            title={<>A portfolio of <span className="italic font-serif font-normal text-primary">landmark</span> addresses.</>}
            description="Hand-selected residences across India's most coveted neighborhoods — each engineered to a single standard: extraordinary."
          />
          <a href="#contact" className="hidden text-sm font-medium text-primary underline-offset-4 hover:underline md:inline-flex">
            View all properties →
          </a>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.name} className="group hover-lift overflow-hidden rounded-2xl bg-card shadow-card">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-smooth duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-primary">
                  {p.status}
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/40 to-transparent opacity-0 transition-smooth group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin size={12} /> {p.location}
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold text-foreground">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.type}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Starting</div>
                    <div className="font-display text-lg font-semibold text-primary">{p.price}</div>
                  </div>
                  <a
                    href="#contact"
                    className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-primary transition-smooth group-hover:gradient-primary group-hover:text-primary-foreground"
                    aria-label={`View ${p.name}`}
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
