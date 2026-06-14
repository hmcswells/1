import React from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, Heart, Shield } from 'lucide-react';

const pillars = [
  {
    icon: Clock,
    title: 'Unhurried Clinic Visits',
    description: 'Walk into our Raymond office and actually be seen — no rushed 8-minute slots, no crowded waiting rooms.',
  },
  {
    icon: DollarSign,
    title: 'Two Simple Payment Options',
    description: 'Choose a low monthly subscription for unlimited visits, or pay per visit with fully published fee-for-service rates. No billing surprises.',
  },
  {
    icon: Heart,
    title: 'One Consistent Provider',
    description: 'Every in-person and telehealth visit is with Scott. He knows your name, your history, and your health goals.',
  },
  {
    icon: Shield,
    title: 'Insurance-Free by Design',
    description: 'We don\'t work with insurance companies — which means lower overhead, lower prices, and decisions made by you and your provider.',
  },
];

export default function Philosophy() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-4"
          >
            Why Direct Primary Care
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl lg:text-5xl font-light tracking-tight text-foreground"
          >
            A clinic built around{' '}
            <span className="italic">you, not insurers</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-6 p-8 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-colors duration-500"
            >
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center">
                  <pillar.icon className="w-5 h-5 text-foreground" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}