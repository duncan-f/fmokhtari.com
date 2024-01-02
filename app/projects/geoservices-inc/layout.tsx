import type { Metadata } from "next";
import { siteData } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL("https://mokhtari.netlify.app"),
  title: "Blog - " + siteData.author,
  description:
    "This is a website I created for a friend. His company operates in geoscience and geotechnical engineering.",
  openGraph: {
    title: "Blog",
    description:
      "This is a website I created for a friend. His company operates in geoscience and geotechnical engineering.",
    images: "/images/projects/geoservices.png",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
