import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="pt-28 pb-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Contact & Location
          </p>
          <h1 className="font-display text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-6">
            Come visit us in{' '}
            <span className="italic">Raymond</span>
          </h1>
          <p className="text-lg font-body text-muted-foreground leading-relaxed">
            Our clinic is at 126 NH-27, Raymond, NH. No automated phone trees. Call, text, or email and Scott responds personally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-3xl overflow-hidden border border-border aspect-square lg:aspect-[4/5]">
              <iframe
                title="Wells Family Medicine Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.3!2d-71.1834!3d43.0364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s126+NH-27%2C+Raymond%2C+NH+03077!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=126+NH-27,+Raymond,+NH+03077"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm font-body font-medium text-foreground hover:opacity-70 transition-opacity"
            >
              <Navigation className="w-4 h-4" />
              Get Directions in Google Maps
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10"
          >
            {/* Address */}
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Address</h3>
                <p className="text-base font-body text-muted-foreground leading-relaxed">
                  126 NH-27<br />
                  Raymond, NH 03077
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Phone & Text</h3>
                <a href="tel:6038283232" className="text-base font-body text-foreground hover:opacity-70 transition-opacity block">
                  (603) 828-3232
                </a>
                <p className="text-sm font-body text-muted-foreground mt-1">
                  Call or text — Scott responds personally, usually within a few hours.
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Email</h3>
                <a href="mailto:inquiries@wellsfamilymedicine.com" className="text-base font-body text-foreground hover:opacity-70 transition-opacity block">
                  inquiries@wellsfamilymedicine.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Office Hours</h3>
                <div className="text-base font-body text-muted-foreground space-y-1">
                  <p>Monday – Friday: 8:00 AM – 5:00 PM</p>
                  <p>Evenings & Weekends: By Arrangement</p>
                  <p className="text-sm mt-2 text-accent">Same-day sick visits available — call or text</p>
                </div>
              </div>
            </div>

            {/* Booking */}
            <div className="pt-8 border-t border-border">
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Schedule a Visit
              </h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed mb-6">
                New patients welcome. No referral needed. No insurance required. 
                Call, text, or email to schedule your first visit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:6038283232"
                  className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-sm font-body font-medium hover:opacity-90 transition-opacity"
                >
                  <Phone className="w-4 h-4" />
                  Call to Book
                </a>
                <a
                  href="mailto:inquiries@wellsfamilymedicine.com"
                  className="inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-8 py-4 rounded-full text-sm font-body font-medium hover:bg-foreground/5 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
              </div>
            </div>

            {/* Service Area */}
            <div className="pt-8 border-t border-border">
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Service Area
              </h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">
                In-person visits at our Raymond, NH office. Telehealth visits available statewide in NH and MA.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Raymond', 'Epping', 'Exeter', 'Fremont', 'Candia', 'Deerfield', 'Nottingham', 'Chester'].map(town => (
                  <span
                    key={town}
                    className="px-3 py-1.5 rounded-full bg-secondary/50 text-xs font-body text-muted-foreground"
                  >
                    {town}
                  </span>
                ))}
                <span className="px-3 py-1.5 rounded-full bg-accent/10 text-xs font-body text-foreground font-medium">
                  + All NH & MA via Telehealth
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}