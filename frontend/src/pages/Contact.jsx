import React, { useState } from "react";
import axios from "axios";
import { MapPin, Mail, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";
import { PARTY } from "../data/party";
import { SectionHeading, FadeIn } from "../components/Section";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const initial = { name: "", email: "", phone: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", msg: "" });
    try {
      const payload = { ...form };
      if (!payload.phone) delete payload.phone;
      if (!payload.subject) delete payload.subject;
      await axios.post(`${API}/contact`, payload);
      setStatus({ state: "success", msg: "Your message is in. A REBUILDER will be in touch." });
      setForm(initial);
    } catch (err) {
      const detail = err?.response?.data?.detail || "Could not send your message. Please try again.";
      setStatus({ state: "error", msg: typeof detail === "string" ? detail : "Could not send your message." });
    }
  };

  return (
    <div data-testid="contact-page">
      <section className="hero-bg pt-32 pb-16">
        <div className="container-rb max-w-4xl">
          <FadeIn>
            <div className="eyebrow mb-4">Get in Touch</div>
            <h1 className="h-display">
              We answer to <span style={{ color: "var(--rb-green)" }}>you</span>.
            </h1>
            <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
              Whether you’re joining the movement, organising in your county, or simply have a
              question — the National Secretariat is here to listen.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container-rb grid lg:grid-cols-12 gap-12">
          {/* Info */}
          <FadeIn className="lg:col-span-5">
            <SectionHeading
              eyebrow="National Secretariat"
              title="Visit, write or call us."
            />
            <ul className="mt-8 space-y-5">
              <li className="flex gap-4">
                <div className="w-11 h-11 rounded-full grid place-items-center" style={{ background: "rgba(15,122,62,0.1)" }}>
                  <MapPin size={20} style={{ color: "var(--rb-green)" }} />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wider text-neutral-500">Headquarters</div>
                  <div className="mt-1 font-medium">{PARTY.hq}</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-11 h-11 rounded-full grid place-items-center" style={{ background: "rgba(244,180,0,0.18)" }}>
                  <Mail size={20} style={{ color: "var(--rb-gold)" }} />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wider text-neutral-500">Email</div>
                  <a href={`mailto:${PARTY.email}`} className="mt-1 font-medium hover:underline" data-testid="contact-email">
                    {PARTY.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-11 h-11 rounded-full grid place-items-center" style={{ background: "rgba(27,58,138,0.1)" }}>
                  <Phone size={20} style={{ color: "var(--rb-blue)" }} />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wider text-neutral-500">Phone</div>
                  <div className="mt-1 font-medium">{PARTY.phone}</div>
                </div>
              </li>
            </ul>

            <div className="mt-10 p-6 rounded-2xl bg-grain border border-black/5">
              <div className="eyebrow">Office Hours</div>
              <p className="mt-2 text-neutral-700">Monday – Friday · 9:00 AM – 5:00 PM (GMT)</p>
              <p className="text-neutral-700">Saturday · 10:00 AM – 2:00 PM</p>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.1} className="lg:col-span-7">
            <form
              onSubmit={submit}
              className="card-rb p-7 sm:p-10"
              data-testid="contact-form"
              noValidate
            >
              <h3 className="font-serif text-2xl font-bold" style={{ fontFamily: "Fraunces" }}>
                Send us a message
              </h3>
              <p className="text-sm text-neutral-500 mt-2">All fields marked with * are required.</p>

              <div className="mt-7 grid sm:grid-cols-2 gap-4">
                <Field label="Full Name *" name="name" value={form.name} onChange={onChange} required testid="contact-name" />
                <Field type="email" label="Email *" name="email" value={form.email} onChange={onChange} required testid="contact-email-input" />
                <Field label="Phone" name="phone" value={form.phone} onChange={onChange} testid="contact-phone" />
                <Field label="Subject" name="subject" value={form.subject} onChange={onChange} testid="contact-subject" />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  required
                  minLength={5}
                  rows={6}
                  data-testid="contact-message"
                  className="w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition resize-none"
                  placeholder="Tell us how you would like to engage with the REBUILDERS movement…"
                />
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status.state === "loading"}
                  className="btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
                  data-testid="contact-submit"
                >
                  {status.state === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </button>

                {status.state === "success" && (
                  <div className="flex items-center gap-2 text-green-700" data-testid="contact-success">
                    <CheckCircle2 size={18} /> {status.msg}
                  </div>
                )}
                {status.state === "error" && (
                  <div className="text-red-600 text-sm" data-testid="contact-error">{status.msg}</div>
                )}
              </div>
            </form>
          </FadeIn>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-rb">
          <div className="rounded-2xl overflow-hidden border border-black/5 shadow-sm" data-testid="contact-map">
            <iframe
              title="REBUILDERS HQ Map"
              src="https://www.google.com/maps?q=Sinkor%2C+Monrovia%2C+Liberia&output=embed"
              width="100%"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, value, onChange, type = "text", required, testid }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-neutral-700 mb-1.5">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        data-testid={testid}
        className="w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition"
      />
    </div>
  );
}
