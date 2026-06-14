import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Stethoscope, Thermometer, ClipboardCheck, Truck, Monitor, ArrowRight } from 'lucide-react';

const services = [
  { icon: Stethoscope, title: 'Primary Care', from: '$85', desc: 'Comprehensive ongoing care for adults and families.' },
  { icon: Thermometer, title: 'Acute Sick Care', from: '$75', desc: 'Same-day or next-day visits for illness and injuries.' },
  { icon: ClipboardCheck, title: 'Physicals', from: '$50', desc: 'School, sports, and pre-employment physicals.' },
  { icon: Truck, title: 'DOT / Occupational', from: '$85', desc: 'FMCSA DOT exams and workplace health services.' },
  { icon: Monitor, title: 'Telehealth', from: '$55', desc: 'Virtual visits across NH and MA.' },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16">
          <div>
            <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-4">
              What We Offer
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-light tracking-tight text-foreground">
              Focused services,{' '}
              <span className="italic">fair prices</span>
            </h2>
          </div>
          <Link
            to="/services"
            className="mt-6 lg:mt-0 inline-flex items-center gap-2 text-sm font-body font-medium text-foreground hover:opacity-70 transition-opacity"
          >
            View all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/services"
                className="block h-full p-6 rounded-2xl border border-border bg-card hover:bg-secondary/30 transition-all duration-500 group"
              >
                <service.icon className="w-6 h-6 text-accent mb-5" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{service.title}</h3>
                <p className="text-xs font-body text-muted-foreground mb-3 leading-relaxed">{service.desc}</p>
                <p className="text-sm font-body font-medium text-foreground">
                  From {service.from}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}