import { CheckCircle, Shield, Clock, HeadphonesIcon } from "lucide-react";

const features = [
    {
        icon: CheckCircle,
        title: "Reliable Service",
        description: "Consistent on-time deliveries with real-time tracking for complete transparency.",
    },
    {
        icon: Shield,
        title: "Secure Handling",
        description: "Your cargo is protected with our comprehensive insurance and secure facilities.",
    },
    {
        icon: Clock,
        title: "Fast Delivery",
        description: "Optimized routes and efficient processes ensure your shipments arrive quickly.",
    },
    {
        icon: HeadphonesIcon,
        title: "24/7 Support",
        description: "Our dedicated team is always available to assist you with any inquiries.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Why Choose <span className="text-primary">I&C Shipping?</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            With years of experience in the logistics industry, we have built a reputation for excellence and reliability. Here's what sets us apart:
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                            <feature.icon className="text-primary" size={24} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image/Visual */}
                    <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-primary/20 to-[#FC7808]/20 rounded-3xl flex items-center justify-center">
                            <div className="text-center p-8">
                                <div className="text-6xl md:text-7xl font-bold text-primary mb-2">10+</div>
                                <div className="text-xl text-foreground font-medium">Years of Excellence</div>
                                <p className="text-muted-foreground mt-2">Trusted by businesses across Ghana and beyond</p>
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FC7808] rounded-2xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
