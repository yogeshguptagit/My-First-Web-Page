import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Diogenes of Sinope | The Dog Philosopher",
  description: "An immersive digital shrine to Diogenes of Sinope and the original Cynic philosophy. Explore the raw wisdom of the ancient Greek philosopher who lived by his principles.",
  keywords: "Diogenes, Cynic philosophy, ancient Greek philosophy, minimalism, virtue ethics, philosophical wisdom",
  authors: [{ name: "Philosophical Shrine" }],
  openGraph: {
    title: "Diogenes of Sinope | The Dog Philosopher",
    description: "An immersive digital shrine to the ancient Greek philosopher Diogenes and the original Cynic philosophy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="grain-texture min-h-screen">
        <Navigation />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}
