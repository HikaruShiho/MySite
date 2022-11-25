import "../styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)} mode="wait">
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ThemeProvider>
  );
}
