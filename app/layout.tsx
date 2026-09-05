import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const serif = Instrument_Serif({ variable: "--font-serif", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL("https://julius-mueller-photography.young-oasis-6338.chatgpt.site"),
  title: "Julius Mueller — Landscape Photographer",
  description: "Landscape and travel photography from California and the American West.",
  openGraph: {
    title: "Julius Mueller — Landscape Photographer",
    description: "Landscape and travel photography from California and the American West.",
    images: [{ url: "/og.png", width: 1732, height: 907 }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
