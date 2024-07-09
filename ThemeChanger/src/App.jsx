import { useState } from 'react'
import { ThemeProvider } from './Contexts/Theme'
import Card from './Components/Card'
import Button from './Components/Button'
import { useEffect } from 'react'


function App() {
  const [themeMode, setThemeMode] = useState("light")


  const darktheme = () => {
      setThemeMode("dark")
  }

  const lighttheme = () => {
      setThemeMode("light")
  }

  useEffect(()=>{
    document.querySelector("html").classList.remove("dark","light")
    document.querySelector("html").classList.add(themeMode)
  },[themeMode])


  return (
    <ThemeProvider value={{ themeMode, darktheme, lighttheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Button/>
          </div>

          <div className="w-full max-w-sm mx-auto">
              <Card/>
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
