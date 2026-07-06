import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Manifesto } from "./components/Manifesto";
import { Work } from "./components/Work";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Recognition } from "./components/Recognition";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="grain min-h-screen bg-void text-chalk">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-acid focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-void"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Work />
        <Services />
        <Process />
        <Recognition />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
