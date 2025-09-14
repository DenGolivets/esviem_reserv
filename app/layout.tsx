import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Playfair_Display,
  Oswald,
  Montserrat,
  Poppins,
} from "next/font/google";
import "./globals.css";
import Provider from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: false,
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  preload: false,
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: false,
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: false,
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#1d293d",
};

export const metadata: Metadata = {
  title: "ESVIEM Consulting",
  description: "Професійні консультаційні послуги",
  authors: [{ name: "ESVIEM" }],
  keywords: [
    "консалтинг",
    "консультації",
    "юридичні",
    "фінансові",
    "будівельні",
    "земельні",
    "esviem",
  ],
  robots: "index, follow",
  icons: {
    icon: "/esviem2.png",
    shortcut: "/esviem2.png",
    apple: "/esviem2.png",
  },
  openGraph: {
    title: "ESVIEM Consulting",
    description: "Професійні консультаційні послуги",
    type: "website",
    url: "https://esviem.com.ua",
    siteName: "ESVIEM Consulting",
    images: [
      {
        url: "/esviem2.png",
        width: 1200,
        height: 630,
        alt: "ESVIEM Consulting Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ESVIEM Consulting",
    description: "Професійні консультаційні послуги",
    images: ["/esviem2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" style={{ fontSize: "16px" }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#1d293d" />
        <meta name="msapplication-navbutton-color" content="#1d293d" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${playfair.variable} ${oswald.variable} ${montserrat.variable} ${poppins.variable} antialiased`}
        style={{
          margin: 0,
          padding: 0,
          fontFamily:
            "Montserrat, Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          textRendering: "optimizeLegibility",
          overflowX: "hidden",
        }}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
