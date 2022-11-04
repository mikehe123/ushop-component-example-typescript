import "../styles/globals.css";
import type { AppProps } from "next/app";
import LayoutGloabl from "@components/layout/layoutGlobal/LayoutGlobal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutGloabl>
      <Component {...pageProps} />
    </LayoutGloabl>
  );
}

export default MyApp;
