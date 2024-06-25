import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ReactQueryClientProvider } from "@context/ReactQueryClient";
import { Logo } from "@ui-core/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Microsite",
  description: "Microsite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
