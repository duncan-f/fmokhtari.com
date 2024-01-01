import type { Metadata } from "next";
import { siteData } from "@/lib/config";

export const metadata: Metadata = {
  title: "Blog - " + siteData.author,
  description:
    "This is my blog, it is powered by Astro. It's where I share my knowledge in technology and cyber security.",
  openGraph: {
    title: "Blog",
    description:
      "This is my blog, it is powered by Astro. It's where I share my knowledge in technology and cyber security.",
    images: ["/images/projects/blog.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
