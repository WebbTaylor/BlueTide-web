"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { Card, CardContent } from "@/components/Card";

export default function Page() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-[url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center text-white">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <Image src="/logo.png" alt="BlueTide Heating & Cooling" width={160} height={160} className="drop-shadow-lg" />
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-xl mt-6">BlueTide Heating & Cooling</h1>
          <p className="mt-4 text-lg md:text-2xl font-light drop-shadow-md">Comfort You Can Count On — All Year Long</p>
          <a href="#quote" className="mt-8">
            <Button>Request a Quote</Button>
          </a>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto text-center py-16 px-6">
        <h2 className="text-3xl font-bold text-sky-700 mb-4">About BlueTide</h2>
        <p className="text-lg leading-relaxed">
          At BlueTide Heating & Cooling, we proudly serve Vancouver Island and surrounding areas with professional HVAC installation,
          maintenance, and repair. Whether you need a new heat pump or seasonal servicing, we deliver reliable comfort and energy efficiency.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="bg-sky-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-sky-700 mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Heat Pump Installation", desc: "High-efficiency systems designed to keep your home comfortable year-round." },
            { title: "Air Conditioning", desc: "Reliable cooling systems for those hot summer days." },
            { title: "Furnace Service", desc: "Professional maintenance and replacement for efficient heating." },
            { title: "Mini-Splits", desc: "Flexible ductless options for small spaces and additions." },
            { title: "Maintenance Plans", desc: "Prevent breakdowns and extend the life of your system." },
            { title: "Emergency Repairs", desc: "Fast, local support when you need it most." },
          ].map((s, i) => (
            <Card key={i} className="hover:shadow-xl transition">
              <CardContent className="text-center">
                <h3 className="text-xl font-semibold text-sky-700 mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-16 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-sky-700 mb-4">Request a Quote</h2>
        <p className="mb-6 text-lg">Fill out the form below and our team will get back to you shortly.</p>
        <form action="https://formspree.io/f/your-form-id" method="POST" className="grid gap-4 text-left">
          <input type="text" name="name" placeholder="Your Name" className="border border-gray-300 rounded-lg p-3 w-full" required />
          <input type="email" name="email" placeholder="Your Email" className="border border-gray-300 rounded-lg p-3 w-full" required />
          <input type="tel" name="phone" placeholder="Phone Number" className="border border-gray-300 rounded-lg p-3 w-full" required />
          <textarea name="message" placeholder="How can we help you?" className="border border-gray-300 rounded-lg p-3 w-full" rows={4} required></textarea>
          <Button type="submit" className="rounded-lg">Submit</Button>
        </form>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-sky-700 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg mb-4">Have questions or need service? We're here to help!</p>
            <p><strong>Phone:</strong> <a href="tel:+12505551234" className="underline">(250) 555-1234</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@bluetidehvac.ca" className="underline">info@bluetidehvac.ca</a></p>
            <p className="mt-4">Serving Duncan, Nanaimo, Victoria, and surrounding areas.</p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="BlueTide Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.9024064062144!2d-123.719!3d48.777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548fbf66b92f7c3f%3A0x7e4c6d3aeeef!2sDuncan%2C%20BC!5e0!3m2!1sen!2sca!4v1682902369725!5m2!1sen!2sca"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-sky-900 text-gray-200">
        <p>© {new Date().getFullYear()} BlueTide Heating & Cooling. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
