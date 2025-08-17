import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import ProjectsList from "./Components/ProjectsList"

function App() {


  return (
    <>
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans">
      <Header />
      <main className="container mx-auto max-w-5xl px-4 py-8">
        <Hero />
          <ProjectsList />
          <Contact />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
