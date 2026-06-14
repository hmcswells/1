import React from 'react';

export default function Enrollment() {
  return (
    <div className="pt-28 pb-24 lg:pb-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-16">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Join the Practice
          </p>
          <h1 className="font-display text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-6">
            Enroll as a <span className="italic">New Patient</span>
          </h1>
          <p className="text-lg font-body text-muted-foreground leading-relaxed">
            Complete the form below to enroll with Wells Family Medicine. No insurance required.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-border">
          <iframe
            frameBorder="0"
            style={{ width: '100%' }}
            height="900"
            src="https://wellsfamilymedicine.atlas.md/enrollment/index.html?account=xMwSGpF0t3rMlYOem5Rn"
            title="Wells Family Medicine Enrollment"
          />
        </div>
      </div>
    </div>
  );
}