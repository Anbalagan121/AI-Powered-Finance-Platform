import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";

const inter = Inter({
  subsets: ["latin"],
  fallback: ["system-ui", "Arial"],
});

export const metadata: Metadata = {
  title: "Money Expenses",
  description: "Money Makes Many Things",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ✅ User sync happens ONLY here
  await checkUser();

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main className="min-h-screen pt-20">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
