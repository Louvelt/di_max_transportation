import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-navy overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-primary-900 to-primary-800 opacity-95" />
      {/* Decorative circles */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-500 rounded-full opacity-10 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full opacity-10 -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-400/30 rounded-full px-4 py-1.5 mb-6">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-primary-200 text-sm font-medium">
              Trusted by 500+ clients across the region
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
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
