import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions — Di-Max Transportation",
  description: "Terms and Conditions for Di-Max Transportation services.",
};

const sections = [
  {
    title: "1. Services Provided",
    content: "Di-Max Transportation provides cargo van transportation services for goods and merchandise within Massachusetts and surrounding areas.",
  },
  {
    title: "2. Booking and Scheduling",
    items: [
      "All bookings must include accurate pickup and delivery details",
      "Customers are responsible for providing correct addresses and contact information",
      "We reserve the right to reschedule due to weather, traffic, or unforeseen circumstances",
    ],
  },
  {
    title: "3. Pricing and Payment",
    items: [
      "Pricing is based on distance, load size, time, and service requirements",
      "Payment is due upon completion unless otherwise agreed in writing",
      "Late payments may be subject to additional fees",
    ],
  },
  {
    title: "4. Cancellations and Refunds",
    items: [
      "Cancellations must be made at least 24 hours in advance",
      "Late cancellations may incur a fee",
      "No-shows may be charged the full service amount",
    ],
  },
  {
    title: "5. Customer Responsibilities",
    content: "Customers agree to:",
    items: [
      "Properly package and secure all items",
      "Ensure goods are legal and safe to transport",
      "Provide any necessary handling instructions",
    ],
  },
  {
    title: "6. Prohibited Items",
    content: "We do NOT transport:",
    items: [
      "Hazardous materials",
      "Illegal goods",
      "Perishable items (unless agreed in advance)",
      "Weapons or dangerous items",
    ],
    highlight: true,
  },
  {
    title: "7. Liability",
    items: [
      "We are not responsible for damage due to improper packaging",
      "Liability for lost or damaged goods is limited to $500,000 unless additional insurance is purchased",
      "Claims must be reported within 24 hours of delivery",
    ],
  },
  {
    title: "8. Delays",
    content: "We are not liable for delays caused by:",
    items: [
      "Traffic or road conditions",
      "Weather events",
      "Mechanical issues",
      "Circumstances beyond our control",
    ],
  },
  {
    title: "9. Insurance",
    content: "Basic coverage may be included. Additional insurance may be available upon request.",
  },
  {
    title: "10. Right to Refuse Service",
    content: "We reserve the right to refuse service for unsafe, illegal, or inappropriate requests.",
  },
  {
    title: "11. Changes to Terms",
    content: "We may update these Terms at any time. Continued use of our services constitutes acceptance.",
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-navy pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-primary-900 to-primary-800 opacity-95" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Terms & Conditions</h1>
            <p className="text-primary-300">Effective Date: April 7, 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Intro */}
            <div className="bg-primary-50 border-l-4 border-primary-500 rounded-r-2xl p-6 mb-12">
              <p className="text-gray-600 leading-relaxed">
                These Terms and Conditions ("Agreement") govern the use of services provided by{" "}
                <strong>Di-Max Transportation</strong> ("Company," "we," "our," or "us"). By booking
                or using our services, you agree to the following terms.
              </p>
            </div>

            <div className="space-y-10">
              {sections.map((s) => (
                <div key={s.title} className={`border-b border-primary-100 pb-10 last:border-0 ${s.highlight ? "bg-red-50 border border-red-100 rounded-2xl p-6" : ""}`}>
                  <h2 className="text-xl font-bold text-navy mb-4">{s.title}</h2>
                  {s.content && <p className="text-gray-500 mb-3">{s.content}</p>}
                  {"items" in s && s.items && (
                    <ul className="space-y-1.5">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-gray-500 text-sm">
                          <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${s.highlight ? "bg-red-400" : "bg-primary-500"}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Contact */}
              <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
                <h2 className="text-xl font-bold text-navy mb-4">12. Contact Information</h2>
                <div className="space-y-1 text-sm text-navy font-medium">
                  <p>Di-Max Transportation</p>
                  <p>Massachusetts, USA</p>
                  <p>Phone: <a href="tel:+15551234567" className="text-primary-600 hover:underline">+1 (555) 123-4567</a></p>
                  <p>Email: <a href="mailto:info@dimaxtransportation.com" className="text-primary-600 hover:underline">info@dimaxtransportation.com</a></p>
                </div>
              </div>

              <p className="text-gray-400 text-sm italic">
                By using our services, you agree to these Terms and Conditions.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
