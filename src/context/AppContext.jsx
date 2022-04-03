import React, { createContext } from 'react';

export const AppContext = createContext({
  theme: 'dark',
  user: {},
  languge: 'cz',
});

export function AppContextProvider({ children }) {
  return (
    <AppContext.Provider
      value={{
        theme: 'dark',
        user: {},
        languge: 'cz',
      }}>
      {children}
    </AppContext.Provider>
  );
}
