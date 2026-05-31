import { useState } from "react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import pool from "@/assets/amenity-pool.jpg";
import club from "@/assets/amenity-clubhouse.jpg";
import garden from "@/assets/amenity-garden.jpg";
import { SectionHeading } from "./SectionHeading";
import { X } from "lucide-react";

const shots = [p1, p2, p3, pool, club, garden];

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Project Gallery"
          title={<>A visual <span className="italic font-serif font-normal text-primary">walkthrough.</span></>}
          description="Real photography from completed and ongoing residences. No renders. No retouching."
        />

        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[260px]">
          {shots.map((src, i) => {
            const span = i === 0 || i === 3 ? "md:col-span-2 md:row-span-2" : "";
            return (
              <button
                key={i}
                onClick={() => setActive(src)}
                className={`group relative overflow-hidden rounded-2xl shadow-card ${span}`}
              >
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-smooth duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/0 transition-smooth group-hover:bg-primary/25" />
              </button>
            );
          })}
        </div>
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] grid place-items-center bg-primary/80 p-6 backdrop-blur-md"
        >
          <button className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full glass text-primary">
            <X size={18} />
          </button>
          <img src={active} alt="" className="max-h-[88vh] max-w-[92vw] rounded-2xl shadow-elegant" />
        </div>
      )}
    </section>
  );
}
