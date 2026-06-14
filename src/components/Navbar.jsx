const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Membership', path: '/membership' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-background/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div
              className="shrink-0"
              style={{
                width: '48px',
                height: '48px',
                backgroundImage: 'url(https://media.db.com/images/public/6a2b4700f9945e4e7da1044c/67ba9c370_logosmall.png)',
                backgroundSize: '170%',
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat',
              }}
              aria-label="Wells Family Medicine logo"
            />
            <div className="flex flex-col">
              <span className="font-display text-xl font-semibold tracking-tight text-foreground leading-tight">Wells Family Medicine</span>
              <span className="text-xs font-body text-muted-foreground tracking-widest uppercase">Direct Primary Care</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-body tracking-wide transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:6038283232"
              className="flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-body font-medium hover:opacity-90 transition-opacity"
            >
              <Phone className="w-3.5 h-3.5" />
              (603) 828-3232
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-body py-2 ${
                    location.pathname === link.path ? 'text-foreground font-medium' : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:6038283232"
                className="flex items-center justify-center gap-2 bg-foreground text-background px-5 py-3 rounded-full text-sm font-body font-medium mt-2"
              >
                <Phone className="w-4 h-4" />
                (603) 828-3232
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}