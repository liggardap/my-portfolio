"use client";

import { useState } from "react";
import Image from "next/image";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

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
          {/* Desktop links */}
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

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-1 p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <IconX size={20} /> : <IconMenu2 size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-sm">
          <ul className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
