import './App.css'
import NavigationBar from './components/NavigationBar'
import GreetingsWithImage from './components/GreetingsWithImage'
import AboutMe from './components/AboutMe'
import ProjectPortfolio from './components/ProjectPortfolio'
import SkillsGain from './components/SkillsGain'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <div className="z-50">
        <NavigationBar/>
      </div>
      
      <div className="flex justify-center h-full w-full">
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
      </div>

      <Footer/>
      
    </>
  )
}

export default App
