import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kannika — A Digital Tribute",
  description: "An emotional immersive cinematic experience dedicated to her light.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Importando a tipografia editorial de luxo Cormorant Garamond e a sans-serif de suporte Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-bone antialiased selection:bg-gold/20 selection:text-gold">
        {/* Camada de granulação que dá textura de película cinematográfica ao site */}
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
