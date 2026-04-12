import { ClipboardList, CalendarCheck, Truck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Request a Quote",
    desc: "Fill out our quick form with your move details. We'll send you a transparent, no-obligation quote within hours.",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Book Your Date",
    desc: "Choose a date and time that works for you. Our team confirms your appointment and prepares everything.",
  },
  {
    icon: Truck,
    step: "03",
    title: "We Handle the Rest",
    desc: "Our professional crew arrives on time, handles your items with care, and delivers to your destination.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subtitle">Simple Process</p>
          <h2 className="section-title">How It Works</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Getting started with Di-Max is easy. Three simple steps to a
            seamless move.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5 bg-primary-200" />

          {steps.map((s) => (
            <div key={s.step} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-primary-500 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-200">
                  <s.icon className="w-9 h-9 text-white" />
                </div>
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                  {s.step}
                </span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
