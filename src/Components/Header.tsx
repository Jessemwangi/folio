import ThemeButton from "./ui/ThemeButton";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto max-w-5xl px-4 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          Jesse Mwangi
        </a>

        {/* Nav */}
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6">
            <a
              href="#projects"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </nav>
          {/* Theme Toggle Button */}
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
