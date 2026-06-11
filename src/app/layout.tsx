import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import CustomCursor from "@/components/ui/CustomCursor";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import ScrollProgress from "@/components/ui/ScrollProgress";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rashtriya Mook Badhir Vidyalaya | Education & Vocational Training for Deaf and Mute Students",
  description: "Providing specialized education, vocational training and opportunities for hearing and speech impaired students to achieve independence and success.",
  openGraph: {
    title: "Rashtriya Mook Badhir Vidyalaya",
    description: "Empowering Deaf and Mute Students Through Education & Skill Development",
    url: "https://rashtriyamook.org",
    siteName: "Rashtriya Mook Badhir Vidyalaya",
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NGO",
      "name": "Rashtriya Mook Badhir Vidyalaya",
      "url": "https://rashtriyamook.org",
      "description": "Providing specialized education, vocational training and opportunities for hearing and speech impaired students.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Education Lane, Knowledge Park",
        "addressLocality": "New Delhi",
        "postalCode": "110001",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "EducationalOrganization",
      "name": "Rashtriya Mook Badhir Vidyalaya",
      "url": "https://rashtriyamook.org"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${outfit.variable} font-sans antialiased min-h-screen flex flex-col relative`}
      >
        <div className="noise-overlay" />
        <CustomCursor />
        <AnimatedBackground />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1 flex flex-col pt-20">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
