import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Users, User, Zap, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ATLAS_PORTAL = 'https://wellsfamilymedicine.atlas.md';

const tiers = [
  {
    id: 'fee_for_service',
    icon: Zap,
    name: 'Fee-for-Service',
    badge: null,
    priceLabel: 'Pay Per Visit',
    priceNote: 'No monthly commitment',
    description: 'Ad-hoc visits at our clinic or via telehealth, billed at published rates with no surprises.',
    features: [
      'In-clinic primary care from $85',
      'Acute sick visits from $75',
      'Telehealth visits from $55',
      'School & sports physicals from $50',
      'DOT / FMCSA physicals from $95',
      'Discounted lab work available',
      'Prices always published upfront',
      'No membership commitment required',
    ],
    cta: 'Book a Visit',
    ctaStyle: 'outline',
    highlight: false,
  },
  {
    id: 'individual',
    icon: User,
    name: 'Individual Subscription',
    badge: 'Most Popular',
    priceLabel: '$99',
    priceNote: '/month',
    description: 'Unlimited unhurried appointments, direct provider access, and deeply discounted lab work — all for one flat monthly fee.',
    features: [
      'Unlimited in-office & telehealth visits',
      'Same-day or next-day scheduling',
      'Direct phone & text access to Scott',
      'Annual wellness exam included',
      'Chronic disease management',
      'Medication management',
      'Discounted lab work (most panels under $15)',
      'No co-pays or hidden fees',
    ],
    cta: 'Enroll in Membership',
    ctaStyle: 'primary',
    highlight: true,
  },
  {
    id: 'family',
    icon: Users,
    name: 'Family Subscription',
    badge: null,
    priceLabel: '$225',
    priceNote: '/month',
    description: 'The same unlimited access for your whole household — up to 4 members, with add-ons available.',
    features: [
      'Everything in Individual plan',
      'Up to 4 family members covered',
      'Pediatric sick visits included',
      'School & sports physicals included',
      'Family wellness consultations',
      'Priority scheduling',
      'Additional members at $50/mo each',
      'Discounted lab work for all members',
    ],
    cta: 'Enroll in Membership',
    ctaStyle: 'dark',
    highlight: false,
  },
];

export default function PricingTiers() {
  const navigate = useNavigate();

  const handleCTA = (tier) => {
    if (tier.id === 'fee_for_service') {
      window.open(ATLAS_PORTAL, '_blank', 'noopener noreferrer');
    } else {
      navigate('/enrollment');
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`relative rounded-3xl p-8 lg:p-10 border flex flex-col transition-all duration-500 ${
              tier.highlight
                ? 'border-foreground/20 bg-foreground shadow-2xl scale-[1.02]'
                : 'border-border bg-card hover:bg-secondary/20'
            }`}
          >
            {tier.badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-accent text-accent-foreground text-xs font-body font-medium px-4 py-1.5 rounded-full whitespace-nowrap">
                  {tier.badge}
                </span>
              </div>
            )}

            {/* Icon + Title */}
            <div className="mb-6">
              <tier.icon className={`w-6 h-6 mb-4 ${tier.highlight ? 'text-background/50' : 'text-accent'}`} />
              <h3 className={`font-display text-2xl font-semibold mb-2 ${tier.highlight ? 'text-background' : 'text-foreground'}`}>
                {tier.name}
              </h3>
              <p className={`text-sm font-body leading-relaxed ${tier.highlight ? 'text-background/60' : 'text-muted-foreground'}`}>
                {tier.description}
              </p>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className={`font-display text-4xl lg:text-5xl font-light ${tier.highlight ? 'text-background' : 'text-foreground'}`}>
                  {tier.priceLabel}
                </span>
                <span className={`text-sm font-body ml-1 ${tier.highlight ? 'text-background/50' : 'text-muted-foreground'}`}>
                  {tier.priceNote}
                </span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-10 flex-1">
              {tier.features.map(f => (
                <div key={f} className="flex items-start gap-3">
                  <Check className={`w-4 h-4 mt-0.5 shrink-0 ${tier.highlight ? 'text-background/50' : 'text-accent'}`} />
                  <span className={`text-sm font-body ${tier.highlight ? 'text-background/80' : 'text-muted-foreground'}`}>{f}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => handleCTA(tier)}
              className={`w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-body font-medium transition-all ${
                tier.highlight
                  ? 'bg-background text-foreground hover:opacity-90'
                  : 'bg-foreground text-background hover:opacity-90'
              }`}
            >
              {tier.cta}
              {tier.id === 'fee_for_service'
                ? <ExternalLink className="w-4 h-4" />
                : <ArrowRight className="w-4 h-4" />
              }
            </button>

            {tier.id !== 'fee_for_service' && (
              <p className={`mt-3 text-center text-xs font-body ${tier.highlight ? 'text-background/40' : 'text-muted-foreground'}`}>
                Completes enrollment via our patient portal
              </p>
            )}
          </motion.div>
        ))}
      </div>

    </>
  );
}