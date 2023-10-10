'use client';

import React, { useState } from 'react';
import { Space_Mono as spaceMono } from 'next/font/google';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from './styles';
import { darkTheme, lightTheme } from './theme';
import NavBar from './components/NavBar';
import UserCard from './components/UserCard';
import SearchContainer from './components/SearchBar';
import SocialCardContainer from './components/SocialCard';

export const SpaceMono = spaceMono({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'GitHub user search App',
};

export default function GitHubSearch() {
  const [theme, setTheme] = useState('light');

  const selectedTheme = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={selectedTheme}>
      <Wrapper className={SpaceMono.className}>
        <NavBar theme={theme} setTheme={setTheme} />
        <SearchContainer />
        <UserCard />
      </Wrapper>
    </ThemeProvider>
  );
}
