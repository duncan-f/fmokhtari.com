import type { Metadata } from "next";
import { ColorModeScript } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import theme from "@/lib/theme";
import { siteData } from "@/lib/config";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { template: "%s - " + siteData.title, default: siteData.title },
  description: siteData.description,
  openGraph: {
    title: siteData.title,
    description: siteData.description,
    images: ["/images/coding.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
