import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ArtPortfolio from "@/components/ArtPortfolio";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#edeae3" }}>
      <Nav />
      <main className="flex-1">
        <Hero />
        <div style={{ height: "1px", backgroundColor: "#9aaa96", opacity: 0.3 }} />
        <ArtPortfolio />
        <div style={{ height: "1px", backgroundColor: "#9aaa96", opacity: 0.3 }} />
        <Projects />
        <div style={{ height: "1px", backgroundColor: "#9aaa96", opacity: 0.3 }} />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}
