import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/Theme'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

const App = () => {
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  useEffect(() => {
    const html = document.querySelector("html")
    html.classList.remove('light', 'dark')
    html.classList.add(themeMode)
  }, [themeMode])
  
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className='flex flex-wrap min-h-screen items-center'>
        
        <div className='w-full'>

          <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
            <ThemeButton/>
          </div>

          <div className='w-full max-w-sm mx-auto'>
            <Card/>
          </div>

        </div>

      </div>
    </ThemeProvider>
  )
}

export default App
