import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg gradient-primary text-primary-foreground font-display font-bold">M</span>
              <div className="leading-tight">
                <div className="font-display text-lg font-semibold">Maison Lavande</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-background/60">Builders &amp; Developers</div>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-background/70">
              Crafting landmark residences across India since 1998. Built to outlast trends, designed to feel like home.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Linkedin, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full bg-background/10 transition-smooth hover:bg-primary">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {[
            { t: "Projects", l: ["The Aurelia", "Lavande Villas", "Maison Skyline", "Upcoming Launches"] },
            { t: "Company", l: ["About", "Leadership", "Careers", "Press"] },
            { t: "Resources", l: ["Floor Plans", "Brochure", "Channel Partners", "NRI Services"] },
          ].map((c) => (
            <div key={c.t}>
              <div className="text-xs font-medium uppercase tracking-[0.22em] text-background/60">{c.t}</div>
              <ul className="mt-5 space-y-3">
                {c.l.map((x) => (
                  <li key={x}><a href="#" className="text-sm text-background/85 transition-smooth hover:text-secondary">{x}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-background/15 bg-background/5 p-6">
          <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-secondary">RERA Information</div>
          <p className="mt-3 text-xs leading-relaxed text-background/70">
            The Aurelia Residences — RERA Reg. No.: <span className="text-background">P51800012345</span> · 
            Lavande Villas — RERA Reg. No.: <span className="text-background">PRM/KA/RERA/1251/446/PR/220318/004567</span> · 
            Maison Skyline — RERA Reg. No.: <span className="text-background">HRERA-GGM-2024-987</span>. 
            All project details available at the respective state RERA authority website.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-background/15 pt-6 text-xs text-background/60">
          <div>© {new Date().getFullYear()} Maison Lavande Developers Pvt. Ltd. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary">Privacy</a>
            <a href="#" className="hover:text-secondary">Terms</a>
            <a href="#" className="hover:text-secondary">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
