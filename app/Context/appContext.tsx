import * as React from 'react';
import {authReducer} from './authReducer';

interface AppProps {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string;
  cartCount: number;
  weeklySpend: any;
  cardData: any;
}
const AppStateContext = React.createContext<any>({} as AppProps);
const AppDispatchContext = React.createContext<any>({} as AppProps);

function AppProvider({children}) {
  const [state, dispatch] = React.useReducer(authReducer, {
    isLoading: true,
    isSignout: false,
    userToken: null,
    cartCount: 0,
    weeklySpend: {},
    cardData: {},
  });

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

function useAppState() {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within a AppProvider');
  }
  return context;
}
function useAppDispatch() {
  const context = React.useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a AppProvider');
  }
  return context;
}

export {AppProvider, useAppState, useAppDispatch};
