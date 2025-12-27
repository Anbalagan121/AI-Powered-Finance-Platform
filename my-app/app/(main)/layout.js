import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export default function MainLayout({ children }) {
  return (
    <ClerkProvider>
      {children}
    </ClerkProvider>
  );
}
