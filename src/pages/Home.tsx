import Navbar from "../components/layout/Navbar"
import AboutMe from "../components/Shared/AboutMe"
import Contact from "../components/Shared/Contact"
import Hero from "../components/Shared/hero"
import Portfolio from "../components/Shared/Portfolio"
import Qualification from "../components/Shared/Qualification"
import Services from "../components/Shared/Services."
import Skills from "../components/Shared/Skills"

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Portfolio/>
      <Contact/>
    </>
  )
}

export default Home