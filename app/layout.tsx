import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "WishCube - AI-Powered Greeting Cards & Virtual Celebrations",
  description:
    "Create personalized AI-powered greeting cards, animated websites, virtual party rooms, and send digital gifts. Share on Instagram, WhatsApp, or email. Make every celebration unforgettable with WishCube.",
  keywords: [
    "wishcube",
    "greeting cards",
    "AI greeting cards",
    "virtual party",
    "digital gifts",
    "event invitations",
    "celebration platform",
    "animated cards",
    "online celebrations",
  ],
  authors: [{ name: "WishCube Team" }],
  openGraph: {
    title: "WishCube - AI-Powered Greeting Cards & Virtual Celebrations",
    description:
      "Create personalized AI-powered greeting cards, animated websites, virtual party rooms, and send digital gifts. Share on Instagram, WhatsApp, or email.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#1f2937",
              color: "#f9fafb",
              borderRadius: "12px",
              padding: "16px",
            },
            success: {
              iconTheme: {
                primary: "#10b981",
                secondary: "#f9fafb",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#f9fafb",
              },
            },
          }}
        />

        <TooltipProvider>
          <div className="bg-white font-space min-h-screen flex flex-col">
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 px-4 sm:px-8 md:px-12 lg:px-[100px]">
              <Navbar />
            </header>

            <main className="flex-1 w-full max-w-[1400px] ">{children}</main>
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
