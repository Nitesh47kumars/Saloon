import About from "./Components/About/About"
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
    </div>
  )
}

export default App
