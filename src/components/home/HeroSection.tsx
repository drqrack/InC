"use client";

import { useState } from "react";
import { Search, Package } from "lucide-react";

export default function HeroSection() {
    const [trackingNumber, setTrackingNumber] = useState("");

    const handleTrack = (e: React.FormEvent) => {
        e.preventDefault();
        if (trackingNumber.trim()) {
            window.location.href = `/tracking?q=${encodeURIComponent(trackingNumber)}`;
        }
    };

    return (
        <section className="relative bg-gradient-to-br from-[#1d4ed8] via-[#2563eb] to-[#ffffff] min-h-[600px] flex items-center mt-10">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Your Trusted Partner for
                        <span className="text-[#FC7808] block mt-2">Global Logistics</span>
                    </h1>

                    {/* <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Fast, reliable, and affordable shipping solutions from Ghana to anywhere in the world. Track your shipments in real-time.
                    </p> */}

                    {/* Tracking Form */}
                    <form onSubmit={handleTrack} className="max-w-xl mx-auto mb-8">
                        <div className="bg-transparent shadow-2xl p-2 flex flex-col sm:flex-row gap-0">
                            <div className="relative flex-grow">
                                <Package className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                                <input
                                    type="text"
                                    placeholder="Enter your tracking number..."
                                    value={trackingNumber}
                                    onChange={(e) => setTrackingNumber(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <button
                                type="submit"
                                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#FC7808] hover:bg-[#e06a00] text-white font-semibold transition-colors"
                            >
                                <Search size={20} />
                                <span>Track</span>
                            </button>
                        </div>
                    </form>

                    {/* Quick Info */}
                    <div className="flex flex-wrap justify-center gap-8 text-white">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                            <span className="text-sm">Real-time Tracking</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-accent rounded-full" />
                            <span className="text-sm">24/7 Support</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-accent rounded-full" />
                            <span className="text-sm">Global Coverage</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
