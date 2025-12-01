import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { generatePersonSchema, generateWebsiteSchema } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miguel Casares - Business Analyst & Data Analytics Specialist",
  description: "Especialista en análisis de datos, Power BI y Business Intelligence. Transformo datos en estrategias empresariales para la toma de decisiones. Portfolio profesional de Miguel Casares.",
  keywords: ["Miguel Casares", "Business Analyst", "Data Analytics", "Power BI", "Business Intelligence", "Análisis de datos", "Dashboard", "Granada", "Consultor BI"],
  authors: [{ name: "Miguel Casares" }],
  creator: "Miguel Casares",
  publisher: "Miguel Casares",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://portfolio-miguel.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Miguel Casares - Business Analyst & Data Analytics Specialist",
    description: "Especialista en análisis de datos, Power BI y Business Intelligence. Transformo datos en estrategias empresariales para la toma de decisiones.",
    url: 'https://portfolio-miguel.vercel.app',
    siteName: 'Miguel Casares Portfolio',
    images: [
      {
        url: '/miguelCasaresProfile.png',
        width: 1200,
        height: 630,
        alt: 'Miguel Casares - Business Analyst & Data Analytics',
      }
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Miguel Casares - Business Analyst & Data Analytics Specialist",
    description: "Especialista en análisis de datos, Power BI y Business Intelligence. Transformo datos en estrategias empresariales para la toma de decisiones.",
    images: ['/miguelCasaresProfile.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Reemplazar con el código real
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = generatePersonSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/miguelCasaresProfile.png" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
