import FooterComponent from "./footer/page";
import Hero from "./home/page";
import Services from "./services/page";
import Contact from "./contact/page";
import Portfolio from "./portfolio/page";
export default function Page() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <FooterComponent />
    </main>
  );
}
