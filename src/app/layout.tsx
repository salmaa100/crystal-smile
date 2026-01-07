import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- UPDATED SEO SECTION ---
export const metadata: Metadata = {
  // 1. The Title: Put your city and main service first.
  title: "Top-Rated Dentist in [Your City] | [Your Clinic Name]",
  
  // 2. The Description: Use keywords like "emergency," "family," or "implants."
  description: "Experience premium dental care at [Your Clinic Name] in [Your City]. We offer family dentistry, teeth whitening, and emergency dental services. Book your appointment today!",
  
  // 3. Open Graph: This makes your site look professional when shared on Facebook/WhatsApp
  openGraph: {
    title: "[Your Clinic Name] | Family Dentistry in [Your City]",
    description: "Accepting new patients! Modern dental care in the heart of [Your City].",
    type: "website",
    locale: "en_US",
    url: "https://www.yourdomain.com",
    siteName: "[Your Clinic Name]",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
