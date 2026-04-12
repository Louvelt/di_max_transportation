"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarCheck, Clock, CheckCircle } from "lucide-react";

const timeSlots = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
];

export default function BookAppointment() {
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time) return;
    // TODO: connect to calendar / booking backend
    setSubmitted(true);
  };

  return (
    <section id="book" className="py-24 bg-navy">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Schedule a Visit
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Book an Appointment
          </h2>
          <p className="text-primary-300 max-w-xl mx-auto">
            Schedule a consultation or on-site assessment with our team. We'll
            come to you.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 gap-4">
              <CheckCircle className="w-16 h-16 text-primary-500" />
              <h3 className="text-2xl font-bold text-navy">Appointment Booked!</h3>
              <p className="text-gray-500 text-center max-w-sm">
                Hi {form.name}! Your appointment is confirmed for{" "}
                <strong>{date?.toLocaleDateString()}</strong> at{" "}
                <strong>{time}</strong>. We'll send a reminder to {form.email}.
              </p>
              <button onClick={() => { setSubmitted(false); setDate(null); setTime(""); }} className="btn-secondary mt-4">
                Book Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contact info */}
              {[
                { name: "name", label: "Full Name", type: "text", placeholder: "Jane Smith" },
                { name: "email", label: "Email", type: "email", placeholder: "jane@example.com" },
                { name: "phone", label: "Phone", type: "tel", placeholder: "+1 (555) 000-0000" },
              ].map((f) => (
                <div key={f.name} className={f.name === "phone" ? "" : ""}>
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

              {/* Date picker */}
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5 flex items-center gap-1.5">
                  <CalendarCheck className="w-4 h-4 text-primary-500" /> Preferred Date
                </label>
                <DatePicker
                  selected={date}
                  onChange={(d: Date | null) => setDate(d)}
                  minDate={new Date()}
                  filterDate={(d: Date) => d.getDay() !== 0}
                  placeholderText="Select a date"
                  required
                />
              </div>

              {/* Time slots */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-navy mb-3 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-primary-500" /> Preferred Time
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {timeSlots.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTime(t)}
                      className={`py-2 px-3 rounded-lg text-sm font-medium border transition-all ${
                        time === t
                          ? "bg-primary-500 text-white border-primary-500"
                          : "border-primary-200 text-navy hover:border-primary-400"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                {!time && (
                  <p className="text-xs text-gray-400 mt-2">Please select a time slot</p>
                )}
              </div>

              {/* Notes */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-navy mb-1.5">Notes (optional)</label>
                <textarea
                  name="notes"
                  rows={3}
                  placeholder="Any specific requirements or questions?"
                  value={form.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-primary-200 rounded-lg text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 resize-none"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={!date || !time}
                  className="btn-primary w-full flex items-center justify-center gap-2 py-3.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <CalendarCheck className="w-4 h-4" /> Confirm Appointment
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
