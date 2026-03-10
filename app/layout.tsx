// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Providers from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  // Title & description
  title:
    "Lyschor Real Estate LLC",
  // title:
  //   "Lyschor Real Estate LLC — Licensed UAE Brokerage with Legal RUB Payments",
  // description:
  //   "Licensed Dubai real estate brokerage offering 100% legal non-cash RUB payments for Russian buyers.",

  // THIS IS WHAT MAKES YOUR LOGO SHOW IN TABS (2025 way)
  icons: {
    icon: ["/logo.png"], // Main favicon
    shortcut: ["/logo.png"],
    apple: ["/apple-touch-icon.png"], // iOS
    other: [
      {
        rel: "icon",
        url: "/logo.png",
        sizes: "192x192",
      },
      {
        rel: "icon",
        url: "/logo.png",
        sizes: "512x512",
      },
    ],
  },

  openGraph: {
    title: "Lyschor Real Estate",
    // title: "Lyschor Real Estate — Legal RUB Payments",
    // description:
    //   "Licensed UAE brokerage with unique escrow RUB payment service",
    url: "https://lyschorrealestate.ae",
    images: ["/images/og-image.jpg"],
  },

  // Your other metadata...
  alternates: {
    canonical: "https://lyschorrealestate.ae",
    languages: {
      en: "https://lyschorrealestate.ae/en",
      ru: "https://lyschorrealestate.ae/ru",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        {/* Only JSON-LD here — no <link> tags needed */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Lyschor Real Estate LLC",
              url: "https://lyschorrealestate.ae",
              logo: "https://lyschorrealestate.ae/images/logo.png",
              // description:
              //   "Licensed UAE real estate brokerage offering legal RUB non-cash payments for Russian buyers",
              telephone: "+971-XXX-XXX-XXXX",
              email: "info@lyschorrealestate.ae",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dubai",
                addressRegion: "Dubai",
                addressCountry: "AE",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
