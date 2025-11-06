import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Card from "./components/Projects"
import Contact from "./components/Contact"

const App = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Home />
        <About />
        <Card />
        <Contact />
      </main>
    </>
  )
}
export default App