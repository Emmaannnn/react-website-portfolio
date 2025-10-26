import './App.css'
import NavigationBar from './components/NavigationBar'
import GreetingsWithImage from './components/GreetingsWithImage'

function App() {

  return (
    <>
      <div className="z-50">
        <NavigationBar/>
      </div>
      
      <div className="flex justify-center h-full w-full">
        <div className="container">
          <GreetingsWithImage/>
        </div>
      </div>
      
    </>
  )
}

export default App
