import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "./components/navbar";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://usewishcube.com"),
  title: {
    default:
      "WishCube | AI-Powered Greeting Cards and website & Virtual Celebrations",
    template: "%s | WishCube",
  },
  description:
    "Transform your celebrations with AI. Create personalized greeting cards,websites, virtual party rooms, and send digital gifts. Join the future of digital gifting.",
  keywords: [
    "wishcube",
    "AI greeting cards",
    "digital celebrations",
    "virtual party rooms",
    "personalized digital gifts",
    "online birthday cards",
    "interactive e-cards",
    "AI event invitations",
    "animated celebration websites",
    "virtual event platform",
  ],
  authors: [{ name: "WishCube Team", url: "https://usewishcube.com" }],
  creator: "WishCube",
  publisher: "WishCube",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title:
      "WishCube | AI-Powered Greeting Cards and Website & Virtual Celebrations",
    description:
      "Transform your celebrations with AI. Create personalized greeting cards, websites, and virtual party rooms.",
    url: "https://usewishcube.com",
    siteName: "WishCube",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WishCube - AI-Powered Celebrations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WishCube | AI-Powered Greeting Cards and Website & Virtual Celebrations",
    description:
      "Transform your celebrations with AI. Create personalized greeting cards, animated websites, and virtual party rooms.",
    site: "@usewishcube",
    creator: "@usewishcube",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://usewishcube.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "WishCube",
    description:
      "AI-Powered Greeting Cards & Virtual Celebrations. Create personalized cards, virtual party rooms, and send digital gifts.",
    url: "https://usewishcube.com",
    applicationCategory: "Celebration & Gifting",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "WishCube",
    },
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Rv-NiTAoaufBnGm8e0q72l86yshESLvmQCcsdcWyYoI"
        />
        <title>Wishcube</title>
      </head>
      <body className="antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Toaster position="top-right" richColors />

        <TooltipProvider>
          <div className="bg-white font-space min-h-screen flex flex-col">
            <header className="sticky top-0 z-50 bg-white/40 backdrop-blur-sm border-b border-gray-100 px-4 sm:px-8 md:px-12 lg:px-[100px]">
              <Navbar />
            </header>

            <main className="flex-1 w-full max-w-[1400px] mx-auto ">
              {children}
            </main>
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
