import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const franklin = Libre_Franklin({
  variable: "--font-franklin",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} · ${SITE.location}`,
    template: `%s · ${SITE.name}`,
  },
  description:
    "Curated retail and community space in Long Island City for secondhand furniture, art, studio props, pop-ups, events, and local creative projects.",
  openGraph: {
    title: SITE.name,
    description: SITE.tagline,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${franklin.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-sw-paper text-sw-ink antialiased">
        {children}
      </body>
    </html>
  );
}
