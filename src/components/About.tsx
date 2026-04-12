import { ShieldCheck, Clock, Award, Users } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Fully Licensed & Insured" },
  { icon: Clock, label: "24/7 Customer Support" },
  { icon: Award, label: "10+ Years Experience" },
  { icon: Users, label: "Expert Moving Crew" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual side */}
          <div className="relative">
            <div className="bg-primary-500 rounded-3xl h-80 lg:h-96 flex items-center justify-center overflow-hidden">
              <div className="text-center text-white p-8">
                <div className="text-8xl font-black opacity-20 mb-4">10+</div>
                <div className="text-2xl font-bold">Years of Excellence</div>
                <div className="text-primary-200 mt-2">in Transportation & Logistics</div>
              </div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-primary-100">
              <div className="text-3xl font-extrabold text-primary-500">500+</div>
              <div className="text-sm text-gray-500 mt-1">Successful Moves</div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <p className="section-subtitle">Our Story</p>
            <h2 className="section-title">Built on Trust, Driven by Excellence</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Di-Max Transportation was founded with a simple mission: make
              moving less stressful and more reliable. Over the past decade,
              we've grown from a small local operation to a full-service
              transportation company serving clients across the region.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              Every move is personal to us. We treat your belongings like our
              own — with care, precision, and respect. Our team of trained
              professionals is committed to delivering an exceptional experience
              from the first call to the final delivery.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 border border-primary-100"
                >
                  <div className="w-9 h-9 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <b.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <span className="text-sm font-medium text-navy">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
