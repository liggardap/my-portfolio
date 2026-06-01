"use client";

import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center" aria-label="Liggar Prayoga">
          <Image
            src="/logos/liggar-mark-on-light.svg"
            alt="Liggar"
            width={32}
            height={32}
            className="block dark:hidden"
            unoptimized
          />
          <Image
            src="/logos/liggar-mark-on-dark.svg"
            alt="Liggar"
            width={32}
            height={32}
            className="hidden dark:block"
            unoptimized
          />
        </a>
        <nav className="flex items-center gap-1">
          <ul className="hidden md:flex items-center gap-1 mr-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
