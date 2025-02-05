import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/navbar/TopNav";

export const metadata: Metadata = {
  title: "Friend Social",
  description: "A matchmaker by common interests",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        <main className="container mx-auto"> {children}</main>
      </body>
    </html>
  );
}
