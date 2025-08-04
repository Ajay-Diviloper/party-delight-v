import type { Metadata } from "next";
import { Montaga, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/HomeComponents/GetInTouch";


// ✅ Google Fonts
const montaga = Montaga({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-montaga",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URl || 'http://localhost:3000'),
  title: {
    default: 'Your Bakery - Fresh Products Daily',
    template: '%s | Your Bakery',
  },
  description: 'Discover our fresh bakery products including breads, cakes, and muffins. Baked daily with premium ingredients.',
  keywords: ['bakery', 'fresh bread', 'cakes', 'muffins', 'Italian products'],
  authors: [{ name: 'Your Bakery' }],
  creator: 'Your Bakery',
  publisher: 'Your Bakery',
  
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
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_BASE_URl,
    title: 'Your Bakery - Fresh Products Daily',
    description: 'Discover our fresh bakery products including breads, cakes, and muffins.',
    siteName: 'Your Bakery',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Bakery',
      },
    ],
  },
  
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome CDN for social icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKB4Imkb9hFQ9Q4v1p5d5b5Q5e5Q5e5Q5e5Q5e5Q5e5Q5e5Q5e5Q5e5Q5e5Q5e5Q5e5Q5e5Q=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* Structured Data for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Your Bakery",
              "url": process.env.NEXT_PUBLIC_BASE_URl,
              "description": "Fresh bakery products including breads, cakes, and muffins.",
              // "potentialAction": {
              //   "@type": "SearchAction",
              //   "target": "https://your-site.com/search?q={search_term_string}",
              //   "query-input": "required name=search_term_string"
              // }
            })
          }}
        />
      </head>
      
      <body
        className={`${montaga.variable} ${inter.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <GetInTouch />
        <Footer />
      </body>
    
    </html>
  );
}
