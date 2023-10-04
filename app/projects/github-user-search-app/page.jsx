'use client';

import React from 'react';
import { Space_Mono as spaceMono } from 'next/font/google';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from './styles';
import NavBar from './components/NavBar';
import UserCard from './components/UserCard';
import SearchContainer from './components/SearchBar';

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
  return (
    <Wrapper className={SpaceMono.className}>
      <ThemeProvider theme={themes}>
        <NavBar />
        <SearchContainer />
        <UserCard />
      </ThemeProvider>
    </Wrapper>
  );
}
