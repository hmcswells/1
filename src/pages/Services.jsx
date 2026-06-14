import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Stethoscope, Thermometer, ClipboardCheck, Truck, Monitor, ArrowRight, Check } from 'lucide-react';
import BookNowButton from '../components/BookNowButton';

const services = [
  {
    icon: Stethoscope,
    title: 'Primary Care',
    subtitle: 'Comprehensive, Ongoing Care',
    price: 'From $85',
    desc: 'Primary care that focuses on improving your wellbeing — not just treating problems. Scott provides comprehensive, ongoing care for adults and families built around prevention, chronic disease management, and long-term health goals.',
    features: [
      'Annual wellness exams & preventive screenings',
      'Chronic disease management — diabetes, hypertension, thyroid',
      'Medication management & prescription refills',
      'Lab orders, imaging referrals & specialist coordination',
      'Routine adult physicals',
      'Preventive counseling and lifestyle coaching',
    ],
  },
  {
    icon: Thermometer,
    title: 'Acute Sick Care',
    subtitle: 'Same-Day & Next-Day Visits',
    price: 'Virtual from $75 · In-office from $85',
    desc: 'Convenient and timely — because illness doesn\'t wait. Scott offers same-day or next-day sick visits for adults and children, in person or virtually.',
    features: [
      'Upper respiratory infections, flu, strep, sinus infections',
      'Urinary tract infections',
      'Minor injuries, rashes, and skin conditions',
      'Stomach illness and GI complaints',
      'Ear infections and conjunctivitis',
      'COVID-19 evaluation and treatment guidance',
      'Pediatric sick visits',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'School & Sports Physicals',
    subtitle: 'Affordable & Thorough',
    price: 'From $50',
    desc: 'Required school physicals and pre-participation sports exams for students and athletes of all ages — completed on your schedule.',
    features: [
      'School physicals (Pre-K through 12th grade)',
      'Sports / athletic pre-participation exams (PPE)',
      'Summer camp and activity physicals',
      'Immunization record review and guidance',
      'Sport clearance documentation provided',
      'Group & team physicals at discounted rates',
    ],
  },
  {
    icon: Truck,
    title: 'Occupational Health & DOT',
    subtitle: 'FMCSA Certified Examiner',
    price: 'DOT from $95 · Pre-employment from $85',
    desc: 'Scott is a certified Federal Medical Examiner registered with the FMCSA National Registry, providing thorough, compliant DOT physicals for commercial drivers.',
    features: [
      'DOT / FMCSA physical examinations',
      'Fleet & group DOT physicals',
      'Pre-employment and return-to-work physicals',
      'Workplace injury evaluation and management',
      'OSHA compliance physicals',
      'Fitness-for-duty evaluations',
    ],
  },
  {
    icon: Monitor,
    title: 'Telehealth',
    subtitle: 'Virtual Visits Statewide',
    price: 'From $55',
    desc: 'Secure, HIPAA-compliant telehealth appointments for a wide range of primary care needs — from any device, anywhere in New Hampshire or Massachusetts.',
    features: [
      'Primary care follow-ups and chronic condition check-ins',
      'Acute sick consultations',
      'Medication management and prescription refills',
      'Wellness consultations and lifestyle coaching',
      'Lab result reviews and care plan discussions',
      'Mental wellness check-ins and referral coordination',
    ],
  },
];

export default function Services() {
  return (
    <div className="pt-28 pb-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Our Services
          </p>
          <h1 className="font-display text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-6">
            Five focused services,{' '}
            <span className="italic">delivered with care</span>
          </h1>
          <p className="text-lg font-body text-muted-foreground leading-relaxed">
            Every service is available at our Raymond office or virtually. No insurance required. 
            No surprise bills. Just straightforward, quality care.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="border border-border rounded-3xl p-8 lg:p-12 hover:bg-secondary/20 transition-colors duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-semibold text-foreground">{service.title}</h2>
                      <p className="text-xs font-body text-muted-foreground">{service.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-base font-body text-muted-foreground leading-relaxed mt-4">
                    {service.desc}
                  </p>
                  <p className="mt-6 text-lg font-display font-semibold text-foreground">{service.price}</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map(feature => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        <span className="text-sm font-body text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="font-display text-2xl text-foreground mb-6">Ready to get started?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookNowButton size="lg" />
            <Link
              to="/membership"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-sm font-body font-medium hover:opacity-90 transition-opacity"
            >
              View Membership Plans
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-8 py-4 rounded-full text-sm font-body font-medium hover:bg-foreground/5 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}