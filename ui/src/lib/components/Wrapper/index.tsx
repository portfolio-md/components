import React from 'react';
import { ThemeProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';

export function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class">
        <div className="bg-slate-50 dark:bg-slate-700 h-screen">{children}</div>
      </ThemeProvider>
    </NextUIProvider>
  );
}
