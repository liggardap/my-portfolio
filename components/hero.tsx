import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconMapPin } from "@tabler/icons-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <Badge variant="secondary" className="mb-6 gap-1.5">
            <IconMapPin size={12} />
            Denpasar, Bali — Remote · Relocation Negotiable
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Liggar Prayoga
          </h1>

          <p className="text-xl text-muted-foreground mb-2">
            Backend-first. Full-stack in practice.
          </p>

          <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-xl">
            Backend Software Engineer with 3+ years building scalable APIs and SaaS products
            for international clients. Laravel · Ruby on Rails · Node.js · PostgreSQL · Redis.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/liggardap" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <IconBrandGithub size={18} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/liggar-prayoga-a98166191/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <IconBrandLinkedin size={18} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:liggardap@gmail.com" aria-label="Email">
                <IconMail size={18} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
