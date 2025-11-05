import "./globals.css";
import Navbar from "@/components/Navbar";
import {Footer}  from "@/components/Footer";
import Script from 'next/script';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
      <Script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js" />
    </html>
  );
}
