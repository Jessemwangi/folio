import React, { useState, useEffect } from "react";
import {
  ThemeContextProvider,
  type ThemeContextType,
} from "./context/ThemeContextProvider";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(isDarkMode ? "light" : "dark");
    root.classList.add(isDarkMode ? "dark" : "light");

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  // Context value to provide
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
