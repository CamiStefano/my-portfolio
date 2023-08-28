import React from 'react';
import Image from 'next/image';

import { Plus_Jakarta_Sans as plusJacartaSans } from 'next/font/google';
import { Wrapper, Title, Paragraph } from './styles';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Button from './components/Button';

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
    <Wrapper className={PluaJacartaSans.className}>
      <NavBar />
      <section>
        <div className="main__text">
          <Title>Maximize skill, minimize budget</Title>
          <Paragraph>
            Our modern courses across a range of in-demand skills will give you the knowledge you
            need to live the life you want.
          </Paragraph>
          <Button>Get Started</Button>
        </div>
        <div>
          <Image
            src="/person.png"
            width={710}
            height={791}
            alt="Picture of a person drinking coffee"
          />
        </div>
      </section>
      <Footer />
    </Wrapper>
  );
}
