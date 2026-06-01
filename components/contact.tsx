import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IconMail, IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
        <Separator className="mb-10" />

        <div className="max-w-lg">
          <p className="text-muted-foreground mb-8 leading-relaxed">
            I&apos;m open to remote full-stack roles, freelance projects, and international
            collaborations. Based in Bali, work across timezones without issue, and open to
            relocation — negotiable.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="gap-2">
              <a href="mailto:liggardap@gmail.com">
                <IconMail size={16} />
                liggardap@gmail.com
              </a>
            </Button>
            <Button variant="outline" asChild className="gap-2">
              <a href="https://www.linkedin.com/in/liggar-prayoga-a98166191/" target="_blank" rel="noopener noreferrer">
                <IconBrandLinkedin size={16} />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild className="gap-2">
              <a href="https://github.com/liggardap" target="_blank" rel="noopener noreferrer">
                <IconBrandGithub size={16} />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
