import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#amenities", label: "Amenities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#plans", label: "Plans" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-smooth ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg gradient-primary text-primary-foreground font-display font-bold">
            M
          </span>
          <div className="leading-tight">
            <div className={`font-display text-lg font-semibold tracking-tight ${scrolled ? "text-foreground" : "text-white"}`}>
              Maison Lavande
            </div>
            <div className={`text-[10px] uppercase tracking-[0.22em] ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
              Builders &amp; Developers
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-smooth hover:text-primary ${
                scrolled ? "text-foreground/80" : "text-white/90"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-smooth hover:opacity-90 hover:shadow-elegant lg:inline-flex"
        >
          Book Site Visit
        </a>

        <button
          onClick={() => setOpen((s) => !s)}
          className={`grid h-10 w-10 place-items-center rounded-full lg:hidden ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="glass lg:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 transition-smooth hover:bg-secondary hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full gradient-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Book Site Visit
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
