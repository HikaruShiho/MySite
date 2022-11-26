import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { GA_TRACKING_ID, pageview } from "utils/gtag";

export default function App({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    if (!GA_TRACKING_ID) return;
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)} mode="wait">
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ThemeProvider>
  );
}
