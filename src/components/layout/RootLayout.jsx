import NavigationBar from "./NavigationBar"
import Footer from "./Footer"

const RootLayout = ({children}) => {
  return (
    <div className="root-main">
        <NavigationBar/>
            {children}
        <Footer/>
    </div>

  )
}

export default RootLayout
