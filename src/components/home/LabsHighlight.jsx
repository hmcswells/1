import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, TrendingDown } from 'lucide-react';

export default function LabsHighlight() {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-background/70" />
              </div>
              <p className="text-xs font-body tracking-[0.3em] uppercase text-background/50">
                Discounted Lab Services
              </p>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl font-light tracking-tight text-background mb-6">
              Lab work at{' '}
              <span className="italic">a fraction</span>{' '}
              of the cost
            </h2>

            <p className="text-base font-body text-background/70 leading-relaxed mb-6">
              Because we don't route billing through insurance, we partner directly with national
              reference laboratories to pass steep discounts straight to you.
            </p>
            <p className="text-base font-body text-background/70 leading-relaxed mb-10">
              Most common panels cost under $15. Labs are ordered by Scott, drawn at our
              Raymond clinic or a nearby draw station, and reviewed with you personally —
              not dumped in an online portal without context.
            </p>

            <div className="inline-flex items-center gap-3 px-6 py-5 rounded-2xl bg-background/10 border border-background/10">
              <TrendingDown className="w-5 h-5 text-background/60 shrink-0" />
              <p className="text-sm font-body text-background/80 leading-relaxed text-left">
                <span className="font-semibold text-background">Save up to 95%</span> compared to
                typical hospital or insurance lab billing rates — most common labs under $15.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}