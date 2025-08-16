import ThemeButton from './ui/ThemeButton';

const Header: React.FC = () => {

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto max-w-5xl px-4 py-4 flex justify-between items-center">
        {/* Your Name/Logo */}
        <a href="#home" className="text-2xl font-bold text-gray-900 dark:text-white">
          Jesse Mwangi
        </a>

        {/* Navigation and Theme Toggle */}
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6">
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              Projects
            </a>
            {/* Add more links here if needed, e.g., for an "About" or "Contact" section */}
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Theme Toggle Button */}
          {/* <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === 'dark' ? (
              // Moon Icon 🌙
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              // Sun Icon ☀️
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button> */}
                  <ThemeButton/>
        </div>
      </div>
    </header>
  );
};

export default Header;