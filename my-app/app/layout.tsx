import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

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
        <body className="font-sans">
          <Header />
          <main className="min-h-screen pt-20">{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
