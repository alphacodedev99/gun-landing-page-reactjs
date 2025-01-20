import { useState } from "react"
import LandingComponent from "./components/LandingComponent"
import NavbarComponent from "./components/NavbarComponent"

function App() {

  // state for dark mode
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`${darkMode ? 'dark dark:bg-[#1F2937]' : "bg-[#F9FAFB]"} relative`} >
      <div className="container mx-auto ">
        <NavbarComponent darkMode={darkMode} setDarkMode={setDarkMode}/>
        <LandingComponent />
      </div>
    
    </div>
  )
}

export default App
