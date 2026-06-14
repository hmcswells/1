import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PricingTiers from '../components/membership/PricingTiers';

const comparisons = [
  { item: 'Average office visit', insurance: '$30 co-pay + $200+ bill', wells: 'Included in membership' },
  { item: 'Blood work (CBC)', insurance: '$50–150 after deductible', wells: '$5 — discounted lab' },
  { item: 'Comprehensive metabolic panel', insurance: '$80–200 after deductible', wells: '$8 — discounted lab' },
  { item: 'Wait time to see provider', insurance: '2–4 weeks for appointment', wells: 'Same or next day' },
  { item: 'Time with provider', insurance: '8–12 minutes average', wells: '30–60 minutes, unhurried' },
  { item: 'Surprise bills', insurance: 'Common', wells: 'Never' },
  { item: 'Prescription refills', insurance: 'Office visit required', wells: 'Call or text Scott directly' },
];

export default function Membership() {
  const [showCompare, setShowCompare] = useState(false);

  return (
    <div className="pt-28 pb-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Plans &amp; Pricing
          </p>
          <h1 className="font-display text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-6">
            Affordable care,{' '}
            <span className="italic">premium experience</span>
          </h1>
          <p className="text-lg font-body text-muted-foreground leading-relaxed">
            We don't accept insurance. Choose a low monthly subscription for unlimited unhurried 
            visits and direct provider access — or pay per visit at our published fee-for-service 
            rates. No hidden fees. No billing surprises. Ever.
          </p>
        </div>

        {/* Pricing Tiers */}
        <PricingTiers />

        {/* Compare Toggle */}
        <div className="mt-20 text-center">
          <button
            onClick={() => setShowCompare(!showCompare)}
            className="inline-flex items-center gap-2 text-sm font-body font-medium text-foreground border border-foreground/20 px-6 py-3 rounded-full hover:bg-foreground/5 transition-colors"
          >
            {showCompare ? 'Hide' : 'Compare vs.'} Insurance-Based Care
          </button>
        </div>

        {/* Comparison Table */}
        {showCompare && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 rounded-3xl border border-border overflow-hidden"
          >
            <div className="grid grid-cols-3 bg-foreground text-background">
              <div className="p-5 text-sm font-body font-medium">What You Get</div>
              <div className="p-5 text-sm font-body font-medium text-background/60">Traditional Insurance</div>
              <div className="p-5 text-sm font-body font-medium">Wells Family Medicine</div>
            </div>
            {comparisons.map((row, i) => (
              <div
                key={row.item}
                className={`grid grid-cols-3 border-t border-border ${i % 2 === 0 ? 'bg-card' : 'bg-secondary/20'}`}
              >
                <div className="p-5 text-sm font-body font-medium text-foreground">{row.item}</div>
                <div className="p-5 text-sm font-body text-muted-foreground line-through decoration-destructive/40">
                  {row.insurance}
                </div>
                <div className="p-5 text-sm font-body font-medium text-foreground">{row.wells}</div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Disclaimer */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <p className="text-xs font-body text-muted-foreground leading-relaxed">
            Wells Family Medicine does not accept insurance of any kind. All fees are paid directly
            by the patient. Monthly subscription fees cover unlimited in-office and telehealth visits
            plus direct provider access. Lab work, imaging, and specialist referrals are billed
            separately at our deeply discounted, fully published rates — most common labs under $15.
          </p>
        </div>

      </div>
    </div>
  );
}