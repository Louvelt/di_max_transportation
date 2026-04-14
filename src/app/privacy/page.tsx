import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Di-Max Transportation",
  description: "Privacy Policy for Di-Max Transportation. Learn how we collect, use, and protect your personal information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: null,
    subsections: [
      {
        subtitle: "a. Personal Information",
        items: ["Full name", "Phone number", "Email address", "Billing and payment information", "Business name (if applicable)"],
      },
      {
        subtitle: "b. Shipment Information",
        items: ["Pickup and delivery addresses", "Description of goods transported", "Delivery instructions", "Recipient contact details"],
      },
      {
        subtitle: "c. Technical Information (if you use a website)",
        items: ["IP address", "Browser type", "Device information"],
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: "We use your information to:",
    items: [
      "Provide and manage transportation and delivery services",
      "Schedule pickups and deliveries",
      "Communicate with you regarding shipments",
      "Process payments and invoices",
      "Improve our services and customer experience",
      "Maintain safety, security, and prevent fraud",
    ],
  },
  {
    title: "3. Sharing of Information",
    content: "We do not sell your personal information. We may share your information with:",
    items: [
      "Employees or contracted drivers involved in fulfilling deliveries",
      "Payment processing providers",
      "Government authorities when required by law or legal process",
    ],
  },
  {
    title: "4. Data Retention",
    content: "We retain your information only as long as necessary to:",
    items: [
      "Complete services",
      "Maintain business and legal records",
      "Comply with applicable laws and regulations",
    ],
  },
  {
    title: "5. Data Security",
    content: "We take reasonable administrative and technical measures to protect your information, including:",
    items: [
      "Secure storage of records",
      "Restricted access to sensitive data",
      "Use of trusted payment processing systems",
    ],
    note: "However, no system is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "6. Your Privacy Rights",
    content: "Depending on applicable laws, you may have the right to:",
    items: [
      "Request access to your personal data",
      "Request correction of inaccurate information",
      "Request deletion of your data (where applicable)",
      "Opt out of marketing communications",
    ],
    note: "To exercise these rights, please contact us using the information below.",
  },
  {
    title: "7. Cookies and Tracking",
    content: "If we operate a website, we may use cookies or similar technologies to improve user experience. You can adjust your browser settings to refuse cookies.",
  },
  {
    title: "8. Third-Party Services",
    content: "Our services may involve third-party providers (such as payment processors). We are not responsible for their privacy practices.",
  },
  {
    title: "9. Changes to This Privacy Policy",
    content: "We may update this Privacy Policy periodically. Any changes will be posted with an updated effective date.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-navy pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-primary-900 to-primary-800 opacity-95" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Privacy Policy</h1>
            <p className="text-primary-300">Effective Date: April 7, 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Intro */}
            <div className="bg-primary-50 border-l-4 border-primary-500 rounded-r-2xl p-6 mb-12">
              <p className="text-gray-600 leading-relaxed">
                Di-Max Transportation ("we," "our," or "us") operates a cargo van and merchandise
                transportation service based in Massachusetts. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you use our services,
                contact us, or interact with our website.
              </p>
            </div>

            <div className="space-y-10">
              {sections.map((s) => (
                <div key={s.title} className="border-b border-primary-100 pb-10 last:border-0">
                  <h2 className="text-xl font-bold text-navy mb-4">{s.title}</h2>
                  {s.content && <p className="text-gray-500 mb-3">{s.content}</p>}

                  {"subsections" in s && s.subsections?.map((sub) => (
                    <div key={sub.subtitle} className="mb-4">
                      <h3 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">{sub.subtitle}</h3>
                      <ul className="space-y-1.5">
                        {sub.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-gray-500 text-sm">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {"items" in s && s.items && (
                    <ul className="space-y-1.5">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-gray-500 text-sm">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {"note" in s && s.note && (
                    <p className="text-gray-400 text-sm italic mt-3">{s.note}</p>
                  )}
                </div>
              ))}

              {/* Contact */}
              <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
                <h2 className="text-xl font-bold text-navy mb-4">10. Contact Us</h2>
                <p className="text-gray-500 mb-4">
                  If you have questions about this Privacy Policy or your personal data, please contact:
                </p>
                <div className="space-y-1 text-sm text-navy font-medium">
                  <p>Di-Max Transportation</p>
                  <p>Massachusetts, USA</p>
                  <p>Phone: <a href="tel:+17746253852" className="text-primary-600 hover:underline">+1 (774) 625-3852</a></p>
                  <p>Email: <a href="mailto:info@dimaxtransportation.com" className="text-primary-600 hover:underline">info@dimaxtransportation.com</a></p>
                </div>
              </div>

              <p className="text-gray-400 text-sm italic">
                By using our services, you agree to the terms of this Privacy Policy.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
