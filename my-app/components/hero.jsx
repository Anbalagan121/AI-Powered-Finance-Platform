"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">

                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Manage your finances<br />
                    <span className="text-blue-600">with AI intelligence</span>
                </h1>

                <p className="text-gray-600 text-lg mb-8">
                    An AI-powered financial management platform that helps you track,
                    analyze, and optimize your spending with real-time insights.
                </p>

                <div className="flex justify-center gap-4 mb-10">
                    <Link href="/dashboard">
                        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            Get Started
                        </button>
                    </Link>

                    <Link href="/demo">
                        <button className="px-8 py-3 border border-gray-400 rounded-lg hover:bg-gray-100 transition">
                            Watch Demo
                        </button>
                    </Link>
                </div>

                <div>
                    <Image
                        src="/banner1.png"
                        width={1280}
                        height={720}
                        alt="Dashboard Preview"
                        className="rounded-lg shadow-2xl border mx-auto"
                        priority
                    />
                </div>

            </div>
        </div>
    );
};

export default HeroSection;
