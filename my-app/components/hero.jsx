"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className="py-24 px-4">
            <div className="max-w-5xl mx-auto text-center">

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title"
                >
                    Manage Your Finances <br />
                    <span className="text-blue-600">
                        With AI Intelligence
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10"
                >
                    An AI-powered financial management platform that helps you track,
                    analyze, and optimize your spending with real-time insights.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="flex justify-center gap-5 mb-14"
                >
                    <Link href="/dashboard">
                        <button className="px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 hover:scale-105 transition-all">
                            Get Started
                        </button>
                    </Link>

                    <Link href="/demo">
                        <button className="px-8 py-3 rounded-xl border border-border bg-background hover:bg-muted transition-all">
                            Watch Demo
                        </button>
                    </Link>
                </motion.div>

                {/* Image – Scroll animation */}
                <motion.div
                    initial={{ opacity: 0, y: 60, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                >
                    <Image
                        src="/banner1.png"
                        width={1280}
                        height={720}
                        alt="Dashboard Preview"
                        className="rounded-2xl shadow-2xl border mx-auto"
                        priority
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default HeroSection;
