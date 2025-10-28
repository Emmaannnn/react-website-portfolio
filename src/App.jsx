import './App.css'
import NavigationBar from './components/NavigationBar'
import GreetingsWithImage from './components/GreetingsWithImage'
import AboutMe from './components/AboutMe'
import TitlePortfolio from './components/ProjectPortfolio'
import ProjectPortfolio from './components/ProjectPortfolio'

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

        </div>
      </div>
      
    </>
  )
}

export default App
