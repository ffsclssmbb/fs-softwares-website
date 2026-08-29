'use client';

import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1A202C',
            color: '#F1F5F9',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '12px',
            boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)',
          },
        }}
      />
    </>
  );
}
