"use client";

import { useEffect, useState } from "react";

// BLUETIDE — Modern, simple, baby‑blue theme with dark header (preview‑safe)
// This file is self‑contained and ready to render in a React/Next environment.
// Uses <img> (no next/image), no external libs. All helper components defined below.
// Put assets in /public: logo.png, install-1.jpg, install-2.jpg, install-3.jpg
// Replace FORM_ENDPOINT to receive quote form submissions.

const FORM_ENDPOINT = "https://formspree.io/f/your-form-id"; // ← replace

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [sent, setSent] = useState(false);

  // Smoke tests to catch rendering issues in preview environments
  useEffect(() => {
    try {
      console.assert(document.querySelector('[data-testid="header"]'), "header renders");
      console.assert(document.querySelector('[data-testid="hero"]'), "hero renders");
      console.assert(document.querySelector('[data-testid="quote-form"]'), "quote form renders");
      // Why cards should exist and have non-empty text
      const whyCards = document.querySelectorAll('[data-testid^="why-card-"]');
      console.assert(whyCards.length === 3, "three why cards render");
    } catch (_) {}
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-900">
      {/* HEADER (dark) */}
      <header data-testid="header" className="sticky top-0 z-50 border-b border-blue-800 bg-blue-900/95 text-white backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="BlueTide logo"
              className="h-9 w-9 rounded-full border border-white/20 object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
            <span className="text-xl font-extrabold tracking-tight">BlueTide</span>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            <ANav href="#services">Services</ANav>
            <ANav href="#process">How it works</ANav>
            <ANav href="#why">Why us</ANav>
            <ANav href="#contact">Contact</ANav>
            <a href="#quote" className="ml-2 rounded-full bg-white text-blue-900 px-4 py-2 font-semibold hover:bg-blue-100">Get a Quote</a>
          </nav>
          <button className="md:hidden p-2 rounded-lg hover:bg-white/10" onClick={() => setMobileOpen(v => !v)} aria-label="Open menu">
            <Burger className="text-white" />
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-blue-800 bg-blue-900 text-white">
            <div className="px-4 py-3 grid gap-1">
              <AM href="#services" onClick={() => setMobileOpen(false)}>Services</AM>
              <AM href="#process" onClick={() => setMobileOpen(false)}>How it works</AM>
              <AM href="#why" onClick={() => setMobileOpen(false)}>Why us</AM>
              <AM href="#contact" onClick={() => setMobileOpen(false)}>Contact</AM>
              <a href="#quote" onClick={() => setMobileOpen(false)} className="mt-2 rounded-xl bg-white text-blue-900 px-4 py-3 font-semibold text-center">Get a Quote</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section data-testid="hero" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight text-blue-900">
              Heat Pumps that <span className="text-blue-500">slash bills</span> & keep BC homes comfy.
            </h1>
            <p className="mt-4 text-lg text-gray-600">Local installs across Vancouver Island. Fast quotes. Neat work. Zero hassle.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#quote" className="rounded-full bg-blue-400 text-white px-6 py-3 font-semibold hover:bg-blue-500">Get a fast quote</a>
              <a href="tel:+12505551234" className="rounded-full bg-white border border-blue-200 px-6 py-3 font-semibold text-blue-900 hover:bg-blue-50">Call (250) 555-1234</a>
            </div>
            <ul className="mt-6 grid sm:grid-cols-2 gap-y-2 text-sm text-gray-700">
              {[
                "CleanBC-ready, high-efficiency models",
                "Mini-splits & central heat pumps",
                "Tidy installs • sealed linesets • quiet pads",
                "Licensed • insured • island-local",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2"><Check className="text-blue-500" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/10">
              <img
                src="/install-1.jpg" // place at public/install-1.jpg
                alt="BlueTide heat pump install"
                className="w-full h-full object-cover"
                loading="eager"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546549039-49e6aff1f9e0?q=80&w=1400&auto=format&fit=crop';
                }}
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {['/install-1.jpg', '/install-2.jpg', '/install-3.jpg'].map((src, i) => (
                <img key={i} src={src} alt={`Install ${i + 1}`} className="h-24 w-full object-cover rounded-xl ring-1 ring-black/10"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <h2 className="text-3xl font-bold mb-8 text-blue-900">What we do</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Tile title="Heat Pump Installs" desc="Ducted & ductless. Sized right. Coastal-safe hardware." icon={<Spark />} />
            <Tile title="Service & Repair" desc="Smart diagnostics. Fair fixes. All brands." icon={<Tool />} />
            <Tile title="Maintenance" desc="Seasonal tune-ups that cut noise & power draw." icon={<Shield />} />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="bg-blue-50">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <h2 className="text-3xl font-bold mb-8 text-blue-900">How it works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Step n={1} title="Fast quote" text="Tell us your goals. We size a system and send clear pricing." />
            <Step n={2} title="Clean install" text="Neat linesets, level pads, tidy wiring. You’ll want photos." />
            <Step n={3} title="Follow‑up" text="We register warranties and check performance after start‑up." />
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-3 gap-6">
          <Why data-testid="why-card-1" title="You get the tidy look" text="We hide lines, use covers, and set quiet pads. It looks finished." />
          <Why data-testid="why-card-2" title="Plain‑English quotes" text="No upsell. We explain options so you pick what’s right for your home." />
          <Why data-testid="why-card-3" title="Island‑local support" text="We’re nearby. If you need us, you don’t wait weeks." />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-blue-50">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <h2 className="text-3xl font-bold mb-8 text-blue-900">What customers say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Quote name="S. Martin" text="Cleanest install we’ve seen. Power bill dropped and it’s quiet." />
            <Quote name="D. Clarke" text="They explained everything, no pressure. Booked fast and on time." />
            <Quote name="R. Patel" text="Mini‑split is perfect in our suite. Looks great, runs silent." />
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote" className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16" data-testid="quote-form">
          <h2 className="text-3xl font-bold text-blue-900">Request a quote</h2>
          <p className="text-gray-600 mt-2">60‑second form. Same‑day response.</p>

          {sent ? (
            <div className="mt-6 rounded-xl border bg-green-50 p-4 text-green-800">Thanks! We got it and will reach out shortly.</div>
          ) : (
            <form action={FORM_ENDPOINT} method="POST" className="mt-6 grid gap-4" onSubmit={() => setSent(true)}>
              <input name="name" placeholder="Full name" required className="input" />
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="phone" placeholder="Phone" required className="input" />
                <input type="email" name="email" placeholder="Email" required className="input" />
              </div>
              <textarea name="message" placeholder="Tell us about your home / goals" rows={4} required className="input" />
              <button className="rounded-full bg-blue-400 text-white px-6 py-3 font-semibold hover:bg-blue-500 w-full sm:w-auto">Send request</button>
            </form>
          )}

          <p className="mt-4 text-sm text-gray-500">Prefer the phone? Call <a className="underline" href="tel:+12505551234">(250) 555‑1234</a>.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="mt-2 text-blue-200">Duncan • Nanaimo • Victoria</p>
            <div className="mt-6 space-y-2">
              <p><strong>Phone:</strong> <a href="tel:+12505551234" className="underline">(250) 555‑1234</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@bluetidehvac.ca" className="underline">info@bluetidehvac.ca</a></p>
            </div>
          </div>

          {/* Map loads only after click to avoid geolocation prompt + scroll jump */}
          <div className="rounded-xl overflow-hidden shadow-xl ring-1 ring-white/20 bg-blue-950/30 p-3">
            {!mapReady ? (
              <div data-testid="map-gate" className="rounded-lg bg-blue-950/40 border border-white/20 p-6 flex flex-col gap-3">
                <p className="text-blue-100">To keep things smooth, we load the map only if you want it.</p>
                <button
                  className="self-start rounded-full bg-white text-blue-900 px-5 py-2 font-semibold hover:bg-blue-100"
                  onClick={() => {
                    setTimeout(() => {
                      (window as any).scrollTo?.({ top: window.scrollY });
                      (document.activeElement as HTMLElement | null)?.blur?.();
                      (window as any).requestAnimationFrame?.(() => setMapReady(true));
                    }, 0);
                  }}
                >Show map</button>
                <a className="text-blue-200 underline text-sm" target="_blank" rel="noreferrer noopener" href="https://maps.google.com/?q=Duncan,+BC">Open in Google Maps</a>
              </div>
            ) : (
              <iframe
                data-testid="gmaps-frame"
                title="BlueTide Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.9024064062144!2d-123.719!3d48.777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548fbf66b92f7c3f%3A0x7e4c6d3aeeef!2sDuncan%2C%20BC!5e0!3m2!1sen!2sca!4v1682902369725!5m2!1sen!2sca"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                allow="geolocation"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </section>

      {/* MOBILE CTA BAR */}
      <div className="sm:hidden fixed bottom-3 inset-x-3 z-50 grid grid-cols-2 gap-3">
        <a href="tel:+12505551234" className="rounded-full bg-white border text-center py-3 font-semibold shadow">Call</a>
        <a href="#quote" className="rounded-full bg-blue-400 text-white text-center py-3 font-semibold shadow">Get a Quote</a>
      </div>

      <footer className="text-center py-8 text-gray-500">© {new Date().getFullYear()} BlueTide Heating & Cooling</footer>

      <style jsx global>{`
        .input { @apply w-full rounded-xl border border-blue-200 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300; }
      `}</style>
    </div>
  );
}

/* ————————— UI bits ————————— */
function ANav({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="px-3 py-2 rounded-lg hover:bg-white/10">{children}</a>;
}
function AM({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return <a href={href} onClick={onClick} className="px-3 py-2 rounded-lg hover:bg-white/10">{children}</a>;
}
function Tile({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-blue-100">
      <div className="mb-3 text-blue-500">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-900">{title}</h3>
      <p className="text-gray-600 mt-1">{desc}</p>
    </div>
  );
}
function Step({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-blue-100">
      <div className="mb-3 h-9 w-9 grid place-items-center rounded-full bg-blue-400 text-white font-bold">{n}</div>
      <h3 className="text-lg font-semibold text-blue-900">{title}</h3>
      <p className="text-gray-600 mt-1">{text}</p>
    </div>
  );
}
function Why({ title, text, ...rest }: { title: string; text: string } & React.HTMLAttributes<HTMLDivElement>) {
  // Guard against bad inputs in preview envs
  const safeTitle = typeof title === 'string' ? title : '';
  const safeText = typeof text === 'string' ? text : '';
  return (
    <div {...rest} className="rounded-2xl bg-white p-6 shadow ring-1 ring-blue-100">
      <h3 className="text-lg font-semibold text-blue-900">{safeTitle}</h3>
      <p className="text-gray-600 mt-1">{safeText}</p>
    </div>
  );
}
function Quote({ name, text }: { name: string; text: string }) {
  return (
    <figure className="rounded-2xl bg-white p-6 shadow ring-1 ring-blue-100">
      <blockquote className="text-gray-700">“{text}”</blockquote>
      <figcaption className="mt-3 text-sm text-gray-500">— {name}</figcaption>
    </figure>
  );
}
function Check({ className = "" }: { className?: string }) {
  return (
    <svg className={`mt-1 h-5 w-5 ${className}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L8.5 11.586l6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}
function Burger({ className = "text-gray-700" }: { className?: string }) {
  return (
    <svg
      className={`h-6 w-6 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function Spark() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z"/></svg>
  );
}
function Tool() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14.7 6.3a4 4 0 11-5.4 5.4l-6 6a1 1 0 001.4 1.4l6-6a4 4 0 015.4-5.4z"/></svg>
  );
}
function Shield() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l8 4v6c0 5-3.6 9.3-8 10-4.4-.7-8-5-8-10V6l8-4z"/></svg>
  );
}
