import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const MonaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrepSmart",
  description:
    "PrepSmart - Your AI-Powered Interview Preparation Assistant Platform",
  metadataBase: new URL("https://prepsmartz.vercel.app/"),
  openGraph: {
    title: "PrepSmart",
    description:
      "PrepSmart - Your AI-Powered Interview Preparation Assistant Platform",
    url: "https://prepsmartz.vercel.app/",
    siteName: "PrepSmart",
    images: [
      {
        url: "/ogimage.png",
        width: 1200,
        height: 630,
        alt: "PrepSmart – Your AI Interview Assistant",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrepSmart",
    description:
      "PrepSmart - Your AI-Powered Interview Preparation Assistant Platform",
    images: ["/ogimage.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${MonaSans.className}  antialiased pattern`}>
        {children}

        <Toaster />
      </body>
    </html>
  );
}
