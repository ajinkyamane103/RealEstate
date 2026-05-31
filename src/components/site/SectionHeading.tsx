interface Props {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-primary">
        <span className="h-px w-8 bg-primary/40" />
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl font-semibold leading-tight text-foreground text-balance md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
