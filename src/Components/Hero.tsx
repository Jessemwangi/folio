const Hero: React.FC = () => {
  return (
    <section id="home" className="text-center py-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Jesse Mwangi
      </h1>
      <p className="text-xl md:text-2xl text-blue-500 dark:text-blue-400 font-semibold mb-6">
        Senior Full-Stack Developer
      </p>
      <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-8">
        I build robust, scalable, and efficient web applications from front to back.
        With a passion for clean code and user-centric design, I turn complex problems into elegant solutions.
      </p>
      <div className="flex justify-center space-x-4">
        <a 
          href="https://github.com/Jessemwangi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/jesse-mwangi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Hero;