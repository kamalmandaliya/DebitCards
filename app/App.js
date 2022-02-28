import React from 'react';
import {AppProvider} from '@context';
import AppNavigator from './AppNavigator';

export default function App() {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
}
