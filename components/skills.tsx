import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const skillGroups = [
  {
    category: "Backend",
    skills: ["Laravel", "Ruby on Rails", "Node.js", "REST API Design"],
  },
  {
    category: "Database & Caching",
    skills: ["PostgreSQL", "MySQL", "Redis"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "Git", "CI/CD", "GitHub Actions"],
  },
  {
    category: "Engineering Practices",
    skills: ["Agile / SCRUM", "Code Review", "Unit Testing", "Integration Testing", "Repository Service Pattern"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS", "Webflow"],
  },
  {
    category: "AI & Tools",
    skills: ["Claude", "AI-Assisted Development"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2">Skills</h2>
        <Separator className="mb-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <Badge key={s} variant="outline">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
