import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Afacad } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
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
    <html lang="en" className={afacad.variable}>
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
        <div className="min-h-screen relative flex flex-col items-center justify-around  overflow-hidden bg-[#1A1A1A]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

          {children}
        </div>
      </body>
    </html>
  );
}
