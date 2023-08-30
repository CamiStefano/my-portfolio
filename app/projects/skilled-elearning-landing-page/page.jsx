import React from 'react';

import { Plus_Jakarta_Sans as plusJacartaSans } from 'next/font/google';
import { Wrapper } from './styles';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import CardsSection from './components/CardsSection';

export const PluaJacartaSans = plusJacartaSans({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Results summary component',
};

export default function skilledElearning() {
  return (
    <>
      <Wrapper className={PluaJacartaSans.className}>
        <NavBar />
        <Hero />
        <CardsSection />
      </Wrapper>
      <Footer />
    </>
  );
}
