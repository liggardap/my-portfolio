"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconSun, IconMoon, IconDeviceDesktop } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return <div className="w-9 h-9" />;

  const cycles: Record<string, string> = { light: "dark", dark: "system", system: "light" };
  const icons: Record<string, React.ReactNode> = {
    light: <IconSun size={18} />,
    dark: <IconMoon size={18} />,
    system: <IconDeviceDesktop size={18} />,
  };

  const current = theme ?? "system";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(cycles[current])}
      aria-label="Toggle theme"
    >
      {icons[current]}
    </Button>
  );
}
