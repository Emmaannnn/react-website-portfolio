import './App.css'
import NavigationBar from './components/layout/NavigationBar'
import GreetingsWithImage from './components/sections/GreetingsWithImage'
import AboutMe from './components/sections/AboutMe'
import ProjectPortfolio from './components/sections/ProjectPortfolio'
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
          <GreetingsWithImage/>

          {/* SECOND LAYER */}
          <AboutMe/>

          {/* THIRD LAYER */}
          <ProjectPortfolio/>

          {/* FOURTH LAYER */}
          <SkillsGain/>

          {/* FIFTH LAYER */}
          <ContactMe/>
        </div>
      </main>


      <Footer/>
      
    </>
  )
}

export default App
