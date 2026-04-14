import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotPlaceholder from "@/components/ChatbotPlaceholder";
import { ShieldCheck, Clock, Award, Users, Globe, Star, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Di-Max Transportation",
  description:
    "Learn about Di-Max Transportation — 20 years of reliable, professional transportation from local rides to international logistics.",
};

const badges = [
  { icon: ShieldCheck, label: "Fully Licensed & Insured" },
  { icon: Clock, label: "Punctual & Professional" },
  { icon: Award, label: "20 Years Experience" },
  { icon: Users, label: "Expert Crew" },
  { icon: Globe, label: "International Service" },
  { icon: Star, label: "Transparent Pricing" },
];

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "500+", label: "Happy Clients" },
  { value: "10K+", label: "Miles Covered" },
  { value: "99%", label: "On-Time Rate" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero banner */}
        <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-primary-900 to-primary-800 opacity-95" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full opacity-10 translate-x-1/2 -translate-y-1/2" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Our Story
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Built on Trust,{" "}
              <span className="text-primary-400">Driven by Excellence!</span>
            </h1>
            <p className="text-primary-200 text-lg max-w-2xl mx-auto">
              Two decades of reliable transportation — from your neighborhood to across the globe.
            </p>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-primary-500 py-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-extrabold text-white">{s.value}</div>
                  <div className="text-primary-100 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main story */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Visual side */}
              <div className="relative lg:sticky lg:top-24">
                <div className="bg-primary-500 rounded-3xl h-80 lg:h-96 flex items-center justify-center overflow-hidden">
                  <div className="text-center text-white p-8">
                    <div className="text-8xl font-black opacity-20 mb-4">20+</div>
                    <div className="text-2xl font-bold">Years of Excellence</div>
                    <div className="text-primary-200 mt-2">Local & International Transportation</div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-primary-100">
                  <div className="text-3xl font-extrabold text-primary-500">500+</div>
                  <div className="text-sm text-gray-500 mt-1">Satisfied Clients</div>
                </div>

                {/* Trust badges */}
                <div className="grid grid-cols-2 gap-3 mt-14">
                  {badges.map((b) => (
                    <div
                      key={b.label}
                      className="flex items-center gap-3 bg-primary-50 rounded-xl p-4 border border-primary-100"
                    >
                      <div className="w-9 h-9 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <b.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-navy">{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content side */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">Who We Are</h2>
                  <p className="text-gray-500 leading-relaxed">
                    Di-Max Transportation was founded with a simple mission: make transportation less
                    stressful and more reliable. Over the past decade, we've grown from a small local
                    operation to a full-service transportation company serving clients across the region.
                    With <strong className="text-navy">20 years of experience</strong> doing transportation
                    from foreign countries to international destinations, our team provides punctual, clean,
                    and professional transportation with transparent pricing during business hours.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">Our Mission</h2>
                  <p className="text-gray-500 leading-relaxed">
                    At Di-Max Transportation, we believe transportation should be simple, reliable, and
                    comfortable. We started with a mission to solve a common problem — unreliable rides
                    and poor customer service. That's why we built a transportation service focused on
                    <strong className="text-navy"> punctuality, professionalism, and customer satisfaction</strong>.
                    Whether you need a quick ride across town or a long transport trip, our experienced
                    drivers and well-maintained vehicles ensure a smooth journey every time.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-navy mb-4">Our Commitment</h2>
                  <p className="text-gray-500 leading-relaxed">
                    Every move is personal to us. We treat your belongings like our own — with care,
                    precision, and respect. Our team of trained professionals is committed to delivering
                    an exceptional experience from the first call to the final delivery.
                  </p>
                </div>

                <div className="bg-primary-50 border-l-4 border-primary-500 rounded-r-2xl p-6">
                  <p className="text-navy font-medium leading-relaxed italic">
                    "Today, we're proud to serve our community with dependable transportation you can
                    trust. Book with us and let us do the transport for you with confidence."
                  </p>
                  <p className="text-primary-600 font-semibold text-sm mt-3">— Di-Max Transportation Team</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="/#book" className="btn-primary flex items-center justify-center gap-2">
                    Book an Appointment <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="/#quote" className="btn-secondary flex items-center justify-center gap-2">
                    Get a Free Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatbotPlaceholder />
    </>
  );
}
