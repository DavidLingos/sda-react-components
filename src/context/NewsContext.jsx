import React, { createContext, useState, useContext } from 'react';

const NewsContext = createContext();

export function NewsContextProvider({ children }) {
  const [newsLoadedTime, setNewsLoadedTime] = useState(new Date());
  return (
    <NewsContext.Provider
      value={{
        newsLoadedTime,
        setNewsLoadedTime,
      }}>
      {children}
    </NewsContext.Provider>
  );
}

export function useNews() {
  return useContext(NewsContext);
}
