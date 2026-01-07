import { Poppins } from "next/font/google";
import "./globals.css";
import QueryProviders from "@/components/providers/query-providers";
import { SessionProvider } from "next-auth/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <SessionProvider>
          <QueryProviders>{children}</QueryProviders>
        </SessionProvider>
      </body>
    </html>
  );
}
