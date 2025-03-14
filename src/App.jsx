import { motion } from "framer-motion"
import Header from "./components/Header"
import Home from "./components/Home"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Divider from "./components/Divider"
import ContactForm from "./components/ContactForm"
function App() {

  return (
    <div className="bg-neutral-900">

      <div className="font-inter w-full h-screen bg-neutral-900 overflow-x-hidden">
        <Header />
        <Home />
      </div>
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <ContactForm />
      <Divider />
    </div>
  )
}

export default App
