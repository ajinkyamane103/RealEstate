import heroImg from "@/assets/hero-building.jpg";
import { ArrowRight, Calendar } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Luxury residential towers at golden hour"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background/60 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-24 pt-40 lg:px-10 lg:pb-32">
        <div className="max-w-3xl reveal-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            RERA Approved · Est. 1998
          </div>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-white text-balance md:text-6xl lg:text-7xl">
            Luxury Living,<br />
            <span className="italic font-serif font-normal text-secondary">Crafted for Generations.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            Meticulously engineered residences where architecture, craftsmanship and
            timeless design converge — homes that hold their value across lifetimes.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-primary shadow-elegant transition-smooth hover:bg-secondary"
            >
              Explore Projects
              <ArrowRight size={16} className="transition-smooth group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass-dark px-7 py-3.5 text-sm font-medium text-white transition-smooth hover:bg-white/15"
            >
              <Calendar size={16} /> Book Site Visit
            </a>
          </div>

          <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {[
              ["27+", "Years of Craft"],
              ["48", "Landmark Projects"],
              ["12,400+", "Happy Families"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl font-semibold text-white md:text-4xl">{n}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-white/70">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
