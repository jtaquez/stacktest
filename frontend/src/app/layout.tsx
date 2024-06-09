'use client';
import React, { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

interface RootLayoutProps {
  children: ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  const theme = useTheme();

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;