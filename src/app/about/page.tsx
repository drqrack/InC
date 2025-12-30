"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Target, Eye, Users, Award, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const values = [
    {
        icon: Target,
        title: "Mission-Driven",
        description: "We are committed to providing reliable, efficient, and cost-effective logistics solutions that exceed our clients' expectations.",
    },
    {
        icon: Eye,
        title: "Transparency",
        description: "We believe in open communication and keeping our clients informed at every step of the shipping process.",
    },
    {
        icon: Users,
        title: "Customer First",
        description: "Your success is our priority. We tailor our services to meet your unique shipping and logistics needs.",
    },
    {
        icon: Award,
        title: "Excellence",
        description: "We strive for excellence in everything we do, from customer service to cargo handling and delivery.",
    },
];

const milestones = [
    { year: "2014", event: "Founded in Accra, Ghana" },
    { year: "2016", event: "Expanded to ocean freight services" },
    { year: "2018", event: "Opened Kumasi branch office" },
    { year: "2020", event: "Launched digital tracking platform" },
    { year: "2022", event: "Reached 500+ satisfied clients" },
    { year: "2024", event: "Expanded to 25+ countries" },
];

const sliderImages = [
    "/assets/IMG_5624.JPG",
    "/assets/IMG_5623.JPG",
    "/assets/IMG_5626.JPG",
    "/assets/inc.JPG",
];

export default function AboutPage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-[#1d4ed8] to-[#1e40af] py-20">
                    <div className="container mx-auto px-4 text-center mt-20">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            About I&C Shipping
                        </h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12">
                            Your trusted partner for global logistics solutions since 2014
                        </p>


                    </div>
                </section>

                {/* Hero Slider */}
                <section className="relative py-12">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1e40af] to-white h-2/3 -z-10" />
                    <div className="container mx-auto px-4">
                        <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            {sliderImages.map((src, index) => (
                                <div
                                    key={src}
                                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                                        }`}
                                >
                                    <Image
                                        src={src}
                                        alt={`About Us Slide ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        priority={index === 0}
                                    />
                                </div>
                            ))}
                            {/* Slider Indicators */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                {sliderImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-6" : "bg-white/50"
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Story */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-[#1d4ed8] mb-6">Our Story</h2>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    I&C Shipping and Logistics was founded with a simple mission: to make international shipping accessible, reliable, and affordable for businesses of all sizes in Ghana and beyond.
                                </p>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    Starting as a small freight forwarding company in Accra, we have grown to become one of the most trusted logistics partners in West Africa. Our team combines years of industry experience with modern technology to deliver exceptional service.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Today, we serve hundreds of clients across multiple industries, handling everything from small parcels to full container loads. Our commitment to excellence and customer satisfaction remains at the heart of everything we do.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-[#1d4ed8]/10 to-[#FC7808]/10 rounded-3xl p-8">
                                <h3 className="text-xl font-semibold mb-6 text-gray-800">Our Journey</h3>
                                <div className="space-y-4">
                                    {milestones.map((milestone) => (
                                        <div key={milestone.year} className="flex gap-4 items-start">
                                            <div className="w-16 flex-shrink-0">
                                                <span className="font-bold text-[#FC7808]">{milestone.year}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CheckCircle className="text-[#10b981] flex-shrink-0" size={18} />
                                                <span className="text-gray-600">{milestone.event}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Values */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                These principles guide every decision we make and every service we deliver.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value) => (
                                <div key={value.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                                    <div className="w-12 h-12 bg-[#1d4ed8]/10 rounded-xl flex items-center justify-center mb-4">
                                        <value.icon className="text-[#1d4ed8]" size={24} />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-16 bg-[#1d4ed8]">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">10+</div>
                                <p className="text-blue-100">Years Experience</p>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">800+</div>
                                <p className="text-blue-100">Happy Clients</p>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">25+</div>
                                <p className="text-blue-100">Countries Served</p>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">50K+</div>
                                <p className="text-blue-100">Packages Delivered</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
