import React from 'react';
import Hero from '../components/home/Hero';
import Philosophy from '../components/home/Philosophy';
import About from '../components/home/About';
import LabsHighlight from '../components/home/LabsHighlight';
import ServicesPreview from '../components/home/ServicesPreview';
import LocationCTA from '../components/home/LocationCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <About />
      <LabsHighlight />
      <ServicesPreview />
      <LocationCTA />
    </>
  );
}