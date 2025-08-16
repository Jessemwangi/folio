import React, { useState, useEffect } from 'react';
import { ThemeContextProvider, type ThemeContextType } from './context/ThemeContextProvider';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Check localStorage for a saved theme preference on initial load
    return localStorage.getItem('theme') === 'dark';
  });

  // Effect to apply the dark class to the <html> element
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(isDarkMode ? 'light' : 'dark');
    root.classList.add(isDarkMode ? 'dark' : 'light');
    
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // The context value now perfectly matches the ThemeContextType
  const value: ThemeContextType = {
    isDarkMode,
    toggleDarkMode,
  };

  return (
    <ThemeContextProvider.Provider value={value}>
      {children}
    </ThemeContextProvider.Provider>
  );
};