import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  fallback: ["system-ui", "Arial"],
});

export const metadata: Metadata = {
  title: "Money Expenses",
  description: "Money Makes Many Things",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  return (
    <ClerkProvider publishableKey={clerkKey}>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main className="min-h-screen pt-20">{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
