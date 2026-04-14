import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-navy overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/banner_web.webp"
        alt="Di-Max Transportation banner"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-navy/75" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-mint-200/20 border border-mint-200/40 rounded-full px-4 py-1.5 mb-6">
            <Star className="w-4 h-4 text-mint-200 fill-mint-200" />
            <span className="text-mint-200 text-sm font-medium">
              Trusted by 500+ clients across the region
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.03em' }}>
            Move Smarter,{" "}
            <span className="text-primary-400">Arrive Faster</span>
          </h1>
          <p className="text-primary-200 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
            Di-Max Transportation delivers reliable, on-time moving and freight
            solutions — from local hauls to long-distance logistics. Your cargo,
            our commitment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#quote" className="btn-primary flex items-center justify-center gap-2">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#book" className="btn-secondary flex items-center justify-center gap-2">
              Book Appointment
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-primary-700 pt-10">
            {[
              { value: "500+", label: "Happy Clients" },
              { value: "10K+", label: "Miles Covered" },
              { value: "99%", label: "On-Time Rate" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-white">{s.value}</div>
                <div className="text-primary-300 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
