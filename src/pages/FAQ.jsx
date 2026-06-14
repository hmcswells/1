import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Link } from 'lucide-react';
import BookNowButton from '../components/BookNowButton';

const faqs = [
  {
    category: '💳 Subscription & Membership',
    items: [
      {
        q: 'What is Direct Primary Care (DPC)?',
        a: 'Direct Primary Care (DPC) is a membership-based healthcare model. You pay a flat fee directly to the clinic instead of using health insurance. This eliminates co-pays, deductibles, and insurance headaches.',
      },
      {
        q: 'What billing options do you offer?',
        a: (
          <div className="space-y-2">
            <p>We offer flexible DPC membership options to fit your budget:</p>
            <ul className="space-y-1 mt-2">
              <li><span className="font-medium">Monthly:</span> Automatically billed every month.</li>
              <li><span className="font-medium">3-Month (Quarterly):</span> Billed upfront every 3 months.</li>
              <li><span className="font-medium">6-Month (Semi-Annual):</span> Billed upfront every 6 months.</li>
              <li><span className="font-medium">Annual:</span> Billed upfront every 12 months.</li>
            </ul>
            <p className="mt-2">Fees are processed automatically in advance on the first day of your designated billing period. We require a valid Credit Card, Debit Card, or HSA/FSA card on file.</p>
          </div>
        ),
      },
      {
        q: 'Can I cancel or pause my subscription?',
        a: (
          <div className="space-y-2">
            <p>Yes. You can cancel by providing a 30-day written notice. However, please note our Re-Enrollment Policy designed to prevent policy-gaming:</p>
            <ul className="space-y-1 mt-2 list-disc list-inside">
              <li>You must pay the standard $50.00 Enrollment Fee again.</li>
              <li>You will be billed retroactively for all elapsed months while your membership was cancelled before care can resume.</li>
            </ul>
          </div>
        ),
      },
      {
        q: 'Do you accept insurance?',
        a: 'No. Wells Family Medicine is a self-pay, direct-pay practice. We do not participate in or bill any commercial insurance plans or Medicare. Your membership covers all in-clinic provider visits, but any laboratory specimens collected in-clinic will be billed separately. We highly recommend maintaining a separate health insurance or catastrophic plan for emergency room visits, hospitalizations, or specialty care.',
      },
    ],
  },
  {
    category: '🩺 Non-Member / Fee-For-Service Clients',
    items: [
      {
        q: 'Can I book an appointment if I am not a DPC Member?',
        a: 'Yes. Non-established, non-DPC clients are welcome to book individual appointments and will be charged at the time of service for all care and administrative fees.',
      },
    ],
  },
  {
    category: '🗓️ Scheduling, Cancellations & Attendance',
    items: [
      {
        q: 'What is your cancellation and late policy?',
        a: (
          <div className="space-y-2">
            <p>To provide dedicated, high-quality care, we enforce a strict scheduling policy for both virtual and in-person visits:</p>
            <ul className="space-y-1 mt-2">
              <li><span className="font-medium">Rescheduling:</span> You may reschedule at no cost up until 24 hours prior to your visit.</li>
              <li><span className="font-medium">Late Cancellations:</span> Cancellations made within 24 hours will result in a $45.00 fee charged to your card on file.</li>
              <li><span className="font-medium">No-Shows:</span> We offer a 10-minute grace period. If you are more than 10 minutes late, the session will close, you will hold "No-Show" status, and a $45.00 fee will be charged.</li>
              <li><span className="font-medium">Account Holds:</span> All outstanding fees must be settled before future appointments can be booked.</li>
            </ul>
          </div>
        ),
      },
      {
        q: 'How do I secure a virtual appointment?',
        a: 'When you book a virtual appointment, its status remains "Pending" until administrative setup is complete. You must complete all digital intake forms and upload a valid payment card within two (2) hours of booking. If this is not done within the two-hour window, the system will automatically release the time slot to other patients — no penalty applies.',
      },
    ],
  },
  {
    category: '🏥 First Visit Expectations',
    items: [
      {
        q: 'What can I expect during my first visit?',
        a: (
          <div className="space-y-2">
            <p>Your first visit is all about establishing a personalized, continuous healthcare relationship.</p>
            <ul className="space-y-1 mt-2">
              <li><span className="font-medium">Relaxed Time:</span> Expect an unhurried, comprehensive consultation to discuss your full medical history, lifestyle, and wellness goals.</li>
              <li><span className="font-medium">Care Plan Creation:</span> Scott will work directly with you to map out your long-term health management strategy.</li>
              <li><span className="font-medium">No Added Cost:</span> If you are a DPC member, your standard office visit, vitals, and comprehensive consultation are 100% covered by your membership with zero co-pays. Lab fees are billed separately if external testing is required.</li>
            </ul>
          </div>
        ),
      },
    ],
  },
];

function FAQItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-body font-medium text-foreground text-base">{item.q}</span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-sm font-body text-muted-foreground leading-relaxed">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="pt-28 pb-24 lg:pb-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Support
          </p>
          <h1 className="font-display text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-6">
            🙋 Frequently Asked{' '}
            <span className="italic">Questions</span>
          </h1>
          <p className="text-lg font-body text-muted-foreground leading-relaxed">
            Everything you need to know about membership, scheduling, and your first visit.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="font-display text-xl font-semibold text-foreground mb-1 pb-3 border-b border-border">
                {section.category}
              </h2>
              <div>
                {section.items.map((item) => (
                  <FAQItem key={item.q} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-12 border-t border-border text-center">
          <p className="font-display text-2xl text-foreground mb-3">Still have questions?</p>
          <p className="text-sm font-body text-muted-foreground mb-8">
            Call or text Scott directly at <a href="tel:6038283232" className="text-foreground font-medium hover:opacity-70 transition-opacity">(603) 828-3232</a> or email <a href="mailto:inquiries@wellsfamilymedicine.com" className="text-foreground font-medium hover:opacity-70 transition-opacity">inquiries@wellsfamilymedicine.com</a>
          </p>
          <BookNowButton size="lg" />
        </div>
      </div>
    </div>
  );
}