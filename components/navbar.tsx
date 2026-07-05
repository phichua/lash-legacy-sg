"use client";

import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { salonData } from "@/lib/salon-data";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-rose-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-rose-950">
              {salonData.name}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-rose-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={salonData.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 px-4 py-2 rounded-full transition-colors"
            >
              <Instagram className="w-4 h-4" />
              Book Now
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-rose-100 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-base font-medium text-slate-700 hover:text-rose-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href={salonData.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 px-4 py-2 rounded-full transition-colors"
            >
              <Instagram className="w-4 h-4" />
              Book on Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
