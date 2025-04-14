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
  description: "PrepSmart - Your AI-Powered Interview Preparation Assistant Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${MonaSans.className}  antialiased pattern`}
      >
        {children}

        <Toaster/>
      </body>
    </html>
  );
}
