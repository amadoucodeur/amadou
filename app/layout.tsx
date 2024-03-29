import type { Metadata } from "next";
import { Inter, Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import "./bazzar.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "900" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Amadou Coulibaly",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
