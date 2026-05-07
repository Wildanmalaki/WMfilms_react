"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("light-theme", theme === "light");
  document.documentElement.classList.toggle("dark-theme", theme === "dark");
  localStorage.setItem("wmfilms-theme", theme);
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const savedTheme = localStorage.getItem("wmfilms-theme") as Theme | null;

    return (
      savedTheme ??
      (window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark")
    );
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }

  return (
    <button
      type="button"
      aria-label={
        theme === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap"
      }
      className={cn(
        "theme-toggle inline-flex size-11 items-center justify-center rounded-[8px] border border-white/15 bg-white/10 text-white transition hover:border-wm-red/60 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wm-red",
        className,
      )}
      onClick={toggleTheme}
    >
      <Sun
        size={19}
        className={cn(
          "absolute transition duration-300",
          theme === "light" ? "scale-100 rotate-0" : "scale-0 rotate-90",
        )}
      />
      <Moon
        size={19}
        className={cn(
          "transition duration-300",
          theme === "dark" ? "scale-100 rotate-0" : "scale-0 -rotate-90",
        )}
      />
    </button>
  );
}
