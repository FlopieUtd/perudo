import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Perudo Online - Play with Friends for Free",
  description: "Play Perudo online with friends. No dice needed - start your game now!",
  keywords: "Perudo, Liar's Dice, Dice Game, Online, Perudo Online, Liar's Dice Online",
  authors: [{ name: "Floris de Haan" }],
  metadataBase: new URL("https://peru.do"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://peru.do",
    images: [{ url: "/perudo.webp", alt: "Perudo", width: 500, height: 500 }],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

const GA_ID = "G-ZXKDHJBK23";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/Aztec.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
