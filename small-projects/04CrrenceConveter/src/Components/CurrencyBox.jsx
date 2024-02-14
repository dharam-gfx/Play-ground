import { Box, FormControl, InputLabel, MenuItem, Paper, Select, TextField, ThemeProvider, Typography, createTheme } from '@mui/material'
import React from 'react'



const CurrencyBox = (
    { heading,
        showDate,
        theme,
        currencyCode,
        convertedCurrencyCodeHandler,
        currentCurrencyCodeHandler,
        currentValueHandler,
        countryCodeList=[],
        isCurrencyInput,
        currencyValue,
        disabled,
        date=""
    }
) => {

    const { bgColor, textColor, inputBorder } = theme;
    // console.log( currencyCode,  isCurrencyInput  );

    const amountHandled = ( event ) => {
        const type = event.key === "Backspace" ? event.key : +event.key + "";
        if ( type === 'NaN' ) event.preventDefault();
        currentValueHandler( event.target.value )
    };

    const countryCodeHandler = ( event ) => {
        if ( isCurrencyInput ) currentCurrencyCodeHandler( event.target.value )
        
        else convertedCurrencyCodeHandler( event.target.value );
    }


    return (
        <div className={`${bgColor} ${textColor}`}>
            {
                showDate ? <span className='font-bold block px-4 py-2'>{date}</span> : null

            }
            {
                heading ? <h1 className='text-center text-6xl font-bold ' >Currency</h1> : null
            }

            <div className='grid place-items-center  h-[70%]'>
                <div>
                    <div className='flex gap-4 px-5'>
                        <div className='flex-1'>
                            <input

                                placeholder=""
                                type='text'

                                defaultValue={currencyValue}
                                autoFocus
                                disabled={disabled}
                                onKeyDown={amountHandled}
                                onChange={amountHandled}

                                className={` ${inputBorder} peer text-7xl  h-full w-full border-b border-white bg-transparent  pb-1.5  outline outline-0 transition-all  focus:border-white focus:outline-0 disabled:border-red-500 `} />

                        </div>
                        <div className=''>
                            <select id="countries"
                                value={currencyCode}
                                onChange={countryCodeHandler}
                                className={` text-xl mt-7 bg-red-300  focus-visible:outline-transparent  block w-full p-2.5 dark:bg-opacity-20`}>
                                {
                                    countryCodeList && countryCodeList.map( ( code ) => {
                                        return <option key={code} value={code} className='text-gray-800'>{code.toUpperCase()} </option>
                                    } )
                                }

                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrencyBox