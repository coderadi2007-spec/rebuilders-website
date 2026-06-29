import React from "react";
import { motion } from "framer-motion";
import { Flag, Target, Eye, Compass } from "lucide-react";
import { PARTY, VISION, MISSION, PILLARS, CORE_VALUES, KEY_ISSUES } from "../data/party";
import { SectionHeading, FadeIn } from "../components/Section";

export default function About() {
  return (
    <div data-testid="about-page">
      {/* HERO */}
      <section className="hero-bg pt-32 pb-16">
        <div className="container-rb max-w-4xl">
          <FadeIn>
            <div className="eyebrow mb-4">About the Party</div>
            <h1 className="h-display">
              A Movement <span style={{ color: "var(--rb-green)" }}>born</span> from a Burden for the Nation.
            </h1>
            <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
              The Liberia Rebuilding Party (The REBUILDERS) was officially founded on{" "}
              <strong>{PARTY.founded}</strong> and certificated by the National Election Commission.
              The party did not emerge from political convenience, but from a divine burden for the nation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* HISTORY */}
      <section className="section">
        <div className="container-rb grid lg:grid-cols-12 gap-12">
          <FadeIn className="lg:col-span-5">
            <Flag size={32} style={{ color: "var(--rb-red)" }} />
            <h2 className="h-section mt-4">Our History & Heritage</h2>
            <p className="mt-5 text-neutral-700 leading-relaxed">
              Born out of a necessity to address systemic gaps in governance and infrastructure,
              The REBUILDERS were built on the collective wisdom of seasoned legal and administrative minds.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-7 space-y-4">
            <p className="text-neutral-700 text-[17px] leading-relaxed">
              Our visionary leader, <strong>Cllr. Luther N. Yorfee</strong>, conceived the blueprint for a
              “Smart and Green Liberia” through a series of profound dreams and reflections on the nation’s
              untapped potential. These visions were translated into political reality to address the
              systemic gaps in Liberia’s growth.
            </p>
            <p className="text-neutral-700 text-[17px] leading-relaxed">
              <strong>Cllr. Lavela Walker</strong> served as our pioneering First Chairman, establishing the
              initial structures of the party. Our first National Secretary General,{" "}
              <strong>Hon. Felix C. Nimley</strong>, was instrumental in mobilising the early membership and
              building the grassroots network that now spans every county of the Republic.
            </p>
            <div className="mt-6 p-6 rounded-2xl bg-grain border border-black/5">
              <div className="eyebrow">National Headquarters</div>
              <p className="mt-2 text-neutral-800 font-medium">{PARTY.hq}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="section bg-grain">
        <div className="container-rb grid md:grid-cols-2 gap-6">
          {[
            { icon: Eye, label: "Vision", text: VISION, color: "var(--rb-green)" },
            { icon: Target, label: "Mission", text: MISSION, color: "var(--rb-blue)" },
          ].map(({ icon: Icon, label, text, color }, i) => (
            <FadeIn key={label} delay={i * 0.08}>
              <div className="card-rb p-8 sm:p-10 h-full" data-testid={`mv-${label.toLowerCase()}`}>
                <Icon size={32} style={{ color }} />
                <h3 className="mt-4 font-serif text-2xl font-bold" style={{ fontFamily: "Fraunces" }}>
                  Our {label}
                </h3>
                <p className="mt-4 text-neutral-700 leading-relaxed">{text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* IDENTITY: COLORS */}
      <section className="section">
        <div className="container-rb">
          <SectionHeading
            eyebrow="Our Identity"
            title="Symbols of the Republic, Reborn."
            intro="Our colours form a blueprint of our vision — the fertile land, the bright future, the bravery of the people, and the peace of our shores."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: "Green", hex: PARTY.colors.green, meaning: "Fertile soil, vegetation, agricultural revolution and environmental sustainability." },
              { name: "Gold", hex: PARTY.colors.gold, meaning: "Wealth of natural resources and a bright, prosperous future." },
              { name: "Red", hex: PARTY.colors.red, meaning: "Bravery, determination and the blood, sweat and tears of our people." },
              { name: "Blue", hex: PARTY.colors.blue, meaning: "Peace, stability, coastal potential and the foundation of justice." },
            ].map((c, i) => (
              <FadeIn key={c.name} delay={i * 0.06}>
                <div className="card-rb p-0 overflow-hidden" data-testid={`color-${c.name.toLowerCase()}`}>
                  <div style={{ background: c.hex }} className="h-28" />
                  <div className="p-5">
                    <div className="flex items-baseline justify-between">
                      <div className="font-serif font-bold text-lg" style={{ fontFamily: "Fraunces" }}>{c.name}</div>
                      <div className="text-xs text-neutral-400 uppercase tracking-wider">{c.hex}</div>
                    </div>
                    <p className="text-sm text-neutral-600 mt-2 leading-relaxed">{c.meaning}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS DETAIL */}
      <section className="section bg-grain">
        <div className="container-rb">
          <SectionHeading
            eyebrow="The Manifesto"
            title="The 7 Cardinal Pillars in Detail"
            intro="Each pillar carries an Explanation — the problem and its philosophy — and an Outlook — the measurable future we are building."
          />
          <div className="mt-14 space-y-6">
            {PILLARS.map((p, i) => (
              <FadeIn key={p.n} delay={i * 0.04}>
                <article className="card-rb p-7 sm:p-10 grid md:grid-cols-12 gap-6" data-testid={`about-pillar-${p.n}`}>
                  <div className="md:col-span-3">
                    <div className="pillar-number text-7xl leading-none">{String(p.n).padStart(2, "0")}</div>
                    <div className="text-xs uppercase tracking-[0.2em] text-neutral-400 mt-2">Pillar {p.n}</div>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight" style={{ fontFamily: "Fraunces" }}>
                      {p.title}
                    </h3>
                    <div className="text-sm font-semibold mt-1" style={{ color: "var(--rb-green)" }}>
                      {p.subtitle}
                    </div>
                    <div className="mt-5 grid sm:grid-cols-2 gap-5">
                      <div>
                        <div className="eyebrow mb-2">Explanation</div>
                        <p className="text-neutral-700 text-[15px] leading-relaxed">{p.summary}</p>
                      </div>
                      <div>
                        <div className="eyebrow mb-2" style={{ color: "var(--rb-blue)" }}>Outlook</div>
                        <p className="text-neutral-700 text-[15px] leading-relaxed">{p.outlook}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES & ISSUES */}
      <section className="section">
        <div className="container-rb grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <Compass size={32} style={{ color: "var(--rb-gold)" }} />
            <h2 className="h-section mt-3">The REBUILDERS Code</h2>
            <p className="mt-4 text-neutral-600">Seven values that govern every action of every REBUILDER.</p>
            <ul className="mt-7 grid sm:grid-cols-2 gap-3">
              {CORE_VALUES.map((v) => (
                <li key={v.title} className="p-4 rounded-xl border border-black/5 bg-white">
                  <div className="font-serif font-bold" style={{ fontFamily: "Fraunces" }}>{v.title}</div>
                  <p className="text-sm text-neutral-600 mt-1">{v.desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <Target size={32} style={{ color: "var(--rb-red)" }} />
            <h2 className="h-section mt-3">Key Issues We Address</h2>
            <p className="mt-4 text-neutral-600">A practical agenda for every county and every household.</p>
            <ul className="mt-7 space-y-3">
              {KEY_ISSUES.map((k, i) => (
                <li key={i} className="flex gap-4 items-start p-4 rounded-xl bg-grain border border-black/5">
                  <span className="pillar-number text-xl w-8">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-neutral-700">{k}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="section">
        <div className="container-rb">
          <motion.blockquote
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-6xl font-serif" style={{ fontFamily: "Fraunces", color: "var(--rb-gold)" }}>“</div>
            <p className="font-serif text-2xl sm:text-3xl leading-snug" style={{ fontFamily: "Fraunces" }}>
              We aren’t just a party; we are a movement to fix the core of our nation.
            </p>
            <div className="mt-6 text-sm uppercase tracking-[0.2em] text-neutral-500">
              — The REBUILDERS
            </div>
          </motion.blockquote>
        </div>
      </section>
    </div>
  );
}
