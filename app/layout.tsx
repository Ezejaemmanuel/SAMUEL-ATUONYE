import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Samuel Atuonye | TechBros - Tech Entrepreneur & Fullstack Developer",
  description: "Tech entrepreneur, AI specialist, and fullstack developer crafting innovative digital solutions for local and international brands. Founder and CEO of TechBros.",
  keywords: ["Samuel Atuonye", "TechBros", "Web Development", "AI", "Tech Entrepreneur", "Fullstack Developer", "Nigeria", "Portfolio"],
  authors: [{ name: "Samuel Atuonye", url: "https://github.com/techbros-7" }],
  creator: "Samuel Atuonye",
  publisher: "TechBros",
  formatDetection: {
    email: true,
    telephone: true,
    address: false,
  },
  metadataBase: new URL("https://techbros.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techbros.com",
    title: "Samuel Atuonye | TechBros - Tech Entrepreneur & Fullstack Developer",
    description: "Tech entrepreneur, AI specialist, and fullstack developer crafting innovative digital solutions for local and international brands. Founder and CEO of TechBros.",
    siteName: "Samuel Atuonye | TechBros Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Samuel Atuonye - TechBros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Atuonye | TechBros - Tech Entrepreneur & Fullstack Developer",
    description: "Tech entrepreneur, AI specialist, and fullstack developer crafting innovative digital solutions for local and international brands.",
    creator: "@TechBros_7",
    images: ["/twitter-image.png"],
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
