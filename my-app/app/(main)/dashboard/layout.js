"use client";

import { useUser } from "@clerk/nextjs";
import { Suspense } from "react";
import { BarLoader } from "react-spinners";

export default function DashboardLayout({ children }) {
  const { isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="px-5 mt-4">
        <BarLoader width="100%" color="#9333ea" />
      </div>
    );
  }

  return (
    <div className="px-5">
      <h1 className="text-6xl font-bold gradient-title mb-5">
        Dashboard
      </h1>

      <Suspense
        fallback={<BarLoader width="100%" color="#9333ea" />}
      >
        {children}
      </Suspense>
    </div>
  );
}
