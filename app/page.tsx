import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-border/40 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Liggar Prayoga · Built with Next.js & shadcn/ui
        </div>
      </footer>
    </>
  );
}
