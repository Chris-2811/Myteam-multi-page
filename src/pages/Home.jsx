import React from 'react';
import { Navbar, Hero, Features, Testimonials, CTA } from '../components/index';

function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
}

export default Home;
