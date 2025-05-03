import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./components/navbar";

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "WishCube | Send Virtual Gifts & Greetings",
  description:
    "Create greeting cards, send e-gifts, and host virtual parties with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={afacad.variable}>
        <body className="antialiased font-sans bg-white text-gray-900">
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
