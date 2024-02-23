import React from 'react';

export function ContentWrapper({ children }: { children: React.ReactNode }) {
  return <div className="p-24">{children}</div>;
}
