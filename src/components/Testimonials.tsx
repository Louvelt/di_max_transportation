import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Johnson",
    role: "Homeowner",
    review:
      "Di-Max made our cross-state move completely stress-free. The crew was professional, on time, and handled everything with care. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Small Business Owner",
    review:
      "We relocated our entire office over a weekend. Di-Max had us up and running Monday morning. Incredible service and fair pricing.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Apartment Renter",
    review:
      "Booked online, got a quote in under an hour, and the move was done in half the time I expected. The team was friendly and efficient.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-mint-200/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subtitle">Client Stories</p>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-primary-50 rounded-2xl p-8 border border-primary-100 relative"
            >
              <Quote className="w-8 h-8 text-primary-200 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                "{t.review}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-navy text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
