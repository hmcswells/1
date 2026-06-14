import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const labs = [
  { name: 'Complete Blood Count (CBC)', market: 60, wells: 5, info: 'Measures red & white blood cells, hemoglobin, and platelets — a foundational health snapshot.' },
  { name: 'Comprehensive Metabolic Panel (CMP)', market: 95, wells: 8, info: 'Evaluates kidney function, liver function, blood sugar, and electrolytes.' },
  { name: 'Basic Metabolic Panel (BMP)', market: 70, wells: 6, info: 'Checks blood sugar, calcium, and electrolyte balance.' },
  { name: 'Lipid Panel', market: 80, wells: 7, info: 'Measures cholesterol and triglycerides — essential for heart disease prevention.' },
  { name: 'Hemoglobin A1c', market: 65, wells: 8, info: 'Tracks average blood sugar over 3 months — key for diabetes management.' },
  { name: 'Thyroid Panel (TSH, Free T4)', market: 110, wells: 12, info: 'Screens for thyroid disorders that can affect energy, weight, and mood.' },
  { name: 'Urinalysis', market: 35, wells: 4, info: 'Detects infections, kidney issues, and metabolic conditions through urine testing.' },
  { name: 'Vitamin D, 25-Hydroxy', market: 120, wells: 15, info: 'Checks vitamin D levels — critical for bone health, immunity, and mood regulation.' },
  { name: 'Iron & Ferritin', market: 85, wells: 10, info: 'Evaluates iron stores — important for energy levels and detecting anemia.' },
  { name: 'Testosterone (Total)', market: 90, wells: 12, info: 'Measures testosterone levels — relevant for energy, mood, and overall wellness.' },
  { name: 'PSA (Prostate Specific Antigen)', market: 75, wells: 8, info: 'Screens for prostate health — recommended for men over 50.' },
  { name: 'Liver Function Panel', market: 75, wells: 7, info: 'Evaluates liver health through enzymes and protein levels.' },
  { name: 'Rapid Strep Test', market: 45, wells: 10, info: 'Quick in-office test for strep throat — results in minutes.' },
  { name: 'Rapid Flu Test', market: 50, wells: 10, info: 'In-office influenza detection for fast diagnosis and treatment.' },
  { name: 'COVID-19 Rapid Test', market: 50, wells: 10, info: 'Quick antigen test for COVID-19 detection.' },
  { name: 'Urine Drug Screen (10-panel)', market: 80, wells: 15, info: 'Standard employment drug screening panel.' },
  { name: 'STI Panel (Basic)', market: 200, wells: 35, info: 'Screens for common sexually transmitted infections for peace of mind.' },
  { name: 'STI Panel (Comprehensive)', market: 350, wells: 65, info: 'Extended screening including HSV, hepatitis, and additional markers.' },
];

export default function Labs() {
  const [search, setSearch] = useState('');
  const [hoveredLab, setHoveredLab] = useState(null);

  const filtered = useMemo(() => {
    if (!search) return labs;
    return labs.filter(l => l.name.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  return (
    <div className="pt-28 pb-24 lg:pb-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Lab Pricing
          </p>
          <h1 className="font-display text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-6">
            Radical{' '}
            <span className="italic">transparency</span>
          </h1>
          <p className="text-lg font-body text-muted-foreground leading-relaxed max-w-xl">
            We believe you should know what your labs cost before you order them. 
            Our discounted lab prices save you 70–95% compared to typical market rates.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-10">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search labs..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-secondary/30 border border-border rounded-2xl pl-12 pr-6 py-4 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all"
          />
        </div>

        {/* Lab List */}
        <div className="space-y-2">
          {filtered.map((lab, i) => (
            <motion.div
              key={lab.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
              onMouseEnter={() => setHoveredLab(lab.name)}
              onMouseLeave={() => setHoveredLab(null)}
              className="group rounded-2xl p-5 lg:p-6 border border-transparent hover:border-border hover:bg-secondary/20 transition-all duration-300 cursor-default"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="font-body text-base font-medium text-foreground">{lab.name}</h3>
                  <motion.p
                    initial={false}
                    animate={{ height: hoveredLab === lab.name ? 'auto' : 0, opacity: hoveredLab === lab.name ? 1 : 0 }}
                    className="text-xs font-body text-muted-foreground leading-relaxed overflow-hidden mt-1"
                  >
                    {lab.info}
                  </motion.p>
                </div>
                <div className="flex items-center gap-6 shrink-0">
                  <div className="text-right">
                    <p className="text-xs font-body text-muted-foreground mb-0.5">Market</p>
                    <p className="text-sm font-body text-muted-foreground line-through">${lab.market}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-body text-accent mb-0.5">Our Price</p>
                    <p className="text-lg font-display font-semibold text-foreground">${lab.wells}</p>
                  </div>
                  <div className="hidden sm:block">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-xs font-body font-medium text-foreground">
                      Save {Math.round((1 - lab.wells / lab.market) * 100)}%
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="font-body text-muted-foreground">No labs match your search. Try a different term.</p>
          </div>
        )}

        {/* Note */}
        <div className="mt-16 p-8 rounded-3xl bg-secondary/30 border border-border">
          <h3 className="font-display text-xl font-semibold text-foreground mb-3">
            How Our Lab Pricing Works
          </h3>
          <div className="space-y-3 text-sm font-body text-muted-foreground leading-relaxed">
            <p>
              We partner with national reference labs to offer deeply discounted lab pricing — 
              typically 70–95% less than what you'd pay at a hospital or through insurance.
            </p>
            <p>
              Lab work is ordered by Scott and drawn at our Raymond office or a nearby draw station. 
              Results are reviewed with you personally, not sent through a portal without context.
            </p>
            <p>
              Don't see the test you need? Contact us — we can order virtually any lab test at a competitive price.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-6 text-sm font-body font-medium text-foreground hover:opacity-70 transition-opacity"
          >
            Ask about a specific lab
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}