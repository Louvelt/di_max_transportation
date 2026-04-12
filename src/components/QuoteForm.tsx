"use client";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const serviceOptions = [
  "Local Moving",
  "Long Distance",
  "Commercial Moving",
  "Freight & Cargo",
  "Packing Services",
  "Storage Solutions",
];

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "",
    pickup: "", dropoff: "", moveDate: "", message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/quote", {
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
      setErrorMsg(err instanceof Error ? err.message : "Failed to send request. Please try again.");
      setStatus("error");
    }
  };

  const reset = () => {
    setStatus("idle");
    setErrorMsg("");
    setForm({ name: "", email: "", phone: "", service: "", pickup: "", dropoff: "", moveDate: "", message: "" });
  };

  return (
    <section id="quote" className="py-24 bg-primary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subtitle">Free Estimate</p>
          <h2 className="section-title">Request a Quote</h2>
          <p className="text-gray-500">
            Tell us about your move and we'll get back to you with a competitive quote within 2 hours.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-primary-100">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-16 gap-4">
              <CheckCircle className="w-16 h-16 text-primary-500" />
              <h3 className="text-2xl font-bold text-navy">Quote Requested!</h3>
              <p className="text-gray-500 text-center max-w-sm">
                Thanks <strong>{form.name}</strong>! We've received your request and will contact
                you at <strong>{form.email}</strong> within 2 hours.
              </p>
              <button onClick={reset} className="btn-secondary mt-4">
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
                { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
                { name: "phone", label: "Phone Number", type: "tel", placeholder: "+1 (555) 000-0000" },
                { name: "moveDate", label: "Preferred Move Date", type: "date", placeholder: "" },
                { name: "pickup", label: "Pickup Location", type: "text", placeholder: "City, State" },
                { name: "dropoff", label: "Drop-off Location", type: "text", placeholder: "City, State" },
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
                    className="w-full px-4 py-2.5 border border-primary-200 rounded-lg text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                  />
                </div>
              ))}

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-navy mb-1.5">Service Type</label>
                <select
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-primary-200 rounded-lg text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 bg-white"
                >
                  <option value="">Select a service...</option>
                  {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-navy mb-1.5">Additional Details</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us more about your move — items, special requirements, etc."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-primary-200 rounded-lg text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 resize-none"
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
                    <><Send className="w-4 h-4" /> Send Quote Request</>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
