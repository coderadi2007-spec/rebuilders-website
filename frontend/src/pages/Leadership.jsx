import React from "react";
import { LEADERSHIP } from "../data/party";
import { SectionHeading, FadeIn } from "../components/Section";

export default function Leadership() {
  const current = LEADERSHIP.slice(0, 4);
  const founders = LEADERSHIP.slice(4);

  return (
    <div data-testid="leadership-page">
      <section className="hero-bg pt-32 pb-16">
        <div className="container-rb max-w-4xl">
          <FadeIn>
            <div className="eyebrow mb-4">Our Leadership</div>
            <h1 className="h-display">
              Servant leaders driven by <span style={{ color: "var(--rb-green)" }}>competence</span>,
              not patronage.
            </h1>
            <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
              The REBUILDERS are led by a dynamic executive body of seasoned legal, administrative
              and grassroots minds — accountable to the people, the party, and the Republic.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container-rb">
          <SectionHeading
            eyebrow="Current Governance"
            title="The National Executive."
            intro="The leadership stewarding the party today and the implementation of the 7 Cardinal Pillars."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {current.map((l, i) => (
              <FadeIn key={l.name} delay={i * 0.06}>
                <article className="card-rb overflow-hidden h-full flex flex-col" data-testid={`leader-card-${i}`}>
                  <div className="aspect-[4/5] bg-neutral-200 overflow-hidden">
                    <img src={l.photo} alt={l.name} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="font-serif font-bold text-lg leading-tight" style={{ fontFamily: "Fraunces" }}>
                      {l.name}
                    </div>
                    <div className="text-sm mt-1.5 font-medium" style={{ color: "var(--rb-green)" }}>
                      {l.role}
                    </div>
                    <p className="text-sm text-neutral-600 mt-4 leading-relaxed">{l.bio}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-grain">
        <div className="container-rb">
          <SectionHeading
            eyebrow="The Foundation"
            title="The Pioneers."
            intro="Those who laid the initial structures of the party and mobilised the early membership."
          />
          <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-4xl">
            {founders.map((l, i) => (
              <FadeIn key={l.name} delay={i * 0.08}>
                <article className="card-rb p-6 flex gap-5 items-start" data-testid={`founder-card-${i}`}>
                  <div className="w-28 h-32 flex-shrink-0 overflow-hidden rounded-xl bg-neutral-200">
                    <img src={l.photo} alt={l.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-lg" style={{ fontFamily: "Fraunces" }}>{l.name}</div>
                    <div className="text-sm" style={{ color: "var(--rb-green)" }}>{l.role}</div>
                    <p className="text-sm text-neutral-600 mt-3 leading-relaxed">{l.bio}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* OATH */}
      <section className="section">
        <div className="container-rb max-w-4xl">
          <FadeIn>
            <div className="card-rb p-8 sm:p-12 border-t-4" style={{ borderTopColor: "var(--rb-gold)" }} data-testid="oath-card">
              <div className="eyebrow">The REBUILDERS Membership Oath</div>
              <p className="mt-5 font-serif text-lg sm:text-xl leading-relaxed text-neutral-800" style={{ fontFamily: "Fraunces" }}>
                I voluntarily join the Liberia Rebuilding Party and pledge my loyalty to its leadership
                and the 7 Cardinal Pillars. I commit to upholding the seven Core Values of Integrity,
                Transparency, Accountability, Innovation, Inclusivity, Sustainability and Patriotism.
                I promise to work tirelessly toward the vision of a Smart and Green Liberia and to
                conduct myself with dignity and respect in all party activities, putting the nation
                above personal interest. So help me God.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
