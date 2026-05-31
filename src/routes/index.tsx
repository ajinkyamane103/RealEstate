import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { FeaturedProjects } from "@/components/site/FeaturedProjects";
import { About } from "@/components/site/About";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Amenities } from "@/components/site/Amenities";
import { Gallery } from "@/components/site/Gallery";
import { FloorPlans } from "@/components/site/FloorPlans";
import { Location } from "@/components/site/Location";
import { Testimonials } from "@/components/site/Testimonials";
import { ProgressSection } from "@/components/site/Progress";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your Name  — Luxury Residences Crafted for Generations" },
      { name: "description", content: "Premium RERA-approved residences, villas and penthouses by Your Name  Developers. 27 years of on-time delivery and uncompromising craft." },
      { property: "og:title", content: "Your Name  — Luxury Residences Crafted for Generations" },
      { property: "og:description", content: "Premium RERA-approved residences, villas and penthouses across Mumbai, Bengaluru and Gurugram." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Cormorant+Garamond:ital,wght@1,400;1,500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="overflow-x-clip bg-background">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <About />
      <WhyChooseUs />
      <Amenities />
      <Gallery />
      <FloorPlans />
      <Location />
      <Testimonials />
      <ProgressSection />
      <Contact />
      <Footer />
    </main>
  );
}
