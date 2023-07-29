import "@/styles/global.css";
import clsx from "clsx";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Sidebar from "./components/sidebar";

const defaultFont = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://albertakrong.com"),
  title: {
    default: "Albert Akrong",
    template: "%s | Albert Akrong",
  },
  description: "Developer, writer.",
  openGraph: {
    title: "Albert Akrong",
    description: "Developer, writer.",
    url: "https://albertakrong.com",
    siteName: "Albert Akrong",
    locale: "en-UK",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Albert Akrong",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx("text-black bg-white", defaultFont.className)}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
