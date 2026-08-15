import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ArtPortfolio from "@/components/ArtPortfolio";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-wall">
      <Nav />
      <main className="flex-1">
        <Hero />
        <div className="h-px bg-line" />
        <ArtPortfolio />
        <div className="h-px bg-line" />
        <Projects />
        <div className="h-px bg-line" />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}
