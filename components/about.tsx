import { Separator } from "@/components/ui/separator";
import { IconBuildingFactory2, IconSchool, IconWorld } from "@tabler/icons-react";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">About</h2>
        <Separator className="mb-10" />

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a backend engineer based in Bali, Indonesia with 3+ years of professional
              experience shipping production-ready systems for international clients across the
              Netherlands and Singapore.
            </p>
            <p>
              My work spans payment gateway integrations, Redis caching and queue systems,
              REST API design, and SaaS platform development. I&apos;m currently transitioning
              to full-stack — combining my backend depth with modern React and Next.js.
            </p>
            <p>
              I&apos;m open to remote and freelance opportunities. Relocation is negotiable.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-0.5 text-muted-foreground"><IconBuildingFactory2 size={20} /></div>
              <div>
                <p className="font-medium">PT Itsavirus Bali Development</p>
                <p className="text-sm text-muted-foreground">Medior Software Engineer (IC2) · Apr 2025–May 2026</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-0.5 text-muted-foreground"><IconWorld size={20} /></div>
              <div>
                <p className="font-medium">International Experience</p>
                <p className="text-sm text-muted-foreground">Clients in Netherlands & Singapore · Remote collaboration</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-0.5 text-muted-foreground"><IconSchool size={20} /></div>
              <div>
                <p className="font-medium">ITB STIKOM Bali</p>
                <p className="text-sm text-muted-foreground">Bachelor of Information Systems · 2020–2026</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-0.5 text-muted-foreground"><IconSchool size={20} /></div>
              <div>
                <p className="font-medium">Lithan Academy Singapore</p>
                <p className="text-sm text-muted-foreground">Software Engineering Bootcamp & Internship · 2021–2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
