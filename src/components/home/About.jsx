const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://media.db.com/images/public/6a2b4700f9945e4e7da1044c/b5a25a223_generated_8fe09fe0.png"
                alt="Compassionate care at Wells Family Medicine"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-background rounded-2xl p-6 shadow-lg border border-border max-w-xs hidden lg:block">
              <p className="font-display text-lg font-semibold text-foreground mb-1">Scott Wells, FNP-C</p>
              <p className="text-sm font-body text-muted-foreground">
                Board-Certified Family Nurse Practitioner · FMCSA Certified Medical Examiner
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Your Provider
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-8">
              Medicine is{' '}
              <span className="italic">personal</span>
            </h2>
            <div className="space-y-5 text-base font-body text-muted-foreground leading-relaxed">
              <p>
                I opened Wells Family Medicine at 126 NH-27 in Raymond because I believe primary care 
                works best face-to-face — in a real clinic, with a provider who has time to listen.
              </p>
              <p>
                We don't accept insurance. Instead, we offer two straightforward options: a low monthly 
                subscription for unlimited clinic visits and direct access to me, or simple fee-for-service 
                pricing published right on our website so you always know what to expect.
              </p>
              <p>
                Members also get access to deeply discounted lab work — most common panels for under $15 — 
                drawn right here at the office or at a nearby lab draw station.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-body font-medium text-foreground hover:opacity-70 transition-opacity"
              >
                Learn more about our services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="font-display text-2xl italic text-foreground/70 leading-relaxed">
                "Your health is too important for a crowded waiting room and an 8-minute clock."
              </p>
              <p className="mt-3 text-sm font-body text-muted-foreground">— Scott Wells</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}