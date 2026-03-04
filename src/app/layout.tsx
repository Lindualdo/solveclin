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
  title: "SolveClin | Engenharia de Processos e IA para Clínicas em Lisboa",
  description: "Pare de perder pacientes para a concorrência. Especialistas em Portugal com 20 anos de experiência em automação de clínicas para zerar a cadeira vazia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body className={`${inter.variable} ${plusJakartaSans.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
