import './App.css'
import NavigationBar from './components/layout/NavigationBar'
import GreetingsWithImage from './components/sections/GreetingsWithImage'
import AboutMe from './components/sections/AboutMe'
import { WebsitePortfolio, GraphicDesignPortfolio} from './components/sections/ProjectPortfolio'
import SkillsGain from './components/sections/SkillsGain'
import ContactMe from './components/sections/ContactMe'
import Footer from './components/layout/Footer'


function App() {

  return (
    <>
      <header className="z-50">
        <NavigationBar/>
      </header>
      
      <main className="flex justify-center h-full w-full">
        <div className="container">
          {/* FIRST LAYER */}

          <section id='home'>
            <GreetingsWithImage/>
          </section>
          

          {/* SECOND LAYER */}
          <section id='about-me'>
            <AboutMe/>
          </section>
          

          {/* THIRD LAYER */}
          <section id='portfolio'>
            <WebsitePortfolio/>
            <GraphicDesignPortfolio/>
          </section>
          

          {/* FOURTH LAYER */}
          <section id='skills'>
            <SkillsGain/>
          </section>

          {/* FIFTH LAYER */}
          <section id='contact-me'>
            <ContactMe/>
          </section>
          
        </div>
      </main>


      <Footer/>
      
    </>
  )
}

export default App
