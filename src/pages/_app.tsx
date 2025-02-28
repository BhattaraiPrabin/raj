import "../styles/globals.css"; // Global CSS import
import { NextUIProvider } from "@nextui-org/react";
import { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// Main App component
export default function App({ Component, pageProps }: AppProps) {
  return (
    // Wrap the app with NextUIProvider for theme and components
    <NextUIProvider>
      {/* Render the page component */}
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
