import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const projects = [
  {
    title: "Larissa Beauty & Spa",
    period: "2024",
    client: "Personal Project · University Thesis",
    description:
      "Full-stack booking system for a beauty and spa business. Multi-role auth (Admin, Employee, Customer) with JWT denylist, treatment and product management, reservations, cart and order flows, payment tracking, and image uploads via Active Storage. Deployed on Digital Ocean with Docker, Sidekiq background jobs, and cron-scheduled slot generation.",
    tags: ["Ruby on Rails 7", "PostgreSQL", "PostGIS", "Redis", "Sidekiq", "Docker", "JWT", "React", "TypeScript"],
    highlight: "Live deployment · Multi-role system · Booking + payments",
    type: "Personal",
  },
  {
    title: "Stak — Financial Instruments Platform",
    period: "2025",
    client: "Personal Project",
    description:
      "Full-stack platform for managing shares, dividends, bonds, and interest. RFC-compliant REST API (RFC 9457, RFC 8259, RFC 8288) with database-driven RBAC and JWT auth. Multilingual support (en-US, nl, id, jv). Vue 3 SPA with role-gated Admin and Participant portals.",
    tags: ["Laravel 13", "MySQL", "JWT", "RBAC", "Vue 3", "TypeScript", "Pinia", "shadcn-vue", "Tailwind CSS 4"],
    highlight: "RFC-compliant API · Full-stack · 4 languages",
    type: "Personal",
    url: "https://stak.liggar.site/",
  },
  {
    title: "Job Board Platform",
    period: "2025",
    client: "Personal Project",
    description:
      "Full-stack job board with Elasticsearch-powered search and multi-role access (Candidate, Company, Admin). Laravel 13 API with Redis Pub/Sub and a Node.js indexer. Vue 3 SPA with job search, filters, company portal for posting and reviewing applicants, and live search-time display.",
    tags: ["Laravel 13", "Elasticsearch", "Redis Pub/Sub", "Node.js", "Vue 3", "TypeScript", "Pinia", "Tailwind CSS 4", "Playwright"],
    highlight: "Elasticsearch search · Company + Candidate portals · Full-stack",
    type: "Personal",
  },
  {
    title: "Share Council Platform",
    period: "Dec 2023 – May 2025",
    client: "PT Itsavirus Bali Development · Netherlands",
    description:
      "Backend services and APIs for an international SaaS platform. Implemented Mollie payment gateway with Mastercard and Visa compliance, participant workflows, and core backend business logic.",
    tags: ["Laravel", "PostgreSQL", "Mollie", "REST API", "PHP"],
    highlight: "International client · Payment gateway integration",
    type: "Professional",
  },
  {
    title: "Melalie — EV Rental Marketplace",
    period: "Mar 2023 – Aug 2024",
    client: "PT Itsavirus Bali Development",
    description:
      "Full backend for an electric vehicle rental marketplace. Built cashless payment processing, real-time GPS tracking integration, and multilingual support from the ground up.",
    tags: ["Ruby on Rails", "PostgreSQL", "GPS Tracking", "Payments", "i18n"],
    highlight: "GPS · Cashless payments · Multilingual",
    type: "Professional",
  },
];

const personal = projects.filter((p) => p.type === "Personal");
const professional = projects.filter((p) => p.type === "Professional");

function ProjectCard({ p }: { p: (typeof projects)[0] }) {
  const card = (
    <Card className={`flex flex-col hover:shadow-md transition-shadow${p.url ? " cursor-pointer hover:ring-1 hover:ring-primary/30" : ""}`}>
      <CardHeader>
        <CardTitle className="text-lg leading-snug">{p.title}</CardTitle>
        <CardDescription className="text-xs">
          {p.client} · {p.period}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4">
        <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
        <p className="text-xs font-medium text-primary">{p.highlight}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {p.tags.map((t) => (
            <Badge key={t} variant="secondary" className="text-xs">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  if (p.url) {
    return (
      <a href={p.url} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
        {card}
      </a>
    );
  }

  return card;
}

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Projects</h2>
        <Separator className="mb-10" />

        <div className="space-y-12">
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
              Personal
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {personal.map((p) => <ProjectCard key={p.title} p={p} />)}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
              Professional
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {professional.map((p) => <ProjectCard key={p.title} p={p} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
