import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GlucoScan",
  description:
    "GlucoScan merupakan platform berbasis web yang bertujuan untuk membantu user mengelola dan memantau asupan gula harian mereka. Melalui website GlucoScan, pengguna dapat memindai barcode produk kemasan menggunakan perangkat seluler mereka atau mencari produk secara manual untuk mendapatkan informasi tentang kandungan gula dan fakta nutrisi lainnya. Melalui website GlucoScan, para pengunjung dapat membuat profil dan mendaftarkan paket berlangganan premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <NextTopLoader showSpinner={false} color="#FF7900" shadow={false} />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
