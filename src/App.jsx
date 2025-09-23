import About from "./Components/About/About"
import Footer from "./Components/Footer/Footer"
import HeroSection from "./Components/HeroSection/HeroSection"
import Navbar from "./Components/Navbar/Navbar"
import Service from './Components/Service/Service'

function App() {

  return (
    <div className="font-secondary">
      <Navbar/>
      <HeroSection/>
      <About/>
      <Service/>
      <Footer/>
    </div>
  )
}

export default App
