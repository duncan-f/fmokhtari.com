import type { Metadata } from "next";
import Main from "@/layouts/main";

export const metadata: Metadata = {
  metadataBase: new URL("https://mokhtari.netlify.app"),
  title: "Writeups",
  description:
    "Here I share my knowledge of cyber security and writeups for CTF challenges",
  openGraph: {
    title: "Writeups",
    description:
      "Here I share my knowledge of cyber security and writeups for CTF challenges",
    images: "/images/coding.jpg",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Main>{children}</Main>;
}
