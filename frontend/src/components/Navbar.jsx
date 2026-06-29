import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { PARTY } from "../data/party";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About the Party" },
  { to: "/leadership", label: "Leadership" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white/70 backdrop-blur"
      }`}
    >
      <div className="flag-stripe h-1 w-full" />
      <div className="container-rb flex items-center justify-between h-20">
        <Link to="/" data-testid="nav-logo" className="flex items-center gap-3">
          <Logo size={44} />
          <div className="leading-tight">
            <div className="font-serif font-bold text-[1.05rem]" style={{ fontFamily: "Fraunces" }}>
              {PARTY.short}
            </div>
            <div className="text-[0.7rem] uppercase tracking-[0.2em] text-neutral-500">
              Liberia Rebuilding Party
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" data-testid="nav-join-btn" className="btn-primary !py-2.5 !px-5 text-sm">
            Join the Movement
          </Link>
        </nav>

        <button
          aria-label="Open menu"
          data-testid="nav-mobile-toggle"
          className="lg:hidden p-2 rounded-md hover:bg-neutral-100"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-white" data-testid="nav-mobile-menu">
          <div className="container-rb py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                data-testid={`nav-mobile-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={({ isActive }) =>
                  `px-3 py-3 rounded-md font-medium ${isActive ? "bg-neutral-100 text-green-700" : "text-neutral-800"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              data-testid="nav-mobile-join-btn"
              className="btn-primary mt-2 text-sm"
            >
              Join the Movement
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
