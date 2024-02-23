import { ThemeProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';

export default function PortfolioMdProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </NextUIProvider>
  );
}
