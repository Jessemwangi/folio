const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-lg text-blue-500 dark:text-blue-400 font-semibold mb-12">
          Ready to turn an idea into a real-world solution? Let's connect and build the future, today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        
        {/* Left Column: Direct Contact Info */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Contact Directly</h3>
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <p className="font-semibold text-lg">Email</p>
                <a href="mailto:jessejzee@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  jessejzee@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div>
                <p className="font-semibold text-lg">Phone</p>
                <a href="tel:0413104557" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  041 310 4557
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6 flex space-x-4">
                <a href="https://github.com/Jessemwangi" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
                </a>
                <a href="https://www.linkedin.com/in/jesse-mwangi" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
              <input type="text" id="name" name="name" required className="block w-full p-3 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500 transition" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
              <input type="email" id="email" name="email" required className="block w-full p-3 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500 transition" placeholder="name@company.com" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Message</label>
              <textarea id="message" name="message" rows={5} required className="block w-full p-3 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500 transition" placeholder="Let's talk about..."></textarea>
            </div>
            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;