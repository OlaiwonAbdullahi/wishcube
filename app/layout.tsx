import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";
import Providers from "./provider";
import Footer from "./ui/footer";
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
    <html lang="en" className={afacad.variable}>
      <body className="antialiased font-sans bg-white text-gray-900">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
