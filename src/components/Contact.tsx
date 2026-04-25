"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+1 (774) 625-3852", href: "tel:+17746253852" },
  { icon: Mail, label: "Email", value: "info@dimaxtransportation.com", href: "mailto:info@dimaxtransportation.com" },
  { icon: MapPin, label: "Address", value: "Massachusetts, USA", href: "#" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Failed to send message. Please try again.");
      setStatus("error");
    }
  };

  const reset = () => {
    setStatus("idle");
    setErrorMsg("");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subtitle">Get In Touch</p>
          <h2 className="section-title">Contact Us</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Have questions? We're here to help. Reach out and our team will respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            {contactInfo.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-start gap-4 bg-primary-50 rounded-2xl p-6 border border-primary-100 hover:border-primary-300 transition-colors"
              >
                <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-primary-600 font-semibold uppercase tracking-wide mb-1">{c.label}</div>
                  <div className="text-navy text-sm font-medium">{c.value}</div>
                </div>
              </a>
            ))}

            {/* Map placeholder */}
            <div className="bg-primary-100 rounded-2xl h-48 flex items-center justify-center border border-primary-200">
              <div className="text-center text-primary-400">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-medium">Map Integration</p>
                <p className="text-xs">Coming soon</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2 bg-primary-50 rounded-3xl p-8 border border-primary-100">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full py-16 gap-4">
                <CheckCircle className="w-16 h-16 text-primary-500" />
                <h3 className="text-2xl font-bold text-navy">Message Sent!</h3>
                <p className="text-gray-500 text-center max-w-sm">
                  Thanks <strong>{form.name}</strong>! We'll get back to you at <strong>{form.email}</strong> within 24 hours.
                </p>
                <button onClick={reset} className="btn-secondary mt-4">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                  { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-sm font-medium text-navy mb-1.5">{f.label}</label>
                    <input
                      type={f.type}
                      name={f.name}
                      required
                      placeholder={f.placeholder}
                      value={form[f.name as keyof typeof form]}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-primary-200 rounded-lg text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 bg-white"
                    />
                  </div>
                ))}

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-navy mb-1.5">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="How can we help?"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-primary-200 rounded-lg text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 bg-white"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-navy mb-1.5">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us more..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-primary-200 rounded-lg text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 resize-none bg-white"
                  />
                </div>

                {status === "error" && (
                  <div className="md:col-span-2 flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 rounded-lg px-4 py-3 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {errorMsg}
                  </div>
                )}

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full flex items-center justify-center gap-2 py-3.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="w-4 h-4" /> Send Message</>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
