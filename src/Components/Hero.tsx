// src/components/Hero.tsx

const Hero = () => {
  return (
    <section id="home" className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Jesse Mwangi
          </h1>
          <p className="text-xl md:text-2xl text-blue-500 dark:text-blue-400 font-semibold mb-6">
            Senior Full-Stack Developer
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            I build robust, scalable, and efficient web applications from front to back.
            With a passion for clean code and user-centric design, I turn complex problems into elegant solutions.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
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
        </div>

        {/* Right Column: Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <img 
              // 👇 Replace this with the actual path to your image in the `public` folder
              src="/jesse-photo.jpg" 
              alt="A professional headshot of Jesse Mwangi" 
              className="w-full h-full rounded-full object-cover border-4 border-gray-200 dark:border-gray-700 shadow-lg"
            />
            {/* Optional: Add a decorative ring/glow effect */}
            <div className="absolute inset-0 rounded-full border-4 border-blue-500/50 dark:border-blue-400/50 animate-pulse"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;