import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jessica Bull | Software Engineer",
  description: "Portfolio website of Jessica Bull, Software Engineer specializing in TypeScript, Node.js, and AWS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
