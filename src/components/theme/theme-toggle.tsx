import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
      className="cursor-pointer w-full"
    >
      <Button variant="outline" size="icon" className="w-5 h-5 border-none">
        <Sun className="h-[.8rem] w-[.8rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[.8rem] w-[.8rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
      <span className="ml-2 absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
        light
      </span>
      <span className="ml-2 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
        dark
      </span>
    </div>
  );
}
