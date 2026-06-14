import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-semibold mb-2">Wells Family Medicine</h3>
            <p className="text-sm opacity-60 font-body leading-relaxed">
              Direct Primary Care in Raymond, NH. No insurance required. Quality care, transparent pricing.
            </p>
            <p className="mt-6 text-sm opacity-40 font-body italic">
              Scott Wells, FNP-C
            </p>
          </div>

          <div>
            <h4 className="text-xs font-body tracking-widest uppercase opacity-40 mb-6">Location</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 opacity-60 shrink-0" />
                <p className="text-sm font-body opacity-80 leading-relaxed">
                  126 NH-27<br />Raymond, NH 03077
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 opacity-60 shrink-0" />
                <a href="tel:6038283232" className="text-sm font-body opacity-80 hover:opacity-100 transition-opacity">
                  (603) 828-3232
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 opacity-60 shrink-0" />
                <a href="mailto:inquiries@wellsfamilymedicine.com" className="text-sm font-body opacity-80 hover:opacity-100 transition-opacity">
                  inquiries@wellsfamilymedicine.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-body tracking-widest uppercase opacity-40 mb-6">Hours</h4>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 mt-0.5 opacity-60 shrink-0" />
              <div className="text-sm font-body opacity-80 leading-relaxed space-y-1">
                <p>Monday – Friday: 8am – 5pm</p>
                <p>Evenings & Weekends: By Arrangement</p>
                <p className="opacity-60 mt-3">Same-day visits available</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-body tracking-widest uppercase opacity-40 mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Services', path: '/services' },
                { label: 'Membership Plans', path: '/membership' },
                { label: 'Contact & Booking', path: '/contact' },
              ].map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-body opacity-60 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body opacity-30">
            © {new Date().getFullYear()} Wells Family Medicine. All rights reserved.
          </p>
          <p className="text-xs font-body opacity-30">
            Licensed in NH & MA · Direct Primary Care
          </p>
        </div>
      </div>
    </footer>
  );
}