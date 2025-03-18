'use client'
import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Hero from '@/components/Hero';
import LogoCollection from '@/components/LogoCollection';
import Features from '@components/Features';
import FAQ from '@components/FAQ';
import Testimonials from '@components/Testimonials';
import Divider from '@mui/material/Divider';
import Pricing from '@/components/Pricing';
import Highlights from '@components/Highlights';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
       <Hero/>
       <div>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
       </div>
      </Box>
    </Container>
  );
}
