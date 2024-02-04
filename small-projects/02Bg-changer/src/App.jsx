import React, { useEffect, useRef } from 'react'
import Button from '@mui/material/Button';
import { ButtonGroup, createTheme } from '@mui/material';
import { blue, green, lime, orange, pink, red, yellow } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';

const App = () => {
  const colors = ["red", "green", "blue", "yellow", "pink", "orange", "lime"]

  const main = useRef();

  // useEffect( () => {
  //   // main.current.style.backgroundColor ="red"
  // }, [colors] )

  const setBgColor = color => main.current.style.backgroundColor = color;

  const theme = createTheme( {
    palette: {
      red: {
        main: red[500],
        contrastText: "white"
      },
      blue: {
        main: blue[500],
        contrastText: "white"
      },
      green: {
        main: green[500],
        contrastText: "white"
      },
      orange: {
        main: orange[500],
        contrastText: "white"
      },
      pink: {
        main: pink[500],
        contrastText: "white"
      },
      lime: {
        main: lime[500],
        contrastText: "white"
      },
      yellow: {
        main: yellow[500],
        contrastText: "white"
      }
    }
  } )


  return (
    <div ref={main} style={{ width: "100%", height: "100vh" }}>
      <div style={{ position: "absolute", left: "50%", bottom: "50px", transform: "translateX(-50%)" }}>

        <ThemeProvider theme={theme}>
          <ButtonGroup variant='contained' sx={{
            ".MuiButtonGroup-grouped:not(:last-of-type)": {
              borderColor: "#FFFFFF",
            }
          }}>

            {colors && colors.map( ( color, index ) =>
              <Button key={index}
                color={color}
                onClick={() => setBgColor( color )}
              >{color}</Button> )
            }

          </ButtonGroup>

        </ThemeProvider>
      </div>



    </div>
  )
}

export default App