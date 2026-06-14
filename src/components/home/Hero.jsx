const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import BookNowButton from '../BookNowButton';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://media.db.com/images/public/6a2b4700f9945e4e7da1044c/03b594059_generated_image.png"
          alt="Scott Wells, FNP-C at Wells Family Medicine"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
      </div>

      {/* Centered title at top of hero */}
      <div className="absolute top-0 left-0 right-0 pt-24 flex flex-col items-center z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground drop-shadow-sm">
            Wells Family Medicine
          </h2>
          <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mt-2">
            Direct Primary Care · Raymond, NH
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16 w-full pt-48 pb-20 lg:pt-20 lg:pb-0">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Direct Primary Care · 126 NH-27, Raymond, NH
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.95] tracking-tight text-foreground">
              Primary Care,{' '}
              <span className="italic font-normal">On Your Terms.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-lg font-body text-muted-foreground leading-relaxed max-w-lg"
          >
            We don't accept insurance — and that's by design. Pay per visit or subscribe monthly
            for unlimited access to your provider, discounted lab work, and care that puts you first.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <BookNowButton size="lg" />
            <Link
              to="/membership"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-sm font-body font-medium hover:opacity-90 transition-opacity"
            >
              See Plans &amp; Pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-8 py-4 rounded-full text-sm font-body font-medium hover:bg-foreground/5 transition-colors"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Status Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-8 left-6 right-6 lg:left-16 lg:right-16"
      >
        <div className="bg-foreground/5 backdrop-blur-md border border-foreground/10 rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-body text-foreground">
              Now Accepting Patients
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm font-body text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" />
            126 NH-27, Raymond, NH · Fee-for-Service &amp; Monthly Subscriptions
          </div>
        </div>
      </motion.div>
    </section>
  );
}