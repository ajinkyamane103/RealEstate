import { useState } from "react";
import { z } from "zod";
import { SectionHeading } from "./SectionHeading";
import { Phone, Mail, MapPin, Check } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  project: z.string().min(1, "Select a project"),
  message: z.string().trim().max(600).optional(),
});

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-32">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.1fr] lg:px-10">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-secondary">
            <span className="h-px w-8 bg-secondary/60" /> Book Site Visit
          </div>
          <h2 className="font-display text-4xl font-semibold leading-tight text-balance md:text-5xl">
            Step inside a home <span className="italic font-serif font-normal text-secondary">made for you.</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-primary-foreground/80">
            Schedule a private tour with our residence advisor. We'll arrange chauffeured pickup
            and a curated walkthrough of the experience center.
          </p>

          <div className="mt-12 space-y-5">
            {[
              { Icon: Phone, t: "+91 98765 43210", s: "Mon–Sat · 9am–8pm" },
              { Icon: Mail, t: "residences@maisonlavande.com", s: "Replies within 2 hours" },
              { Icon: MapPin, t: "Experience Center, Golf Course Road", s: "Gurugram, India" },
            ].map(({ Icon, t, s }) => (
              <div key={t} className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl glass-dark">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="font-display text-base font-medium">{t}</div>
                  <div className="text-xs text-primary-foreground/70">{s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-card p-8 text-foreground shadow-elegant md:p-10">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
                <Check size={26} />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">Thank you.</h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                A residence advisor will reach out within two hours to confirm your visit.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" error={errors.name} />
                <Field label="Phone" name="phone" type="tel" error={errors.phone} />
              </div>
              <Field label="Email" name="email" type="email" error={errors.email} />
              <div>
                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Interested in</label>
                <select
                  name="project"
                  defaultValue=""
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-smooth focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="" disabled>Select a project</option>
                  <option>The Aurelia Residences — Mumbai</option>
                  <option>Lavande Villas — Bengaluru</option>
                  <option>Maison Skyline — Gurugram</option>
                </select>
                {errors.project && <p className="mt-1.5 text-xs text-destructive">{errors.project}</p>}
              </div>
              <div>
                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Message <span className="text-muted-foreground/60">(optional)</span></label>
                <textarea
                  name="message"
                  rows={3}
                  maxLength={600}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-smooth focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full gradient-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-smooth hover:opacity-90 hover:shadow-elegant"
              >
                Request Visit
              </button>
              <p className="text-center text-[11px] text-muted-foreground">
                By submitting, you agree to our privacy policy. We never share your information.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        maxLength={200}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-smooth focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
