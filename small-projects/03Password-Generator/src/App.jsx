import React, { useCallback, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { Button, Checkbox, FormControlLabel, Slider, Snackbar, SnackbarContent, TextField, Typography, createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react';
import { orange } from '@mui/material/colors';

//! in this project we are using material-ui and tailwind css

const App = () => {

  const [password, setPassword] = useState( "dfgfg" );
  const [slideValue, setSlideValue] = useState( 10 );
  const [isNumeric, setIsNumeric] = useState( false );
  const [isCharacter, setIsCharacter] = useState( false );
  const [showToast, setShowToast] = useState( false );

  const theme = createTheme( {
    palette: {
      orange: {
        main: orange[500],
        contrastText: "white"
      }
    }
  } )

  //! All event handled here
  const slideHandler = event => setSlideValue( +( event.target.value ) );
  const numberHandler = () => setIsNumeric( !isNumeric );
  const characterHandler = () => setIsCharacter( !isCharacter );
  const copyHandler = useCallback( () => {
    navigator.clipboard.writeText( password );
    setShowToast( true )
  }, [password] );

  //! main function for password generator & callback for memoization & optimize performance
  const passwordGenerator = useCallback( () => {

    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    isNumeric && ( str += "0123456789" );
    isCharacter && ( str += "~!@#$%^&*(){}[]+_-" );

    for ( let i = 0; i < slideValue; i++ ) {
      const randomIndex = Math.floor( Math.random() * str.length );
      pass += str.charAt( randomIndex );
    }

    setPassword( pass );

   // console.log( pass );
  }, [slideValue, isCharacter, isNumeric, setPassword] )

  //! calling function on dependencies
  useEffect( () => {
    passwordGenerator()
  }, [slideValue, isCharacter, isNumeric, passwordGenerator] )

  return (
    <div className='bg-gray-900 w-full h-[100vh] grid place-items-center'>

      <div className='bg-gray-700 p-5 rounded text-white'>
        <Snackbar
          open={showToast}
          autoHideDuration={1000}
          onClose={() => { setShowToast( !showToast ) }}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <SnackbarContent style={{
            backgroundColor: 'rgb(34 197 94)',
          }}
            message={<span id="client-snackbar">Password copied successfully</span>}
          />
        </Snackbar>

        <ThemeProvider theme={theme}>
          <Box
            component="form"
            noValidate
            autoComplete="off"
          >
            <Typography
              classes={{ root: "text-center pb-4 text-orange-300" }}
              variant="h5">Password Generator</Typography>
            <div className='grid gap-3'>
              <div className='flex gap-3 '>

                <TextField id="outlined-controlled"
                  fullWidth label="Password"
                  variant="outlined"
                  color='orange'
                  value={password}
                  focused
                  // inputProps={{style:{color:"white"}}}
                  sx={{ input: { color: "white" } }}

                />
                <Button onClick={copyHandler} sx={{ p: " 0 30px" }} color='orange' variant='contained'>Copy</Button>
              </div>

              <div className='flex gap-6 justify-between items-center '>
                <div className='flex-1 pt-1'>
                  <Slider color='orange'
                    value={slideValue}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    min={5} max={25}
                    onChange={slideHandler}
                  />
                </div>

                <div>
                  <FormControlLabel
                    control=
                    {<Checkbox checked={isNumeric}
                      onChange={numberHandler} color='orange' />
                    }
                    label="Number" />

                  <FormControlLabel required={false}
                    control=
                    {<Checkbox checked={isCharacter}
                      onChange={characterHandler}
                      color='orange' />
                    }
                    label="spacial" />
                </div>

              </div>
            </div>


          </Box>
        </ThemeProvider>

      </div>
    </div>
  )
}

export default App