import type { AppProps } from "next/app";
import { Inter, Nunito } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.variable + nunito.variable}>
      <Component {...pageProps} />
    </div>
  );
}
