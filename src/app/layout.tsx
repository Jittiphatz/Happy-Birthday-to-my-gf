import type { Metadata } from "next";
import '@fontsource-variable/anuphan';
import "./globals.css";

export const metadata: Metadata = {
  title: "16 Years",
  description: "Generated by create next app",
  openGraph: {
    images: ['/images/Screenshot.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
