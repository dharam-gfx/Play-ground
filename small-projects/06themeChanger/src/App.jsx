import React, { useState, useEffect } from 'react'
import { Card } from './components/Card'
import { ThemeChangerBtn } from './components/ThemeChangerBtn'
import { ThemeProvide } from './context/Theme'
const App = () => {

  const [themeMode, setThemeMode] = useState( localStorage.getItem("themeMode") || "light");
  const darkTheme = () => {
    setThemeMode( "dark" );
  };
  const lightTheme = () => {
    setThemeMode( "light" );
  };
  useEffect( () => {
    const HTMLtag = document.querySelector( "html" );
    HTMLtag.classList.remove( "dark", "light" );
    HTMLtag.classList.add( themeMode );
    localStorage.setItem("themeMode",themeMode)
  }, [themeMode] )
  return (
    <div className='h-[100vh] grid place-items-center'>
      <div className='  w-52'>
        <ThemeProvide value={{ themeMode, darkTheme, lightTheme }}>
          <ThemeChangerBtn></ThemeChangerBtn>
          <Card></Card>
        </ThemeProvide>
      </div>
    </div>
  )
}

export default App