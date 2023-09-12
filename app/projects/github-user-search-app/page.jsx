'use client';

import React from 'react';
import { useState } from 'react';

import { Space_Mono as spaceMono } from 'next/font/google';
import { ThemeProvider } from 'styled-components';
import { Splash } from './components/SplashScreen';
import { Wrapper } from './styles';

export const SpaceMono = spaceMono({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

export const LightTheme = {
  pageBackground: '#FEFEFE',
  titleColor: '#2B3442',
};

export const DarkTheme = {
  pageBackground: '#1E2A47',
  titleColor: '#FFFFFF',
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

export const metadata = {
  title: 'GitHub user search App',
};

export default function GitHubSearch() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeProvider theme={themes}>
      <Wrapper className={SpaceMono.className}>
        <Splash theme={theme} setTheme={setTheme} />
        <h1>sjaksja</h1>
      </Wrapper>
    </ThemeProvider>
  );
}
