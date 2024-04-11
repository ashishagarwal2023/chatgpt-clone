import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FreeGPT",
  description: "Full-stack ChatGPT UI Clone. Powered by FreeGPT.js and Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> {/* className="dark" */}
      <head>
        <script src="https://cdn.jsdelivr.net/gh/ashishagarwal2023/freegptjs/src/freegpt.min.js"></script>
      </head>
      <body className={inter.className + " dark:bg-[#212121]"}>{children}</body>
    </html>
  );
}
