import "./globals.css";
import Navbar from "@/components/Navbar";
import {Footer}  from "@/components/Footer";

export const metadata = {
  title: "Portfolio de M. KOUAME",
  description: "Mon site personnel",
};

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
    </html>
  );
}
