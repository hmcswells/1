import React from 'react';
import { CalendarDays } from 'lucide-react';

const BOOKING_URL = 'https://www.zocdoc.com/booking-link/practice/wells-family-medicine-178009';

export default function BookNowButton({ size = 'md', className = '' }) {
  const base =
    'inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-body font-medium rounded-full transition-all hover:opacity-90 active:scale-95';

  const sizes = {
    sm: 'px-5 py-2.5 text-xs',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4 text-sm',
  };

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${className}`}
    >
      <CalendarDays className="w-4 h-4 shrink-0" />
      Book an Appointment
    </a>
  );
}