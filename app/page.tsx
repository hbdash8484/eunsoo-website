import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import ArtPortfolio from "@/components/ArtPortfolio";
import Projects from "@/components/Projects";
import Reading from "@/components/Reading";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-wall">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Featured />
        <ArtPortfolio />
        <Projects />
        <Reading />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}
