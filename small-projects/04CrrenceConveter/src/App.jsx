import React, { useEffect, useState } from 'react'
import { CurrencyBox } from './Components/index'
import { Loader } from './Components/index'
import useCurrencyInfo from './hooks/useCurrencyInfo'
const App = () => {

  const [currentValue, setCurrentValue] = useState( 100 );
  const [convertedValue, setConvertedValue] = useState();
  const [currentCurrencyCode, setCurrentCurrencyCode] = useState( "inr" );
  const [convertedCurrencyCode, setConvertedCurrencyCode] = useState( "usd" );

  const infoList = useCurrencyInfo( currentCurrencyCode );
  const currencyInfo = infoList.data || [];
  const isLoaded = infoList.isLoaded || false;

  useEffect( () => {
    currencyConverter();
  }, [currentCurrencyCode, currentValue, convertedCurrencyCode, infoList] )

  const currencyConverter = () => {
    const value = currencyInfo[convertedCurrencyCode] && ( currencyInfo[convertedCurrencyCode] * currentValue ).toFixed( 2 );
    setConvertedValue( value );
  }

  const currentValueHandler = ( currency ) => setCurrentValue( currency );

  const currentCurrencyCodeHandler = ( countryCode ) => setCurrentCurrencyCode( countryCode )

  const convertedCurrencyCodeHandler = ( countryCode ) => setConvertedCurrencyCode( countryCode );

  const theme = {
    themeRed: {
      bgColor: "bg-gradient-to-tr from-red-400 to-red-500",
      textColor: "text-white",
      inputBorder: "border-white  focus:border-white"
    },
    themeWhite: {
      bgColor: "",
      textColor: "text-red-500",
      inputBorder: "border-red-500  focus:border-red-500"
    }
  }
  return (
    <div>
    <div className='absolute h-[10vh] w-[100vw]'>
    {
      !isLoaded ?
    <Loader isLoaded={false}></Loader>
    : null
    }
    </div>
      <div className='max-w-[450px] mx-auto grid h-[100vh]'>
        <CurrencyBox
          heading="true"
          showDate="true"
          theme={theme.themeRed}
          currentValueHandler={currentValueHandler}
          currencyCode={currentCurrencyCode}
          currentCurrencyCodeHandler={currentCurrencyCodeHandler}
          convertedCurrencyCodeHandler={convertedCurrencyCodeHandler}
          countryCodeList={Object.keys( currencyInfo )}
          isCurrencyInput={true}
          currencyValue={currentValue}
          disabled={false}
          date={infoList.date}
        ></CurrencyBox>
        <CurrencyBox
          theme={theme.themeWhite}
          currentValueHandler={currentValueHandler}
          currencyCode={convertedCurrencyCode}
          currentCurrencyCodeHandler={currentCurrencyCodeHandler}
          convertedCurrencyCodeHandler={convertedCurrencyCodeHandler}
          countryCodeList={Object.keys( currencyInfo )}
          isCurrencyInput={false}
          currencyValue={convertedValue}
          disabled={true}
        ></CurrencyBox>
      </div>

    </div>
  )
}

export default App