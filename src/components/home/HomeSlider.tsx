"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const sliderImages = [
    "/assets/fresh-new.png",
    "/assets/fresh-one.png",
    "/assets/jjjjjj.png",
    "/assets/newooo.png",
];

export default function HomeSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="relative w-full max-w-6xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-gray-900">
                    {sliderImages.map((src, index) => (
                        <div
                            key={src}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <Image
                                src={src}
                                alt={`Slide ${index + 1}`}
                                fill
                                className="object-contain"
                                priority={index === 0}
                            />
                        </div>
                    ))}

                    {/* Overlay content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8 md:p-12">
                        <div className="text-white">
                            <div className="text-3xl md:text-4xl font-bold mb-2">Excellence in Motion</div>
                            <p className="text-white/90 text-lg">Trusted Logistics Partner</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
