import "./global.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";

export function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="cash-bank-theme">
        <TooltipProvider delayDuration={0}>
          <Toaster position="bottom-right" richColors />
          <RouterProvider router={router} />
        </TooltipProvider>
      </ThemeProvider>
    </>
  );
}
