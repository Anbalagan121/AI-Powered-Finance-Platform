"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    SignedIn,
    SignedOut,
    UserButton,
    SignInButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow z-50 border-b">
            <nav className="flex items-center justify-between px-6 py-3">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="money image"
                        height={60}
                        width={200}
                        className="h-12 w-auto object-contain"
                    />
                </Link>

                {/* Auth Buttons */}
                <div className="flex items-center space-x-4">
                    <SignedIn>
                        <Link href={"/dashboard"} className="text-gray-600 hover:text-blue-600 flex item-center gap-2">
                            <Button variant="outline">
                                <LayoutDashboard size={18} />
                                <span className="hidden md:inline">Dashboard</span>
                            </Button>

                        </Link>
                        <Link href={"/transaction/create"}>
                            <Button className="flex item-center gap-2">
                                <PenBox size={18} />
                                <span className="hidden md:inline">Add Transaction</span>
                            </Button>

                        </Link>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton
                            mode="modal"
                            forceRedirectUrl="/dashboard"
                        >
                            <Button variant="outline">Login</Button>
                        </SignInButton>
                    </SignedOut>

                    <SignedIn>
                        <UserButton appearance={{

                        }} />
                    </SignedIn>
                </div>
            </nav>
        </header>
    );
};

export default Header;
