import {
  Home,
  MapPin,
  Building2,
  Package,
  Box,
  Warehouse,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Local Moving",
    desc: "Stress-free residential moves within the city. We handle packing, loading, and delivery with care.",
  },
  {
    icon: MapPin,
    title: "Long Distance",
    desc: "Cross-state and interstate moves with real-time tracking and guaranteed delivery windows.",
  },
  {
    icon: Building2,
    title: "Commercial Moving",
    desc: "Office and business relocations with minimal downtime. We work around your schedule.",
  },
  {
    icon: Package,
    title: "Freight & Cargo",
    desc: "Heavy freight, palletized cargo, and oversized loads transported safely and efficiently.",
  },
  {
    icon: Box,
    title: "Packing Services",
    desc: "Professional packing with premium materials. Fragile items handled with extra care.",
  },
  {
    icon: Warehouse,
    title: "Storage Solutions",
    desc: "Secure, climate-controlled storage units available short or long term.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subtitle">What We Offer</p>
          <h2 className="section-title">Our Services</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From a single item to a full household or commercial fleet — we have
            the right solution for every move.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg border border-primary-100 hover:border-primary-300 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary-100 group-hover:bg-primary-500 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                <s.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
