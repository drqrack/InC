import { Plane, Ship, FileCheck, ShoppingBag, Warehouse, Truck } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Plane,
        title: "Air Freight",
        description: "Fast and efficient air cargo services for time-sensitive shipments worldwide.",
        href: "/services#air-freight",
        color: "from-blue-500 to-blue-600",
    },
    {
        icon: Ship,
        title: "Ocean Freight",
        description: "Cost-effective sea shipping for large volume cargo and containers.",
        href: "/services#ocean-freight",
        color: "from-cyan-500 to-cyan-600",
    },
    {
        icon: FileCheck,
        title: "Customs Clearance",
        description: "Expert handling of all customs documentation and regulatory compliance.",
        href: "/services#customs",
        color: "from-emerald-500 to-emerald-600",
    },
    {
        icon: ShoppingBag,
        title: "Procurement",
        description: "End-to-end procurement and sourcing services from trusted suppliers.",
        href: "/services#procurement",
        color: "from-orange-500 to-orange-600",
    },
    {
        icon: Warehouse,
        title: "Warehousing",
        description: "Secure storage facilities with inventory management solutions.",
        href: "/services#warehousing",
        color: "from-purple-500 to-purple-600",
    },
    {
        icon: Truck,
        title: "Door-to-Door",
        description: "Complete delivery service from pickup to final destination.",
        href: "/services#delivery",
        color: "from-red-500 to-red-600",
    },
];

export default function ServicesGrid() {
    return (
        <section className="py-20 bg-muted">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Our <span className="text-primary">Services</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Comprehensive logistics solutions tailored to meet your shipping needs
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            href={service.href}
                            className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-4`}>
                                <service.icon className="text-white" size={28} />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
