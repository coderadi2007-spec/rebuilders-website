import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Facebook, Twitter, Youtube } from "lucide-react";
import Logo from "./Logo";
import { PARTY } from "../data/party";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-[#0E1B14] text-neutral-200 mt-20">
      <div className="flag-stripe h-1.5 w-full" />
      <div className="container-rb py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <Logo size={48} />
            <div>
              <div className="font-serif text-xl font-bold text-white" style={{ fontFamily: "Fraunces" }}>
                {PARTY.short}
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                {PARTY.name}
              </div>
            </div>
          </div>
          <p className="text-neutral-400 max-w-md leading-relaxed">
            {PARTY.tagline} A movement for a Smart, Green, and Tech-Driven Liberia,
            built on the 7 Cardinal Pillars of national renewal.
          </p>
          <p className="mt-4 text-sm italic text-yellow-400 font-serif" style={{ fontFamily: "Fraunces" }}>
            &ldquo;{PARTY.slogan}&rdquo;
          </p>
        </div>

        <div>
          <h4 className="text-white text-base mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li><Link to="/" className="hover:text-yellow-400" data-testid="footer-link-home">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400" data-testid="footer-link-about">About the Party</Link></li>
            <li><Link to="/leadership" className="hover:text-yellow-400" data-testid="footer-link-leadership">Leadership</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400" data-testid="footer-link-contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-base mb-4">National Secretariat</h4>
          <ul className="space-y-3 text-sm text-neutral-400">
            <li className="flex gap-3"><MapPin size={16} className="mt-0.5 text-yellow-400" /><span>{PARTY.hq}</span></li>
            <li className="flex gap-3"><Mail size={16} className="mt-0.5 text-yellow-400" /><a href={`mailto:${PARTY.email}`} className="hover:text-yellow-400">{PARTY.email}</a></li>
            <li className="flex gap-3"><Phone size={16} className="mt-0.5 text-yellow-400" /><span>{PARTY.phone}</span></li>
          </ul>
          <div className="flex gap-3 mt-5">
            <a href="#" aria-label="Facebook" className="w-9 h-9 grid place-items-center rounded-full border border-neutral-700 hover:border-yellow-400 hover:text-yellow-400 transition"><Facebook size={16} /></a>
            <a href="#" aria-label="Twitter" className="w-9 h-9 grid place-items-center rounded-full border border-neutral-700 hover:border-yellow-400 hover:text-yellow-400 transition"><Twitter size={16} /></a>
            <a href="#" aria-label="YouTube" className="w-9 h-9 grid place-items-center rounded-full border border-neutral-700 hover:border-yellow-400 hover:text-yellow-400 transition"><Youtube size={16} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-rb py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-neutral-500">
          <span>© {new Date().getFullYear()} {PARTY.name}. All rights reserved.</span>
          <span>Founded {PARTY.founded} — Certificated by the National Election Commission (NEC).</span>
        </div>
      </div>
    </footer>
  );
}
