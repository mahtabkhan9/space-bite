import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Menu from "@/components/Menu";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Features />
      <Menu />
      <Testimonials />
      <Contact />
    </div>
  );
}
