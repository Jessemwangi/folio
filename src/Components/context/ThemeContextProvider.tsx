import { createContext, useContext } from 'react';

// Define the shape of the context's data
export type ThemeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

// Create the context with a default value of undefined
// We will handle the undefined case in the useTheme hook
export const ThemeContextProvider = createContext<ThemeContextType | undefined>(undefined);

// Create the custom hook for consuming the context
export const useTheme = () => {
  const context = useContext(ThemeContextProvider);
  
  // This error check ensures the hook is used within a ThemeProvider
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};