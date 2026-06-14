const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, ArrowRight } from 'lucide-react';

export default function LocationCTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://media.db.com/images/public/6a2b4700f9945e4e7da1044c/46952f5b8_generated_5b7a9267.png"
          alt="Raymond, New Hampshire landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-body tracking-[0.3em] uppercase text-background/50 mb-4">
              Visit Our Office
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-light tracking-tight text-background mb-6">
              Rooted in{' '}
              <span className="italic">Raymond</span>
            </h2>
            <p className="text-base font-body text-background/70 leading-relaxed max-w-md">
              Our clinic at 126 NH-27 in Raymond, NH is your home base for in-person primary care. 
              We also see patients virtually across all of NH and MA — no drive required.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-background/60 shrink-0" />
                <span className="text-sm font-body text-background/80">126 NH-27, Raymond, NH 03077</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-background/60 shrink-0" />
                <a href="tel:6038283232" className="text-sm font-body text-background/80 hover:text-background transition-colors">
                  (603) 828-3232
                </a>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 rounded-full text-sm font-body font-medium hover:opacity-90 transition-opacity"
              >
                Get Directions & Book
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {[
              { label: 'Office Hours', value: 'Mon – Fri · 8am – 5pm' },
              { label: 'Same-Day Visits', value: 'Call or text to reserve' },
              { label: 'Telehealth', value: 'All of NH &amp; MA' },
              { label: 'New Patients', value: 'Always welcome' },
            ].map(item => (
              <div key={item.label} className="rounded-2xl border border-background/10 bg-background/5 px-6 py-5">
                <p className="text-xs font-body tracking-widest uppercase text-background/40 mb-1">{item.label}</p>
                <p className="text-base font-display font-semibold text-background" dangerouslySetInnerHTML={{ __html: item.value }} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}