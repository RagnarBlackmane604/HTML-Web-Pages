'use client';

import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Toaster } from 'sonner';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <Provider store={store}>
      {children}
      <Toaster richColors position="top-right" />
    </Provider>
  );
};

