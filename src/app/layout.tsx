import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SolveClin | Engenharia de Processos e IA para Clínicas em Lisboa",
  description:
    "Pare de perder pacientes para a concorrência. Especialistas em Portugal com 20 anos de experiência em automação de clínicas para zerar a cadeira vazia.",
  openGraph: {
    title: "SolveClin | Engenharia de Processos e IA para Clínicas em Lisboa",
    description: "Pare de perder pacientes para a concorrência. Especialistas em Portugal com 20 anos de experiência em automação.",
    url: "https://solveclin.pt",
    siteName: "SolveClin",
    images: [
      {
        url: "/images/solveclin-retangular.png",
        width: 1200,
        height: 630,
        alt: "SolveClin Logo",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body className={`${jakartaSans.variable} ${playfair.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
