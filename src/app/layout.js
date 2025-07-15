// app/layout.js (or layout.tsx for TypeScript)
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

// Load fonts
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

// Metadata for SEO and social previews
export const metadata = {
  title: "Manish Kumar | Full Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Manish Kumar, a Full Stack Developer specializing in React, Next.js, and AI-powered solutions.",
  metadataBase: new URL("https://manishdev.tech"), // Replace with your deployed domain
  openGraph: {
    title: "Manish Kumar | Full Stack Developer & AI Enthusiast",
    description:
      "Building modern, scalable applications using React, Next.js, Node.js, and AI integrations.",
    url: "https://manishdev.tech",
    siteName: "Manish Kumar Portfolio",
    images: [
      {
        url: "https://manishdev.tech/og-image.png", // Ensure this image exists publicly
        width: 1200,
        height: 630,
        alt: "Manish Kumar | Full Stack Developer Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manish Kumar | Full Stack Developer & AI Enthusiast",
    description:
      "Portfolio of Manish Kumar, a MERN Stack and AI-powered solutions developer.",
    images: ["https://manishdev.tech/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
  <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
<link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/manifest.json"/>
<meta name="msapplication-TileColor" content="#ffffff"/>
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
<meta name="theme-color" content="#ffffff"/>

  {/* JSON-LD Structured Data */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Manish Kumar",
        url: "https://manishdev.tech",
        jobTitle: "Full Stack Web Developer",
        sameAs: [
          "https://github.com/ManishKumarCs",
          "https://linkedin.com/in/manishkumarcs1",
        ],
      }),
    }}
  />
</head>

      <body className="...">
        {children}
      </body>
    </html>
  );
}

