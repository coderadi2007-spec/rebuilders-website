import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, Leaf, Cpu, Building2 } from "lucide-react";
import { PARTY, VISION, PILLARS, CORE_VALUES, KEY_ISSUES, LEADERSHIP, GALLERY } from "../data/party";
import { SectionHeading, FadeIn } from "../components/Section";

export default function Home() {
  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="hero-bg pt-32 pb-20 sm:pt-36 sm:pb-28">
        <div className="container-rb grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="eyebrow mb-5">A New Era for Liberia</div>
              <h1 className="h-display">
                Rebuilding the <span style={{ color: "var(--rb-green)" }}>Foundation</span>,<br />
                Empowering the <span style={{ color: "var(--rb-gold)" }}>People</span>.
              </h1>
              <p className="mt-7 text-lg sm:text-xl text-neutral-700 leading-relaxed max-w-2xl">
                Born out of a vision for progress and a commitment to reform, The <strong>REBUILDERS</strong>{" "}
                are dedicated to transforming our nation through the 7 Cardinal Pillars — moving from the
                politics of the past toward a future of innovation, integrity and shared prosperity.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link to="/about" className="btn-primary" data-testid="hero-cta-vision">
                  Discover the Vision <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn-outline" data-testid="hero-cta-join">
                  Join the Movement
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
                {[
                  { k: "15", v: "Counties Mobilising" },
                  { k: "7", v: "Cardinal Pillars" },
                  { k: "2023", v: "Founded" },
                ].map((s) => (
                  <div key={s.v}>
                    <div className="font-serif text-3xl font-bold" style={{ fontFamily: "Fraunces", color: "var(--rb-green)" }}>
                      {s.k}
                    </div>
                    <div className="text-sm text-neutral-500 uppercase tracking-wider">{s.v}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5">
            <FadeIn delay={0.15}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-yellow-300/40 via-green-400/20 to-red-400/30 blur-2xl" />
                <motion.div
                  initial={{ rotate: -2 }}
                  animate={{ rotate: [-2, 1, -2] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="relative card-rb p-6 sm:p-8"
                >
                  <div className="flag-stripe h-1.5 w-24 rounded-full mb-5" />
                  <div className="eyebrow">Party Slogan</div>
                  <p className="mt-3 font-serif text-3xl sm:text-4xl leading-tight" style={{ fontFamily: "Fraunces" }}>
                    “Rain or Shine, Rebuild Liberia.”
                  </p>
                  <div className="mt-7 pt-5 border-t grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-neutral-500">Headquarters</div>
                      <div className="font-medium">Sinkor, Monrovia</div>
                    </div>
                    <div>
                      <div className="text-neutral-500">Status</div>
                      <div className="font-medium">NEC Certificated</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* VISION STRIP */}
      <section className="section bg-grain">
        <div className="container-rb grid lg:grid-cols-12 gap-12">
          <FadeIn className="lg:col-span-5">
            <div className="eyebrow mb-3">Our Vision</div>
            <h2 className="h-section">A Smart, Green & Tech-Driven Liberia.</h2>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-7">
            <p className="text-lg text-neutral-700 leading-relaxed">{VISION}</p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                { i: Leaf, t: "Green Economy" },
                { i: Cpu, t: "Technology First" },
                { i: Building2, t: "Modern Infrastructure" },
              ].map(({ i: Icon, t }) => (
                <div key={t} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-black/5">
                  <Icon size={20} style={{ color: "var(--rb-green)" }} />
                  <span className="font-medium">{t}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7 PILLARS */}
      <section className="section">
        <div className="container-rb">
          <SectionHeading
            eyebrow="The 7 Cardinal Pillars"
            title="A Blueprint for National Renewal"
            intro="Each pillar is a deliberate commitment — from spiritual reconciliation to scientific innovation — that together rebuild every dimension of Liberian life."
            align="center"
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((p, i) => (
              <FadeIn key={p.n} delay={i * 0.05}>
                <article className="card-rb p-7 h-full flex flex-col" data-testid={`pillar-card-${p.n}`}>
                  <div className="flex items-baseline gap-3">
                    <span className="pillar-number text-5xl">{String(p.n).padStart(2, "0")}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">Pillar</span>
                  </div>
                  <h3 className="mt-4 text-xl font-serif font-bold leading-snug" style={{ fontFamily: "Fraunces" }}>
                    {p.title}
                  </h3>
                  <div className="mt-2 text-sm font-medium" style={{ color: "var(--rb-green)" }}>
                    {p.subtitle}
                  </div>
                  <p className="mt-4 text-neutral-600 text-[15px] leading-relaxed flex-1">
                    {p.summary}
                  </p>
                </article>
              </FadeIn>
            ))}
            <FadeIn delay={0.35}>
              <Link to="/about" className="card-rb p-7 h-full flex items-center justify-between gap-4 group" data-testid="pillars-readmore">
                <div>
                  <Sparkles size={24} style={{ color: "var(--rb-gold)" }} />
                  <h3 className="mt-3 font-serif text-xl font-bold" style={{ fontFamily: "Fraunces" }}>
                    Read the full manifesto
                  </h3>
                  <p className="text-sm text-neutral-500 mt-1">Outlooks, plans and implementation strategy.</p>
                </div>
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section" style={{ background: "var(--rb-ink)", color: "#fff" }}>
        <div className="container-rb grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-3" style={{ color: "#F4B400" }}>The REBUILDERS Code</div>
            <h2 className="h-section text-white">Seven Values. One Movement.</h2>
            <p className="mt-5 text-neutral-300 text-lg">
              Servant leadership driven by competence rather than patronage. These values are not
              decoration — they are the standard by which every REBUILDER is measured.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {CORE_VALUES.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.04}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition" data-testid={`value-${v.title.toLowerCase()}`}>
                  <CheckCircle2 size={20} className="text-yellow-400" />
                  <div className="mt-3 font-serif text-lg font-semibold text-white" style={{ fontFamily: "Fraunces" }}>{v.title}</div>
                  <p className="text-sm text-neutral-300 mt-1.5 leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEASER */}
      <section className="section bg-grain">
        <div className="container-rb">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Our Leadership"
              title="Built on Wisdom, Driven by Vision"
              intro="A dynamic executive body of seasoned legal, administrative and grassroots minds."
            />
            <Link to="/leadership" className="btn-outline self-start" data-testid="leadership-cta">
              Meet the full team <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP.slice(0, 4).map((l, i) => (
              <FadeIn key={l.name} delay={i * 0.07}>
                <div className="card-rb overflow-hidden" data-testid={`home-leader-${i}`}>
                  <div className="aspect-[4/5] bg-neutral-200 overflow-hidden">
                    <img src={l.photo} alt={l.name} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-5">
                    <div className="font-serif font-bold text-lg leading-tight" style={{ fontFamily: "Fraunces" }}>{l.name}</div>
                    <div className="text-sm mt-1" style={{ color: "var(--rb-green)" }}>{l.role}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* KEY ISSUES */}
      <section className="section">
        <div className="container-rb grid lg:grid-cols-12 gap-12">
          <FadeIn className="lg:col-span-5">
            <SectionHeading
              eyebrow="Key Issues We Address"
              title="The Work Ahead is Clear."
              intro="From the village clinic to the national grid, our programme touches every Liberian life."
            />
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-7">
            <ul className="divide-y border-y">
              {KEY_ISSUES.map((k, i) => (
                <li key={i} className="py-5 flex gap-5 items-start" data-testid={`issue-${i}`}>
                  <span className="pillar-number text-2xl w-10 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-neutral-700 text-[17px] leading-relaxed">{k}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section bg-grain">
        <div className="container-rb">
          <SectionHeading
            eyebrow="From the Movement"
            title="Voices, faces and moments from across the Republic."
            align="center"
          />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {GALLERY.slice(0, 12).map((src, i) => (
              <FadeIn key={src} delay={i * 0.03}>
                <div className="aspect-square overflow-hidden rounded-xl bg-neutral-200">
                  <img src={src} alt="Movement moment" loading="lazy" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-rb">
          <div className="rounded-3xl p-10 sm:p-14 lg:p-20 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0F7A3E 0%, #0A5A2C 60%, #1B3A8A 100%)" }}>
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            <div className="relative max-w-3xl mx-auto">
              <div className="eyebrow text-yellow-300 mb-3">Become a REBUILDER</div>
              <h2 className="h-section text-white">Don’t just watch the future — build it.</h2>
              <p className="mt-5 text-white/85 text-lg">
                In other parties you are a follower. In The REBUILDERS, you are a leader.
                Bring your vote, your vision and your hands to the work of rebuilding Liberia.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="btn-gold" data-testid="cta-join">
                  Join the Movement <ArrowRight size={18} />
                </Link>
                <Link to="/about" className="text-white underline underline-offset-4 hover:text-yellow-300 self-center" data-testid="cta-learn">
                  Read our manifesto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
