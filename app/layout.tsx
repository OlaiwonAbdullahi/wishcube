import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Afacad } from "next/font/google";

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
        {children}
      </body>
    </html>
  );
}
