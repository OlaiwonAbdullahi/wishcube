import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Afacad } from "next/font/google";
import Navbar from "./components/navbar";

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "WishCube - Make Your Wishes Come True",
  description:
    "WishCube is a platform where dreams meet reality. Create, share, and fulfill wishes with our community.",
  keywords: ["wishcube", "wishes", "community", "dreams", "gifts"],
  authors: [{ name: "WishCube Team" }],
  openGraph: {
    title: "WishCube - Make Your Wishes Come True",
    description:
      "WishCube is a platform where dreams meet reality. Create, share, and fulfill wishes with our community.",
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
        <div className="min-h-screen relative flex flex-col items-center justify-around p-5 overflow-hidden bg-[#1A1A1A]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
          <Navbar />
          {children}
          <footer
            className=" z-10 mt-12 text-zinc-600 text-sm animate-fade-in text-center"
            style={{ animationDelay: "0.6s" }}
          >
            <p>© 2026 WishCube. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
