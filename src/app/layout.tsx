import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: 'swap',
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
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
      <body className={`${inter.variable} ${bricolage.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
