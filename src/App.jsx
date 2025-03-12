import { motion } from "framer-motion"
import Header from "./components/Header"
import Home from "./components/Home"
import Skills from "./components/Skills"
function App() {

  return (
    <>

      <div className="font-inter  relative w-full h-screen bg-neutral-900">
        {/* <div className="absolute top-0  bottom-0 left-0 right-0">
          <svg aria-hidden="true" class="pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/20 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)] __web-inspector-hide-shortcut__"><defs><pattern id=":R66uela:" width="16" height="16" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" x="0" y="0"><circle id="pattern-circle" cx="1" cy="1" r="1"></circle></pattern></defs><rect width="100%" height="100%" stroke-width="0" fill="url(#:R66uela:)"></rect></svg>
        </div> */}
        <Header />
        <Home />
      </div>
      <Skills />
    </>
  )
}

export default App
