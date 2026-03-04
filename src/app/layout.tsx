import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Solveclin - Soluções Inteligentes para Clínicas",
  description: "Otimização de processos, LPs, tráfego pago e atendimento para clínicas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${plusJakartaSans.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
