import StarsCanvas from "@/components/StarBackground";
import "../globals.css";
import type { Metadata } from "next";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Inter, Lato } from "next/font/google";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ContextProvider } from "./providers/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amilton Santos Portfolio",
  description: "Amilton Santos Desenvolvedor Front-end Portfolio",
  keywords: [
    "Amilton Santos",
    "Amilton Santos portfolio",
    "Amilton Santos dev",
    "Amilton Santos dev frontend",
    "dev frontend",
    "desenvolvedor Front-end",
  ],
  authors: [
    {
      name: "Amilton Santos",
      url: "https://www.linkedin.com/in/amilton-santos-gomes/",
    },
  ],
  creator: "Amilton Santos",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className}  overflow-x-hidden bg-[#030014]`}>
        <StarsCanvas />
        <ContextProvider>
          <Navbar />
          {children}
        </ContextProvider>
        <Footer />
      </body>
    </html>
  );
}
