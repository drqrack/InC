"use client";

import { useEffect, useState, useRef } from "react";
import { Users, Package, Globe, Award } from "lucide-react";

const stats = [
    { icon: Users, value: 800, suffix: "+", label: "Happy Clients" },
    { icon: Package, value: 50000, suffix: "+", label: "Packages Delivered" },
    { icon: Globe, value: 25, suffix: "+", label: "Countries Served" },
    { icon: Award, value: 10, suffix: "+", label: "Years Experience" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let start = 0;
                    const duration = 2000;
                    const startTime = performance.now();

                    const animate = (currentTime: number) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        start = Math.floor(easeOut * target);
                        setCount(start);

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return (
        <div ref={ref} className="text-4xl md:text-5xl font-bold text-white">
            {count.toLocaleString()}{suffix}
        </div>
    );
}

export default function StatsSection() {
    return (
        <section className="py-16 bg-gradient-to-r from-[#1d4ed8] to-[#1e40af]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="inline-flex p-3 bg-white/10 rounded-full mb-4">
                                <stat.icon className="text-[#FC7808]" size={32} />
                            </div>
                            <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                            <p className="text-blue-100 mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
