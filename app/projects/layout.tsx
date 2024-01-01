import type { Metadata } from "next";
import Main from "@/layouts/main";

export const metadata: Metadata = {
  title: "Projects",
  description: "These are projects I developed",
  openGraph: {
    title: "Projects",
    description: "These are projects I developed",
    images: ["/images/coding.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Main>{children}</Main>;
}
