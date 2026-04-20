import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Perudo Online - Play with Friends for Free",
  description: "Play Perudo online with friends. No dice needed - start your game now!",
  keywords: "Perudo, Liar's Dice, Dice Game, Online, Perudo Online, Liar's Dice Online",
  authors: [{ name: "Floris de Haan" }],
  metadataBase: new URL("https://peru.do"),
  alternates: { canonical: "/" },
  openGraph: {
    images: [{ url: "/perudo.webp", alt: "Perudo" }],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
