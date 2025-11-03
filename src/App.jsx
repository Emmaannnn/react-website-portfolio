import './App.css'
import RootLayout from './components/layout/RootLayout'
import GreetingsWithImage from './components/sections/GreetingsWithImage'
import AboutMe from './components/sections/AboutMe'
import { WebsitePortfolio, GraphicDesignPortfolio} from './components/sections/ProjectPortfolio'
import SkillsGain from './components/sections/SkillsGain'
import ContactMe from './components/sections/ContactMe'


function App() {

  return (
    <>
    
      <RootLayout className="z-50">

      <main className="flex justify-center">
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


      </RootLayout>
      
    </>
  )
}

export default App
