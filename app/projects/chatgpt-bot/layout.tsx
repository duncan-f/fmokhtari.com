import type { Metadata } from "next";
import { siteData } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL("https://mokhtari.netlify.app"),
  title: "ChatGPT Telegram Bot - " + siteData.author,
  description:
    "This project combines openai from ChatGPT with the Telegram API. It's a very helpful assistant.",
  openGraph: {
    title: "ChatGPT Telegram Bot",
    description:
      "This project combines openai from ChatGPT with the Telegram API. It's a very helpful assistant.",
    images: "/images/projects/chatgpt-bot.png",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
