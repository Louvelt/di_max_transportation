import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-primary-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Ready to Make Your Move?
        </h2>
        <p className="text-primary-100 text-lg mb-10 max-w-xl mx-auto">
          Get a free quote in minutes or book your appointment today. Di-Max is
          ready when you are.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#quote"
            className="bg-white text-primary-600 hover:bg-primary-50 font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 shadow-md flex items-center justify-center gap-2"
          >
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#book"
            className="bg-accent hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 shadow-md flex items-center justify-center gap-2"
          >
            Book Now <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
