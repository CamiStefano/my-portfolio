import React from 'react';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from './lib/registry';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Cami Stefano',
  description: 'Portfolio de Cami Stefano',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
